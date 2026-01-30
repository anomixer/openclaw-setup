# 🦞 Clawdbot / Moltbot / OpenClaw + 🦙 Ollama 安裝指南

在 Windows 下安裝 Clawdbot / Moltbot / OpenClaw 與本地端 LLM (Ollama) 的完整步驟指南。


![](https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png)

---

## 📋 目錄

- [Ollama 安裝與配置](#ollama-安裝與配置)
- [Python 安裝](#python-安裝)
- [Clawdbot 安裝與配置](#clawdbot-安裝與配置)
- [Telegram Bot 設定](#telegram-bot-設定)
- [完整移除指南](#完整移除指南)
- [配置檔案參考](#配置檔案參考)

---

## 🧠 Ollama 安裝與配置

### 推薦模型

雖然 Clawdbot 理論上支援任何 OpenAI 相容的模型，但社群與官方測試顯示以下模型表現較佳：

- **GPT-OSS 系列**: 包括 `gpt-oss-20b`（適合 16GB VRAM）與 `gpt-oss-120b`，專為開源生態設計的高效能模型
- **GLM 系列**: 例如 `glm-4.7-flash`，常用於需要快速回應的自動化場景

> ⚠️ **注意**: `qwen2.5` 和 `qwen3` 目前有相容性問題，暫時不建議使用！

### 步驟 1: 安裝 Ollama

開啟 **Command Prompt** 執行以下指令：

```cmd
winget install ollama
```

或手動前往 [https://ollama.com/](https://ollama.com/) 下載 Windows 執行檔安裝。

### 步驟 2: 拉取本地模型

根據你的顯卡 VRAM 選擇合適的模型：

#### 選項 A: GLM 4.7 Flash (推薦，需要 20GB+ VRAM)

```cmd
ollama pull glm-4.7-flash
```

- 模型大小：19GB
- 適合：vRAM 為 20GB 以上顯卡

#### 選項 B: Ministral 3:8b (輕量版，需要 8GB+ VRAM)

```cmd
ollama pull ministral-3:8b
```

- 模型大小：6GB
- 適合：vRAM 為 8GB 以上顯卡

### 步驟 3: 配置雲端模型（可選）

若想使用 SOTA 模型但沒有 OpenAI/Anthropic/Google Gemini 的 API Key，可以免費註冊 Ollama 帳號並調用其雲端模型。

```cmd
# 登入 Ollama（照螢幕指示連接設備）
ollama signin

# 拉取 Google Gemini 3 Flash 雲端模型
ollama pull gemini-3-flash-preview:cloud
```

> 💡 **提示**: 雲端模型有用量限制，不要過於頻繁使用。

---

## 🐍 Python 安裝

Clawdbot 的 Windows 版本不會自動安裝 Python，但許多任務需要用到，請先安裝：

```cmd
winget install python
```

---

## ⚙️ Clawdbot 安裝與配置

### 步驟 1: 設定 PowerShell 執行權限

以 **管理員身份** 開啟 PowerShell，執行以下指令：

```powershell
# 允許本機執行 PS1 腳本
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine

# 檢查設定（LocalMachine 應顯示 RemoteSigned）
Get-ExecutionPolicy -List
```

### 步驟 2: 安裝 Clawdbot

參考 [https://www.molt.bot/](https://www.molt.bot/) 官網，以 **一般使用者身份** 開啟 PowerShell：

```powershell
iwr -useb https://molt.bot/install.ps1 | iex
```

此指令會自動安裝 Node.js 和 npm。

### 步驟 3: 按照螢幕指示進行初始配置

#### 安全確認

```
I understand this is powerful and inherently risky. Continue?
> Yes
```

#### Onboarding 模式

```
Onboarding mode
> QuickStart (Configure details later via clawdbot configure.)
```

#### 模型/認證提供者

```
Model/auth provider
> Skip for now

Filter models by provider
> All providers

Default model
> Keep current (default: anthropic/claude-opus-4-5)
```

或選擇 `Enter model manually`，輸入 `glm-4.7-flash`

#### 頻道配置

```
Select channel (QuickStart)
> Skip for now
```

#### 技能商店

```
Configure skills now? (recommended)
> No
```

> ⚠️ Windows 無法安裝 Brew，而技能商店需要 Brew，所以先選 No

#### 啟用 Hooks

```
Enable hooks?
> [+] 🚀 boot-md (Run BOOT.md on gateway startup)
```

按空白鍵選擇，再按 Enter

#### 記錄 Web UI 資訊

安裝完成後會顯示：

```
Control UI:
  Web UI: http://127.0.0.1:18789/
  Web UI (with token): http://127.0.0.1:18789/?token=xxxxxxxxxx
  Gateway WS: ws://127.0.0.1:18789
  Gateway: reachable
```

> 🔑 **重要**: 記住帶 token 的 URL！

#### Gateway 啟動方式

```
How do you want to hatch your bot?
> Do this later
```

### 步驟 4: 更新模型配置

若剛才用管理員身份安裝，先按 `Ctrl+C` 停止 Gateway。然後執行：

```cmd
ollama launch clawdbot
```

- 選擇主要模型：`glm-4.7-flash` (default)
- 選擇備援模型：`gemini-3-flash-preview:cloud` (fallback)

此指令會自動更新 `.clawdbot\clawdbot.json` 裡的模型配置，並執行 Clawdbot的Gateway Service。

> 註：日後若要更換Ollama模型，需要先刪除 Ollama 的config.json (檔案位置: %USERPROFILE%\.ollama\config\config.json)，再執行 ollama launch clawdbot指令。

### 步驟 5: 測試 Web UI

用瀏覽器開啟上述的 Web UI（帶 token 的那個 URL），測試是否能與 AI 正常交談。

### 步驟 6: 進階配置

另開一個 Command Prompt，執行配置指令：

```cmd
clawdbot config
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

> 💡 需要 Brave API Key，可另外申請，先選 No

```
Enable web_fetch (keyless HTTP fetch)?
> ● Yes / ○ No
```

#### 頻道配置

```
Select sections to configure
> ● Channels (Link WhatsApp/Telegram/etc and defaults)

Channels
> ● Configure/link (Add/update channels; disable unselected accounts)

Select a channel
> ● Telegram (Bot API) (not configured)

Enter Telegram bot token
>>> 1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

輸入你的 Telegram Bot Token（格式如上，請參考 [Telegram Bot 設定](#telegram-bot-設定)）

```
> ● Finished (Done)

Configure DM access policies now? (default: pairing)
> ○ Yes / ● No

Select sections to configure
> ● Continue (Done)
```

### 步驟 7: 配對 Telegram 頻道

進入手機 Telegram 中的 bot 頻道，隨便輸入一個訊息。

Bot 會回覆：

```
Clawdbot: access not configured.

Your Telegram user id: 1234567890
Pairing code: abcdefgh
```

> 🔑 **記住配對碼**: `abcdefgh`

在電腦上執行配對指令：

```cmd
clawdbot pairing approve telegram abcdefgh
```

（將 `abcdefgh` 替換成你的配對碼）

### 步驟 8: 測試完成

再次進入手機 Telegram 頻道，輸入訊息，Bot 應該可以正常回覆了！🎉

> ⚠️重要：接下來請重新開機一次，讓 Gateway 服務正常啟用，這樣 Clawdbot 才算可以正常運作！

---

## 📱 Telegram Bot 設定

### 建立 Telegram 機器人

1. 在 Telegram 搜尋並加入官方帳號 **@BotFather**

2. 發送指令 `/newbot`，依提示設定機器人名稱
   - 例如：`clawdbot-bot`（如果名字被佔用就換一個）

3. **BotFather** 會回覆：

```
Done. Congratulations on your new bot...

Use this token to access the HTTP API:
1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 🔑 **記住這個 Token**，稍後配置時需要用到！

---

## 🗑️ 完整移除指南

若需要完全移除 Clawdbot：

### 以管理員身份開啟 PowerShell

```powershell
# 完整移除（包含所有資料）
clawdbot uninstall --all --yes --non-interactive

# 移除 npm 套件
npm uninstall -g clawdbot
# 或
npm uninstall -g moltbot
```

---

## 📄 配置檔案參考

### 檔案路徑

```
%USERPROFILE%\.clawd\clawdbot.json
```

### 配置範例

```json
{
  "meta": {
    "lastTouchedVersion": "2026.1.24-3",
    "lastTouchedAt": "2026-01-28T08:58:52.807Z"
  },
  "wizard": {
    "lastRunAt": "2026-01-28T08:58:52.797Z",
    "lastRunVersion": "2026.1.24-3",
    "lastRunCommand": "configure",
    "lastRunMode": "local"
  },
  "models": {
    "providers": {
      "ollama": {
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "models": [
          {
            "id": "gemini-3-flash-preview:cloud",
            "name": "Gemini 3 Flash",
            "reasoning": true,
            "input": ["text"],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 1000000,
            "maxTokens": 65536
          },
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
            "contextWindow": 128000,
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
      "models": {
        "ollama/gemini-3-flash-preview:cloud": {
          "alias": "gemini-flash"
        },
        "ollama/glm-4.7-flash": {
          "alias": "glm-4.7"
        }
      },
      "workspace": "C:\\Users\\USER\\clawd",
      "compaction": {
        "mode": "safeguard"
      },
      "maxConcurrent": 4,
      "subagents": {
        "maxConcurrent": 8
      }
    }
  },
  "tools": {
    "web": {
      "search": {
        "enabled": false
      },
      "fetch": {
        "enabled": true
      }
    }
  },
  "messages": {
    "ackReactionScope": "group-mentions"
  },
  "commands": {
    "native": "auto",
    "nativeSkills": "auto"
  },
  "hooks": {
    "internal": {
      "enabled": true,
      "entries": {
        "boot-md": {
          "enabled": true
        },
        "command-logger": {
          "enabled": true
        },
        "session-memory": {
          "enabled": true
        }
      }
    }
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "dmPolicy": "pairing",
      "botToken": "YOUR_BOT_TOKEN_HERE",
      "groupPolicy": "allowlist",
      "streamMode": "partial"
    }
  },
  "gateway": {
    "port": 18789,
    "mode": "local",
    "bind": "auto",
    "auth": {
      "mode": "token",
      "token": "YOUR_TOKEN_HERE"
    },
    "tailscale": {
      "mode": "off",
      "resetOnExit": false
    }
  },
  "skills": {
    "install": {
      "nodeManager": "npm"
    }
  },
  "plugins": {
    "entries": {
      "telegram": {
        "enabled": true
      }
    }
  }
}
```

## 🎯 快速參考

| 指令 | 用途 |
|------|------|
| `ollama pull <model>` | 拉取模型 |
| `ollama launch clawdbot` | 配置並啟動模型 |
| `clawdbot config` | 進入配置介面 |
| `clawdbot models list` | 檢視目前配置的模型列表 |
| `clawdbot pairing approve telegram <code>` | 配對 Telegram 頻道 |
| `clawdbot uninstall --all` | 完整移除 |

---

## 📚 相關連結

- [Ollama 官網](https://ollama.com/)
- [Moltbot 官網](https://www.molt.bot/)
- [Telegram BotFather](https://t.me/BotFather)

---

## 💬 社群支援

遇到問題？歡迎在 GitHub Issues 提出！

---

**最後更新**: 2026-01-30

**by anomixer 原創

Clawdbot -> Moltbot -> OpenClaw

