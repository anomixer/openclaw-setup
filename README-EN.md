# 🦞 OpenClaw + 🦙 Ollama Installation Guide

**[中文版](README.md) | English**

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text-dark.png">
        <img src="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png" alt="OpenClaw" width="500">
    </picture>
</p>


---

## ⚠️ Important Notice: Windows Native vs WSL2

You are currently viewing the **Windows Native installation guide**. This method allows you to quickly try out OpenClaw + Ollama, but with the following limitations:

| Feature | Windows Native | WSL2 |
|---------|---------------|------|
| **Basic Chat** | ✅ Fully supported | ✅ Fully supported |
| **Memory Feature** | ⚠️ May be unstable | ✅ Fully supported |
| **Skills Extension** | ⚠️ Only some Windows-compatible skills | ✅ Supports most skills |
| **Homebrew Dependencies** | ❌ Not supported | ✅ Optionally supported |

**Recommendations:**
- For a **quick trial** of OpenClaw + Ollama → Continue reading the Windows Native guide below
- For **full functionality** (memory, skills) → Use the [WSL2 Installation Guide](docs/wsl2-guide-en.md)
- Already installed Windows version but having issues → Refer to [Migrating to WSL2](docs/migration-guide-en.md)

📚 **More Info**: [Why WSL2?](docs/why-wsl2-en.md)

---

A complete step-by-step guide for quickly installing OpenClaw and a local LLM (Ollama) on Windows natively.

> ⚠️ **Version Requirements**: Ollama v0.15.4+ and OpenClaw 2026.2.5+


## 📋 Table of Contents

