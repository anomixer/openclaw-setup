# 🦞 OpenClaw (clawdbot / moltbot) + 🦙 Ollama Installation Guide

**[中文版](README.md) | English**

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text-dark.png">
        <img src="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png" alt="OpenClaw" width="500">
    </picture>
</p>

A comprehensive guide for installing OpenClaw (clawdbot / moltbot) with local LLM (Ollama) on Windows.

> ⚠️ **Version Requirements**: Ollama v0.15.4+ and OpenClaw 2026.1.30+

---

## 📋 Table of Contents

### Installation Steps
1. [Environment Setup](#1️⃣-environment-setup)
   - [Install Ollama](#install-ollama-v0154)
   - [Install Python](#install-python)
2. [Ollama Model Configuration](#2️⃣-ollama-model-configuration)
   - [Pull Local Models](#pull-local-models)
   - [Configure Cloud Models](#configure-cloud-models-optional)
   - [Pre-configure OpenClaw](#pre-configure-openclaw-for-ollama)
3. [OpenClaw Installation](#3️⃣-openclaw-installation)
   - [Set PowerShell Permissions](#set-powershell-execution-policy)
   - [Install OpenClaw](#install-openclaw-1)
   - [Initial Configuration](#initial-configuration)
   - [Start Gateway Service](#start-gateway-service)
4. [Advanced Configuration](#4️⃣-advanced-configuration)
   - [Telegram Bot Setup](#telegram-bot-setup)
   - [Pair Telegram Channel](#pair-telegram-channel)
   - [Other Advanced Settings](#other-advanced-settings)

### Reference
- [Complete Uninstallation Guide](#%EF%B8%8F-complete-uninstallation-guide)
- [Configuration File Reference](#-configuration-file-reference)
- [Quick Reference Table](#-quick-reference)
- [Related Links](#-related-links)

---

## 1️⃣ Environment Setup

### Install Ollama (v0.15.4+)

> ⚠️ **Important**: Please ensure you install **v0.15.4 or above**, which supports native OpenClaw integration.

#### Method 1: Using winget (Recommended)

```cmd
winget install ollama
```

#### Method 2: Manual Download

Visit [https://ollama.com/](https://ollama.com/) to download the latest Windows installer.

#### Verify Installation

```cmd
ollama --version
```

### Install Python

The Windows version of OpenClaw doesn't auto-install Python, but many tasks require it:

```cmd
winget install python
```

---

## 2️⃣ Ollama Model Configuration

### Recommended Models

While OpenClaw theoretically supports any OpenAI-compatible model, community and official testing show these models perform best:

| Model Series | Model Name | VRAM Required | Size | Best For |
|-------------|------------|---------------|------|----------|
| **GLM** | `glm-4.7-flash` | 20GB+ | 19GB | Fast response, automation |
| **Ministral** | `ministral-3:8b` | 8GB+ | 6GB | Lightweight, daily use |
| **GPT-OSS** | `gpt-oss-20b` | 16GB+ | - | Open-source ecosystem |

> ⚠️ **Known Issues**: `qwen2.5` and `qwen3` currently have compatibility issues - not recommended!

### Pull Local Models

Choose a model based on your GPU VRAM:

#### Option A: GLM 4.7 Flash (Recommended)

```cmd
ollama pull glm-4.7-flash
```

- Model size: 19GB
- Suitable for: GPUs with 20GB+ vRAM

#### Option B: Ministral 3:8b (Lightweight)

```cmd
ollama pull ministral-3:8b
```

- Model size: 6GB
- Suitable for: GPUs with 8GB+ vRAM

### Configure Cloud Models (Optional)

If you want to use SOTA models but don't have OpenAI/Anthropic/Google Gemini API Keys:

```cmd
# Sign in to Ollama (follow on-screen instructions)
ollama signin

# Pull Google Gemini 3 Flash cloud model
ollama pull gemini-3-flash-preview:cloud
```

> 💡 **Tip**: Cloud models have usage limits - don't use too frequently.

### Pre-configure OpenClaw for Ollama

**Ollama v0.15.3+ New Feature**: Pre-configure OpenClaw's Ollama settings

```cmd
ollama launch openclaw
```

You'll see:

```
Launching OpenClaw with <model name>...
Error: openclaw is not installed, install from https://docs.openclaw.ai
```

**This is normal!** The command has written the configuration to `%USERPROFILE%\.openclaw\openclaw.json`, which will be auto-detected during OpenClaw installation.

> 📝 **To change models later**: Delete `%USERPROFILE%\.ollama\config\config.json` first, then run `ollama launch openclaw` again.

---

## 3️⃣ OpenClaw Installation

### Set PowerShell Execution Policy

Open PowerShell **as Administrator**:

```powershell
# Allow local machine to execute PS1 scripts
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine

# Check settings (LocalMachine should show RemoteSigned)
Get-ExecutionPolicy -List
```

### Install OpenClaw

> ⚠️ **CRITICAL! CRITICAL! CRITICAL!** (Important × 3)  
> You MUST install OpenClaw using PowerShell **as a regular user**!  
> Installing as Administrator may cause Telegram to not respond properly.

Open PowerShell **as regular user**:

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

This command will automatically install Node.js and npm.

### Initial Configuration

#### 1. Security Confirmation

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

If you previously ran `ollama launch openclaw`, you'll see:

```
o  Existing config detected ---------+
|                                    |
|  model: <your model>               |
|                                    |
+------------------------------------+
|
*  Config handling
|  > Use existing values
```

Select **Use existing values**, then:

```
Model/auth provider
> Skip for now

Filter models by provider
> All providers

Default model
> Keep current (ollama/<your model>)
```

#### 4. Channel Configuration (Optional)

You can select **Skip for now**, or configure Telegram directly:

```
Select channel (QuickStart)
> ● Telegram (Bot API) (not configured)

Enter Telegram bot token
>>> 1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 💡 How to get a token? See [Telegram Bot Setup](#telegram-bot-setup)

#### 5. Skills Store

```
Configure skills now? (recommended)
> No
```

> ⚠️ Windows cannot install Brew, and the skills store requires Brew, so choose No for now.

#### 6. Enable Hooks

```
Enable hooks?
> [+] 🚀 boot-md (Run BOOT.md on gateway startup)
> [+] 📝 command-logger (Log all command events to a centralized audit file)
> [+] 💾 session-memory (Save session context to memory when /new command is issued)
```

Press **spacebar** to select all three, then press **Enter**.

#### 7. Record Web UI Information

After installation completes, you'll see:

```
Control UI:
  Web UI: http://127.0.0.1:18789/
  Web UI (with token): http://127.0.0.1:18789/?token=xxxxxxxxxx
  Gateway WS: ws://127.0.0.1:18789
  Gateway: reachable
```

> 🔑 **Important**: Remember the URL with token!

#### 8. Install Shell Completion Script

```
—  Onboarding complete. Dashboard opened with your token;
   keep that tab to control OpenClaw.

*  Install shell completion script?
> Yes
```

### Start Gateway Service

Open PowerShell **as Administrator**:

```powershell
openclaw gateway install
openclaw gateway start
```

> 💡 **Recommendation**: Restart your computer after this to ensure the Gateway service starts automatically on boot.

#### Test Gateway

After reboot, open your browser and visit:

```
http://127.0.0.1:18789/?token=xxxxxxxxxx
```

Type any message in the Chat screen. Ollama will load the model in the background and respond.

✅ **If AI responds normally, basic setup is complete!**

---

## 4️⃣ Advanced Configuration

### Telegram Bot Setup

#### Create Telegram Bot

1. In Telegram, search for and add **@BotFather**

2. Send command `/newbot` and follow prompts to set bot name
   - Example: `openclaw-bot` (choose different name if taken)

3. **BotFather** will reply:

```
Done. Congratulations on your new bot...

Use this token to access the HTTP API:
1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 🔑 **Remember this Token** - you'll need it during configuration!

### Pair Telegram Channel

1. Open your bot channel in Telegram on your phone, send any message

2. Bot will reply:

```
OpenClaw: access not configured.

Your Telegram user id: 1234567890
Pairing code: abcdefgh
```

3. On your computer, run the pairing command:

```cmd
openclaw pairing approve telegram abcdefgh
```

(Replace `abcdefgh` with your pairing code)

4. Send another message to test

✅ **Bot should respond normally now!** 🎉

### Other Advanced Settings (Optional)

Open Command Prompt as regular user:

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

---

## 🗑️ Complete Uninstallation Guide

To completely remove OpenClaw / Moltbot / Clawdbot:

### Open PowerShell as Administrator

```powershell
# Complete removal (including all data)
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
| `ollama pull <model>` | Pull model |
| `ollama launch openclaw` | Configure OpenClaw with Ollama |
| `openclaw config` | Enter configuration interface |
| `openclaw models list` | View current configured model list |
| `openclaw gateway install` | Install Gateway service |
| `openclaw gateway start` | Start Gateway service |
| `openclaw pairing approve telegram <code>` | Pair Telegram channel |
| `openclaw security audit --deep` | Deep security check |
| `openclaw uninstall --all` | Complete removal |

---

## 💡 Useful Tips

### Prevent Ollama from Auto-unloading Models

Add to environment variables:

```
OLLAMA_KEEP_ALIVE=-1
```

This prevents Ollama from automatically unloading models after 5 minutes of inactivity, improving response time for next conversation.

### Update Ollama Model Configuration

To change Ollama models:

1. Delete Ollama config file:
   ```cmd
   del %USERPROFILE%\.ollama\config\config.json
   ```

2. Re-run configuration:
   ```cmd
   ollama launch openclaw
   ```

---

## 📚 Related Links

- [Ollama Official Site](https://ollama.com/)
- [OpenClaw Official Site](https://openclaw.ai/)
- [OpenClaw Docs - Ollama Setup](https://docs.openclaw.ai/providers/ollama)
- [Telegram BotFather](https://t.me/BotFather)

---

## 💬 Community Support

Have questions? Feel free to open an [GitHub Issue](https://github.com/anomixer/openclaw-setup/issues)!

---

## 📝 Changelog

### 2026-02-02
- 🔄 Updated to Ollama v0.15.4+ version
- ✨ Added `ollama launch openclaw` pre-configuration feature
- 📖 Restructured documentation for better readability
- ⚠️ Emphasized must use regular user account for installation

### 2026-01-30
- 🦞 Renamed repository to openclaw-setup
- 🌍 Added English README
- 💬 Added murmur.md commentary file

---

**Last Updated**: 2026-02-02  
**Created by anomixer**  
**Clawdbot → Moltbot → OpenClaw**
