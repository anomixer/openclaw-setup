# 🦞 OpenClaw (clawdbot / moltbot) + 🦙 Ollama Installation Guide

**[中文版](README.md) | English**

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text-dark.png">
        <img src="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png" alt="OpenClaw" width="500">
    </picture>
</p>

A comprehensive guide for installing OpenClaw (clawdbot / moltbot) with local LLM (Ollama) on Windows.

---

## 📋 Table of Contents

- [Ollama Installation & Configuration](#-ollama-installation--configuration)
- [Python Installation](#-python-installation)
- [OpenClaw Installation & Configuration](#%EF%B8%8F-openclaw-installation--configuration)
- [Telegram Bot Setup](#-telegram-bot-setup)
- [Complete Uninstallation Guide](#%EF%B8%8F-complete-uninstallation-guide)
- [Configuration File Reference](#-configuration-file-reference)

---

## 🧠 Ollama Installation & Configuration

### Recommended Models

While OpenClaw theoretically supports any OpenAI-compatible model, community and official testing show these models perform best:

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

The Windows version of OpenClaw doesn't auto-install Python, but many tasks require it. Install first:

```cmd
winget install python
```

---

## ⚙️ OpenClaw Installation & Configuration

### Step 1: Set PowerShell Execution Policy

Open PowerShell **as Administrator** and run:

```powershell
# Allow local machine to execute PS1 scripts
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine

# Check settings (LocalMachine should show RemoteSigned)
Get-ExecutionPolicy -List
```

### Step 2: Install OpenClaw

Refer to [https://openclaw.ai/](https://openclaw.ai/), open PowerShell **as regular user**:

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
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
> QuickStart (Configure details later via openclaw configure.)
```

#### Model/Auth Provider

```
Model/auth provider
> Skip for now

Filter models by provider
> All providers

Default model
> Enter model manually
```

Enter `ollama/glm-4.7-flash` or your specified model name.

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
> [+] 📝 command-logger (Log all command events to a centralized audit file)
> [+] 💾 session-memory (Save session context to memory when /new command is issued)
```

Press spacebar to select all three, then press Enter

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

#### Gateway Launch Method (if prompted)

```
How do you want to hatch your bot?
> Open the Web UI
```

### Step 4: Update Model Configuration

At this point, OpenClaw will attempt to launch the Gateway service in a separate Command Prompt window and open a web browser.

- If you installed as **Administrator**, the browser will enter the Chat screen. Don't enter anything yet, as we haven't configured Ollama's Key and BaseURL. Press `Ctrl+C` to stop the Gateway service first.
- If you followed the instructions and installed as a **regular user**, the Gateway Service won't launch at this point, and the browser will show "Unable to connect to this site" - this is normal.

Now, directly edit the `.openclaw\openclaw.json` configuration file using a text editor:

```cmd
notepad $env:USERPROFILE\.openclaw\openclaw.json
```

Then, between the first line's `{` and `"messages": {`, insert the following data:

```json
  "models": {
    "providers": {
      "ollama": {
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
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
            "contextWindow": 128000,
            "maxTokens": 16384
          },
        ]
      }
    }
  },
```

> ⚠️ Note: You can change the model name above to your preferred name

After saving the configuration file, open PowerShell **as Administrator** and enter:

```powershell
openclaw gateway install
```

After successfully starting the Gateway service, restart your computer (Reboot).

After re-entering Windows, the Gateway Service window will automatically open.
You can now open your browser and navigate to the URL mentioned above: http://127.0.0.1:18789/?token=xxxxxxxxxx

Enter any conversation in the Chat screen. Ollama will then load the model in the background and display the conversation in the Chat window.

If the AI responds normally, the basic AI conversation setup is complete.

### Step 5: Advanced Configuration

Open Command Prompt as a regular user and run the configuration command:

```cmd
openclaw config
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

### Step 6: Pair Telegram Channel

Open your bot channel in Telegram on your phone and send any message.

The bot will reply:

```
OpenClaw: access not configured.

Your Telegram user id: 1234567890
Pairing code: abcdefgh
```

> 🔑 **Remember the pairing code**: `abcdefgh`

On your computer, run the pairing command:

```cmd
openclaw pairing approve telegram abcdefgh
```

(Replace `abcdefgh` with your pairing code)

### Step 7: Test Complete

Return to your Telegram channel and send another message - the bot should now respond normally! 🎉

> ⚠️ Important: Please restart your computer once to ensure the Gateway service starts properly. Only then will OpenClaw work normally!

> Recommendation: Add an environment variable `OLLAMA_KEEP_ALIVE=-1` to prevent Ollama from automatically exiting the model after 5 minutes of inactivity, which would affect the speed of the next conversation.

---

## 📱 Telegram Bot Setup

### Create Telegram Bot

1. In Telegram, search for and add the official account **@BotFather**

2. Send command `/newbot` and follow prompts to set bot name
   - Example: `openclaw-bot` (choose a different name if taken)

3. **BotFather** will reply:

```
Done. Congratulations on your new bot...

Use this token to access the HTTP API:
1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 🔑 **Remember this Token** - you'll need it during configuration!

---

## 🗑️ Complete Uninstallation Guide

To completely remove OpenClaw / Moltbot / Clawdbot:

### Open PowerShell as Administrator

```powershell
# Complete removal (including all data)
openclaw uninstall --all --yes --non-interactive
or
moltbot uninstall --all --yes --non-interactive
or
clawdbot uninstall --all --yes --non-interactive

# Remove npm package
npm uninstall -g openclaw
or
npm uninstall -g moltbot
or
npm uninstall -g clawdbot
```

---

## 📄 Configuration File Reference

### File Path

```
%USERPROFILE%\.openclaw\openclaw.json
```

### Configuration Example

```json
{
  "models": {
    "providers": {
      "ollama": {
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
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
            "contextWindow": 128000,
            "maxTokens": 16384
          },
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
          }
        ]
      }
    }
  },
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
| `ollama launch openclaw` | Configure and launch model |
| `openclaw config` | Enter configuration interface |
| `openclaw models list` | View current configured model list |
| `openclaw pairing approve telegram <code>` | Pair Telegram channel |
| `openclaw uninstall --all` | Complete removal |
| `openclaw security audit --deep` | Deep security check |

---

## 📚 Related Links

- [Ollama Official Site](https://ollama.com/)
- [OpenClaw Official Site](https://openclaw.ai/)
- [Telegram BotFather](https://t.me/BotFather)
- [OpenClaw Ollama Configuration](https://docs.openclaw.ai/providers/ollama)

---

## 💬 Community Support

Have questions? Feel free to open a GitHub Issue!

---

**Last Updated**: 2026-01-30

**Created by anomixer**

Clawdbot → Moltbot → OpenClaw
