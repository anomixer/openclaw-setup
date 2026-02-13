# 🦞 OpenClaw (clawdbot / moltbot) + 🦙 Ollama Installation Guide

**[中文版](README.md) | English**

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text-dark.png">
        <img src="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png" alt="OpenClaw" width="500">
    </picture>
</p>

Comprehensive step-by-step guide for rapid installation of OpenClaw (clawdbot / moltbot) and local LLM (Ollama) on Windows.

> ⚠️ **Version Requirements**: Ollama v0.15.4+ and OpenClaw 2026.2.5+

---

## 📋 Table of Contents

### Installation Steps
1. [Environment Preparation](#1️⃣-environment-preparation)
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
   - [Configure OpenClaw to use Ollama](#10-configure-openclaw-to-use-ollama)
   - [Test Gateway](#11-test-gateway)
4. [Advanced Configuration](#4️⃣-advanced-configuration)
   - [Telegram Bot Setup](#telegram-bot-setup)
   - [Pair Telegram Channel](#pair-telegram-channel)
   - [Other Advanced Settings (Optional)](#other-advanced-settings-optional)

### Reference Materials
- [Full Uninstallation Guide](#️-full-uninstallation-guide)
- [Configuration File Reference](#-configuration-file-reference)
- [Quick Reference](#-quick-reference)
- [Useful Tips](#-useful-tips)
- [Related Links](#-related-links)
- [Community Support](#-community-support)
- [Changelog](#-changelog)

---

## 1️⃣ Environment Preparation

### Install Ollama (v0.15.4+)

> ⚠️ **Important**: Please ensure you install **v0.15.4 or higher**, as this version supports native integration with OpenClaw.

#### Method 1: Using winget (Recommended)

```cmd
winget install ollama
```

#### Method 2: Manual Download

Visit [https://ollama.com/](https://ollama.com/) to download and install the latest Windows executable.

#### Verify Installation

```cmd
ollama --version
```

### Install Python

The Windows version of OpenClaw does not automatically install Python, but many tasks require it:

```cmd
winget install python
```

---

## 2️⃣ Ollama Model Configuration

### Recommended Models

While OpenClaw theoretically supports any OpenAI-compatible model, community and official testing show that the following models perform better:

| Model Series | Model Name | VRAM Requirement | Size | Use Case |
|---------|---------|----------|------|---------|
| **GLM** | `glm-4.7-flash` | 20GB+ | 19GB | Fast response, automation |
| **Ministral** | `ministral-3:8b` | 8GB+ | 6GB | Lightweight, daily use |
| **GPT-OSS** | `gpt-oss-20b` | 16GB+ | - | Open-source ecosystem |

> ⚠️ **Known Issues**: `qwen2.5` and `qwen3` currently have compatibility issues and are not recommended for now!

### Pull Local Models

Choose a suitable model based on your GPU's VRAM:

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

If you want to use SOTA models but don't have API keys for OpenAI/Anthropic/Google Gemini:

```cmd
# Sign in to Ollama (follow on-screen instructions to link device)
ollama signin

# Pull Google Gemini 3 Flash cloud model
ollama pull gemini-3-flash-preview:cloud
```

> 💡 **Tip**: Cloud models have usage limits; avoid excessive use.

---

## 3️⃣ OpenClaw Installation

Open Command Prompt as a **normal user**:

### Install OpenClaw

> ⚠️ **Important! Important! Important!**  
> You MUST execute Command Prompt as a **normal user** to install OpenClaw!  
> Installing as Administrator may result in Telegram failing to respond correctly.

Open Command Prompt as a **normal user**:

```cmd
curl -fsSL https://openclaw.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

This command will automatically install Node.js and npm, then enter OpenClaw's Onboarding mode (initial welcome setup screen).

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

#### 3. Setup Model/Auth Provider

Choose skip for now and configure later:

```
Model/auth provider
> Skip for now

Filter models by provider
> All providers

Default model
> Enter model manually 

# Enter the model name mentioned above, e.g.: ollama/glm-4.7-flash
```

#### 4. Channel Configuration (Optional)

You can select **Skip for now** or configure Telegram directly. Here is an example of configuration:

```
Select channel (QuickStart)
> ● Telegram (Bot API) (not configured)

Enter Telegram bot token
>>> 1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 💡 How to get a Token? Please refer to [Telegram Bot Setup](#telegram-bot-setup)

#### 5. Skill Store

```
Configure skills now? (recommended)
> No
```

> ⚠️ Windows cannot install Brew, and the Skill Store requires Brew, so select No.

#### 6. Enable Hooks (if prompted)

```
Enable hooks?
> [+] 🚀 boot-md (Run BOOT.md on gateway startup)
> [+] 📝 command-logger (Log all command events to a centralized audit file)
> [+] 💾 session-memory (Save session context to memory when /new command is issued)
```

Press **Space** to select all three, then press **Enter**.

#### 7. Record Web UI Information

After installation, the following will be displayed:

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

> ⚠️ Windows does not support zsh; select No.

### 9. Start Gateway Service

At this point, OpenClaw will open the browser to the Gateway Dashboard. If the Gateway Service is not running, it won't display correctly. Press Ctrl+C to close the OpenClaw window, then:

Open Command Prompt as **Administrator**:

```cmd
openclaw gateway install
```

The OpenClaw Gateway Service will be installed and started, and it will automatically start with Windows boot.

### 10. Configure OpenClaw to use Ollama

**New Feature in Ollama v0.15.3+**: You can configure OpenClaw's Ollama settings to apply local models.

Since the local Ollama models haven't been applied yet, please close the Gateway window (if open) and enter:

```
ollama launch openclaw
```

After configuring the model, a confirmation will appear; type 'y' to continue:
```
This will modify your OpenClaw configuration:
  C:\Users\<your username>\.openclaw\openclaw.json
Backups will be saved to C:\Users\<your username>\AppData\Local\Temp\ollama-backups/

Proceed? (y/n) yes
```

> 💡 **Recommendation**: Reboot your computer after this to ensure the Gateway Service starts automatically on boot.

> 📝 **Changing models later**: Refer to the **Useful Tips** section below.

#### 11. Test Gateway

After rebooting, ensure the Gateway Service is running (if not, run `ollama launch openclaw`), then open your browser and visit:

```
http://127.0.0.1:18789/?token=xxxxxxxxxx
```

Enter any message in the Chat screen; Ollama will load the model in the background and respond.

✅ **If the AI responds correctly, the basic setup is complete!**

---

## 4️⃣ Advanced Configuration

### Telegram Bot Setup

#### Create a Telegram Bot

1. Search for and add **@BotFather** in Telegram.

2. Send the command `/newbot` and follow the prompts to set a name for your bot.
   - Example: `openclaw-bot` (if taken, choose another name).

3. **BotFather** will reply with:

```
Done. Congratulations on your new bot...

Use this token to access the HTTP API:
1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 🔑 **Keep this Token safe**; you will need it later!

### Pair Telegram Channel

1. Go to your bot's channel in the Telegram app and check for the following message (if not there, send any message):

```
OpenClaw: access not configured.

Your Telegram user id: 1234567890
Pairing code: abcdefgh
```

2. Execute the pairing command on your computer:

```cmd
openclaw pairing approve telegram abcdefgh
```

(Replace `abcdefgh` with your actual pairing code)

3. Send another message to test.

✅ **The Bot should now be able to reply!** 🎉

### Other Advanced Settings (Optional)

Open Command Prompt as a **normal user**:

```cmd
openclaw config
```

#### Gateway Location

```
Where will the Gateway run?
> ● Local (this machine)
```

#### Web Tool Configuration

```
Select sections to configure
> ● Web tools (Configure Brave search + fetch)

Enable web_search (Brave Search)?
> ○ Yes / ● No
```

> 💡 Requires a Brave API Key (can be applied separately); select No for now.

```
Enable web_fetch (keyless HTTP fetch)?
> ● Yes / ○ No
```

---

## 🗑️ Full Uninstallation Guide

To completely remove OpenClaw / Moltbot / Clawdbot:

### Open PowerShell as Administrator

```powershell
# Full removal (including all data)
openclaw uninstall --all --yes --non-interactive
# or
moltbot uninstall --all --yes --non-interactive
# or
clawdbot uninstall --all --yes --non-interactive

# Remove npm packages
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
|------|------|
| `ollama --version` | Check Ollama version |
| `ollama pull <model>` | Pull a model |
| `ollama launch openclaw` | Configure OpenClaw to use Ollama |
| `openclaw config` | Enter configuration interface |
| `openclaw models list` | View currently configured models |
| `openclaw gateway install` | Install Gateway service |
| `openclaw gateway start` | Start Gateway service |
| `openclaw pairing approve telegram <code>` | Pair Telegram channel |
| `openclaw security audit --deep` | Deep security audit |
| `openclaw uninstall --all` | Full uninstallation |

---

## 💡 Useful Tips

### Prevent Ollama from Auto-unloading Models

Add to environment variables:

```
OLLAMA_KEEP_ALIVE=-1
```

This prevents Ollama from auto-unloading models after 5 minutes of inactivity, speeding up subsequent responses.

### Update Ollama Model Configuration

To change the Ollama model:

1. Delete the Ollama config file:
   ```cmd
   del %USERPROFILE%\.ollama\config\config.json
   ```

2. Re-run configuration:
   ```cmd
   ollama launch openclaw
   ```

---

## 📚 Related Links

- [Ollama Official Website](https://ollama.com/)
- [OpenClaw Official Website](https://openclaw.ai/)
- [OpenClaw Docs - Ollama Setup](https://docs.openclaw.ai/providers/ollama)
- [Telegram BotFather](https://t.me/BotFather)

---

## 💬 Community Support

Facing issues? Feel free to open an issue on [GitHub Issues](https://github.com/anomixer/openclaw-setup/issues)!

---

## 📝 Changelog

### 2026-02-13
- 🔄 Synchronized with Chinese version README.md
- 📅 Updated all documentation dates to 2026-02-13
- 🦞 Lobster remains eternal

### 2026-02-05
- 🚀 Switched to `cmd` quick install command for higher automation of Node.js and npm installation.
- 🆕 Support for the latest OpenClaw 2026.2.5+ version.
- 📋 Rebuilt Table of Contents and updated translations in `README-EN.md`.

### 2026-02-02
- 🔄 Updated to Ollama v0.15.4+ version.
- ✨ Added `ollama launch openclaw` pre-configuration feature.
- 📖 Refactored document structure for better readability.
- ⚠️ Optimized emphasis on installation as a normal user.

### 2026-01-30
- 🦞 Repo renamed to openclaw-setup.
- 🌍 Added English version of README.
- 💬 Added murmur.md (rant/musings file).

---

**Last Updated**: 2026-02-13  
**Original by anomixer**  
**Clawdbot → Moltbot → OpenClaw**
