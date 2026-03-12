# Complete WSL2 Installation Guide

**[中文版](wsl2-guide.md) | English**

> This is a complete guide to installing OpenClaw + Ollama from scratch in WSL2.

> If your operating system is Ubuntu / macOS, you can start directly from step 2.

> If you have already installed in a native Windows environment, please read this first: **[`migration-guide-en.md`](migration-guide-en.md)**.

---

## Table of Contents

1. [Install WSL2 (Start here if you use Windows 10/11)](#1-install-wsl2-start-here-if-you-use-windows-1011)
   - [1.1 Enable WSL2](#11-enable-wsl2)
   - [1.2 Initial Installation and Starting Ubuntu](#12-initial-installation-and-starting-ubuntu)
   - [1.3 Enable systemd (Required)](#13-enable-systemd-required)
   - [1.4 Switch to MCDM Mode for Data Center Cards (Optional)](#14-switch-to-mcdm-mode-for-data-center-cards-optional)
   - [1.5 Install CUDA Driver for WSL Ubuntu (Required)](#15-install-cuda-driver-for-wsl-ubuntu-required)
2. [Install Ollama (Start here if you use Linux or macOS)](#2-install-ollama-start-here-if-you-use-linux-or-macos)
   - [2.1 Install Ollama](#21-install-ollama-install-inside-ubuntu-wsl--linux-not-under-windows)
   - [2.2 Start Ollama Service](#22-start-ollama-service)
   - [2.3 Verify Installation](#23-verify-installation)
   - [2.4 Pull Models](#24-pull-models)
3. [Install OpenClaw](#3-install-openclaw)
   - [3.1 Re-install nvm and node.js v24](#31-re-install-nvm-and-nodejs-v24-recommended-for-new-openclaw)
   - [3.2 Install OpenClaw CLI](#32-install-openclaw-cli)
   - [3.3 Initial Onboarding](#33-initial-onboarding)
   - [3.4 Configure OpenClaw to use Ollama](#34-configure-openclaw-to-use-ollama)
4. [Advanced Configuration](#4-advanced-configuration)
   - [4.1 Install Skills](#41-install-skills)
   - [4.2 Memory Feature](#42-memory-feature)
   - [4.3 Telegram Bot Setup](#43-telegram-bot-setup)
   - [4.4 Pair Telegram Channel](#44-pair-telegram-channel)
   - [4.5 Other Advanced Settings (Optional)](#45-other-advanced-settings-optional)
5. [🗑️ Complete Removal Guide](#5-️-complete-removal-guide)
6. [📄 Configuration File Reference](#6--configuration-file-reference)
7. [🎯 Quick Reference](#7--quick-reference)
8. [💡 Useful Tips](#8--useful-tips)
9. [📚 Related Links](#9--related-links)
10. [💬 Community Support](#10--community-support)
11. [📝 Changelog](#11--changelog)

---

A complete step-by-step installation guide for Windows (WSL version) to quickly set up OpenClaw and a local LLM (Ollama).

> ⚠️ **Version Requirements**: Ollama v0.15.4+ and OpenClaw 2026.2.5+

## 1. Install WSL2 (Start here if you use Windows 10/11)

### 1.1 Enable WSL2

Open Command Prompt as a **Regular User**:

```cmd
# Install WSL2 and enable virtual environment
wsl --install
wsl --update
```

Follow the prompts to **restart your computer**.

### 1.2 Initial Installation and Starting Ubuntu

After restarting, open Command Prompt as a **Regular User**:

```cmd
# Install Ubuntu 24.04
wsl --install -d Ubuntu-24.04
```

Follow the prompts to configure:

- Username (Recommended to match Windows, entirely personal preference)
- Password (Needed later for sudo)


### 1.3 Enable systemd (Required)

> ⚠️ Mandatory Action: OpenClaw Gateway requires systemd to run as a background service.

Run in your Ubuntu WSL terminal:

```bash
cd ~
sudo tee /etc/wsl.conf >/dev/null <<'EOF'
[boot]
systemd=true
EOF
```

(If prompted with `[sudo] password for user:`, enter the password you created earlier, and do the same whenever you encounter it).

Return to Windows Command Prompt and close WSL:

```cmd
exit
wsl --shutdown
```

Start Ubuntu again (run `wsl` in Command Prompt) and verify systemd has started:

```bash
systemctl --version
```

If you see version information, it's OK.


### 1.4 Switch to MCDM Mode for Data Center Cards (Optional)

⚠️ Important: If your graphics card is a GeForce, Quadro, or similar VGA Controller with a built-in cooling fan (with display port functionality enabled by default ex-factory), you can skip this step.

⚠️ If your graphics card is a Data Center-specific version like L2, L4, L40, RTX 6000 Blackwell Server Edition (these "accelerator cards" typically have passive fanless designs, with display ports disabled ex-factory, operating in 3D Controller mode optimized for server environments). Under Windows, the NVIDIA Driver runs in TCC (Tesla Compute Cluster) mode by default. This mode prevents the Ubuntu WSL environment from accessing the accelerator card, so it must be switched to MCDM (Microsoft Compute Driver Model) mode to function properly.

Run Command Prompt as **Administrator**, then enter:

```cmd
# Switch L4 to MCDM mode (-g 0 is the GPU ID, -dm 2 is MCDM)
nvidia-smi -g 0 -dm 2
```

After switching, a system restart is required.

To verify if the switch was successful, simply run `nvidia-smi` in the Command Prompt and check if the Driver-Model displays as MCDM.


> If you no longer need it, use the following command to switch back to TCC mode:

```cmd
# Switch GPU 0 back to TCC mode (-dm 1 is TCC)
nvidia-smi -g 0 -dm 1
```

### 1.5 Install CUDA Driver for WSL Ubuntu (Required)

> ⚠️ Mandatory Action: The Linux environment under Ubuntu WSL also requires an NVIDIA Driver to access the graphics card resources on the Windows Host.

First, go to the [NVIDIA CUDA Toolkit](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&Distribution=WSL-Ubuntu&target_version=2.0&target_type=deb_local) website and get the latest CUDA installation instructions for WSL-Ubuntu. For Installer Type, choosing deb (local) is recommended.

Taking CUDA Toolkit 13.1 Update 1 as an example, you need to run the following commands sequentially in WSL to install:
```bash
cd ~
wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-wsl-ubuntu.pin
sudo mv cuda-wsl-ubuntu.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/13.1.1/local_installers/cuda-repo-wsl-ubuntu-13-1-local_13.1.1-1_amd64.deb
sudo dpkg -i cuda-repo-wsl-ubuntu-13-1-local_13.1.1-1_amd64.deb
sudo cp /var/cuda-repo-wsl-ubuntu-13-1-local/cuda-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install cuda-toolkit-13-1
```

After installing the CUDA Toolkit, remember to configure two environment variables. Open `~/.bashrc` using nano:

```bash
nano ~/.bashrc
```

Add the following content at the very end:

```
export PATH="$PATH:/usr/local/cuda/bin:$HOME/.npm-global:$HOME/node_modules/.bin"
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/local/cuda/lib64"
```

> Note: The node and npm paths have been added automatically above so they can be used later when installing OpenClaw.

After editing, press `Ctrl+X`, `Y`, and `Enter` to save the file.

Next, type `exit` to leave WSL, then run `wsl` to restart Ubuntu, and type the following commands to verify CUDA and the Driver are functioning correctly:

```bash
# Check if nvcc runs
nvcc -V
# Check if nvidia-smi functions properly
nvidia-smi
```

> Note: Are you feeling tired by now? Didn't expect the WSL version to be this complicated, right? 😂😂😂

---

## 2. Install Ollama (Start here if you use Linux or macOS)

### 2.1 Install Ollama (Install inside Ubuntu WSL / Linux, not under Windows)

After confirming that the GPU driver and Compute library are properly installed, please open your Linux Terminal and input:

```bash
cd ~
sudo apt install zstd
curl -fsSL https://ollama.com/install.sh | sh
```


### 2.2 Start Ollama Service

After installation, Ollama will automatically start its service. If it doesn't, you can run the following commands to start it:

```bash
sudo systemctl enable ollama
sudo systemctl start ollama
```


### 2.3 Verify Installation

```bash
ollama -v
```


### 2.4 Pull Models

Refer to the instructions in the main README and choose based on your graphics card's VRAM capacity:

**Option A: GLM 4.7 Flash (Recommended, 20GB+ VRAM)**

```bash
ollama pull glm-4.7-flash
```

**Option B: Ministral 3:8b (Lightweight, 8GB+ VRAM)**

```bash
ollama pull ministral-3:8b
```

---

## 3. Install OpenClaw

Note: If you installed Ollama v0.17.0+, this version will automatically install OpenClaw for you. Please jump directly to the **3.3 Initial Onboarding** section.

### 3.1 Re-install nvm and node.js v24 (Recommended for new OpenClaw)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm install 24
nvm use 24
```

### 3.2 Install OpenClaw CLI

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

If the official installation script fails, please install directly using npm:

```bash
npm install openclaw@latest
```

### 3.3 Initial Onboarding

After installing OpenClaw, it will automatically enter Onboard mode. If it doesn't, execute the following command:

```bash
openclaw onboard
```

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

Choose to skip for now, we will configure this later:

```
Model/auth provider
> Skip for now

Filter models by provider
> All providers

Default model
> Enter model manually 

# Input the model name you downloaded earlier, e.g.: ollama/glm-4.7-flash
```

#### 4. Channel Configuration (Optional)

You can select **Skip for now**, or configure Telegram immediately. Assuming we are doing the configuration:

```
Select channel (QuickStart)
> ● Telegram (Bot API) (not configured)

Enter Telegram bot token
>>> 1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 💡 How to obtain a Token? Refer to [Telegram Bot Setup](#43-telegram-bot-setup).

#### 5. Skills Store

Select Yes first, then Skip for now. For the API Key sections later, choose No for all of them.

```
Configure skills now? (recommended)
> Yes

Install missing skill dependencies
> ◼ Skip for now (Continue without installing dependencies)

Set GOOGLE_PLACES_API_KEY for goplaces?
> No

Set GOOGLE_PLACES_API_KEY for local-places?
> No

Set GEMINI_API_KEY for nano-banana-pro?
> No

Set NOTION_API_KEY for notion?
> No

Set OPENAI_API_KEY for openai-image-gen?
> No

Set OPENAI_API_KEY for openai-whisper-api?
> No

Set ELEVENLABS_API_KEY for sag?
> No
```


#### 6. Enable Hooks (if prompted)

```
Enable hooks?
> [+] 🚀 boot-md (Run BOOT.md on gateway startup)
> [+] 📎 bootstrap-extra-files (Inject additional workspace bootstrap files via glob/path patterns)
> [+] 📝 command-logger (Log all command events to a centralized audit file)
> [+] 💾 session-memory (Save session context to memory when /new or /reset command is issued)
```

Press the **Spacebar** to select all three items, then press **Enter**.


#### 7. Record Web UI Information

It will display the following after installation completes:

```
Control UI:
  Web UI: http://127.0.0.1:18789/
  Web UI (with token): http://127.0.0.1:18789/?token=xxxxxxxxxx
  Gateway WS: ws://127.0.0.1:18789
  Gateway: reachable
```

> 🔑 **Important**: Remember the URL with the token!

#### 8. Install Shell / Hatch Bot (if prompted)

```
Enable bash shell completion for openclaw?
> Yes
```

How to hatch your bot, TUI is recommended.

```
How do you want to hatch your bot?
> ● Hatch in TUI (recommended)
```

### 3.4 Configure OpenClaw to use Ollama

At this time, OpenClaw will hatch the bot. Press Ctrl+C a few times to stop it. Exit WSL (type `exit`), then re-enter WSL (type `wsl`), and OpenClaw will finally be ready to use.

```
# First stop the OpenClaw Gateway service
systemctl --user stop openclaw-gateway.service
```

#### Letting Ollama apply the local model to run OpenClaw

**Ollama v0.15.3+ New Feature**: You can configure OpenClaw's Ollama settings so it automatically applies the local model.

```
ollama launch openclaw
```

Select your Model:

```
Select models for OpenClaw: Type to filter...

  Recommended
  ▸ [x] glm-4.7-flash (default)
      Reasoning and code generation locally
    [ ] qwen3:8b
      Efficient all-purpose assistant, ~11GB, (not downloaded)
    [ ] minimax-m2.5:cloud
      Fast, efficient coding and real-world productivity, (not downloaded)
    [ ] glm-5:cloud
      Reasoning and code generation, (not downloaded)
    [ ] kimi-k2.5:cloud
      Multimodal reasoning with subagents, (not downloaded)

  1 selected - press enter to continue

↑/↓ navigate • space toggle • enter confirm • esc cancel
```

After configuring the model, OpenClaw is officially ready. You can now communicate with it through IMs like Telegram.

✅ **If the AI replies normally, the basic setup is complete!**

> 📝 **Change models in the future**: Refer to **Useful Tips** section below.


> 💡 **Recommendation**: Restart your computer after executing this to verify the Gateway Service launches smoothly upon startup.

---

## 4. Advanced Configuration

### 4.1 Install Skills

Since you are now inside Linux (WSL2), most skills should be fully supported.

Standard workflow:

```bash
# Search for skills
clawhub search

# Install
clawhub install <skill-name>

# Check
openclaw doctor
```

If you need Homebrew-based skills, you can do this:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Add to PATH
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

brew --version
```

### 4.2 Memory Feature

In WSL2, the memory subsystem should be operational:

```bash
openclaw memory status
```

In case of issues, you can rebuild it:

```bash
openclaw memory rebuild
```

---

### 4.3 Telegram Bot Setup

#### Create a Telegram Bot

1. Search for and join **@BotFather** on Telegram.

2. Send the `/newbot` command and follow the prompts to configure a bot name.
   - For example: `openclaw-bot` (change if the name is occupied).

3. **BotFather** will reply:

```
Done. Congratulations on your new bot...

Use this token to access the HTTP API:
1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 🔑 **Save this Token**, you'll need it for setup later!

### 4.4 Pair Telegram Channel

1. Enter your bot's chat channel on the mobile Telegram app to check if there is the following message (if not, send any arbitrary message)

```
OpenClaw: access not configured.

Your Telegram user id: 1234567890
Pairing code: abcdefgh
```

2. Enter WSL on your PC and run the pairing command:

```cmd
openclaw pairing approve telegram abcdefgh
```

(Replace `abcdefgh` with your pairing code)

3. Send another message to test.

✅ **The Bot should now reply normally!** 🎉

### 4.5 Other Advanced Settings (Optional)

Open WSL as a regular user:

```bash
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

## 5. 🗑️ Complete Removal Guide

If you need to completely remove OpenClaw / Moltbot / Clawdbot:

### Enter WSL

```bash
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

## 6. 📄 Configuration File Reference

### File Path

```
~/.openclaw/openclaw.json
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
            "contextWindow": 32768,
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
      "workspace": "/home/user/.openclaw/workspace",
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

## 7. 🎯 Quick Reference

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

## 8. 💡 Useful Tips

### 8.1 Prevent Ollama from automatically unloading models

By default, Ollama automatically unloads models after 5 minutes of inactivity. To increase response speed for the next conversation, it's recommended to set it to never unload.

#### Linux (Systemd):

Run:

```
sudo nano /etc/systemd/system/ollama.service
```

Add the following to the `[Service]` section:

```
Environment="OLLAMA_KEEP_ALIVE=-1"
```

Reload and restart:

```
sudo systemctl daemon-reload
sudo systemctl restart ollama
```

#### macOS:

Run via terminal::
```
launchctl setenv OLLAMA_KEEP_ALIVE "-1"
```

Then restart the Ollama application. 


### 8.2 Configure Ollama for parallel requests

If you need OpenClaw's advanced applications like Multi-Agents or Multi-Sessions, you will need multiple concurrent LLM calls. Therefore, you must increase Ollama's parallel requests number:

```
OLLAMA_NUM_PARALLEL=1 (Default value)
OLLAMA_NUM_PARALLEL=4 (Maximum value)
```

Please refer to section 8.1 and add the following to the `[Service]` section of `/etc/systemd/system/ollama.service`:

```
Environment="OLLAMA_NUM_PARALLEL=4"
```

For macOS users, run this in your terminal:
```
launchctl setenv OLLAMA_NUM_PARALLEL "4"
```

Note: Increasing the Parallel Requests Number will also increase GPU VRAM consumption.


### 8.3 Adjust Ollama's Context Length

Ollama's default Context Length is 4096, which is too small for OpenClaw. It's recommended to adjust it to 16384~32768 or higher (Note: Increasing Context Size also increases GPU VRAM consumption). You can use the following commands to modify the model.

```
# Launch Ollama and load the model
ollama run glm-4.7-flash:latest

# Set context length (16384 or 32768 recommended)
>>> /set parameter num_ctx 32768

# Save the new model, you can reuse the old model name (glm-4.7-flash:latest) to overwrite directly
>>> /save <model name>

# Exit Ollama
>>> /bye
```

Verify if the Context Size has updated:

```
# Launch Ollama and load the model again
ollama run glm-4.7-flash:latest

# Exit Ollama
>>> /bye

# Check Ollama's loaded processes
ollama ps

NAME                    ID              SIZE     PROCESSOR    CONTEXT    UNTIL
glm-4.7-flash:latest    baa9f0d690c1    22 GB    100% GPU     32768      Forever
```

Just pay attention to the CONTEXT and UNTIL columns.


### 8.4 Update Ollama Model Configuration (not required for v0.17.0+)

If you need to switch Ollama models:

1. Delete the Ollama config file:

   ```bash
   rm ~/.ollama/config/config.json
   ```

2. Re-run configuration:

   ```cmd
   ollama launch openclaw
   ```

---

## 9. 📚 Related Links

- [👍 Basic Windows Installation Guide](../README-EN.md)
- [🔄 Migrating from Windows to WSL2](migration-guide-en.md)
- [🤔 Why do we need WSL2?](why-wsl2-en.md)
- [🧠 Deployment & Field Experience Guide: Which Model to Pick?](what-model-en.md)

- [🦙 Ollama Website](https://ollama.com/)
- [🦞 OpenClaw Website](https://openclaw.ai/)
- [🦞 OpenClaw Docs - Ollama Settings](https://docs.openclaw.ai/providers/ollama)
- [🤖 Telegram BotFather](https://t.me/BotFather)

---

## 10. 💬 Community Support

Facing issues? Feel free to open an issue on our [GitHub Issues](https://github.com/anomixer/openclaw-setup/issues) page!

---

## 11. 📝 Changelog

### 2026-03-06
- 🔄 Updated `OLLAMA_NUM_PARALLEL` instructions
- 🦞 Ollama can handle multiple lobsters concurrently now

### 2026-02-27
- 🔄 Updated instructions for Ollama v0.17.0+ auto-installing OpenClaw
- 🦞 Ollama is more tightly coupled with the lobster now

### 2026-02-21
- 🚀 Updated Node.js installation instructions
- 🆕 Support for the latest Ollama 0.16.1+ and OpenClaw 2026.2.21+

### 2026-02-13
- 🚀 Updated WSL installation instructions
- 🆕 Support for the latest Ollama 0.15.6+ and OpenClaw 2026.2.12+

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

## 9. Related Links

- [Main README](../README-EN.md) - Native Windows tutorial
- [Why do we need WSL2?](why-wsl2-en.md) - Technical background
- [Migrating from Windows to WSL2](migration-guide-en.md)
- [Official WSL2 Documentation](https://learn.microsoft.com/windows/wsl/)

---

**Last Updated**: 2026-03-06

**Originally by anomixer**  

**Clawdbot → Moltbot → OpenClaw**
