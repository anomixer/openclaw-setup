#!/usr/bin/env node
/**
 * generate_murmur.js
 * 
 * 用法:
 *   $env:GEMINI_API_KEY="AIzaSy..."
 *   node generate_murmur.js "今天的新聞: Apple..."
 * 
 * 功能:
 *   1. 呼叫 Gemini API，寫出毒舌戰地記者日誌。
 *   2. 分別產生中文與英文版本。
 *   3. 自動將生成的內容插入 murmur.md 與 murmur-en.md 每天的第一個日誌區塊（### 🟢）上方！
 */

const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const args = process.argv.slice(2);
const newsInput = args[0];

if (!newsInput) {
    console.error("❌ 請提供今日新聞或變更作為參數！\n用法: node generate_murmur.js \"輸入今天的客觀新聞...\"");
    process.exit(1);
}

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("❌ 找不到 GEMINI_API_KEY 環境變數。請先設定！");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const today = new Date();
const dateStr = today.toISOString().slice(0, 10);

const SYSTEM_PROMPT_ZH = `
你現在是 OpenClaw 宇宙的觀察家「anomixer」。
請根據以下發生的客觀事件，以充滿洞察力、略帶幽默、且支持 OpenClaw 生態系的語氣，寫出今天的一篇「戰況日誌」。

內容要求：
1. 嚴格檢查版本號：確保提到的 AI 模型版本（如 GPT-5.4, Claude 4.6, Gemini 3.1 等）是真實發表的。
2. 禁令：不要在日誌中輸出任何新聞網址連結 (URLs) 或來源名稱。只需要敘述事件本身與評論。
3. 保持專業口吻，重點在於戰略觀察。
4. 輸出純 Markdown，不要包含 \`\`\`markdown 的外框。
5. 標題必須是： ### 🟢 ${dateStr}: [一個簡潔有力的全球觀察標題]
6. 內容使用 bullet points ( - )。
`;

const SYSTEM_PROMPT_EN = `
You are "anomixer", a sharp-witted observer of the OpenClaw universe.
Based on the following objective events, write a daily log entry with an insightful tone that champions the OpenClaw ecosystem.

Requirements:
1. STRICT FACT-CHECKING: Ensure all AI model versions (e.g., GPT-5.4, Claude 4.6, Gemini 3.1) are real.
2. NO LINKS: Do NOT include any URLs or source names in the output. Just describe the events and provide your commentary.
3. Maintain a professional yet punchy tone focusing on strategic shifts.
4. Output MUST be pure Markdown, do NOT wrap inside \`\`\`markdown blocks.
5. The title MUST be: ### 🟢 ${dateStr}: [A concise, impactful global observation title]
6. Use bullet points (- ).
`;

function slugify(text) {
    return text
        .toLowerCase()
        .replace(/^###\s+/, '')
        .trim()
        .replace(/[:：!！?？]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^\w\s\u4e00-\u9fa5🦞👑-]/g, '') // Keep dashes, alphanumeric, Chinese and emojis
        .replace(/-+/g, '-');
}

function injectLog(filePath, newLog) {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = newLog.split('\n');
    const headerLine = lines.find(l => l.startsWith('### 🟢'));

    if (!headerLine) {
        console.warn(`⚠️ 找不到日誌標題，無法更新目錄: ${path.basename(filePath)}`);
        return;
    }

    const title = headerLine.replace('### ', '').trim();
    const anchor = slugify(headerLine);
    const tocEntry = `  - [${title}](#${anchor})`;

    // 1. 插入日誌內容
    const logTargetIdx = content.indexOf('### 🟢');
    if (logTargetIdx !== -1) {
        content = content.substring(0, logTargetIdx) + newLog + '\n\n' + content.substring(logTargetIdx);
    } else {
        console.warn(`⚠️ 找不到日誌插入位置，跳過內容寫入: ${path.basename(filePath)}`);
        return;
    }

    // 2. 插入目錄
    const tocTargetRegex = /- \*\*第一部：📅 每日戰況日誌 \(The Logs\)\*\*|- \*\*Part 1: 📅 Daily Battlefield Logs \(The Logs\)\*\*/;
    const tocMatch = content.match(tocTargetRegex);
    if (tocMatch) {
        const insertPos = tocMatch.index + tocMatch[0].length;
        content = content.substring(0, insertPos) + '\n' + tocEntry + content.substring(insertPos);
    } else {
        console.warn(`⚠️ 找不到目錄插入位置，跳過目錄更新: ${path.basename(filePath)}`);
    }

    fs.writeFileSync(filePath, content);
    console.log(`✅ 已成功更新 ${path.basename(filePath)} (含目錄)！`);
}

async function generateLogs() {
    console.log("🦞 正在呼叫 Gemini 撰寫龍蝦聖經中...");

    try {
        const resultZh = await model.generateContent(`${SYSTEM_PROMPT_ZH}\n\n今日客觀新聞：\n${newsInput}`);
        const logZh = resultZh.response.text().trim();
        console.log("\n================ [ 中文版日誌預覽 ] ================\n");
        console.log(logZh);

        const resultEn = await model.generateContent(`${SYSTEM_PROMPT_EN}\n\nToday's objective news:\n${newsInput}`);
        const logEn = resultEn.response.text().trim();
        console.log("\n================ [ 英文版日誌預覽 ] ================\n");
        console.log(logEn);

        // 寫入到檔案
        const mdPathZh = path.join(__dirname, '..', 'murmur.md');
        const mdPathEn = path.join(__dirname, '..', 'murmur-en.md');

        injectLog(mdPathZh, logZh);
        injectLog(mdPathEn, logEn);

    } catch (e) {
        console.error("❌ 生成失敗:", e);
    }
}

generateLogs();
