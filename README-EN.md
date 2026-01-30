# 🦞 Clawdbot / Moltbot / OpenClaw + 🦙 Ollama Installation Guide

**[中文版](README.md) | English**

A comprehensive guide for installing Clawdbot / Moltbot / OpenClaw with local LLM (Ollama) on Windows.

[![OpenClaw Logo](https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png)](https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png)

---

## 📋 Table of Contents

- [Ollama Installation & Configuration](#-ollama-installation--configuration)
- [Python Installation](#-python-installation)
- [Clawdbot Installation & Configuration](#%EF%B8%8F-clawdbot-installation--configuration)
- [Telegram Bot Setup](#-telegram-bot-setup)
- [Complete Uninstallation Guide](#%EF%B8%8F-complete-uninstallation-guide)
- [Configuration File Reference](#-configuration-file-reference)

---

## 🧠 Ollama Installation & Configuration

### Recommended Models

While Clawdbot theoretically supports any OpenAI-compatible model, community and official testing show these models perform best:

- **GPT-OSS Series**: Includes `gpt-oss-20b` (suitable for 16GB VRAM) and `gpt-oss-120b`, high-performance models designed for the open-source ecosystem
- **GLM Series**: Such as `glm-4.7-flash`, commonly used for fast-response automation scenarios

> ⚠️ **Warning**: `qwen2.5` and `qwen3` currently have compatibility issues - not recommended for now!

### Step 1: Install Ollama

Open **Command Prompt** and run:

```cmd
winget install ollama
```

Or manually download the Windows installer from [https://ollama.com/](https://ollama.com/).

### Step 2: Pull Local Models

Choose a model based on your GPU VRAM:

#### Option A: GLM 4.7 Flash (Recommended, requires 20GB+ VRAM)

```cmd
ollama pull glm-4.7-flash
```

- Model size: 19GB
- Suitable for: GPUs with 20GB+ vRAM

#### Option B: Ministral 3:8b (Lightweight, requires 8GB+ VRAM)

```cmd
ollama pull ministral-3:8b
```

- Model size: 6GB
- Suitable for: GPUs with 8GB+ vRAM

### Step 3: Configure Cloud Models (Optional)

If you want to use SOTA models but don't have OpenAI/Anthropic/Google Gemini API Keys, you can register a free Ollama account and use their cloud models.

```cmd
# Sign in to Ollama (follow on-screen instructions to connect device)
ollama signin

# Pull Google Gemini 3 Flash cloud model
ollama pull gemini-3-flash-preview:cloud
```

> 💡 **Tip**: Cloud models have usage limits - don't use them too frequently.

---

## 🐍 Python Installation

The Windows version of Clawdbot doesn't auto-install Python, but many tasks require it. Install first:

```cmd
winget install python
```

---

## ⚙️ Clawdbot Installation & Configuration

### Step 1: Set PowerShell Execution Policy

Open PowerShell **as Administrator** and run:

```powershell
# Allow local machine to execute PS1 scripts
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine

# Check settings (LocalMachine should show RemoteSigned)
Get-ExecutionPolicy -List
```

### Step 2: Install Clawdbot

Refer to [https://www.molt.bot/](https://www.molt.bot/), open PowerShell **as regular user**:

```powershell
iwr -useb https://molt.bot/install.ps1 | iex
```

This command will automatically install Node.js and npm.

### Step 3: Follow On-Screen Instructions for Initial Setup

#### Security Confirmation

```
I understand this is powerful and inherently risky. Continue?
> Yes
```

#### Onboarding Mode

```
Onboarding mode
> QuickStart (Configure details later via clawdbot configure.)
```

#### Model/Auth Provider

```
Model/auth provider
> Skip for now

Filter models by provider
> All providers

Default model
> Keep current (default: anthropic/claude-opus-4-5)
```

Or choose `Enter model manually` and input `glm-4.7-flash`

#### Channel Configuration

```
Select channel (QuickStart)
> Skip for now
```

#### Skills Store

```
Configure skills now? (recommended)
> No
```

> ⚠️ Windows cannot install Brew, and the skills store requires Brew, so choose No for now

#### Enable Hooks

```
Enable hooks?
> [+] 🚀 boot-md (Run BOOT.md on gateway startup)
```

Press spacebar to select, then Enter

#### Record Web UI Information

After installation completes, you'll see:

```
Control UI:
  Web UI: http://127.0.0.1:18789/
  Web UI (with token): http://127.0.0.1:18789/?token=xxxxxxxxxx
  Gateway WS: ws://127.0.0.1:18789
  Gateway: reachable
```

> 🔑 **Important**: Remember the URL with token!

#### Gateway Launch Method

```
How do you want to hatch your bot?
> Do this later
```

### Step 4: Update Model Configuration

If you installed as administrator earlier, press `Ctrl+C` to stop the Gateway first. Then run:

```cmd
ollama launch clawdbot
```

- Choose primary model: `glm-4.7-flash` (default)
- Choose fallback model: `gemini-3-flash-preview:cloud` (fallback)

This command will automatically update the model configuration in `.clawdbot\clawdbot.json` and launch the Clawdbot Gateway Service.

> Note: To change Ollama models in the future, you need to first delete Ollama's config.json (located at `%USERPROFILE%\.ollama\config\config.json`), then run the `ollama launch clawdbot` command again.

### Step 5: Test Web UI

Open the Web UI URL (the one with token) in your browser and test if you can chat with the AI normally.

### Step 6: Advanced Configuration

Open another Command Prompt and run:

```cmd
clawdbot config
```

#### Gateway Location

```
Where will the Gateway run?
> ● Local (this machine)
```

#### Web Tools Configuration

```
Select sections to configure
> ● Web tools (Configure Brave search + fetch)

Enable web_search (Brave Search)?
> ○ Yes / ● No
```

> 💡 Requires Brave API Key (can be obtained separately), choose No for now

```
Enable web_fetch (keyless HTTP fetch)?
> ● Yes / ○ No
```

#### Channel Configuration

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

Enter your Telegram Bot Token (format as shown above, see [Telegram Bot Setup](#-telegram-bot-setup))

```
> ● Finished (Done)

Configure DM access policies now? (default: pairing)
> ○ Yes / ● No

Select sections to configure
> ● Continue (Done)
```

### Step 7: Pair Telegram Channel

Open your bot channel in Telegram on your phone and send any message.

The bot will reply:

```
Clawdbot: access not configured.

Your Telegram user id: 1234567890
Pairing code: abcdefgh
```

> 🔑 **Remember the pairing code**: `abcdefgh`

On your computer, run the pairing command:

```cmd
clawdbot pairing approve telegram abcdefgh
```

(Replace `abcdefgh` with your pairing code)

### Step 8: Test Complete

Return to your Telegram channel and send another message - the bot should now respond normally! 🎉

> ⚠️ Important: Please restart your computer once to ensure the Gateway service starts properly. Only then will Clawdbot work normally!

---

## 📱 Telegram Bot Setup

### Create Telegram Bot

1. In Telegram, search for and add the official account **@BotFather**

2. Send command `/newbot` and follow prompts to set bot name
   - Example: `clawdbot-bot` (choose a different name if taken)

3. **BotFather** will reply:

```
Done. Congratulations on your new bot...

Use this token to access the HTTP API:
1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 🔑 **Remember this Token** - you'll need it during configuration!

---

## 🗑️ Complete Uninstallation Guide

To completely remove Clawdbot:

### Open PowerShell as Administrator

```powershell
# Complete removal (including all data)
clawdbot uninstall --all --yes --non-interactive

# Remove npm package
npm uninstall -g clawdbot
# or
npm uninstall -g moltbot
```

---

## 📄 Configuration File Reference

### File Path

```
%USERPROFILE%\.clawd\clawdbot.json
```

### Configuration Example

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

## 🎯 Quick Reference

| Command | Purpose |
|---------|---------|
| `ollama pull <model>` | Pull model |
| `ollama launch clawdbot` | Configure and launch model |
| `clawdbot config` | Enter configuration interface |
| `clawdbot models list` | View current configured model list |
| `clawdbot pairing approve telegram <code>` | Pair Telegram channel |
| `clawdbot uninstall --all` | Complete removal |

---

## 📚 Related Links

- [Ollama Official Site](https://ollama.com/)
- [Moltbot Official Site](https://www.molt.bot/)
- [Telegram BotFather](https://t.me/BotFather)

---

## 💬 Community Support

Have questions? Feel free to open a GitHub Issue!

---

**Last Updated**: 2026-01-30

**Created by anomixer**

Clawdbot → Moltbot → OpenClaw
