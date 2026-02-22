# WSL2 完整安裝指南

**中文版 | [English](wsl2-guide-en.md)**

> 這是從零開始在 WSL2 安裝 OpenClaw + Ollama 的完整指南。

> 若您的作業系統是 Ubuntu / macOS ，可以直接從第2步驟開始。

> 如果你已經在 Windows 原生環境安裝過，請優先看：**`docs/migration-guide.md`**。

---

## 目錄

1. [安裝 WSL2](#1-安裝-wsl2)  
2. [安裝 Ollama](#2-安裝-ollama)  
3. [安裝 OpenClaw](#3-安裝-openclaw)  
4. [配置 Gateway](#4-配置-gateway)  
5. [測試與驗證](#5-測試與驗證)  
6. [進階配置](#6-進階配置)  
7. [常見問題](#7-常見問題)

---

Windows (WSL 版) 快速安裝 OpenClaw 與本地端 LLM (Ollama) 的完整步驟指南。

> ⚠️ **版本需求**: Ollama v0.15.4+ 與 OpenClaw 2026.2.5+

## 1. 安裝 WSL2 (若您使用 Windows 10/11，請從這裡開始)

### 1.1 啟用 WSL2

以 **一般使用者身份** 開啟 Command Prompt:

```cmd
# 安裝 WSL2 並開啟 虛擬環境
wsl --install
wsl --update
```

依提示 **重新啟動電腦**。

### 1.2 初次安裝並啟動 Ubuntu

重開機後，以 **一般使用者身份** 開啟 Command Prompt:

```cmd
# 安裝 Ubuntu 24.04
wsl --install -d Ubuntu-24.04
```

依提示設定：

- 使用者名稱（建議與 Windows 相同，純個人喜好）
- 密碼（之後 sudo 要用）


### 1.3 啟用 systemd（必要）

> ⚠️ 必做步驟：OpenClaw Gateway 需要 systemd 才能當服務常駐。

在 Ubuntu WSL 終端機執行：

```bash
cd ~
sudo tee /etc/wsl.conf >/dev/null <<'EOF'
[boot]
systemd=true
EOF
```

(若提示 `[sudo] password for user:` 需要密碼時，輸入上面的密碼即可，後面碰到也是一樣)

回到 Windows Command Prompt，並關閉WSL：

```cmd
exit
wsl --shutdown
```

再次開啟 Ubuntu (在 Command Prompt 下，執行 `wsl` 即可)，並確認 systemd 有啟動：


```bash
systemctl --version
```

看到版本資訊就 OK。


### 1.4 若是 Data Center 卡，要切換成 MCDM 模式 (可選)

⚠️ 重要：若您的顯示卡是 GeForce、Quadro 等這類「有風扇設計」的VGA Controller (出廠時設定為顯示埠功能打開)，請直接略過本步驟。

⚠️ 若您的顯示卡是 L2、L4、L40、RTX 6000 Blackwell Server Edition 等這類 Data Center 專用的版本 (這類「加速卡」的特徵都是無風扇設計，出廠時設定為 3D Controller 模式，顯示卡埠功能關閉，適合伺服器環境)。在 Windows 環境下，NVIDIA Driver 自定會以 TCC (Tesla Compute Cluster) 模式來運作，此模式會讓 Ubuntu WSL 環境無法存取到這張加速卡，因此必須切換成 MCDM (Microsoft Compute Driver Model) 模式，才能正常運作。

請以 **系統管理員** 執行 Command Prompt ，然後下:

```cmd
# 將 L4 切換到 MCDM 模式 (-g 0 為 GPU 編號，-dm 2 代表 MCDM)
nvidia-smi -g 0 -dm 2
```

切換完成後，需要重新開機。

驗證是否切換成功，只需要在 Command Prompt 下，執行 `nvidia-smi`檢視 Driver-Model 那邊顯示為 MCDM ，就等於切換完成。


> 若日後不需要用到時，再下以下命令切回 TCC 模式:

```cmd
# 將 GPU 0 切換回 TCC 模式 (-dm 1 代表 TCC)
nvidia-smi -g 0 -dm 1
```

### 1.5 安裝 WSL Ubuntu 專用的 CUDA Driver（必要）

> ⚠️ 必做步驟：Ubuntu WSL 下也是需要安裝 NVIDIA Driver ，才能存取到 Host Windows 端的顯示卡資源。

先到 [NVIDIA CUDA Toolkit](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&Distribution=WSL-Ubuntu&target_version=2.0&target_type=deb_local) 網站，取得最新 WSL-Ubuntu 的 CUDA 安裝指引，其中 Installer Type 建議選 deb (local) 來安裝。

以 CUDA Toolkit 13.1 Update 1 為例，需要在 WSL 下，執行以下的指令來依次安裝:
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

裝完 CUDA Toolkit 之後，記得設定兩個環境變數，先使用 nano 修改 `~/.bashrc` 檔案：

```bash
nano ~/.bashrc
```

在最後一行那邊加入以下內容:

```
export PATH="$PATH:/usr/local/cuda/bin:$HOME/.npm-global:$HOME/node_modules/.bin"
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/local/cuda/lib64"
```

> 註: 上面路徑有預先幫 node, npm 打好，以便稍後安裝 OpenClaw 時用到

改好之後，按 `Ctrl+X`、`Y`、`Enter`鈕，把檔案存回。

接著 輸入 `exit` 離開 WSL ，再跑 `wsl` 啟動 Ubuntu ，輸入以下指令以驗證 CUDA 和 Driver 是否正常運作:

```bash
# 檢查 nvcc 是否執行
nvcc -V
# 檢查 nvidia-smi 是否正常運作
nvidia-smi
```

> 註：進行到這邊累了嗎? 感覺 WSL 版本沒那麼簡單吧? 😂😂😂

---

## 2. 安裝 Ollama (若您使用 Linux 或 macOS，請直接這裡開始)

### 2.1 安裝 Ollama (裝進 Ubuntu WSL / Linux 裡面，別裝在 Windows 下)

確認有安裝好 GPU 驅動程式和 Compute 函式庫之後，請開啟 Linux Terminal ，輸入：

```bash
cd ~
sudo apt install zstd
curl -fsSL https://ollama.com/install.sh | sh
```


### 2.2 啟動 Ollama 服務

Ollama 安裝完成後，會自己啟用服務。若沒有的話，可以執行以下指令來啟用。

```bash
sudo systemctl enable ollama
sudo systemctl start ollama
```


### 2.3 驗證安裝

```bash
ollama -v
```


### 2.4 拉模型

參考主 README 裡面的說明，依照你顯示卡的 VRAM 容量，選一個：

**選項 A：GLM 4.7 Flash（推薦，20GB+ VRAM）**

```bash
ollama pull glm-4.7-flash
```

**選項 B：Ministral 3:8b（輕量，8GB+ VRAM）**

```bash
ollama pull ministral-3:8b
```

---

## 3. 安裝 OpenClaw

### 3.1 先安裝 nvm 與 node.js v24 (新版 OpenClaw 建議)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm install 24
nvm use 24
```

### 3.2 安裝 OpenClaw CLI

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

若使用官方安裝腳本失敗，請改使用 npm install 方式直接安裝

```bash
npm install openclaw@latest
```

### 3.3 初始化 Onboard

OpenClaw 安裝完成後，會自動進入 Onboard 模式。若沒有的話，可以執行以下指令:

```bash
openclaw onboard
```

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

先選 Yes，然後 Skip for now ，後面 API Key 的部份都先選 No 。

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


#### 6. 啟用 Hooks (若出現的話)

```
Enable hooks?
> [+] 🚀 boot-md (Run BOOT.md on gateway startup)
> [+] 📎 bootstrap-extra-files (Injects additional workspace bootstrap files)
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

#### 8. 安裝 Shell / 孵化 Bot (若出現的話)

```
Enable bash shell completion for openclaw?
> Yes
```

如何孵化您的機器人，建議 TUI 。

```
How do you want to hatch your bot?
> ● Hatch in TUI (recommended)
```

### 9. 設定 OpenClaw 使用 Ollama ###

此時，OpenClaw 會孵化機器人，此時先按 Ctrl+C 鈕數次停止，先退出 WSL (輸入 `exit`)，然後再進入 WSL (輸入 `wsl`)，此時 OpenClaw 就可以使用了。

```
# 先停止 OpenClaw Gateway 服務
systemctl --user stop openclaw-gateway.service
```

#### 讓 Ollama 套用本地端模型，去執行 OpenClaw

**Ollama v0.15.3+ 新功能**: 可配置 OpenClaw 的 Ollama 設定，讓其套用本地模型。

```
ollama launch openclaw
```

選擇您的 Model:

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

設定好模型之後， OpenClaw 就能正式使用了。此時就可以透過 Telegram 等 IM 來與OpenClaw 交談了。

✅ **若 AI 正常回覆，基本設定完成！**

> 📝 **日後更換模型**: 請參考下方 **實用技巧**。


> 💡 **建議**: 執行完後，先重新啟動電腦，確保 Gateway Service 正常開機自動啟動。

---

## 4. 進階配置

### 4.1 安裝 Skills

現在你已在 Linux（WSL2）內，所以大部分 skills 都能判定為可用。

常見流程：

```bash
# 找 skills
clawhub search

# 安裝
clawhub install <skill-name>

# 檢查
openclaw doctor
```

如果有需要 Homebrew 版本的 skills，你可以選擇：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 加到 PATH
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

brew --version
```

### 4.2 Memory 功能

在 WSL2 下，memory 子系統應該正常：

```bash
openclaw memory status
```

有問題可以重建：

```bash
openclaw memory rebuild
```

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

2. 在電腦上進入 WSL ，執行配對指令：

```cmd
openclaw pairing approve telegram abcdefgh
```

（將 `abcdefgh` 替換成你的配對碼）

3. 再次發送訊息測試

✅ **Bot 應該可以正常回覆了！** 🎉

### 其他進階設定 (可選)

以一般使用者身份開啟 WSL：

```bash
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

### 進入 WSL

```bash
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
~/.openclaw/openclaw.json
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

### 1. 防止 Ollama 自動卸載模型

Ollama 自定 5 分鐘無活動後自動卸載模型，為提升下次對話的速度，建議設定成永不卸載。

#### Linux (Systemd):

執行

```
sudo nano /etc/systemd/system/ollama.service
```

在 [Service] 區段加入：

```
Environment="OLLAMA_KEEP_ALIVE=-1"
```

重載並重啟：

```
sudo systemctl daemon-reload
sudo systemctl restart ollama
```

#### macOS:

終端機執行：
```
launchctl setenv OLLAMA_KEEP_ALIVE "-1"
```

然後重啟 Ollama 應用程式。 


### 2. 調整 Ollama 的上下文長度

Ollama 的 Context Length 自定值是 4096 ，對 OpenClaw 來說實在太少了。建議調高至 16384～32768 以上 (注意：增加 Context Size也會增加GPU VRAM的耗用量)，可以透過下列指令來修改模型。

```
# 執行 Ollama 並載入模型
ollama run glm-4.7-flash:latest

# 設定上下文長度 (建議 16384 或 32768)
>>> /set parameter num_ctx 32768

# 儲存新模型，可輸入原先模型名稱 (glm-4.7-flash:latest) 直接更新
>>> /save <model name>

# 離開 Ollama
>>> /bye
```

驗證是否更新 Context Size:

```
# 執行 Ollama 並載入模型
ollama run glm-4.7-flash:latest

# 離開 Ollama
>>> /bye

# 檢視 Ollama 載入狀況
ollama ps

NAME                    ID              SIZE     PROCESSOR    CONTEXT    UNTIL
glm-4.7-flash:latest    baa9f0d690c1    22 GB    100% GPU     32768      Forever
```

注意看 CONTEXT 和 UNTIL 就可以了。


### 3. 更新 Ollama 模型配置

若需要更換 Ollama 模型：

1. 刪除 Ollama 配置檔：

   ```bash
   rm ~/.ollama/config/config.json
   ```

2. 重新執行配置：

   ```cmd
   ollama launch openclaw
   ```

---

## 📚 相關連結

- [👍 Windows 基本安裝指南](../README.md)
- [🔄 從 Windows 遷移到 WSL2](migration-guide.md)
- [🤔 為什麼需要 WSL2?](why-wsl2.md)

- [🦙 Ollama 官網](https://ollama.com/)
- [🦞 OpenClaw 官網](https://openclaw.ai/)
- [🦞 OpenClaw 文件 - Ollama 設定](https://docs.openclaw.ai/providers/ollama)
- [🤖 Telegram BotFather](https://t.me/BotFather)

---

## 💬 社群支援

遇到問題？歡迎在 [GitHub Issues](https://github.com/anomixer/openclaw-setup/issues) 提出！

---

## 📝 更新日誌

### 2026-02-21
- 🚀 更新 Node 安裝方法
- 🆕 支援最新 Ollama 0.16.1+ 與 OpenClaw 2026.2.21+ 版本

### 2026-02-13
- 🚀 更新 WSL 安裝方法
- 🆕 支援最新 Ollama 0.15.6+ 與 OpenClaw 2026.2.12+ 版本

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

## 相關連結

- [主 README](../README.md) - Windows 原生教學
- [為什麼需要 WSL2？](why-wsl2.md) - 技術背景
- [從 Windows 遷移到 WSL2](migration-guide.md)
- [WSL2 官方文件](https://learn.microsoft.com/windows/wsl/)

---

**最後更新**: 2026-02-21
**原創 by anomixer**  
**Clawdbot → Moltbot → OpenClaw**