### Installation Steps
1. [Prerequisites](#1️⃣-prerequisites)
   - [Install Ollama](#install-ollama-v0154)
   - [Install Python](#install-python)
2. [Ollama Model Configuration](#2️⃣-ollama-model-configuration)
   - [Recommended Models](#recommended-models)
   - [Pull Local Models](#pull-local-models)
   - [Configure Cloud Models (Optional)](#configure-cloud-models-optional)
3. [OpenClaw Installation](#3️⃣-openclaw-installation)
   - [Install OpenClaw](#install-openclaw)
   - [Initial Configuration](#initial-configuration)
   - [Start Gateway Service](#9-start-gateway-service)
   - [Configure OpenClaw to Use Ollama](#10-configure-openclaw-to-use-ollama)
   - [Test Gateway](#11-test-gateway)
4. [Advanced Configuration](#4️⃣-advanced-configuration)
   - [Telegram Bot Setup](#telegram-bot-setup)
   - [Pair Telegram Channel](#pair-telegram-channel)
   - [Other Advanced Settings](#other-advanced-settings-optional)

### Reference
- [Complete Uninstall Guide](#️-complete-uninstall-guide)
- [Configuration File Reference](#-configuration-file-reference)
- [Quick Reference](#-quick-reference)
- [Tips & Tricks](#-tips--tricks)
- [Related Links](#-related-links)
- [Community Support](#-community-support)
- [Changelog](#-changelog)

---

## 1️⃣ Prerequisites

### Install Ollama (v0.15.4+)

> ⚠️ **Important**: Make sure to install **v0.15.4 or later**, as this version supports native OpenClaw integration.

#### Method 1: Using winget (Recommended)

```cmd
winget install ollama
```

#### Method 2: Manual Download

Go to [https://ollama.com/](https://ollama.com/) to download the latest Windows installer.

#### Verify Installation

```cmd
ollama -v
```

### Install Python

The Windows version of OpenClaw does not automatically install Python, but many tasks require it:

```cmd
winget install python
```

---

## 2️⃣ Ollama Model Configuration

### Recommended Models

While OpenClaw theoretically supports any OpenAI-compatible model, community and official testing shows the following models perform best:

| Model Family | Model Name | VRAM Required | Size | Best For |
|-------------|-----------|--------------|------|----------|
| **GLM** | `glm-4.7-flash` | 20GB+ | 19GB | Fast responses, automation |
| **Ministral** | `ministral-3:8b` | 8GB+ | 6GB | Lightweight, daily use |
| **GPT-OSS** | `gpt-oss-20b` | 16GB+ | - | Open-source ecosystem |

> ⚠️ **Known Issue**: `qwen2.5` and `qwen3` currently have compatibility issues and are not recommended!

### Pull Local Models

Choose a model based on your GPU's VRAM:

#### Option A: GLM 4.7 Flash (Recommended)

```cmd
ollama pull glm-4.7-flash
```

- Model size: 19GB
- Suitable for: GPUs with 20GB+ VRAM

#### Option B: Ministral 3:8b (Lightweight)

```cmd
ollama pull ministral-3:8b
```

- Model size: 6GB
- Suitable for: GPUs with 8GB+ VRAM

### Configure Cloud Models (Optional)

If you want to use SOTA models but don't have an OpenAI/Anthropic/Google Gemini API Key:

```cmd
# Sign in to Ollama (follow on-screen instructions to link your device)
ollama signin

# Pull the Google Gemini 3 Flash cloud model
ollama pull gemini-3-flash-preview:cloud
```

> 💡 **Tip**: Cloud models have usage limits, so avoid excessive use.

---

## 3️⃣ OpenClaw Installation

Open Command Prompt as a **regular user**:

### Install OpenClaw

> ⚠️ **Important! Important! Important!** (Important enough to say three times)  
> Make sure to run Command Prompt as a **regular user** to install OpenClaw!  
> Installing as Administrator may cause Telegram to not respond properly.

Open Command Prompt as a **regular user**:

```cmd
curl -fsSL https://openclaw.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

This command will automatically install Node.js and npm, and enter OpenClaw's Onboarding mode (first-time welcome setup screen).

### Initial Configuration

#### 1. Safety Confirmation

```
I understand this is powerful and inherently risky. Continue?
> Yes
```

#### 2. Onboarding Mode

```
Onboarding mode
> QuickStart (Configure details later via openclaw configure.)
```

#### 3. Set Model/Auth Provider

Skip for now, we'll configure it later:

```
Model/auth provider
> Skip for now

Filter models by provider
> All providers

Default model
> Enter model manually 

# Enter the model name from above, e.g.: ollama/glm-4.7-flash
```

#### 4. Channel Configuration (Optional)

You can choose **Skip for now** here, or configure Telegram directly. Here's an example with configuration:

```
Select channel (QuickStart)
> ● Telegram (Bot API) (not configured)

Enter Telegram bot token
>>> 1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 💡 How to get a Token? See [Telegram Bot Setup](#telegram-bot-setup)

#### 5. Skills Store

```
Configure skills now? (recommended)
> No
```

> ⚠️ Windows cannot install Brew, and the skills store requires Brew, so select No for now.


#### 6. Enable Hooks (if prompted)

```
Enable hooks?
> [+] 🚀 boot-md (Run BOOT.md on gateway startup)
> [+] 📝 command-logger (Log all command events to a centralized audit file)
> [+] 💾 session-memory (Save session context to memory when /new command is issued)
```

Press **Space** to select all three items, then press **Enter**.

#### 7. Note Web UI Information

After installation, you will see:

```
Control UI:
  Web UI: http://127.0.0.1:18789/
  Web UI (with token): http://127.0.0.1:18789/?token=xxxxxxxxxx
  Gateway WS: ws://127.0.0.1:18789
  Gateway: reachable
```

> 🔑 **Important**: Remember the URL with the token!

#### 8. Install Shell (if prompted)

```
Enable zsh shell completion for openclaw?
> No
```

> ⚠️ Windows does not support zsh, so select No.

### 9. Start Gateway Service

At this point, OpenClaw will open a browser to the Gateway Dashboard. If the Gateway Service is not running, the content will not display properly. Press Ctrl+C to close the OpenClaw window first, then:

Open Command Prompt as **Administrator**:

```cmd
openclaw gateway install
```

The OpenClaw Gateway Service will be installed and started, and will automatically start on Windows boot.

### 10. Configure OpenClaw to Use Ollama ###

**Ollama v0.15.3+ New Feature**: You can configure OpenClaw's Ollama settings to apply local models.

Since the Ollama local model hasn't been applied yet, press Ctrl+C to close the Gateway window (if it appears), then enter:

```
ollama launch openclaw
```

After the model is configured, the following prompt will appear. Answer y to continue:
```
This will modify your OpenClaw configuration:
  C:\Users\<your username>\.openclaw\openclaw.json
Backups will be saved to C:\Users\<your username>\AppData\Local\Temp\ollama-backups/

Proceed? (y/n) yes
```

> 💡 **Suggestion**: After completion, restart your computer to ensure the Gateway Service starts automatically on boot.


> 📝 **Changing models later**: Refer to **Tips & Tricks** below.


#### 11. Test Gateway

After restarting, confirm the Gateway Service is running (if not, run `ollama launch openclaw`), then open your browser and visit:

```
http://127.0.0.1:18789/?token=xxxxxxxxxx
```

Enter any message in the Chat interface, and Ollama will load the model in the background and respond.

✅ **If the AI responds normally, basic setup is complete!**

---

## 4️⃣ Advanced Configuration

### Telegram Bot Setup

#### Create a Telegram Bot

1. Search for and join **@BotFather** on Telegram

2. Send the command `/newbot` and follow the prompts to set up the bot name
   - For example: `openclaw-bot` (change the name if it's already taken)

3. **BotFather** will reply:

```
Done. Congratulations on your new bot...

Use this token to access the HTTP API:
1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 🔑 **Remember this Token** — you'll need it for configuration!

### Pair Telegram Channel

1. Go to the bot channel in Telegram on your phone and check for the following message (if not present, send any message):

```
OpenClaw: access not configured.

Your Telegram user id: 1234567890
Pairing code: abcdefgh
```

2. Run the pairing command on your computer:

```cmd
openclaw pairing approve telegram abcdefgh
```

(Replace `abcdefgh` with your actual pairing code)

3. Send another message to test

✅ **The bot should now respond normally!** 🎉

### Other Advanced Settings (Optional)

Open Command Prompt as a regular user:

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

> 💡 Requires a Brave API Key (can be applied for separately), select No for now

```
Enable web_fetch (keyless HTTP fetch)?
> ● Yes / ○ No
```

---

## 🗑️ Complete Uninstall Guide

To completely remove OpenClaw / Moltbot / Clawdbot:

### Open PowerShell as Administrator

```powershell
# Complete uninstall (including all data)
openclaw uninstall --all --yes --non-interactive
# or
moltbot uninstall --all --yes --non-interactive
# or
clawdbot uninstall --all --yes --non-interactive

# Remove npm package
npm uninstall -g openclaw
# or
npm uninstall -g moltbot
# or
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

## 🎯 Quick Reference

| Command | Purpose |
|---------|---------|
| `ollama --version` | Check Ollama version |
| `ollama pull <model>` | Pull a model |
| `ollama launch openclaw` | Configure OpenClaw to use Ollama |
| `openclaw config` | Open configuration interface |
| `openclaw models list` | View currently configured model list |
| `openclaw gateway install` | Install Gateway service |
| `openclaw gateway start` | Start Gateway service |
| `openclaw pairing approve telegram <code>` | Pair Telegram channel |
| `openclaw security audit --deep` | Deep security audit |
| `openclaw uninstall --all` | Complete uninstall |

---

## 💡 Tips & Tricks

### Prevent Ollama from Automatically Unloading Models

Add the following environment variable:

```
OLLAMA_KEEP_ALIVE=-1
```

This prevents Ollama from automatically unloading models after 5 minutes of inactivity, improving response time for the next conversation.


### Adjust Ollama Context Length

Ollama's default Context Length is 4096, which is far too small for OpenClaw. It is recommended to increase it to at least 16384.

```
OLLAMA_CONTEXT_LENGTH=32768
```


### Update Ollama Model Configuration

To switch Ollama models:

1. Delete the Ollama configuration file:
   ```cmd
   del %USERPROFILE%\.ollama\config\config.json
   ```

2. Re-run the configuration:
   ```cmd
   ollama launch openclaw
   ```

---

## 📚 Related Links

- [👍 WSL2 Complete Installation Guide](docs/wsl2-guide-en.md)
- [🔄 Migrating from Windows to WSL2](docs/migration-guide-en.md)
- [🤔 Why WSL2?](docs/why-wsl2-en.md)

- [🦙 Ollama Official Website](https://ollama.com/)
- [🦞 OpenClaw Official Website](https://openclaw.ai/)
- [🦞 OpenClaw Docs - Ollama Configuration](https://docs.openclaw.ai/providers/ollama)
- [🤖 Telegram BotFather](https://t.me/BotFather)

---

## 💬 Community Support

Having issues? Feel free to open a [GitHub Issue](https://github.com/anomixer/openclaw-setup/issues)!

---

## 📝 Changelog

### 2026-02-13
- 🔄 Synced README-EN.md updates
- 📅 Updated all document dates to 2026-02-13
- 🦞 Lobsters are still eternal

### 2026-02-05
- 🚀 Switched to `cmd` quick install command, automatically installs Node.js and npm
- 🆕 Support for latest OpenClaw 2026.2.5+ version
- 📋 Reorganized table of contents and updated translations in `README-EN.md`

### 2026-02-02
- 🔄 Updated to Ollama v0.15.4+ version
- ✨ Added `ollama launch openclaw` pre-configuration feature
- 📖 Restructured documentation for better readability
- ⚠️ Emphasized the need to install as a regular user

### 2026-01-30
- 🦞 Repo renamed to openclaw-setup
- 🌍 Added English README
- 💬 Added murmur.md rant file

---

**Last Updated**: 2026-02-13  
**Original by anomixer**  
**Clawdbot → Moltbot → OpenClaw**
