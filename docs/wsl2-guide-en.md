# WSL2 Complete Installation Guide

**[中文版](wsl2-guide.md) | English**

> This is a complete guide for installing OpenClaw + Ollama on WSL2 from scratch.

> If your OS is Ubuntu / macOS, you can start directly from Step 2.

> If you've already installed on native Windows, please prioritize reading: **`docs/migration-guide-en.md`**.

---

## Table of Contents

1. [Install WSL2](#1-install-wsl2)  
2. [Install Ollama](#2-install-ollama)  
3. [Install OpenClaw](#3-install-openclaw)  
4. [Configure Gateway](#4-configure-gateway)  
5. [Test and Verify](#5-test-and-verify)  
6. [Advanced Configuration](#6-advanced-configuration)  
7. [FAQ](#7-faq)

---

Quick installation guide for OpenClaw with local LLM (Ollama) on Windows (WSL version).

> ⚠️ **Version Requirements**: Ollama v0.15.4+ and OpenClaw 2026.2.5+

## 1. Install WSL2 (If using Windows 10/11, start here)

### 1.1 Enable WSL2

Open Command Prompt **as regular user**:

```cmd
# Install WSL2 and enable virtual environment
wsl --install
wsl --update
```

Follow prompts to **restart your computer**.

### 1.2 First Installation and Launch Ubuntu

After reboot, open Command Prompt **as regular user**:

```cmd
# Install Ubuntu 24.04
wsl --install -d Ubuntu-24.04
```

Follow prompts to set:

- Username (suggested to match Windows, personal preference)
- Password (needed for sudo later)


### 1.3 Enable systemd (Required)

> ⚠️ Required step: OpenClaw Gateway needs systemd to run as a service.

In Ubuntu WSL terminal:

```bash
cd ~
sudo tee /etc/wsl.conf >/dev/null <<'EOF'
[boot]
systemd=true
EOF
```

(If prompted `[sudo] password for user:` enter the password you set above, same for future prompts)

Back to Windows Command Prompt, close WSL:

```cmd
exit
wsl --shutdown
```

Open Ubuntu again (in Command Prompt, run `wsl`), and verify systemd is running:


```bash
systemctl --version
```

Seeing version info means OK.


### 1.4 Switch to MCDM Mode for Data Center Cards (Optional)

⚠️ Important: If your GPU is GeForce, Quadro etc. "consumer cards with fans" (with display ports enabled by default), skip this step.

⚠️ If your GPU is L2, L4, L40, RTX 6000 Blackwell Server Edition etc. Data Center specific versions (these "accelerator cards" have no fans, default as 3D Controller mode with display ports disabled, suitable for server environments). In Windows, NVIDIA Driver defaults to TCC (Tesla Compute Cluster) mode, which prevents Ubuntu WSL from accessing the card. You must switch to MCDM (Microsoft Compute Driver Model) mode.

Run Command Prompt **as Administrator**:

```cmd
# Switch L4 to MCDM mode (-g 0 is GPU number, -dm 2 means MCDM)
nvidia-smi -g 0 -dm 2
```

After switching, restart is required.

To verify success, run `nvidia-smi` in Command Prompt and check if Driver-Model shows MCDM.


> To switch back to TCC mode later:

```cmd
# Switch GPU 0 back to TCC mode (-dm 1 means TCC)
nvidia-smi -g 0 -dm 1
```

### 1.5 Install CUDA Driver for WSL Ubuntu (Required)

> ⚠️ Required step: Ubuntu WSL also needs NVIDIA Driver installed to access Host Windows GPU resources.

Visit [NVIDIA CUDA Toolkit](https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/) to get the latest WSL-Ubuntu CUDA installation guide. Installer Type is recommended as deb (local).

For CUDA Toolkit 13.1 Update 1 example, run these commands in WSL:
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

After installing CUDA Toolkit, remember to set two environment variables. Use nano to edit `~/.bashrc`:

```bash
nano ~/.bashrc
```

Add to the last line:

```
export PATH="$PATH:/usr/local/cuda/bin:$HOME/.npm-global:$HOME/node_modules/.bin"
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/local/cuda/lib64"
```

> Note: The path above prepares for node and npm, which will be used later when installing OpenClaw.

After editing, press `Ctrl+X`, `Y`, `Enter` to save.

Then type `exit` to leave WSL, run `wsl` to start Ubuntu, enter these commands to verify CUDA and Driver work properly:

```bash
# Check if nvcc runs
nvcc -V
# Check if nvidia-smi works properly
nvidia-smi
```

> Note: Tired at this point? Feeling WSL version isn't that simple? 😂😂😂

---

## 2. Install Ollama (If using Linux or macOS, start directly here)

### 2.1 Install Ollama (Install in Ubuntu WSL / Linux, not in Windows)

After confirming GPU driver and Compute libraries are installed, open Linux Terminal and enter:

```bash
cd ~
sudo apt install zstd
curl -fsSL https://ollama.com/install.sh | sh
```


### 2.2 Start Ollama Service

After Ollama installation completes, the service auto-enables. If not, run these commands:

```bash
sudo systemctl enable ollama
sudo systemctl start ollama
```


### 2.3 Verify Installation

```bash
ollama -v
```


### 2.4 Pull Model

Refer to main README, choose one based on your GPU VRAM:

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

### 3.1 First install nvm and node.js v24 (Recommended for new OpenClaw version)

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

If the official installation script fails, please use npm install to install directly:

```bash
npm install openclaw@latest
```

### 3.3 Initial Onboard

After OpenClaw installation, it auto-enters Onboard mode. If not, run:

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

#### 3. Configure Model/Auth Provider

Choose to skip first, configure later:

```
Model/auth provider
> Skip for now

Filter models by provider
> All providers

Default model
> Enter model manually 

# Enter model name from above, e.g.: ollama/glm-4.7-flash
```

#### 4. Channel Configuration (Optional)

You can choose **Skip for now** here, or directly configure Telegram. Example with configuration:

```
Select channel (QuickStart)
> ● Telegram (Bot API) (not configured)

Enter Telegram bot token
>>> 1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 💡 How to get Token? See [Telegram Bot Setup](#telegram-bot-setup)

#### 5. Skills Store

Choose Yes first, then Skip for now, then choose No for all API Key sections.

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


#### 6. Enable Hooks (if appears)


```
Enable hooks?
> [+] 🚀 boot-md (Run BOOT.md on gateway startup)
> [+] 📝 command-logger (Log all command events to a centralized audit file)
> [+] 💾 session-memory (Save session context to memory when /new command is issued)
```

Press **Space** to select all three, then press **Enter**.


#### 7. Record Web UI Info

After installation:

```
Control UI:
  Web UI: http://127.0.0.1:18789/
  Web UI (with token): http://127.0.0.1:18789/?token=xxxxxxxxxx
  Gateway WS: ws://127.0.0.1:18789
  Gateway: reachable
```

> 🔑 **Important**: Remember the URL with token!

#### 8. Install Shell / Hatch Bot (if appears)

```
Enable bash shell completion for openclaw?
> Yes
```

For hatching your bot, TUI is recommended.

```
How do you want to hatch your bot?
> ● Hatch in TUI (recommended)
```

### 9. Configure OpenClaw to Use Ollama

At this point, OpenClaw will hatch the bot. Press Ctrl+C several times to stop, exit WSL (type `exit`), then enter WSL again (type `wsl`). Now OpenClaw is ready to use.

```
# First stop OpenClaw Gateway service
systemctl --user stop openclaw-gateway.service
```

#### Let Ollama Apply Local Model to Run OpenClaw

**Ollama v0.15.3+ New Feature**: Can configure OpenClaw's Ollama settings to apply local model.

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

After configuring the model, OpenClaw is ready to use. You can now chat with OpenClaw through Telegram and other IMs.

✅ **If AI responds normally, basic setup is complete!**

> 📝 **To change model later**: See **Practical Tips** below.


> 💡 **Suggestion**: After completion, restart your computer to ensure Gateway Service auto-starts properly on boot.

---

## 4. Advanced Configuration

### 4.1 Install Skills

Now you're inside Linux (WSL2), so most skills should be recognized as available.

Common process:

```bash
# Find skills
clawhub search

# Install
clawhub install <skill-name>

# Check
openclaw doctor
```

If you need Homebrew version skills, you can choose:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Add to PATH
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

brew --version
```

### 4.2 Memory Feature

In WSL2, the memory subsystem should work normally:

```bash
openclaw memory status
```

If there are issues, you can rebuild:

```bash
openclaw memory rebuild
```

---

## 4️⃣ Advanced Configuration

### Telegram Bot Setup

#### Create Telegram Bot

1. Search and add **@BotFather** on Telegram

2. Send command `/newbot`, follow prompts to set bot name
   - Example: `openclaw-bot` (change if name is taken)

3. **BotFather** will reply:

```
Done. Congratulations on your new bot...

Use this token to access the HTTP API:
1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789
```

> 🔑 **Remember this Token**, you'll need it for configuration!

### Pair Telegram Channel

1. In mobile Telegram bot channel, check for this message (if not, send any message)

```
OpenClaw: access not configured.

Your Telegram user id: 1234567890
Pairing code: abcdefgh
```

2. On computer, enter WSL and run pairing command:

```cmd
openclaw pairing approve telegram abcdefgh
```

(Replace `abcdefgh` with your pairing code)

3. Send message again to test

✅ **Bot should respond normally now!** 🎉

### Other Advanced Settings (Optional)

Open WSL as regular user:

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

> 💡 Requires Brave API Key (can apply separately), choose No for now

```
Enable web_fetch (keyless HTTP fetch)?
> ● Yes / ○ No
```

---

## 🗑️ Complete Removal Guide

To completely remove OpenClaw / Moltbot / Clawdbot:

### Enter WSL

```bash
# Complete removal (including all data)
openclaw uninstall --all --yes --non-interactive
# Or
moltbot uninstall --all --yes --non-interactive
# Or
clawdbot uninstall --all --yes --non-interactive

# Remove npm package
npm uninstall -g openclaw
# Or
npm uninstall -g moltbot
# Or
npm uninstall -g clawdbot
```

---

## 📄 Configuration File Reference

### File Path

```
~/.openclaw/openclaw.json
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

## 🎯 Quick Reference

| Command | Purpose |
|---------|---------|
| `ollama --version` | Check Ollama version |
| `ollama pull <model>` | Pull model |
| `ollama launch openclaw` | Configure OpenClaw to use Ollama |
| `openclaw config` | Enter configuration interface |
| `openclaw models list` | View currently configured model list |
| `openclaw gateway install` | Install Gateway service |
| `openclaw gateway start` | Start Gateway service |
| `openclaw pairing approve telegram <code>` | Pair Telegram channel |
| `openclaw security audit --deep` | Deep security check |
| `openclaw uninstall --all` | Complete removal |

---

## 💡 Practical Tips

### 1. Prevent Ollama from Auto-unloading Models

Ollama defaults to unload models after 5 minutes of inactivity. To improve next conversation speed, set to never unload.

#### Linux (Systemd):

Run

```
sudo nano /etc/systemd/system/ollama.service
```

Add in [Service] section:

```
Environment="OLLAMA_KEEP_ALIVE=-1"
```

Reload and restart:

```
sudo systemctl daemon-reload
sudo systemctl restart ollama
```

#### macOS:

In terminal:
```
launchctl setenv OLLAMA_KEEP_ALIVE "-1"
```

Then restart Ollama application.


### 2. Adjust Ollama Context Length

Ollama's default Context Length is 4096, which is too small for OpenClaw. Recommended to increase to 16384~32768 (Note: increasing Context Size also increases GPU VRAM usage). You can modify the model with these commands:

```
# Run Ollama and load model
ollama run glm-4.7-flash:latest

# Set context length (recommended 16384 or 32768)
>>> /set parameter num_ctx 32768

# Save new model, can enter original model name (glm-4.7-flash:latest) to update directly
>>> /save <model name>

# Exit Ollama
>>> /bye
```

Verify Context Size update:

```
# Run Ollama and load model
ollama run glm-4.7-flash:latest

# Exit Ollama
>>> /bye

# Check Ollama load status
ollama ps

NAME                    ID              SIZE     PROCESSOR    CONTEXT    UNTIL
glm-4.7-flash:latest    baa9f0d690c1    22 GB    100% GPU     32768      Forever
```

Check CONTEXT and UNTIL.


### 3. Update Ollama Model Configuration

To change Ollama model:

1. Delete Ollama configuration file:

   ```bash
   rm ~/.ollama/config/config.json
   ```

2. Reconfigure:

   ```cmd
   ollama launch openclaw
   ```

---

## 📚 Related Links

- [👍 Windows Basic Installation Guide](../README-EN.md)
- [🔄 Migrate from Windows to WSL2](migration-guide-en.md)
- [🤔 Why WSL2?](why-wsl2-en.md)

- [🦙 Ollama Official Site](https://ollama.com/)
- [🦞 OpenClaw Official Site](https://openclaw.ai/)
- [🦞 OpenClaw Docs - Ollama Setup](https://docs.openclaw.ai/providers/ollama)
- [🤖 Telegram BotFather](https://t.me/BotFather)

---

## 💬 Community Support

Questions? Welcome to submit on [GitHub Issues](https://github.com/anomixer/openclaw-setup/issues)!

---

## 📝 Changelog

### 2026-02-21
- 🚀 Updated Node installation method
- 🆕 Support latest Ollama 0.16.1+ and OpenClaw 2026.2.21+ versions

### 2026-02-13
- 🚀 Updated WSL installation method
- 🆕 Support latest Ollama 0.15.6+ and OpenClaw 2026.2.12+ versions

### 2026-02-05
- 🚀 Changed to `cmd` quick install command, automated Node.js and npm installation
- 🆕 Support latest OpenClaw 2026.2.5+ version
- 📋 Reorganized table of contents and updated translation to `README-EN.md`

### 2026-02-02
- 🔄 Updated to Ollama v0.15.4+ version
- ✨ Added `ollama launch openclaw` preconfiguration feature
- 📖 Restructured documentation for better readability
- ⚠️ Emphasized must use regular user account for installation

### 2026-01-30
- 🦞 Repo renamed to openclaw-setup
- 🌍 Added English version README
- 💬 Added murmur.md roast file


---

## Related Links

- [Main README](../README-EN.md) - Windows native guide
- [Why WSL2?](why-wsl2-en.md) - Technical background
- [Migrate from Windows to WSL2](migration-guide-en.md)
- [WSL2 Official Documentation](https://learn.microsoft.com/windows/wsl/)

---

**Last Updated**: 2026-02-21  
**Original by anomixer**  
**Clawdbot → Moltbot → OpenClaw**
