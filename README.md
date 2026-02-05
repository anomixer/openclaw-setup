# 🦞 OpenClaw (clawdbot / moltbot) + 🦙 Ollama 安裝指南

**中文版 | [English](README-EN.md)**

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text-dark.png">
        <img src="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png" alt="OpenClaw" width="500">
    </picture>
</p>

在 Windows 下快速安裝 OpenClaw (clawdbot / moltbot) 與本地端 LLM (Ollama) 的完整步驟指南。

> ⚠️ **版本需求**: Ollama v0.15.4+ 與 OpenClaw 2026.2.5+

---

## 📋 目錄

### 安裝步驟
1. [環境準備](#1️⃣-環境準備)
   - [安裝 Ollama](#安裝-ollama-v0154)
   - [安裝 Python](#安裝-python)
2. [Ollama 模型配置](#2️⃣-ollama-模型配置)
   - [推薦模型](#推薦模型)
   - [拉取本地模型](#拉取本地模型)
   - [配置雲端模型](#配置雲端模型可選)
3. [OpenClaw 安裝](#3️⃣-openclaw-安裝)
   - [安裝 OpenClaw](#安裝-openclaw)
   - [初始配置](#初始配置)
   - [啟動 Gateway 服務](#9-啟動-gateway-服務)
   - [設定 OpenClaw 使用 Ollama](#10-設定-openclaw-使用-ollama)
   - [測試 Gateway](#11-測試-gateway)
4. [進階配置](#4️⃣-進階配置)
   - [Telegram Bot 設定](#telegram-bot-設定)
   - [配對 Telegram 頻道](#配對-telegram-頻道)
   - [其他進階設定](#其他進階設定-可選)

### 參考資料
- [完整移除指南](#️-完整移除指南)
- [配置檔案參考](#-配置檔案參考)
- [快速參考](#-快速參考)
- [實用技巧](#-實用技巧)
- [相關連結](#-相關連結)
- [社群支援](#-社群支援)
- [更新日誌](#-更新日誌)

---

## 1️⃣ 環境準備

### 安裝 Ollama (v0.15.4+)

> ⚠️ **重要**: 請確保安裝 **v0.15.4 或以上版本**，此版本支援 OpenClaw 原生整合。

#### 方法 1: 使用 winget（推薦）

```cmd
winget install ollama
```

#### 方法 2: 手動下載

前往 [https://ollama.com/](https://ollama.com/) 下載最新版 Windows 執行檔並安裝。

#### 驗證安裝

```cmd
ollama --version
```

### 安裝 Python

OpenClaw 的 Windows 版本不會自動安裝 Python，但許多任務需要用到：

```cmd
winget install python
```

---

## 2️⃣ Ollama 模型配置

### 推薦模型

雖然 OpenClaw 理論上支援任何 OpenAI 相容的模型，但社群與官方測試顯示以下模型表現較佳：

| 模型系列 | 模型名稱 | VRAM 需求 | 大小 | 適合場景 |
|---------|---------|----------|------|---------|
| **GLM** | `glm-4.7-flash` | 20GB+ | 19GB | 快速回應、自動化 |
| **Ministral** | `ministral-3:8b` | 8GB+ | 6GB | 輕量級、日常使用 |
| **GPT-OSS** | `gpt-oss-20b` | 16GB+ | - | 開源生態專用 |

> ⚠️ **已知問題**: `qwen2.5` 和 `qwen3` 目前有相容性問題，暫時不建議使用！

### 拉取本地模型

根據你的顯卡 VRAM 選擇合適的模型：

#### 選項 A: GLM 4.7 Flash（推薦）

```cmd
ollama pull glm-4.7-flash
```

- 模型大小：19GB
- 適合：vRAM 為 20GB 以上顯卡

#### 選項 B: Ministral 3:8b（輕量版）

```cmd
ollama pull ministral-3:8b
```

- 模型大小：6GB
- 適合：vRAM 為 8GB 以上顯卡

### 配置雲端模型（可選）

若想使用 SOTA 模型但沒有 OpenAI/Anthropic/Google Gemini 的 API Key：

```cmd
# 登入 Ollama（照螢幕指示連接設備）
ollama signin

# 拉取 Google Gemini 3 Flash 雲端模型
ollama pull gemini-3-flash-preview:cloud
```

> 💡 **提示**: 雲端模型有用量限制，不要過於頻繁使用。

---

## 3️⃣ OpenClaw 安裝

以 **一般使用者身份** 開啟 Command Prompt：

### 安裝 OpenClaw

> ⚠️ **重要！重要！重要！** （重要所以說三次）  
> 請務必以 **一般使用者身份** 執行 Command Prompt 來安裝 OpenClaw！  
> 若用 Administrator 安裝，可能導致 Telegram 無法正常回應。

以 **一般使用者身份** 開啟 Command Prompt：

```cmd
curl -fsSL https://openclaw.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

此指令會自動安裝 Node.js 和 npm ，並進入 OpenClaw 的 Onboarding 模式 (初次歡迎設定畫面)。

### 初始配置

#### 1. 安全確認

```
I understand this is powerful and inherently risky. Continue?
> Yes
```

#### 2. Onboarding 模式

```
Onboarding mode
> QuickStart (Configure details later via openclaw configure.)
```

#### 3. 設定模型/認證提供者

先選擇跳過，後面再設定：

```
Model/auth provider
> Skip for now

Filter models by provider
> All providers

Default model
> Enter model manually 

#輸入上述的模型名稱，例如: ollama/glm-4.7-flash
```

#### 4. 頻道配置（可選）

這裡可以先選擇 **Skip for now**，或直接配置 Telegram，這裡以有配置為例：

```
Select channel (QuickStart)
> ● Telegram (Bot API) (not configured)

Enter Telegram bot token
>>> 1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 💡 如何取得 Token？請參考 [Telegram Bot 設定](#telegram-bot-設定)

#### 5. 技能商店

```
Configure skills now? (recommended)
> No
```

> ⚠️ Windows 無法安裝 Brew，而技能商店需要 Brew，所以先選 No。


#### 6. 啟用 Hooks (若出現的話)

```
Enable hooks?
> [+] 🚀 boot-md (Run BOOT.md on gateway startup)
> [+] 📝 command-logger (Log all command events to a centralized audit file)
> [+] 💾 session-memory (Save session context to memory when /new command is issued)
```

按**空白鍵**選擇全部三項，再按 **Enter**。

#### 7. 記錄 Web UI 資訊

安裝完成後會顯示：

```
Control UI:
  Web UI: http://127.0.0.1:18789/
  Web UI (with token): http://127.0.0.1:18789/?token=xxxxxxxxxx
  Gateway WS: ws://127.0.0.1:18789
  Gateway: reachable
```

> 🔑 **重要**: 記住帶 token 的 URL！

#### 8. 安裝 Shell (若出現的話)

```
Enable zsh shell completion for openclaw?
> No
```

> ⚠️ Windows 無法使用 zsh ，所以先選 No。

### 9. 啟動 Gateway 服務

此時， OpenClaw 會開啟瀏覽器，進入 Gateway Dashboard ，若此時沒執行 Gateway Service 的話，就無法正常顯示內容。此時請先按 Ctrl+C 結束 OpenClaw 視窗，然後:

以 **管理員身份** 開啟 Command Prompt：

```cmd
openclaw gateway install
```

此時，OpenClaw 的 Gateway Service 會安裝完成並啟動，並於 Windows 開機時自動啟動。

### 10. 設定 OpenClaw 使用 Ollama ###

**Ollama v0.15.3+ 新功能**: 可配置 OpenClaw 的 Ollama 設定，讓其套用本地模型。

因為此時 Ollama 本地端模型還沒套用，所以請先將用 Ctrl+C鈕，將 Gateway 視窗關閉 (若出現的話) ，然後輸入:

```
ollama launch openclaw
```

設定好模型之後，畫面會出現，回答y 繼續:
```
This will modify your OpenClaw configuration:
  C:\Users\<your username>\.openclaw\openclaw.json
Backups will be saved to C:\Users\<your username>\AppData\Local\Temp\ollama-backups/

Proceed? (y/n) yes
```

> 💡 **建議**: 執行完後，先重新啟動電腦，確保 Gateway Service 正常開機自動啟動。


> 📝 **日後更換模型**: 請參考下方 **實用技巧**。


#### 11. 測試 Gateway

重開機後，確認 Gateway Service 有在執行 (若沒有的話，請執行 `ollama launch openclaw` 即可)，然後開啟瀏覽器訪問：

```
http://127.0.0.1:18789/?token=xxxxxxxxxx
```

在 Chat 畫面輸入任何對話，Ollama 會在背景載入模型並回應。

✅ **若 AI 正常回覆，基本設定完成！**

---

## 4️⃣ 進階配置

### Telegram Bot 設定

#### 建立 Telegram 機器人

1. 在 Telegram 搜尋並加入 **@BotFather**

2. 發送指令 `/newbot`，依提示設定機器人名稱
   - 例如：`openclaw-bot`（若名稱被佔用請更換）

3. **BotFather** 會回覆：

```
Done. Congratulations on your new bot...

Use this token to access the HTTP API:
1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 🔑 **記住這個 Token**，稍後配置時需要！

### 配對 Telegram 頻道

1. 進入手機 Telegram 中的 bot 頻道，查看是否有下列訊息 （若沒有，請發送任意訊息)

```
OpenClaw: access not configured.

Your Telegram user id: 1234567890
Pairing code: abcdefgh
```

2. 在電腦上執行配對指令：

```cmd
openclaw pairing approve telegram abcdefgh
```

（將 `abcdefgh` 替換成你的配對碼）

3. 再次發送訊息測試

✅ **Bot 應該可以正常回覆了！** 🎉

### 其他進階設定 (可選)

以一般使用者身份開啟 Command Prompt：

```cmd
openclaw config
```

#### Gateway 位置

```
Where will the Gateway run?
> ● Local (this machine)
```

#### Web 工具配置

```
Select sections to configure
> ● Web tools (Configure Brave search + fetch)

Enable web_search (Brave Search)?
> ○ Yes / ● No
```

> 💡 需要 Brave API Key（可另外申請），暫時選 No

```
Enable web_fetch (keyless HTTP fetch)?
> ● Yes / ○ No
```

---

## 🗑️ 完整移除指南

若需要完全移除 OpenClaw / Moltbot / Clawdbot：

### 以管理員身份開啟 PowerShell

```powershell
# 完整移除（包含所有資料）
openclaw uninstall --all --yes --non-interactive
# 或
moltbot uninstall --all --yes --non-interactive
# 或
clawdbot uninstall --all --yes --non-interactive

# 移除 npm 套件
npm uninstall -g openclaw
# 或
npm uninstall -g moltbot
# 或
npm uninstall -g clawdbot
```

---

## 📄 配置檔案參考

### 檔案路徑

```
%USERPROFILE%\.openclaw\openclaw.json
```

### 配置範例

```json
{
  "models": {
    "providers": {
      "ollama": {
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-completions",
        "models": [
          {
            "id": "ollama/glm-4.7-flash",
            "name": "GLM 4.7 Flash",
            "reasoning": true,
            "input": ["text"],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 262000,
            "maxTokens": 16384
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "ollama/glm-4.7-flash",
        "fallbacks": ["ollama/gemini-3-flash-preview:cloud"]
      },
      "workspace": "C:\\Users\\USER\\.openclaw\\workspace",
      "compaction": {
        "mode": "safeguard"
      },
      "maxConcurrent": 4,
      "subagents": {
        "maxConcurrent": 8
      }
    }
  },
  "gateway": {
    "mode": "local",
    "auth": {
      "mode": "token",
      "token": "YOUR_TOKEN_HERE"
    },
    "port": 18789,
    "bind": "loopback"
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "YOUR_BOT_TOKEN_HERE"
    }
  },
  "hooks": {
    "internal": {
      "enabled": true,
      "entries": {
        "boot-md": { "enabled": true },
        "command-logger": { "enabled": true },
        "session-memory": { "enabled": true }
      }
    }
  }
}
```

---

## 🎯 快速參考

| 指令 | 用途 |
|------|------|
| `ollama --version` | 檢查 Ollama 版本 |
| `ollama pull <model>` | 拉取模型 |
| `ollama launch openclaw` | 配置 OpenClaw 使用 Ollama |
| `openclaw config` | 進入配置介面 |
| `openclaw models list` | 檢視目前配置的模型列表 |
| `openclaw gateway install` | 安裝 Gateway 服務 |
| `openclaw gateway start` | 啟動 Gateway 服務 |
| `openclaw pairing approve telegram <code>` | 配對 Telegram 頻道 |
| `openclaw security audit --deep` | 安全性深度檢查 |
| `openclaw uninstall --all` | 完整移除 |

---

## 💡 實用技巧

### 防止 Ollama 自動卸載模型

在環境變數中加入：

```
OLLAMA_KEEP_ALIVE=-1
```

這樣可以避免 Ollama 在 5 分鐘無活動後自動卸載模型，提升下次對話的速度。

### 更新 Ollama 模型配置

若需要更換 Ollama 模型：

1. 刪除 Ollama 配置檔：
   ```cmd
   del %USERPROFILE%\.ollama\config\config.json
   ```

2. 重新執行配置：
   ```cmd
   ollama launch openclaw
   ```

---

## 📚 相關連結

- [Ollama 官網](https://ollama.com/)
- [OpenClaw 官網](https://openclaw.ai/)
- [OpenClaw 文件 - Ollama 設定](https://docs.openclaw.ai/providers/ollama)
- [Telegram BotFather](https://t.me/BotFather)

---

## 💬 社群支援

遇到問題？歡迎在 [GitHub Issues](https://github.com/anomixer/openclaw-setup/issues) 提出！

---

## 📝 更新日誌

### 2026-02-05
- 🚀 改用 `cmd` 快速安裝指令，自動化安裝 Node.js 與 npm
- 🆕 支援最新 OpenClaw 2026.2.5+ 版本
- 📋 重編目錄並更新翻譯至 `README-EN.md`

### 2026-02-02
- 🔄 更新至 Ollama v0.15.4+ 版本
- ✨ 新增 `ollama launch openclaw` 預配置功能
- 📖 重構文件結構，提升可讀性
- ⚠️ 強調必須使用一般使用者身份安裝

### 2026-01-30
- 🦞 Repo 重新命名為 openclaw-setup
- 🌍 新增英文版 README
- 💬 新增 murmur.md 吐槽檔案

---

**最後更新**: 2026-02-05  
**原創 by anomixer**  
**Clawdbot → Moltbot → OpenClaw**
