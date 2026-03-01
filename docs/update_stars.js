#!/usr/bin/env node
/**
 * update_stars.js — OpenClaw murmur*.md Stars Updater
 *
 * 用法:
 *   node update_stars.js
 *
 * 功能:
 *   1. 抓取文章中每個 GitHub repo 的最新 star 數 (透過 GitHub API)
 *   2. 更新 murmur.md 與 murmur-en.md 中的表格、變體演化樹、及其他文字提及
 *   3. 依照星星數重新排序表格
 *
 * 注意:
 *   - 若有 GITHUB_TOKEN 環境變數，會以認證方式呼叫 (避免 rate limit)
 *   - 若無，以匿名呼叫 (60 req/hr)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const FILES = [
    path.join(__dirname, 'murmur.md'),
    path.join(__dirname, 'murmur-en.md'),
];

// 所有需要追蹤的 repos
const REPOS = [
    'openclaw/openclaw',
    'HKUDS/nanobot',
    'VoltAgent/awesome-openclaw-skills',
    'sipeed/picoclaw',
    'zeroclaw-labs/zeroclaw',
    'iOfficeAI/AionUi',
    'qwibitai/nanoclaw',
    'OthmanAdi/planning-with-files',
    'NevaMind-AI/memU',
    'kepano/obsidian-skills',
    'cloudflare/moltworker',
    'hesamsheikh/awesome-openclaw-usecases',
    'refly-ai/refly',
    'MemTensor/MemOS',
    'nearai/ironclaw',
    'm1heng/clawdbot-feishu',
    'memovai/mimiclaw',
    'mnfst/manifest',
    'badrisnarayanan/antigravity-claude-proxy',
    'TinyAGI/tinyclaw',
    'nullclaw/nullclaw',
    'EverMind-AI/EverMemOS',
    'moltis-org/moltis',
    'microclaw/microclaw',
    'rookiestar28/ComfyUI-OpenClaw',
    'qhkm/zeptoclaw',
    'Arvincreator/project-golem',
    'FoundDream/miniclawd',
    'liteclaw/liteclaw',
    'GuLu9527/flashclaw',
    'swarmclawai/swarmclaw',
    'itc-ou-shigou/winclaw',
    'DmacMcgreg/psibot',
    'wende/miniclaw',
    'dannybszn/SwiftClaw',
];

function formatStars(n) {
    if (n >= 1000) {
        const k = n / 1000;
        // Round to 1 decimal place
        const rounded = Math.round(k * 10) / 10;
        return rounded % 1 === 0 ? `${rounded.toFixed(0)}K` : `${rounded.toFixed(1)}K`;
    }
    return String(n);
}

function fetchStars(repo) {
    return new Promise((resolve, reject) => {
        const token = process.env.GITHUB_TOKEN;
        const options = {
            hostname: 'api.github.com',
            path: `/repos/${repo}`,
            method: 'GET',
            headers: {
                'User-Agent': 'openclaw-murmur-updater/1.0',
                'Accept': 'application/vnd.github+json',
                ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
            },
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    try {
                        const json = JSON.parse(data);
                        resolve({ repo, stars: json.stargazers_count });
                    } catch (e) {
                        reject(new Error(`JSON parse error for ${repo}: ${e.message}`));
                    }
                } else if (res.statusCode === 404) {
                    console.warn(`  ⚠️  ${repo}: 404 Not Found — skipping`);
                    resolve({ repo, stars: null });
                } else if (res.statusCode === 403) {
                    reject(new Error(`Rate limit hit (403). Set GITHUB_TOKEN env var to avoid this.`));
                } else {
                    reject(new Error(`HTTP ${res.statusCode} for ${repo}: ${data.slice(0, 200)}`));
                }
            });
        });
        req.on('error', reject);
        req.end();
    });
}

async function fetchAllStars() {
    console.log('🦞 Fetching GitHub star counts...');
    const results = {};
    // Sequential to avoid rate limiting
    for (const repo of REPOS) {
        try {
            process.stdout.write(`  Fetching ${repo}... `);
            const { stars } = await fetchStars(repo);
            if (stars !== null) {
                results[repo] = stars;
                console.log(formatStars(stars) + ' ⭐');
            } else {
                console.log('skipped');
            }
            // Small delay to be polite
            await new Promise(r => setTimeout(r, 200));
        } catch (e) {
            console.error(`  ❌ ${e.message}`);
            throw e;
        }
    }
    return results;
}

function parseStarsNum(str) {
    str = str.trim();
    if (str.endsWith('K')) return parseFloat(str) * 1000;
    return parseFloat(str) || 0;
}

function updateFile(filePath, starsMap) {
    let content = fs.readFileSync(filePath, 'utf8');

    // --- 1. Update table rows ---
    content = content.replace(
        /(\| \*\*\[.+?\]\(https:\/\/github\.com\/([^)]+)\)\*\* \| )([0-9.]+K?)([ ]*\|)/g,
        (match, prefix, repo, oldStars, suffix) => {
            const found = Object.keys(starsMap).find(r => r.toLowerCase() === repo.toLowerCase());
            if (found && starsMap[found] !== undefined) {
                return prefix + formatStars(starsMap[found]) + suffix;
            }
            return match;
        }
    );

    // --- 2. Update variant tree lines ---
    content = content.replace(
        /((?:OpenClaw|├─ [^(]+|└─ [^(]+)\()([0-9.]+K?)( ⭐\))/g,
        (match, prefix, oldStars, suffix) => {
            // Try to figure out which repo this is from the name
            const namePart = prefix.replace(/[├└]─ /, '').replace('(', '').trim();
            // Map display names -> repo paths
            const nameMap = {
                'OpenClaw': 'openclaw/openclaw',
                'nanobot': 'HKUDS/nanobot',
                'ZeroClaw': 'zeroclaw-labs/zeroclaw',
                'PicoClaw': 'sipeed/picoclaw',
                'NanoClaw': 'qwibitai/nanoclaw',
                'nullclaw': 'nullclaw/nullclaw',
                'ComfyUI-OpenClaw': 'rookiestar28/ComfyUI-OpenClaw',
                'MicroClaw': 'microclaw/microclaw',
                'zeptoclaw': 'qhkm/zeptoclaw',
                'Project Golem': 'Arvincreator/project-golem',
                'FlashClaw': 'GuLu9527/flashclaw',
                'swarmclaw': 'swarmclawai/swarmclaw',
                'winclaw': 'itc-ou-shigou/winclaw',
                'psibot': 'DmacMcgreg/psibot',
                'miniclaw': 'wende/miniclaw',
            };
            const repo = nameMap[namePart];
            if (repo && starsMap[repo] !== undefined) {
                return prefix + formatStars(starsMap[repo]) + suffix;
            }
            return match;
        }
    );

    // --- 3. Sort table rows by stars (desc), keeping OpenClaw first ---
    const tableRowRegex = /\| \*\*\[.+?\]\(https:\/\/github\.com\/.+?\)\*\* \| [0-9.]+K? \|.+\|/g;
    const allRows = [];
    let firstIndex = -1;
    let lastIndex = -1;
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
        if (/^\| \*\*\[.+?\]\(https:\/\/github\.com\/.+?\)\*\* \| [0-9.]+K? \|/.test(lines[i])) {
            if (firstIndex === -1) firstIndex = i;
            allRows.push(lines[i]);
            lastIndex = i;
        }
    }

    if (allRows.length > 0) {
        const sorted = [...allRows].sort((a, b) => {
            const getStars = l => parseStarsNum((l.split('|')[2] || '').trim());
            if (a.toLowerCase().includes('/openclaw/openclaw')) return -1;
            if (b.toLowerCase().includes('/openclaw/openclaw')) return 1;
            return getStars(b) - getStars(a);
        });
        lines.splice(firstIndex, lastIndex - firstIndex + 1, ...sorted);
    }

    // --- 4. Update the ranking table (FreeCodeCamp / React / OpenClaw) ---
    const ocStars = starsMap['openclaw/openclaw'];
    if (ocStars) {
        content = lines.join('\n');
        const ocFormatted = formatStars(ocStars);
        // Update any bold OpenClaw star mention in ranking table
        content = content.replace(
            /(\| \*\*3\*\* \| \*\*OpenClaw\*\* \| \*\*)[0-9.]+K?(\*\* \|)/g,
            `$1${ocFormatted}$2`
        );
        // Update mentions in milestones like "**236.5K+**"
        content = content.replace(
            /(\| \*\*2026\/02\/26\*\* \| \*\*)[0-9.]+K?\+(\*\* \| Still skyrocketing)/,
            `$1${ocFormatted}+$2`
        );
        content = content.replace(
            /(\| \*\*2026\/02\/26\*\* \| \*\*)[0-9.]+K?\+(\*\* \| 持續暴漲中)/,
            `$1${ocFormatted}+$2`
        );
        // TL;DR line
        content = content.replace(
            /(🔥 )[0-9.]+K?( Stars)/g,
            `$1${ocFormatted}$2`
        );
        return { content, updated: true };
    }

    return { content: lines.join('\n'), updated: true };
}

async function main() {
    let starsMap;
    try {
        starsMap = await fetchAllStars();
    } catch (e) {
        console.error('\n❌ Failed to fetch stars:', e.message);
        console.error('Set GITHUB_TOKEN env var to avoid rate limits:');
        console.error('  $env:GITHUB_TOKEN="ghp_your_token_here"  (PowerShell)');
        process.exit(1);
    }

    console.log('\n📝 Updating files...');
    for (const filePath of FILES) {
        const { content } = updateFile(filePath, starsMap);
        fs.writeFileSync(filePath, content);
        console.log(`  ✅ ${path.basename(filePath)} updated`);
    }

    console.log('\n🦞 Done! Stars updated and table re-sorted.');
    console.log('   Review changes with: git diff');
}

main();
