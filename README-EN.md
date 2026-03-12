# 🦞 OpenClaw + 🦙 Ollama Installation Guide

**[中文版](README.md) | English | [網頁版](https://anomixer.github.io/openclaw-setup/setup/) | [Web-site Version](https://anomixer.github.io/openclaw-setup/en/setup/)**

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text-dark.png">
        <img src="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png" alt="OpenClaw" width="500">
    </picture>
</p>


---

> 📰 **Latest OpenClaw Battle Status Daily Updates**: Highly recommended to read the [OpenClaw Universe Battlefield Observation Log 🦞](murmur-en.md) before installation.

---

## ⚠️ Important Note: Native Windows vs WSL2

You are currently viewing the **Native Windows Installation Guide**. This method allows you to quickly experience OpenClaw + Ollama, but has the following limitations:

| Feature | Native Windows | WSL2 Version |
|------|---------------|----------|
| **Basic Chat** | ✅ Fully Supported | ✅ Fully Supported |
| **Memory Feature** | ⚠️ May be unstable | ✅ Fully Supported |
| **Skills Extension** | ⚠️ Only some Windows-compatible skills work | ✅ Most skills supported |
| **Homebrew Dependencies** | ❌ Not Supported | ✅ Optionally Supported |

**Recommendations:**
- If you just want a **quick experience** of OpenClaw + Ollama → Continue reading the Native Windows Guide below.
- If you need **full features** (memory, skills) → Please use the [WSL2 Installation Guide](docs/wsl2-guide-en.md).
- Installed the Windows version but encountered issues → See [Migrating to WSL2](docs/migration-guide-en.md).

📚 **More info**: [Why do we need WSL2?](docs/why-wsl2-en.md)

---

A complete step-by-step guide for quickly installing OpenClaw and a local LLM (Ollama) natively on Windows.

> ⚠️ **Version Requirements**: Ollama v0.15.4+ and OpenClaw 2026.2.5+


## 📋 Table of Contents

### Installation Steps
1. [Environment Preparation](#1️⃣-environment-preparation)
   - [Install Ollama (v0.15.4+)](#install-ollama-v0154)
   - [Install Python](#install-python)
2. [Ollama Model Configuration](#2️⃣-ollama-model-configuration)
   - [Recommended Models](#recommended-models)
   - [Pull Local Models](#pull-local-models)
   - [Configure Cloud Models (Optional)](#configure-cloud-models-optional)
3. [OpenClaw Installation](#3️⃣-openclaw-installation)
   - [Install OpenClaw](#install-openclaw)
   - [Initial Configuration](#initial-configuration)
   - [9. Start Gateway Service](#9-start-gateway-service)
   - [10. Configure OpenClaw to use Ollama](#10-configure-openclaw-to-use-ollama)
   - [11. Test Gateway](#11-test-gateway)
4. [Advanced Configuration](#4️⃣-advanced-configuration)
   - [Telegram Bot Setup](#telegram-bot-setup)
   - [Pair Telegram Channel](#pair-telegram-channel)
   - [Other Advanced Settings (Optional)](#other-advanced-settings-optional)

### Reference
- [🗑️ Complete Removal Guide](#️-complete-removal-guide)
- [📄 Configuration File Reference](#-configuration-file-reference)
- [🎯 Quick Reference](#-quick-reference)
- [💡 Useful Tips](#-useful-tips)
- [📚 Related Links](#-related-links)
- [💬 Community Support](#-community-support)
- [📝 Changelog](#-changelog)

---

## 1️⃣ Environment Preparation

### Install Ollama (v0.15.4+)

> ⚠️ **Important**: Please make sure to install **v0.15.4 or above**, this version supports OpenClaw native integration.

#### Method 1: Using winget (Recommended)

```cmd
winget install ollama
```

#### Method 2: Manual Download

Go to [https://ollama.com/](https://ollama.com/) to download the latest Windows executable and install it.

#### Verify Installation

```cmd
ollama -v
```

### Install Python

OpenClaw's Windows version does not automatically install Python, but many tasks require it:

```cmd
winget install python
```

---

## 2️⃣ Ollama Model Configuration

### Recommended Models

Although OpenClaw theoretically supports any OpenAI-compatible model, community and official tests show the following models perform better:

| Model Series | Model Name | VRAM Req | Size | Best For |
|---------|---------|----------|------|---------|
| **GLM** | `glm-4.7-flash` | 20GB+ | 19GB | Fast response, automation |
| **Ministral** | `ministral-3:8b` | 8GB+ | 6GB | Lightweight, daily use |
| **GPT-OSS** | `gpt-oss-20b` | 16GB+ | - | Open source ecosystem exclusive |

> ⚠️ **Known Issues**: `qwen2.5` and `qwen3` currently have compatibility issues and are temporarily not recommended!

### Pull Local Models

Choose a suitable model based on your graphics card's VRAM:

#### Option A: GLM 4.7 Flash (Recommended)

```cmd
ollama pull glm-4.7-flash
```

- Model Size: 19GB
- Suitable for: GPUs with 20GB+ VRAM

#### Option B: Ministral 3:8b (Lightweight)

```cmd
ollama pull ministral-3:8b
```

- Model Size: 6GB
- Suitable for: GPUs with 8GB+ VRAM

### Configure Cloud Models (Optional)

If you want to use SOTA models but don't have API Keys for OpenAI/Anthropic/Google Gemini:

```cmd
# Login to Ollama (follow on-screen instructions to connect device)
ollama signin

# Pull Google Gemini 3 Flash cloud model
ollama pull gemini-3-flash-preview:cloud
```

> 💡 **Tip**: Cloud models have usage limits, do not use them too frequently. See [Model Guide & Deployment](docs/what-model-en.md) for details.

---

## 3️⃣ OpenClaw Installation

Note: If you have installed Ollama v0.17.0+, it will automatically install OpenClaw for you. Please skip this step and go straight to the **Initial Configuration** section.

Open Command Prompt as a **Regular User**:

### Install OpenClaw

> ⚠️ **IMPORTANT! IMPORTANT! IMPORTANT!** (Saying it three times because it's important)  
> You MUST use Command Prompt as a **Regular User** to install OpenClaw!  
> Installing as Administrator may cause Telegram to fail to respond properly.

Open Command Prompt as a **Regular User**:

```cmd
curl -fsSL https://openclaw.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

This command will automatically install Node.js and npm, and enter OpenClaw's Onboarding mode (initial welcome setup screen).

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

Choose skip for now, we will configure it later:

```
Model/auth provider
> Skip for now

Filter models by provider
> All providers

Default model
> Enter model manually 

# Enter the model name mentioned above, e.g., ollama/glm-4.7-flash
```

#### 4. Channel Configuration (Optional)

Here you can choose **Skip for now**, or configure Telegram directly. Assuming we are configuring:

```
Select channel (QuickStart)
> ● Telegram (Bot API) (not configured)

Enter Telegram bot token
>>> 1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 💡 How to get a Token? Please refer to [Telegram Bot Setup](#telegram-bot-setup)

#### 5. Skills Store

```
Configure skills now? (recommended)
> No
```

> ⚠️ Windows cannot install Brew, and the skills store requires Brew, so choose No for now.


#### 6. Enable Hooks (if prompted)

```
Enable hooks?
> [+] 🚀 boot-md (Run BOOT.md on gateway startup)
> [+] 📎 bootstrap-extra-files (Inject additional workspace bootstrap files via glob/path patterns)
> [+] 📝 command-logger (Log all command events to a centralized audit file)
> [+] 💾 session-memory (Save session context to memory when /new or /reset command is issued)
```

Press the **Spacebar** to select all three items, then press **Enter**.

#### 7. Record Web UI Info

After installation, it will display:

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

> ⚠️ Windows cannot use zsh, so choose No for now.

### 9. Start Gateway Service

At this time, OpenClaw will open the browser and enter the Gateway Dashboard. If the Gateway Service is not running, the content will not display properly. Please press Ctrl+C to stop the OpenClaw window first, then:

Open Command Prompt as **Administrator**:

```cmd
openclaw gateway install
```

At this point, the OpenClaw Gateway Service will be installed and started, and it will run automatically upon Windows startup.

### 10. Configure OpenClaw to use Ollama

**Ollama v0.15.3+ New Feature**: You can configure OpenClaw's Ollama settings to make it use the local model.

Since the Ollama local model hasn't been applied yet, please close the Gateway window (if it appears) by pressing Ctrl+C, then enter:

```
ollama launch openclaw
```

After setting up the model, this screen will appear, answer `yes` to continue:
```
This will modify your OpenClaw configuration:
  C:\Users\<your username>\.openclaw\openclaw.json
Backups will be saved to C:\Users\<your username>\AppData\Local\Temp\ollama-backups/

Proceed? (y/n) yes
```

> 💡 **Recommendation**: After executing this, restart your computer first to ensure the Gateway Service boots up properly automatically.


> 📝 **Changing models later**: Please refer to the **Useful Tips** below.


#### 11. Test Gateway

After restarting, verify that the Gateway Service is running (if not, just run `ollama launch openclaw`), then open your browser and visit:

```
http://127.0.0.1:18789/?token=xxxxxxxxxx
```

Enter any message in the Chat UI, Ollama will load the model in the background and respond.

✅ **If the AI replies normally, basic setup is complete!**


---

## 4️⃣ Advanced Configuration

### Telegram Bot Setup

#### Create a Telegram Bot

1. Search for and add **@BotFather** in Telegram.

2. Send the command `/newbot`, follow prompts to set a bot name.
   - Example: `openclaw-bot` (change if taken)

3. **BotFather** will reply:

```
Done. Congratulations on your new bot...

Use this token to access the HTTP API:
1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 🔑 **Keep this Token safe**, you'll need it for configuration later!

### Pair Telegram Channel

1. Open the bot channel on Telegram on your phone, see if there's the following message (If not, send a random message).

```
OpenClaw: access not configured.

Your Telegram user id: 1234567890
Pairing code: abcdefgh
```

2. Run the pairing command on your PC:

```cmd
openclaw pairing approve telegram abcdefgh
```

(Replace `abcdefgh` with your pairing code)

3. Send a message again to test.

✅ **The Bot should reply normally now!** 🎉

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

> 💡 This requires a Brave API Key (can be applied separately), choose No for now.

```
Enable web_fetch (keyless HTTP fetch)?
> ● Yes / ○ No
```

---

## 🗑️ Complete Removal Guide

If you need to completely remove OpenClaw / Moltbot / Clawdbot:

### Open PowerShell as Administrator

```powershell
# Complete removal (including all data)
openclaw uninstall --all --yes --non-interactive
# OR
moltbot uninstall --all --yes --non-interactive
# OR
clawdbot uninstall --all --yes --non-interactive

# Remove npm packages
npm uninstall -g openclaw
# OR
npm uninstall -g moltbot
# OR
npm uninstall -g clawdbot
```

---

## 📄 Configuration File Reference

### File Path

```
%USERPROFILE%\.openclaw\openclaw.json
```

### Example Configuration

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
| `openclaw config` | Enter configuration UI |
| `openclaw models list` | View list of currently configured models |
| `openclaw gateway install` | Install Gateway service |
| `openclaw gateway start` | Start Gateway service |
| `openclaw pairing approve telegram <code>` | Pair Telegram channel |
| `openclaw security audit --deep` | Deep security audit |
| `openclaw uninstall --all` | Complete removal |

---

## 💡 Useful Tips

### Prevent Ollama from automatically unloading models

Add to your environment variables:

```
OLLAMA_KEEP_ALIVE=-1
```

This prevents Ollama from automatically unloading models after 5 minutes of inactivity, speeding up subsequent conversations.


### Configure Ollama for parallel requests

If you need OpenClaw's advanced applications like Multi-Agents or Multi-Sessions, you need multiple concurrent LLM calls. Therefore, you must increase Ollama's parallel requests number:

Add to your environment variables:
```
OLLAMA_NUM_PARALLEL=4
```
> The default value is 1, max is 4

Note: Increasing the Parallel Requests Number will also increase GPU VRAM consumption.


### Adjust Ollama's Context Length

Ollama's default Context Length is 4096, which is too small for OpenClaw. It's recommended to increase it to 16384 or more (Note: Increasing Context Size also increases GPU VRAM consumption).

```
OLLAMA_CONTEXT_LENGTH=32768
```


### Update Ollama Model Configuration (not required for v0.17.0+)

If you need to change Ollama models:

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

- [👍 Complete WSL2 Installation Guide](docs/wsl2-guide-en.md)
- [🔄 Migrating from Windows to WSL2](docs/migration-guide-en.md)
- [🤔 Why do we need WSL2?](docs/why-wsl2-en.md)
- [🧠 Deployment & Field Experience Guide: Which Model to Pick?](docs/what-model-en.md)

- [🦙 Ollama Website](https://ollama.com/)
- [🦞 OpenClaw Website](https://openclaw.ai/)
- [🦞 OpenClaw Docs - Ollama Settings](https://docs.openclaw.ai/providers/ollama)
- [🤖 Telegram BotFather](https://t.me/BotFather)

---

## 💬 Community Support

Facing issues? Feel free to open an issue on our [GitHub Issues](https://github.com/anomixer/openclaw-setup/issues) page!

---

## 📝 Changelog

### 2026-03-06
- 🔄 Updated `OLLAMA_NUM_PARALLEL` instructions
- 🦞 Ollama can handle multiple lobsters concurrently now

### 2026-02-27
- 🔄 Updated instructions for Ollama v0.17.0+ auto-installing OpenClaw
- 🦞 Ollama is more tightly coupled with the lobster now

### 2026-02-13
- 🔄 Sync update for README-EN.md
- 📅 All file dates updated to 2026-02-13
- 🦞 The lobster is eternal

### 2026-02-05
- 🚀 Switched to `cmd` quick install command, automating Node.js and npm installation
- 🆕 Support for the latest OpenClaw 2026.2.5+
- 📋 Rebuilt TOC and updated translation in `README-EN.md`

### 2026-02-02
- 🔄 Updated to Ollama v0.15.4+
- ✨ Added `ollama launch openclaw` pre-configuration feature
- 📖 Restructured docs to improve readability
- ⚠️ Emphasized the requirement to install as a regular user

### 2026-01-30
- 🦞 Repo renamed to openclaw-setup
- 🌍 Added English README
- 💬 Added murmur.md rant file

---

**Last Updated**: 2026-02-27

**Originally by anomixer**  

**Clawdbot → Moltbot → OpenClaw**
