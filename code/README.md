# 🦞 OpenClaw Battlefield Tools

這份目錄包含了維持「龍蝦戰地日誌」與情報網站日常運作所需的工具箱與自動化腳本。

## 🎯 核心功能與腳本使用說明

### 1. `generate_murmur.js`: 混合動力龍蝦產生器 (毒舌代筆)

負責呼叫 Google Gemini API，讓 AI 扮演毒舌戰地記者「anomixer」，自動把客觀的日常新聞轉化為充斥陰謀論、吹捧龍蝦與猛酸傳統大廠的戰況日誌。
它會自動產生中文與英文兩種版本，**並會自動插入到 `murmur.md` 和 `murmur-en.md` 裡面最新的 `### 🟢` 標題下方！**

#### 使用方式
1. 確認已經安裝完套件 (`npm install`)
2. 準備好你的 Gemini API 金鑰 (可到 Google AI Studio 免費申請)
3. 打開終端機 (PowerShell) 並執行以下指令：

```powershell
# 設定金鑰環境變數
$env:GEMINI_API_KEY="你的_金鑰_放這裡"

# 選項 A: 全自動模式 (推薦 🚀)
# 不帶參數時，AI 會自動搜尋過去 24 小時全球 AI 與 OpenClaw 相關大事並產生報導。
node generate_murmur.js

# 選項 B: 手動指定模式
# 餵給它今天想紀錄的新聞，AI 會根據你提供的資訊進行毒舌評論。
node generate_murmur.js "今天的新聞: Apple 準備推出自己的代理人..."
```
執行完畢後，它不但會自動寫入日誌內容，還會**自動更新 `murmur.md` 的目錄 (Table of Contents)**。你可以直接使用 `git diff` 檢查確認。

### 2. `update_stars.js`: Github Stars 自動更新器

負責透過 Github API，自動抓取並更新 OpenClaw 生態系 (以及外部如 React, Linux) 所有專案的最新 Star 數量。
它會：
- 幫整個「變體演化樹」重新整理排名 
- 擷取最新的當下時間，並自動增加最新星星總數到「里程碑表格」。
- 重新排序「當前 GitHub Stars 總榜排名」表格。

#### 使用方式
為了避免連續呼叫 Github API 觸發 rate-limit (存取限制)，強烈建議先提供 `GITHUB_TOKEN`：

```powershell
# 設定 Github Token 環境變數
$env:GITHUB_TOKEN="你的_Github_Token"

# 執行星星抓取
node update_stars.js
```

---

## 🌐 關於網站佈署 (MkDocs)

我們已經整合了 [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)，能將 `murmur.md` 轉化為酷炫的情報網站。

- **設定檔**: `mkdocs.yml` (用來設定網站標題、顏色主題、以及左側菜單架構)
- **自動化佈署**: 只要你將內容 `git push` 到 GitHub 的 `main` 或 `murmur-runner` 分支，GitHub Actions (`.github/workflows/pages.yml`) 就會自動在背後將它編譯並發布至 **GitHub Pages**。

### 如何在本機預覽網站 (可選)
如果你想在推上 Github 前先看看網站長怎樣，可以使用 Python 本機運行：
```bash
pip install mkdocs-material
# 在這份 README 所在的 code/ 目錄中先將設定檔移至專案根目錄
cp mkdocs.yml ../
cd ..
mkdocs serve
```
造訪 `http://127.0.0.1:8000` 即可預覽。

---

## 📦 安裝依賴 (Setup)

所有的 Node.js 套件都安裝在 `code/node_modules` 下。如果你把這些腳本 clone 到全新的電腦上，記得要先進來這個資料夾敲：
```bash
cd code
npm install
```
---

## 📅 龍蝦戰地日誌：日常更新流程 (Daily Workflow)

當你有新的新聞想要更新到 `murmur.md` 並同步到網站時，請依照以下 3 個步驟：

### 1. 產生毒舌日誌 (AI 生成)
在 `code/` 目錄下執行以下指令（請確保已設定 `GEMINI_API_KEY`）：
```powershell
$env:GEMINI_API_KEY="你的金鑰"
node generate_murmur.js "輸入今天的新聞摘要..."
```
*這會自動將中英文日誌插入到 `murmur.md` 與 `murmur-en.md` 的最上方。*

### 2. 更新 Github Stars (可選)
如果你也想順便更新星星排名與里程碑表格：
```powershell
$env:GITHUB_TOKEN="你的Token"
node update_stars.js
```

### 3. 一鍵推送到 GitHub (自動佈署網頁)
在專案根目錄執行：
```bash
git add .
git commit -m "feat: update battlefield logs YYYY-MM-DD"
git push origin main
```

**🚀 接下來呢？**
推上去後，GitHub Actions 會自動被喚醒（約 1 分鐘內）：
- 它會自動執行 `build_prep.js` 整理路徑。
- 它會自動編製雙語 MkDocs 網站。
- **網站會自動更新**： [https://anomixer.github.io/openclaw-setup/](https://anomixer.github.io/openclaw-setup/)

*註：`README.md` 在網頁版會自動被重新命名為 `setup.md` 以避免與首頁衝突。*
