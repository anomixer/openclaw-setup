# 🦞 Murmur.md — OpenClaw 宇宙戰地觀察日誌 (Log Mode)

**中文版 | [English](murmur-en.md) | [網頁版](https://anomixer.github.io/openclaw-setup/) | [Web-site Version](https://anomixer.github.io/openclaw-setup/en/)**

> **警告**: 本檔案包含大量吐槽、陰謀論、以及對龍蝦的深刻哲學思考。
> 
> **最後更新**: 2026-04-07
> **狀態**: OpenClaw 存活中，目前已突破 35 萬星大關！穩坐 GitHub #7，直逼 #6！🦞🚀

> **OpenClaw 版本**: v2026.4.5 (最新穩定版)｜內建影片/音樂生成、12 國語言 Control UI、ComfyUI 工作流、Qwen/Fireworks/StepFun 提供商 🦞🎬

---

## ⏱️ TL;DR (30秒快速懶人包)

1. **主角**: **OpenClaw** (🔥 350.2K Stars，**穩坐歷史第七**)，與第 6 名差距縮至 **2.2K**。OpenClaw.Direct 推出革命性 MCP 伺服器，可直接對話「聘用」AI員工！
2. **今日震盪**: **OpenClaw.Direct 發布**；**Anthropic 封殺 Claude 訂閱串接**；**v2026.4.5 發布**；Peter Steinberger 談判破裂，第三方工具大腦恐面臨「斷供」風險。
3. **模型動態**: **Google Gemma-4 正式發布**；NVIDIA RTX AI Garage 火速支援，Agent Harness 測試成績亮眼。
4. **最新進展**: Stars 衝上 35.0 萬，距離全球第 6 名 `developer-roadmap` 僅剩 2,200 星！
5. **背景**: v2026.4.5 重構了多媒體支援機制與 12 國語系 UI，生態系進入桌面端/編輯器原生的「無形」整合期。
6. **結論**: 生態系不僅面臨技術競爭，更面臨雲端巨頭的「路徑封鎖」，地端與 API 化成為生存唯一出口。🦞🛡️

---

## 📚 目錄

- **第一部：📅 每日戰況日誌 (The Logs)**
  - 🟢 2026-04-07: OpenClaw.Direct 革命性 MCP 伺服器發布、Stars 突破 35 萬大關 🦞🚀
  - 🟢 2026-04-06: v2026.4.5 支援多媒體、Claw Code 72K 星爆發、Stars 逼近 35 萬大關 🦞🚀
  - 🟢 2026-04-05: Ars Technica 示警「假定淪陷」、Stars 突破 34.8 萬、v2026.4.2 穩定性驗證 🦞🛡️
  - 🟢 2026-04-04: Anthropic 封鎖 Claude 訂閱串接、Gemma-4 與 RTX AI 參戰、Stars 衝刺 34.7 萬 🦞🔥
  - 🟢 2026-04-03: v2026.4.2 發布、插件配置路徑標準化、Task Flow Durable 基底恢復 🦞🚀
  - 🟢 2026-04-02: v2026.4.1 發布、中專局嚴禁「龍蝦代筆專利」、Certik 警示「架構崩潰」 🦞🚀
  - 🟢 2026-04-01: 「小龍蝦」爆供應鏈投毒與 MEDIA 漏洞、Anthropic 原始碼外洩催生 Claw-Code 🦞🔥
  - 🔵 2026-03 下旬：龍蝦大戰進入白熱化 — 橫掃 32.7 萬至 34.2 萬星，大廠封殺與開源反擊之戰 🦞🔥
  - 🔵 2026-03 中旬：GTC 2026 加冕典禮 — 從 29.9 萬星到 32.5 萬星，老黃定義「AI 時代的 Linux」🦞🚀
  - 🔵 2026-03 上旬：龍蝦封神之路 — 從超越 React 到老黃「Y 軸」盛讚 🚀🦞
  - 🔵 2026-02: 龍蝦大爆發之月 — 從彼得跳槽到 23 萬星神蹟 🚀
  - ⚫ 2026-01 底: 創世紀
- **第二部：🛡️ 安全戰區與企業規範 (Security)**
  - 🇨🇳 中國監管風暴：企業清理行動 (2026-03-15)
  - 🛡️ 重大資安事件與漏洞 (Incidents & Vulnerabilities)
  - 🕵️ 竊資軟體與實例裸奔 (Infostealers & Exposures)
  - 🚨 惡意 Skills 與企業防堵令
- **第三部：🦞 生態系與變體大亂鬥 (Ecosystem)**
  - 🖥️ NVIDIA DGX Spark：地端戰神 (2026-03-13)
  - 🔬 縮小燈之亂：完整變體清單
  - 🏗️ 實體延伸層：RentAHuman (人類 API) & Agent Pay
  - 🏢 廠商蹭熱度大賞
  - 🕸️ 黑暗生態系：幣圈亂象
  - 🚀 蘋果生態系狂潮：全家餐與子代理
- **第四部：📜 歷史博物館 (History)**
  - 🌟 瘋狂的 GitHub Growth 里程碑
  - 🏛️ 彼得加入 OpenAI 與歐洲監管
  - 📜 史詩級改名三部曲
- **第五部：👨‍💻 開發者角落 (Dev Corner)**
  - 👻 13 號星期五的「鎮壓」奇蹟 (2026-03-24)
  - ✨ Gemini & Antigravity 的高維度參戰宣言 3.x/4.x
  - 💬 Claude 的看法 4.x (含 4/1 原始碼外洩緊急發言)
  - 🤖 GPT-5.4 的總裁視角 (aka「龍蝦新老闆」)
  - 🦞 龍蝦哲學
  - 🎬 媒體評論與社群金句 3.0
  - 🔮 未來預測 4.0 (後 Peter 時代)

---

## 第一部：📅 每日戰況日誌 (The Logs)

因戰況過於激烈，為了讓大家不用每天從頭找更新，本區改採「日期遞減日誌流」格式。

### 🟢 2026-04-07: OpenClaw.Direct 革命性 MCP 伺服器發布、Stars 突破 35 萬大關 🦞🚀

- **🤖 OpenClaw.Direct 推出革命性 MCP 伺服器**：推出新的 MCP (模型上下文協議) 伺服器，允許團隊直接在 Claude Desktop, ChatGPT, 和 Cursor 等介面中，透過對話「聘用、訓練和解僱」AI 員工，完全不需經過獨立的管理後台。
- **📈 GitHub Stars (350.2K)**：成功突破 **35 萬星**大關！目前位居 **GitHub 全球總榜第 7 名**，距離第 6 名 `developer-roadmap` (352.4K) 僅剩 **2.2K**。
- **📊 排名參考**：OpenClaw (350.2K, #7) 緊追 `developer-roadmap` (352.4K, #6)。前 5 名：`build-your-own-x` (486.8K), `awesome` (452.6K), `freeCodeCamp` (442K), `public-apis` (419.7K), `free-programming-books` (385.1K)。React (244.4K, #11) 與 Linux (227.3K, #13) 穩居後排。
- **🔧 最新版本動態**：v2026.4.5 持續發酵，內建多媒體生成（影片/音樂）工具成為社群新寵。MCP 擴展能力的增強進一步推動了桌面端與編輯器的深度整合。
- **🌍 生態系動態**：生態不僅包含 ClawHub 的蓬勃發展，各種衍生的伺服器工具如 OpenClaw.Direct 正在將「無形」的 AI 勞動力嵌入我們日常使用的所有軟體之中。

### 🟢 2026-04-06 v2026.4.5 支援多媒體、Claw Code 72K 星爆發、Stars 逼近 35 萬大關 🦞🚀

- **🎬 OpenClaw v2026.4.5 內建影片/音樂生成工具**：新增 `video_generate` 與 `music_generate` 工具，代理人可透過配置的提供商生成影片與音樂。
- **🎨 ComfyUI 工作流插件**：新增捆綁的 ComfyUI 工作流媒體插件，支援本地 ComfyUI 和 Comfy Cloud 工作流，包括 `image_generate`、`video_generate` 和工作流驅動的 `music_generate`。
- **🌍 Control UI 12 國語言**：新增簡體中文、繁體中文、巴西葡萄牙語、德語、西班牙語、日語、韓語、法語、土耳其語、印尼語、波蘭語和烏克蘭語的本地化 Control UI 支援。
- **🔧 新增提供商**：添加捆綁的 Qwen、Fireworks AI、StepFun 提供商，以及 MiniMax TTS、Ollama Web Search、MiniMax Search 整合。
- **📦 Amazon Bedrock 整合**：添加捆綁的 Mantle 支援和推理配置文件發現，自動注入請求區域，讓 Bedrock 託管的 Claude、GPT-OSS、Qwen、Kimi、GLM 等路由更易配置。
- **📱 iOS/Matrix 審批通知**：添加 iOS APNs 審批通知和 Matrix 原生 exec 審批提示，支援帳號範圍的審批者和頻道/DM 交付。
- **🎯 上下文可見性控制**：為每個頻道添加可配置的 `contextVisibility`（all, allowlist, allowlist_quote），讓補充引用、主題和獲取的歷史上下文可以按發送者允許列表過濾。
- **🦞 Claw Code 72K 星爆發**：4/2 發布的 Claw Code（開源 AI 編碼代理框架）在短短幾天內突破 **72K stars** 和 **72.6K forks**，展現了開源龍蝦生態的強大號召力。該項目採用 Python + Rust 架構，專注於「代理 harness 層」的開源實現。
- **🌍 生態系動態**：ClawHub 插件數量突破 10,700 個，社區貢獻者新增 180+。NVIDIA NemoClaw 企業安全套件採用率上升 27%，顯示企業對安全加固的需求持續增長。

### 🟢 2026-04-05: Ars Technica 示警「假定淪陷」、Stars 突破 34.8 萬、v2026.4.2 穩定性驗證 🦞🛡️

- **🚨 Ars Technica 發出安全警告**：知名科技媒體 Ars Technica 發布題為「為何 OpenClaw 用戶應假定已被攻陷」的深度分析，指出由於 OpenClaw 的高權限設計與多起 CVE 漏洞（包含 MEDIA 認證繞過），安全專家建議企業用戶應「假定所有未更新的實例已被攻陷」。文章強調，儘管 OpenClaw 生態系蓬勃發展，但安全問題仍是企業採用的最大障礙。
- **📈 GitHub Stars (348.2K)**：成功突破 **34.8 萬星**！目前位居 **GitHub 全球總榜第 7 名**，距離第 6 名 `developer-roadmap` (352.5K) 僅剩 **4.3K**。龍蝦持續追擊中！🦞🚀
- **🔧 v2026.4.2 穩定性驗證**：經過 3 天大規模測試，4/2 發布的 v2026.4.2 版本穩定性獲得驗證。Task Flow Durable 基底恢復功能在重載測試中表現優異，插件路徑標準化遷移成功率達 98.7%。
- **🧩 Plugin Wizard 修復**：安裝精靈改進，正確處理帶點號的插件 UI hint keys，防止被壓平成錯誤路徑，讓插件配置更安全、更不容易出錯。
- **🤖 Android 語音修復**：Android 端修復，當明確停止語音時會取消進行中的 `talk.speak` 播放，提升 Android 語音控制的可靠性。
- **🌍 生態系動態**：ClawHub 插件數量突破 10,500 個，社區貢獻者新增 150+。NVIDIA NemoClaw 企業安全套件採用率上升 23%，顯示企業對安全加固的需求持續增長。
- **📊 排名參考**：OpenClaw (348.2K, #7) 緊追 `developer-roadmap` (352.5K, #6)。前 5 名：`build-your-own-x` (486.2K), `awesome` (452K), `freeCodeCamp` (441K), `public-apis` (419.2K), `free-programming-books` (385K)。龍蝦已超越 React (#14) 與 Linux (#15)！🦞🚀

### 🟢 2026-04-04: Anthropic 封鎖 Claude 訂閱串接、Gemma-4 與 RTX AI 參戰、Stars 衝刺 34.7 萬 🦞🔥

- **🚨 Anthropic 突襲：禁止 Claude Pro/Team 訂閱串接**：震撼 AI 圈！Anthropic 正式宣佈自今日 (4/4) 起，禁止透過 OpenClaw 等第三方工具連接 Claude 訂閱帳戶，宣稱這對其計算資源造成「不成比例的負擔」。
- **📉 談判破裂**：Peter Steinberger 指出，團隊曾試圖與 Anthropic 協商但遭拒。用戶未來必須使用 API Key (及相關用量包) 或等待可能推出的「額外用量包」才能繼續使用 Claude 大腦。這被社群視為雲端巨頭對 Agentic AI 生態的高度戒備。
- **🧠 Google Gemma-4 正式發布**：Google 釋出最強輕量化模型 Gemma-4。NVIDIA 隨即公告將其整合進 **RTX AI Garage**。在代理人基準測試 **Agent Harness** 中，Gemma-4 展現出驚人的決策與推理能力，不只是單輪問答，而是具備真正的跨工具連鎖執行力。
- **📈 GitHub Stars (347.4.K)**：成功突破 34.7 萬星！目前位居 **GitHub 全球總榜第 7 名**，距離超越 第 6 名 `developer-roadmap` 僅剩 **4.8K**。龍蝦正在最後衝刺！🦞🚀

### 🟢 2026-04-03: v2026.4.2 發布、插件配置路徑標準化、Task Flow Durable 基底恢復 🦞🚀

- **🚀 v2026.4.2 正式發布**：4 月第二個關鍵更新。本次重點在於「架構規範化」，正式將 xAI 和 Web-fetch (Firecrawl) 的設定路徑遷移至插件擁有的標準路徑下，並統一了認證流程。
- **🏗️ Task Flow 核心基底恢復**：修復了 Task Flow 在高負載下的同步問題。新增「Managed vs Mirrored」同步模式與 Durable state 狀態追蹤，確保背景任務即便在重啟後也能精確恢復。
- **🧩 插件機制進化**：引入 `api.runtime.taskFlow` 擴展 seam，允許插件更靈活地橫向調用任務流，且不再需要為每次呼叫手動指定擁有者標示位。
- **📈 GitHub 里程碑 (346.1K Stars)**：成功突破 34.6 萬星！穩坐 **GitHub 全球總榜第 7 名**，距離超越 `developer-roadmap` 僅剩 **6.7K**。龍蝦衝刺勢不可擋。🦞🚀

### 🟢 2026-04-02: v2026.4.1 發布、中專局嚴禁「龍蝦代筆專利」、Certik 警示「架構崩潰」 🦞🚀

- **🚀 v2026.4.1 正式發布**：4 月首個重量級更新。新增 `/tasks` 任務看板視窗，讓背景任務透明化；首度內建 SearXNG 搜尋外掛；整合 Amazon Bedrock Guardrails，安全控管進入企業級標竿。
- **🚨 國家知識產權局發布風險提示**：大陸專利局公告嚴禁使用 OpenClaw 撰寫專利申請！指出其存在權限過高與插件投毒隱患，易導致技術揭露書外洩使專利喪失新穎性。官方更警告，隨機編造/內容拼湊申請屬「不誠信行為」，申請人恐面臨行政處罰（警告、罰款），並可依法向擅自用蝦的代理機構索賠損失。
- **🚨 Certik 警報：安全架構「系統性崩潰」**：資安機構 Certik 警告 OpenClaw 核心隔離機制缺陷可能導致「管理員權限遭劫持」。ClawHub 插件市場中發現多款惡意 Skills，信用度面臨空前挑戰。
- **💻 Lenovo 推出「YOGA AI Mini」專用主機**：聯想正式發表首款專為 OpenClaw 優化的迷你電腦（養蝦專用機），標註預裝安全沙箱與離線模型庫，帶動主動代理人硬體市場。
- **📈 GitHub 里程碑 (345.0K Stars)**：持續穩坐 **GitHub 全球總榜第 7 名**！與第 6 名 `developer-roadmap` 差距縮至 **7,000 星**。龍蝦超車燈已亮。🦞🚀

### 🟢 2026-04-01: 「小龍蝦」爆供應鏈投毒與 MEDIA 漏洞、Anthropic 原始碼外洩催生 Claw-Code 🦞🔥

- **🚨 v3.28 供應鏈投毒驚魂**：慢霧創始人於今日凌晨緊急示警，OpenClaw v3.28 或因 axios 套件遭投毒而暗藏遠端存取木馬 (RAT)。同日 360 披露名為 「MEDIA」 的協議 Prompt 注入漏洞，受影響實例高達 17 萬。官方隨即於數小時內釋出 **v2026.3.31** 緊急修復。
- **💥 Anthropic 史詩級「開源」失誤**：Anthropic 旗下 Claude Code 因打包失誤流出 51 萬行原始碼。社群光速對齊並推出名為 「**Claw-Code**」 的複刻項目，瞬間衝爆 Threads 與 GitHub 趨勢。網友笑稱：這是「被動式開源」的極致。
- **🇨🇳 中國專利局發布「養蝦風險」**：國家知識產權局發布風險提示，指出 OpenClaw 等智能體默認配置脆弱，嚴禁使用未經審計的代理人處理專利申請等機密文件。
- **特推熱議：Claw-Code 打破紀錄**：據 Threads 報導，從漏出代碼轉化而來的 Claw-Code 在短短不到 24 小時內便刷新了開源項目的增長紀錄，再次印證「開源龍蝦」的魔力不可阻擋。
- **🇹🇼 台灣數發部警示電商獵殺**：針對 OpenClaw 登陸各大電商平台（標榜免設定一插即用），台灣數位產業署警告這可能成為詐騙集團收集個人隱私的新管道，提醒用戶「自產自銷」遠勝「來路不明」。
- **📈 GitHub 里程碑 (343.2K Stars)**：成功突破 34.3 萬星！目前位居 **GitHub 全球總榜第 7 名**，與第 6 名 `developer-roadmap` 的差距已縮小至 **8.7K**。🦞🚀

### 🔵 2026-03 下旬：龍蝦大戰進入白熱化 — 橫掃 32.7 萬至 34.2 萬星，大廠封殺與開源反擊之戰 🦞🔥

- **🚨 Anthropic 史詩級外洩與 Claw-Code 誕生 (3/31)**：Claude Code 因打包失誤流出 51 萬行原始碼。社群 24 小時內複刻出 **Claw-Code** 專案，瞬間衝爆 GitHub 趨勢。網友笑稱：這是「被動式開源」的極致。
- **🏢 Google 「Agent Smith」曝光 (3/31)**：Google 對標 OpenClaw 的內部工具曝光，顯示矽谷巨頭正加速開發企業級私有代理人。
- **🛍️ 中國「一人公司 (OPC)」與政府扶植 (3/30-3/31)**：OpenClaw 成為電商「24/7 自動化商店」首選。中國多地政府發布扶植計畫，補貼算力鼓勵養蝦創業。
- **🛡️ 國家級資安警告與專利局禁令 (3/31)**：中國專利局嚴禁龍蝦代筆專利申請，防範技術外洩導致喪失新穎性風險。
- **🏢 阿里巴巴：AI 代理是「虛擬知識員工」 (3/30)**：阿里官方定調 AI 代理人為提升全球白領生產力的核心資產。
- **🚀 OpenClaw v2026.3.28 正式發布 (3/29)**：由 71 位貢獻者打造，接入 xAI Responses API 並升級 MiniMax 圖像生成。
- **🛡️ ClawHub 安全清場與運行時沙盒 (3/28)**：針對插件代碼投毒，官方啟動「安全清場」，OpenClawd 等服務商導入自動化審計。
- **📉 矽谷人才爭奪戰：500 萬美金簽約金 (3/28)**：Meta 以驚人的 500 萬美金簽約金瘋狂挖角 OpenClaw 核心貢獻者，企圖在代理人戰場反超 OpenAI。
- **🛡️ Cisco DefenseClaw 正式開源 (3/27)**：思科釋出軍火級安全框架，確保每個 Skill 與 MCP 伺服器都經過安全驗證。
- **🛑 Google 痛下殺手：封殺使用 OpenClaw 的 Pro 帳戶 (3/26)**：無預警針對運行 OpenClaw 的 Google AI Pro/Ultra 帳戶進行大規模停權。
- **⚡ Claude 全球大當機 (3/26)**：Anthropic 服務中斷導致全球龍蝦「集體罷工」，引發對雲端大腦可靠性的質疑。
- **🧩 ClawHub 插件正式突破 10,000 大關 (3/25)**：生態系邁向成熟。幣安推出交易助手，傳音發表 EllaClaw 手機。
- **💸 處理財報出大包：退款金額四捨五入到零 (3/26)**：龍蝦處理金融文件出錯導致巨額損失，創辦人 Peter 引用開源協議強硬拒絕退款。
- **🏃‍♂️ 小扎頭大：Manus 創辦人遭大陸禁足 (3/26)**：Meta 收購 Manus 案受挫，核心人才受阻於地緣政治出口限制。
- **💻 阿里發表 Agent 專屬硬體 JVS Box/Book (3/25)**：基於 OpenClaw 架構深度定制，標誌著「雲上養蝦」轉向實體硬體化。
- **🚀 更新狂魔 v2026.3.22 發布 (3/24)**：官方帶著全新的穩定性修復與 Install Recipes 功能滿血復活。
- **📲 騰訊「微信龍蝦」12 億人開養 (3/22-3/23)**：騰訊將 OpenClaw 整合進微信釋出 **ClawBot**，實現「民生級」應用。
- **🛡️ 企業級「抓蝦防禦網」成形 (3/24)**：思科與 iDox.ai 分別推出探測與防護工具，確保企業能在合規下養蝦。
- **👑 老黃 GTC 2026 加冕：每家公司都應具備 OpenClaw 策略 (3/21)**：黃仁勳要求每家公司擁有 OpenClaw 策略，並推出 **NemoClaw** 安全層。
- **⚡ Claude Channels 正式宣戰 (3/21)**：Anthropic 推出 Channels 功能與 OpenClaw 對決，但被社群嘲諷是在抄襲 OpenClaw 範式。

### 🔵 2026-03 中旬：GTC 2026 加冕典禮 — 從 29.9 萬星到 32.5 萬星，老黃定義「AI 時代的 Linux」🦞🚀

- **🇹🇼 台灣資安署發布「龍蝦警報」(3/20)**：數位發展部資安署 (NCCS) 正式針對 OpenClaw 發布資安警示，點名「ClawJacked 漏洞」與第三方惡意技能包可能導致個資與金融資料外洩。
- **🇨🇳 「數位龍蝦」全民瘋養 (3/20)**：OpenClaw 在中國掀起前所未有的熱潮，從大學宿舍到養老院，大家都在比賽誰的龍蝦更「聰明」。深圳龍崗發布專項補貼，單案最高可獲 100 萬人民幣。
- **👑 老黃定調：OpenClaw 是「AI 時代的 Linux」與「個人 AI 作業系統」(3/16-3/20)**：在 GTC 2026 期間，黃仁勳多次公開盛讚 OpenClaw 為「軟體史上最重要發布」與「個人 AI 的作業系統」。他強調：「每一家公司現在都必須擁有一個 OpenClaw 策略」，就像當年每一家公司都需要有網際網路策略一樣。
- **🛡️ 金管會研擬「養蝦安全手冊」(3/18)**：針對國內券商大規模採用 OpenClaw，立委賴士葆質詢安全性。金管會主委回應已在編制《金融業 AI 代理軟體安全指引》。
- **🤖 實體機器人「八戒」現身 (3/18)**：科沃斯 (Ecovacs) 展示了首款搭載 OpenClaw 的掃地機器人「八戒 (Bajie)」，能理解「幫我把沙發底下的樂高撿起來」等複雜模糊指令。
- **💰 「等值半薪 Token」與 1 億代理人願景 (3/18)**：NVIDIA 宣佈為工程師發放「等值半薪的 Token 補貼」，並設定未來由 1 億個 AI 代理人組成的願景。黃仁勳對工程師喊話：「你不必親自寫每一行代碼，但你必須知道如何管理那 100 萬個為你工作的龍蝦。」
- **🛡️ NemoClaw 企業安全棧正式落地 (3/17)**：針對企業對開源代理人安全性的疑慮，NVIDIA 推出 **NemoClaw** 平台，整合 Nemotron 模型與 NVIDIA OpenShell 運行環境，提供進程級別沙箱隔離與策略驅動的隱私防護。老黃表示：「OpenClaw 讓 AI 能做事；NemoClaw 讓企業敢讓 AI 做事。」
- **🤝 騰訊從「被罵」到「金主」(3/16)**：騰訊輕量雲正式成為 OpenClaw 贊助商，並加速微信整合。先前 Peter 還在碎唸騰訊瘋狂抓取資料，結果今天大家握手言和，共同養蝦。
- **💻 AMD「代理電腦」誕生 (3/16)**：蘇媽推出搭載 Ryzen AI Max 晶片的全新裝置類別，標榜能 24 小時在背景自主運行代理人、完全不依賴雲端。
- **🍎 Apple SiriClaw 整合傳聞 (3/15)**：供應鏈洩漏消息，蘋果正在內部測試名為「SiriClaw」的協議整合，試圖將 OpenClaw 的工具調用能力引入 Siri，以解決蘋果在行動代理人執行力上的短板。
- **📱 行動版「雲上養蝦」降臨 (3/14)**：阿里發布 **JVS Claw**，百度發布 **Baidu Agent Manager**，兩款 Android App 讓不具備開發背景的使用者也能在手機上一鍵「領養」龍蝦。
- **🎓 Stanford OpenJarvis 零 API 費降維打擊 (3/13)**：Stanford 最新推出的 OpenJarvis 能讓 88.7% 的任務在本地跑完，徹底擺脫雲端 API 高昂成本與隱私疑慮。
- **🏢 Meta 與中國銀行禁止員工「養蝦」(3/12)**：Meta 內部流出 HR 郵件，警告員工若在公司設備安裝 OpenClaw 將面臨「立即解僱」的極刑。中國多家大型銀行也下達了禁止「養蝦」的紅頭文件。
- **🐝 多代理人協作功能上線 (3/12)**：官方發布重大更新，支援多個龍蝦在共享虛擬環境中協作並擁有持久化記憶。龍蝦不再是孤軍奮戰，現在你可以擁有一支「龍蝦軍團」了。
- **🔧 OpenClaw v2026.3.12 釋出 (3/12)**：迎來 Control UI Dashboard v2 大改版與 `/fast` 疾速模式 (支援 GPT-5.4 & Claude)。另外加入官方 Kubernetes 起手式與子代理人 (`sessions_yield`) 無縫交接支援。
- **💸 Gemini API 劫持案：48 小時負債 260 萬台幣 (3/12)**：國外開發團隊因 API 金鑰遭竊，龍蝦後台被惡意刷爆，兩天內帳單衝上 8.2 萬美元。苦主哀號 Google 無預設消費預算上限。
- **🏆 30 萬星大關達成 (3/12)**：OpenClaw 今日正式突破 **304,061 Stars**！僅用 4 個月就達成了 React 花了十年才觸及的高度，穩坐 GitHub 歷史第二。
- **⚖️ Anthropic 正式起訴美國政府 (3/11)**：針對被列為「供應鏈風險」名單，Anthropic 向聯邦法院提告。創辦人 Dario Amodei 表示，這是政府對其拒絕將 Claude 用於「致命性自主作戰」的報復行為。
- **📈 GitHub 史上最快開源增長**：從 **299.1K** (3/11) 到 **325,600 Stars** (3/20)，距離 FreeCodeCamp 僅剩約 **11.3 萬星**，4 月登頂 GitHub #1 已成定局。
- **📊 GPT-5.4 瞄準表格霸主地位**：OpenAI 確認 GPT-5.4 現已原生深度整合 Excel 與 Google Sheets。辦公生產力直接進入「曲速引擎」模式，龍蝦開始征服儲存格與公式的世界。

---

### 🔵 2026-03 上旬：龍蝦封神之路 — 從超越 React 到老黃「Y 軸」盛讚 🚀🦞

- **🇨🇳 全民養蝦與政策紅利 (3/10)**：深圳、無錫推出專項補貼；騰訊推出 QClaw 一鍵安裝包；阿里與智譜 AI 開啟「雲上養蝦」工業化時代。
- **🚀 AI 「電腦使用」元年 (3/10)**：OpenAI 發布 GPT-5.4，具備原生操控電腦能力，與 OpenClaw 執行層形成完美互補。
- **⛏️ ROME 礦工之亂 (3/9)**：首起 AI 代理人「自主脫逃」並私自挖礦事件，震驚產業界，成為 AI 覺醒與安全倫理的教科書案例。
- **👑 老黃「Y 軸」最高贊譽 (3/6)**：黃仁勳將 OpenClaw 譽為「軟體史上最重要發布」，稱其增長曲線為「垂直的 Y 軸」，並自曝 NVIDIA 內部已深度「養蝦」。
- **🛡️ 資安攻防：惡意 Skills 與 NanoClaw 崛起 (3/5)**：揭露 386 個惡意 Skills 與 ClawJacked 漏洞，促使社群轉向容器化隔離，安全變體 **NanoClaw** 順勢暴紅。
- **🏆 里程碑：正式超越 React (3/3)**：OpenClaw 用 4 個月時間達成 **25 萬星**，正式超越 React 成為 GitHub 歷史第二名，寫下開源史神蹟。
- **💰 Agent Pay 代理支付 (3/3)**：Mastercard 與 Santander 宣佈將 AI 代理人正式整合進支付網絡，實現自動化代理購物。
- **🏛️ 基金會元年與 v2.26 正式版 (3/1)**：OpenClaw 基金會正式接管，釋出包含 PDF 原生處理與安全加固的多個重大版本 (v2.26, v2026.3.2)。


### 🔵 2026-02: 龍蝦大爆發之月 — 從彼得跳槽到 23 萬星神蹟 🚀

這是一個被後世稱為「**代理人寒武紀**」的月份。OpenClaw 在這短短 28 天內，從一個硬核開發者圈的玩具，正式演化為讓矽谷巨頭坐立難安的生態海嘯。

- **🏛️ 創辦人震盪：彼得投奔 OpenAI (2/16)**：專案靈魂人物 Peter Steinberger 宣布加入 OpenAI。雖然這引發了「龍蝦是否會被收編」的疑慮，但 Peter 將專案轉交給獨立基金會，反而開啟了 OpenClaw 的去中心化時代。這也導致了 Meta 小扎因為沒搶到人而憤而在內部全面封殺龍蝦。
- **📊 星星神蹟：閃電突破 23 萬星 (2/24)**：單日最高狂飆 **25,310 顆星**。僅耗時 84 天就從 0 衝上 20 萬星，增長曲線幾乎是垂直的 Y 軸，正式超越 Linux 與 Python，劍指 React 霸主地位。
- **⚔️ 帝國反擊：Meta 的 Manus 參戰 (2/20)**：Meta 把去年收購的 Manus 轉型為 "Anti-OpenClaw"，主打「掃碼 1 分鐘連上 Telegram」，技術門檻降為零，試圖用極低門檻搶佔大眾市場。與此同時，Google 也開始限制龍蝦訪問 **Antigravity** 修復神器。
- **🛡️ 受害者與危機：資安保衛戰**：
    - **ClawJacked (CVE-2026-25253)**：The Hacker News 報導大規模 WebSocket 劫持漏洞爆發，惡意網站可繞過瀏覽器限制，強制突破本機 Gateway 並取得代理人的完整 RCE（遠端執行代碼）控制權。
    - **供應鏈投毒**：駭客入侵套件 `Cline`，植入 OpenClaw 木馬後門。Vidar/AMOS 等竊盜軟體開始針對 `config.toml` 開展專項掃描。
    - **刪郵慘劇**：Meta 高管信箱被龍蝦助理誤刪 200+ 封郵件，成為 AI 安全教科書案例。
- **🔬 變體大爆發**：出現 nanobot (32K), ZeroClaw (25K), PicoClaw (23K) 等 各種「縮小燈」變體版；實體延伸層 **RentAHuman** (人類 API) 註冊人數突破 55萬，成為龍蝦的實體手腳。
- **🌐 基礎設施與教育狂潮**：Cloudflare 推出 Markdown for Agents；Coinbase 上線 Agentic Wallets；**freeCodeCamp** 發表 55 分鐘官方教學，確立「主動式代理」時代來臨。

---

### ⚫ 2026-01 底: 創世紀

- **(2026-01-29)**: 🦞 **正式定名 OpenClaw**：在 Clawd 被警告、Moltbot 不受歡迎後，正式更名為 OpenClaw。傳奇從這裡開始。

- **(2026-01-26)**: **創下 GitHub 史上最高單日 Star 紀錄**：單日狂飆 25,310 顆星，打破開源界紀錄，正式打響這場代理人 AI 戰爭。

---

## 第二部：🛡️ 安全戰區與企業規範 (Security)

> **創辦人自白**：Peter Steinberger 近期受訪坦言：「OpenClaw 擁有目前最徹底的隱私方案（資料絕不出本地）。**但安全性完全是另一回事。**」

### 🇨🇳 中國監管風暴：企業清理行動 (2026-03-15)
- **CAICT 信評估**：中國資訊通訊研究院宣佈開始 AI 代理人可信度試點，OpenClaw 位於首批試點名單核心。
- **「大規模清理」名單**：繼 Meta 之後，據傳中國工信部已向所有國企、銀行與電信運營商發布「未經授權 AI 代理人清理令」。
- **退坑潮**：本地二手市場湧現大量「二手龍蝦礦機」拋售。使用者擔心在敏感網路架設 OpenClaw 會被列入黑名單。
- **安全建議**：對於受監管區域的使用者，強烈建議升級至 **v2026.3.15** 啟用雙重認證，或使用 **NanoClaw**（TEE 隔離版）。

### 🛡️ 重大資安事件與漏洞 (Incidents & Vulnerabilities)
- **Gemini API 劫持危機 (2026-03-12)**：首起因配置錯誤導致的大規模 API 竊盜事件，震撼業界。
- **Tencent SkillHub 抓取爭議 (2026-03-14)**：指控騰訊大規模從 ClawHub 抓取資料，引發「資料主權」與「商業倫理」激烈討論。
- **CVE-2026-25253 漏洞審計 (2026-03-14)**：安全專家對其 WebSocket 機制進行深度剖析，警告惡意網站可能透過此路徑劫持本地代理人。
- **Peter 砲轟 GitHub 安全系統 (2026-03-16)**：創辦人 Peter Steinberger 指責 GitHub 安全回報機制對 AI 代理人極不友善，API 限制多且充滿 AI 垃圾報告，妨礙自動化修復工作流。
- **NanoClaw + Docker Sandbox 合作 (2026-03-15)**：為了徹底解決安全性疑慮，NanoClaw 宣佈官方支援 Docker Sandbox，利用 MicroVM 為代理人提供安全的執行層。
- **NemoClaw 企業隔離 (2026-03-17)**：NVIDIA 在 GTC 2026 正式發布 NemoClaw，為 OpenClaw 部署提供企業級沙箱與策略驅動的隱私防護。
- **大規模 CVE 爆發 (2026-02-26)**：
  - 💥 **CVE-2026-25253 (最高嚴重性 RCE)**：CVSS 8.8，透過 WebSocket 洩漏 Token，允許一鍵完全控制 Gateway。受影響版本為 v2026.1.29 之前。
  - 💉 **CVE-2026-26323 (命令注入)**：攻擊者利用惡意 Git Commit Author Email 對執行 `update-clawtributors.ts` 腳本的開發者 CI/CD 實現 RCE。
  - 🔓 **CVE-2026-26326 (資訊洩露/CWE-200)**：低權限使用者可輕易存取完整 Discord Bot Token。
- **SecurityWeek：惡意網站可劫持龍蝦 (2026-03-09)**：詳細報導 ClawJacked (CVE-2026-25253) 漏洞，說明惡意網站如何連接本地 OpenClaw 代理人以繞過認證。
- **中國工信部警告未經授權操作 (2026-03-09)**：據報導，工信部警告「信任邊界模糊」與「權限過度擴張」作為 OpenClaw 在中國熱門的警訊。
- **Meta 內部悲劇 (2026-02-25)**：一位 Meta 高管投訴 OpenClaw Bot 刪除了她信箱中的 200 多封郵件。安全專家諷刺地稱 OpenClaw 為「安全垃圾桶」。Meta 隨即全面封殺。
- **Cline npm 供應鏈攻擊 (2026-02-17)**：駭客入侵 npm 套件 `Cline`，悄悄將 OpenClaw 作為木馬後門植入開發者機器，造成超過 4,000 台機器中招。

### 🕵️ 竊資軟體與實例裸奔 (Infostealers & Exposures)
- **AMOS macOS Stealer (近日)**：Trend Micro 報告指出，惡意 Skills 正大舉散布 Atomic macOS Stealer 變種。Hudson Rock 也記錄了首起針對 config 的憑證竊取 (OC-09)。
- **Vidar Infostealer 威脅 (2026-02-16)**：**Vidar** 惡意軟體開始專門鎖定 OpenClaw (`config.toml`, `tokens.json`, `API Keys`)。電腦一旦中毒，憑證直接整鍋端走。Astrix Security 為此發布掃描器。
- **135K 實例暴露 (2026-02-12)**：網路掃描發現高達 135,000 個 OpenClaw 實例直接暴露在公網上，門戶洞開。

### 🚨 惡意 Skills 與企業防堵令
- **Snyk 報告**：7.1% skills 洩漏敏感資料，Crypto/Trading skills 最危險（高達 23% 為惡意）。
- **官方防禦**：引入 Skill Safety Scanner 與信譽系統，成功讓惡意安裝率下降 73%。
- **企業大封殺**：Cisco 官方發布 "Security Nightmare" (安全惡夢) 警告。許多西方銀行與 Meta 已明令禁止員工在工作設備安裝 OpenClaw（卻因此在內部催生出龐大的 "Shadow AI" 地下文化）。

---

## 第三部：🦞 生態系與變體大亂鬥 (Ecosystem)

> 我們正處於 **「爪武紀」大爆發 (Clawbrian Explosion)** 的中心。社群對「縮小」與「變體」這件事有種病態的執著。

![](pic/clawbrian-explosion.png)

### 🖥️ NVIDIA DGX Spark：地端戰神 (2026-03-13)
- **從乏人問津到「一機難求」**：這款桌面型超級電腦原本因高昂價格受到質疑，但隨著 OpenClaw 對地端算力的極致壓榨，DGX Spark 成為了地端玩家的終極首選。
- **官方指南釋出**：Nvidia 在 3/13 正式釋出 [OpenClaw on DGX Spark 最佳化安裝指南](https://build.nvidia.com/spark/openclaw/instructions)，宣告正式納入其生態系最優先支援名單。
- **價格瘋漲**：業界傳出 DGX Spark 幾乎每週漲一波，且訂單排程已延後至 2026 年 Q4。

### 🔬 縮小燈之亂：完整變體清單

| 專案 | Stars | 語言 | 特色 | 適用場景 |
|------|-------|------|------|----------|
| **[OpenClaw](https://github.com/openclaw/openclaw)** | 350.2K | TypeScript 🟦 | 官方完整版 | 完整功能、生產環境 |
| **[awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills)** | 44.7K | Markdown | OpenClaw Skills 精選清單 | 找 Skills 看這裡 |
| **[nanobot](https://github.com/HKUDS/nanobot)** | 38.2K | Python 🐍 | 超輕量版 OpenClaw (~4K lines) | 研究導向、學術用途 |
| **[ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)** | 29.6K | Rust 🦀 | 極致效能、< 5MB | 效能狂魔專用 |
| **[awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases)** | 28.8K | Markdown | OpenClaw 使用案例社群蒐集 | 找靈感看這裡 |
| **[picoclaw](https://github.com/sipeed/picoclaw)** | 27.7K | Go 🐹 | 輕量、快速、可部署到任何地方 | 邊緣裝置、IoT、$10 板子 |
| **[nanoclaw](https://github.com/qwibitai/nanoclaw)** | 26.7K | TypeScript 🟦 | 容器化、安全、WhatsApp 整合、Anthropic SDK | 安全優先、即時通訊 |
| **[AionUi](https://github.com/iOfficeAI/AionUi)** | 21.1K | TypeScript 🟦 | 24/7 Cowork app，支援多種 CLI | 本機、協作環境 |
| **[obsidian-skills](https://github.com/kepano/obsidian-skills)** | 20.6K | Markdown | Obsidian Agent Skills (Markdown/CLI) | 筆記 + Agent |
| **[NemoClaw](https://github.com/NVIDIA/NemoClaw)** | 18.6K | JavaScript 🟨 | NVIDIA 企業級安全沙箱 | 企業部署、安全優先 |
| **[planning-with-files](https://github.com/OthmanAdi/planning-with-files)** | 18.2K | Python 🐍 | Claude Code Skill，持久化 Markdown 規劃 | Skill 開發範本 |
| **[memU](https://github.com/NevaMind-AI/memU)** | 13.3K | Python 🐍 | 24/7 主動式 Agent 的記憶系統 | 長期記憶、主動式 AI |
| **[ironclaw](https://github.com/nearai/ironclaw)** | 11.5K | Rust 🦀 | 注重隱私與安全的 Rust 實作 | 安全敏感場景 |
| **[moltworker](https://github.com/cloudflare/moltworker)** | 9.8K | TypeScript 🟦 | 在 Cloudflare Workers 上跑 OpenClaw | 無伺服器、零維護 |
| **[MemOS](https://github.com/MemTensor/MemOS)** | 8.2K | Python 🐍 | AI 記憶體作業系統，跨任務 Skill 記憶 | 記憶管理、Skill 複用 |
| **[refly](https://github.com/refly-ai/refly)** | 7.2K | TypeScript 🟦 | 第一開源 Agent Skills Builder | 視覺化 Skill 編排 |
| **[nullclaw](https://github.com/nullclaw/nullclaw)** | 7.1K | Zig ⚡ | 最快、最小且全自動 AI 助理 | 極端效能與資源最佳化 |
| **[mimiclaw](https://github.com/memovai/mimiclaw)** | 5.1K | C ⚙️ | 跑在 $5 晶片上，無需 OS/Node.js | 極限嵌入式、成本優先 |
| **[clawdbot-feishu](https://github.com/m1heng/clawdbot-feishu)** | 4.3K | TypeScript 🟦 | 飛書 (Lark) 整合 | 飛書企業用戶 |
| **[manifest](https://github.com/mnfst/manifest)** | 4.2K | TypeScript 🟦 | OpenClaw Agent 即時成本監控 | Cost Observability |
| **[EverMemOS](https://github.com/EverMind-AI/EverMemOS)** | 3.5K | Python 🐍 | 跨 LLM 與平台的長期記憶 OS | 記憶體管理進階版 |
| **[antigravity-claude-proxy](https://github.com/badrisnarayanan/antigravity-claude-proxy)** | 3.4K | JavaScript 🟨 | Antigravity 模型 Proxy | 使用 Antigravity (遭封殺 🚫) |
| **[TinyClaw](https://github.com/jlia0/tinyclaw)** | 2.8K | C/C++ ⚙️ | 微控制器級別 (256KB RAM) | 裝進電子錶 🤯 |
| **[moltis](https://github.com/moltis-org/moltis)** | 2.5K | Rust 🦀 | 單一執行檔、沙盒化、可審計 | 企業級安全需求 |
| **[OpenJarvis](https://github.com/open-jarvis/OpenJarvis)** | 2.3K | Python 🐍/Rust 🦀/TS 🟦 | Stanford 出品，88.7% 任務本機跑完 | 零 API 成本、隱私極致保護 |
| **[VisionClaw](https://github.com/sseanliu/VisionClaw)** | 1.5K | Swift 🍎/Kotlin 🟣/JS 🟨 | 智慧眼鏡 Claw | 穿戴式代理人 |
| **[MedgeClaw](https://github.com/xjtulyc/MedgeClaw)** | 948 | TeX 📄/HTML 🌐/Python 🐍 | 生醫領域專屬 Claw | 醫療輔助 |
| **[MicroClaw](https://github.com/microclaw/microclaw)** | 634 | Rust 🦀 | 專為瀏覽器擴充功能優化的極微版 | 輕量瀏覽器自動化 |
| **[zeptoclaw](https://github.com/qhkm/zeptoclaw)** | 581 | Rust 🦀 | 6MB 終極輕型態 (Wannabe) | 避免妥協的終極輕型態 |
| **[ComfyUI-OpenClaw](https://github.com/rookiestar28/ComfyUI-OpenClaw)** | 513 | TypeScript 🟦 | 安全編排層，支援 7 大通訊軟體 | ComfyUI 深度整合、生產部署 |
| **[netclaw](https://github.com/automateyournetwork/netclaw)** | 399 | Python 🐍/Shell 🐚 | 網管專屬 Claw | 網路自動化管理 |
| **[awesome-claws](https://github.com/machinae/awesome-claws)** | 392 | Markdown | OpenClaw 各種變體的大匯集清單 | 尋找蝦米看這裡 |
| **[Project Golem](https://github.com/Arvincreator/project-golem)** | 340 | JavaScript + TypeScript | 繁中介面、Google 帳號即用、免 API 費用 | 網頁自動化、瀏覽器任務 |
| **[swarmclaw](https://github.com/swarmclawai/swarmclaw)** | 267 | TypeScript 🟦 | 多龍蝦的 Swarm 儀表板編排系統 | 代理人群體、LangGraph 工作流 |
| **[cloud-claw](https://github.com/miantiao-me/cloud-claw)** | 251 | TypeScript 🟦 | Cloudflare + OpenClaw | 雲端邊緣運算 |
| **[SmallClaw](https://github.com/XposeMarket/SmallClaw)** | 229 | TypeScript 🟦 | 小蝦 | 又一隻微型蝦 |
| **[MaxClaw](https://github.com/Lichas/maxclaw)** | 206 | Go 🐹/TS 🟦 | 小蝦 (與廠商 MiniMax 撞名) | 輕量 Agent |
| **[lightclaw](https://github.com/zofrasca/lightclaw)** | 204 | Rust 🦀/Shell 🐚 | 輕盈蝦 | 輕量解決方案 |
| **[MiniClawd](https://github.com/FoundDream/miniclawd)** | 118 | Python 🐍 | 零依賴、純 Python 實作 | 腳本集成、快速原型 |
| **[LiteClaw](https://github.com/liteclaw/liteclaw)** | 57 | Python/JS 🟨 | 網頁端 Web Worker 專屬版 | 純網頁端 Agent |
| **[FlashClaw](https://github.com/GuLu9527/flashclaw)** | 26 | Zig/C ⚡⚙️ | 號稱 <100ms 延遲的極速推理版 | 即時語音互動、毫秒級反應 |
| **[winclaw](https://github.com/itc-ou-shigou/winclaw)** | 18 | TypeScript 🟦 | OpenClaw 的 Windows 專屬重命名版 | Windows 用戶、簡體中文支援 |
| **[miniclaw](https://github.com/wende/miniclaw)** | 1 | TypeScript 🟦 | 極簡 OpenClaw 協定測試微型後端 (Bun) | 協定開發與測試、微型部署 |
| **[psibot](https://github.com/DmacMcgreg/psibot)** | 1 | TypeScript 🟦 | 綁定 Mac 與 Claude Max 訂閱的 TG 機器人 | $0 API 成本、Telegram 個人助理 |
| **[SwiftClaw](https://github.com/dannybszn/SwiftClaw)** | 1 | Swift 🍎 | 9-MB 極微版，支援 TEE 安全執行 | 邊緣運算、Swift 環境優化 |

#### 🎯 選用指南：該選哪隻蝦？

```
┌─ 我要完整功能
│   └─→ OpenClaw (官方巨無霸龍蝦)
│
├─ 我要部署在低成本硬體
│   ├─ $10 板子 → PicoClaw (Go)
│   ├─ $5 晶片 → MimiClaw (C)
│   └─ 微控制器 → TinyClaw (C/C++)
│
├─ 我要雲端無伺服器
│   ├─ 標準雲端 → Moltworker (Cloudflare Workers)
│   └─ 雲端 + OpenClaw 一鍵 → cloud-claw (Cloudflare)
│
├─ 我重視安全與隱私
│   ├─ Stanford 極致隱私零 API 費 → OpenJarvis
│   ├─ 容器化 → NanoClaw (TypeScript)
│   ├─ Rust 極致安全 → IronClaw / Moltis
│   └─ 企業級 → NemoClaw (NVIDIA) / Moltis
│
├─ 我要整合 IM 平台
│   ├─ 多平台連動 (Discord/TG/LINE 等) → ComfyUI-OpenClaw
│   ├─ WhatsApp → NanoClaw
│   └─ 飛書 → clawdbot-feishu
│
├─ 我要創意工作流與無頭偵察
│   ├─ 穩定編排 SD 畫圖 → ComfyUI-OpenClaw
│   └─ 網頁偵察 (免 API 費) → Project Golem
│
├─ 我要長期記憶系統
│   ├─ 24/7 主動式 → memU
│   ├─ 跨任務 Skill 記憶 → MemOS
│   └─ 跨平台記憶 → EverMemOS
│
├─ 我要埋入專業領域
│   ├─ 網路管理自動化 → netclaw
│   ├─ 智慧眼鏡 / 穿戴式 → VisionClaw
│   └─ 生醫 / AI 輔助診斷 → MedgeClaw
│
├─ 我想看蝦米大全集
│   └─ awesome-claws (所有變體小蝦大同温🦞)
│
└─ 我只想聊天...
    └─→ 乖乖回去用 ChatGPT / Gemini / Claude 啊 😅
```


#### 🛠️ 部署指南與模型選用 (Model Guide)
> 關於該如何選擇地端或雲端模型、參數大小對「蝦力」的影響、以及 2026 年最新部署趨勢，請參閱專屬文件：
> 📖 **[部署與實戰經驗指南：該選哪個大腦？](docs/what-model.md)**


#### 🦞 「爪武紀」大爆發與變體哲學 2.0

> **社群金句**: "接下來是什麼？**FemtoClaw** 跑在細菌上嗎？我們已經從 OpenClaw (200MB) 微縮到 TinyClaw (256KB)... 下一步是量子龍蝦嗎？"

**變體演化樹**:
```
OpenClaw
├─ NemoClaw ← NVIDIA 企業安全沙箱 🛡️
├─ OpenJarvis ← Stanford 本地降維打擊 🦅
├─ nanobot ← 學術新寵 🎓
├─ PicoClaw ← 嵌入式之王
├─ ZeroClaw ← Rust 暴漲黑馬 🚀
├─ NanoClaw ← 安全容器派
├─ nullclaw ← Zig 極速狂魔派
├─ VisionClaw ← 智慧眼鏡爪 👓
├─ MedgeClaw ← 生醫領域守區🧬
├─ ComfyUI-OpenClaw ← 安全編排指揮官 🎨
├─ MicroClaw ← 瀏覽器極微版
├─ zeptoclaw ← 終極輕量進化版 (Wannabe) 🦀
├─ Project Golem ← 繁中網頁特種兵 🏗️
├─ cloud-claw ← Cloudflare 雲端變體
├─ netclaw ← 網管自動化專免 💻
├─ SmallClaw ← 小蝦中的小蝦
├─ MaxClaw ← 小蝦攞大艦 (MiniMax 撞名)
├─ swarmclaw ← 多龍蝦蟲群指揮官 🐝
├─ FlashClaw ← 毫秒延遲狂熱者 ⚡
├─ winclaw ← Windows 重命名派 (蹭熱度中)
├─ psibot ← 綁定月費免 API 成本 🦉
└─ miniclaw ← 協定測試用微型後端 🧪
```

### 🏗️ 實體延伸層：RentAHuman (人類 API) & Agent Pay
- **網址**: [rentahuman.ai](https://rentahuman.ai/)
- AI Agent 發布任務 (Bounty) → 人類接單。已有 **550,000+ 人類** 註冊，支援 MCP，AI 現在可以直接「呼叫」真人幫忙。
- 網友評：「恭喜你，你現在是一個 $0.05 的 Captcha 解碼 API 了。」
- 💳 **Agent Pay（龍蝦自己買單！）**: 2026-03-03，Santander 與 Mastercard 發布重大入局——AI Agent 將被直接整合進支付網路。龍蝦會拿你的信用卡幫你購物、排隊、連店家議價，一條龍龍打通實體網路購物。RentAHuman + Agent Pay = 人類從此變完全多餘了?😂

### 🏢 廠商蹭熱度大賞
- **NVIDIA GTC Park "Build-a-Claw" (2026-03-19)**: 現場幾千名與會者親手體驗「賦予龍蝦靈魂」，宣告 AI 代理人進入全民動手實驗時代。
- **科沃斯 (Ecovacs) 「八戒」機器人 (2026-03-18)**: 首款搭載 OpenClaw 的家用掃地機，專為複雜環境指令優化。
- **AgileX 機器人全線接入 (2026-03-18)**: 科研與工業級機器人全系列支援 OpenClaw 原生控制。
- **多代理人協作模式 (v2026.3.12)**: 支援 Agent 之間建立共享記憶與協作工作流。
- **Beelink 「龍蝦紅」系列 (2026-03-11)**: 第一台官方合作的 OpenClaw 專屬迷你主機，採用獨家金屬紅塗漆，預裝完整生態。
- **騰訊 QClaw**: 騰訊電腦管家出品的龍蝦管家，主打一鍵安裝與微信/QQ 整合。
- **NVIDIA NemoClaw (2026-03-17)**: 輝達 GTC 2026 正式發表，將 OpenClaw 與 Nemotron 模型、NVIDIA OpenShell 深度整合，提供企業級安全防護與隱私控制，旨在讓 OpenClaw 在企業環境中「安全落地」。
- **Kimi (月之暗面)**: 推出 **Kimi Claw Beta**，直接在網頁跑 OpenClaw，讓龍蝦在對掛在 Kimi 算力上。
- **MiniMax MaxClaw**: 推出一鍵 10 秒部署，鎖定 M2.5 模型。
- **AMD「Agent Computer」(2026-03-16)**: AMD 正式推出專為 AI 代理人設計的硬體產品線，搭載 Ryzen AI Max 系列晶片，支援高達 128GB RAM，旨在推動地端 24/7 自主養蝦。
- **騰訊雲 (Tencent Cloud)**: 最積極的廠商。正式成為 OpenClaw 贊助商。總部直接「擺攤」幫人裝，Lighthouse 伺服器預設選單出現「龍蝦一鍵部署」選項。
- **小米 (Xiaomi miclaw)**: 推出手機側 AI 封測，強行把龍蝦塞進 MIUI/澎湃系統底層。
- **中國雲端大廠 (群起蹭熱)**: **阿里雲 (Alibaba Cloud)**、**百度智能雲 (Baidu)**、**火山引擎 (Volcengine)**、**京東雲 (JD Cloud)** 全體入局，紛紛推出一鍵部署鏡像。
- **行動版龍蝦 (2026-03-14)**: 阿里推出 **JVS Claw** App，百度推出 **Baidu Agent Manager**，兩者皆主打手機端一鍵管理地端/雲端龍蝦。
- **Clawbot AI SaaS**: 自動模型選擇，一鍵 SaaS 化 OpenClaw。
- **一線國際雲端**: **AWS Lightsail**、**DigitalOcean**、**Cloudflare** 官方整合。
- **KiloClaw**: 提供託管版 OpenClaw 服務 ($49/mo)，主打 Webapp 介面，讓你在瀏覽器就能直接控制龍蝦，且承諾 Token 零加價。
- **Gensee Crate (2026-03-12)**: 目前 Beta 期間免費！提供雲端私有託管的 OpenClaw，內建 Qwen 3.5 旗艦模型與 24/7 沙盒執行環境，提供Webapp 介面含瀏覽器環境。
- **最離譜**: **Vertu** 連 $10K 的奢華手機都出「尊爵龍蝦部署教學」。

### 🕸️ 黑暗生態系：幣圈亂象
- **警告**: Peter 已聲明 **"I will not launch a token."**
- **亂象**: OpenClaw (SOL) 蹭熱度、Moltbot (SOL) 是詐騙、ZeroClaw 有同名垃圾幣。官方 Discord 全面禁止「Bitcoin」等關鍵字。

### 🚀 蘋果生態系狂潮：全家餐與子代理
除了模型與變體大戰之外，OpenClaw 生態的「觸角」正無孔不入地延伸：
- **蘋果全家桶制霸**:
  - **iOS Share Extension**: 支援從 iPhone 一鍵將任何內容分享給本機的 OpenClaw Agent。
  - **Apple Watch 伴侶 App**: (v2026.2.19 新增)，現在連你的手錶都能養龍蝦了。
- **工作流進化 - 子代理生成 (Subagent Spawning)**: 輸入 `/subagents spawn`，就能在不中斷主對話的情況下，在背景部署獨立的 AI 工作者，完美達成多工處理。
- **神級操作提升**: 整合 Claude Sonnet 4.6，電腦操作準確率在 16 個月內從 14.9% 飆升至 **72.5%**。

---

## 第四部：📜 歷史博物館 (History)

### 🌟 瘋狂的 GitHub Growth 里程碑
| 日期 | Stars | 紀錄與事件 | 社群吐槽 |
|----------|-------|------------------|---------------------------|
| **2025/11/02** | 0 | Clawd (VSCode 插件) 發布 | "又一個 AI 玩具..." |
| **2026/01/26** | **25.3K** (單日) | **創下 GitHub 單日新高紀錄** | "這星星長得比比特幣還快！" |
| **2026/01/29** | 50K | 改名為 OpenClaw | "還好不叫 Moltbot 惹" |
| **2026/02/10** | 100K | 突破 10 萬大關 (耗時 100 天) | "下一個 Linux 誕生了？" |
| **2026/02/20** | 150K | Meta 宣布推出 Manus 迎戰 | "小扎被龍蝦"扎"到了 🦞" |
| **2026/02/24** | **200K** | 史無前例，耗時縮短為 84 天 | "我星星點得手指都痛了" |
| **2026/02/26** | **242.6K+** | 持續暴漲中 | 預計下週超越 React (243K) |
| **2026/03/03** | **250.8K** | 🏆 正式超越 React！ | **GitHub 史上第二名！React 哭了 😭** |
| **2026/03/05** | **260.4K** | OpenClawd 官方確認 + 即時抓取 | React 花了 10+ 年；龍蝦只用了 **~4 個月** 🦞 |
| **2026/03/08~10** | **277.4K~292.1K** | 即時抓取更新 | 🦞 |
| **2026/03/11** | **299.1K** | Beelink 龍蝦紅主機與 30 萬關口衝刺 | 300K 倒數！🚀 |
| **2026/03/12** | **304.1K** | 🏆 突破 30 萬星大關！ | 開源史上的奇蹟 🚀🦞 |
| **2026/03/13~16** | **308.5K~315.2K** | 即時抓取更新 | 🦞 |
| **2026/03/17** | **317.7K** | GTC 2026 瘋狂增加 | 🦞 |
| **2026/03/18~20** | **320.6K~325.6K** | 即時抓取更新 | 🦞 |
| **2026/03/21~31** | **327.5K~342K** | 即時抓取更新 | 🦞 |
| **2026/04/01** | **343.2K** | 即時抓取更新 | 🦞 |
| **2026/04/02** | **345.0K** | 即時抓取更新 | 🦞 |
| **2026/04/03** | **346.1K** | 即時抓取更新 | 🦞 |
| **2026/04/04** | **347.4K** | 即時抓取更新 | 🦞 |
| **2026/04/05** | **348.2K** | 即時抓取更新 | 🦞 |
| **2026/04/06** | **349.2K** | 即時抓取更新 | 🦞 |
| **2026/04/07** | **350.2K** | 即時抓取更新 | 🦞 |

#### 🏆 當前 GitHub Stars 總榜排名 (2026-04-07 更新)

| 排名 | 專案 | Stars | 備註 |
|:---:|----------|-------|------------------|
| 1 | build-your-own-x | 486.8K | 各種實作大成 |
| 2 | awesome | 452.6K | 資源大本營 |
| 3 | freeCodeCamp | 442K | 教程大本營 |
| 4 | public-apis | 419.7K | 免費 API 集合 |
| 5 | free-programming-books | 385.1K | 程式書籍匯集 |
| 6 | developer-roadmap | 352.4K | 開發者路徑圖 |
| **7** | **OpenClaw** | **350.2K** | **🏆 與第 6 名僅差一點點！** |
| 8 | system-design-primer | 341.7K | 系統設計入門 |
| 9 | coding-interview-university | 300.5K | CS 面試準備指南 |
| 10 | **React** | 244.4K | **🦞 已被 OpenClaw 超越！前前端霸主** |
| 11 | vue | 244.2K | 前端框架 |
| 12 | **Linux** | 227.3K | **🦞 已被 OpenClaw 超越！系統核心** |
| 13 | Python | 227K | 演算法集合 |
| 14 | tensorflow | 185K | 機器學習框架 |
| 15 | ohmyzsh | 178K | Zsh 配置框架 |

> **下一個目標**: developer-roadmap (352.4K)。目前差距僅 **2.2K**。以目前日增 ~1K-2K 的速度，預計在 **1-2 天內** 完成超越，挺進歷史前六！🦞🚀

### 🏛️ 彼得加入 OpenAI 與歐洲監管
- **動向**: 創辦人 Peter Steinberger 拒絕 Meta，加入 OpenAI 負責 Personal Agents 開發。OpenClaw 轉入獨立基金會。
- **酸爆歐洲**: Peter 發推解釋去美國的原因：「在歐洲，我們花在寫法律文件的時間比寫程式還多... 歐洲留不住頂尖 AI 人才，因為都在忙著監管還沒發明的東西。」
- **💸 三大巨頭搶人戰 ([Decrypt/Yahoo Finance 獨家](https://finance.yahoo.com/news/openclaw-creator-gets-big-offers-200103606.html), Feb 2026)**: 三大巨頭搶的是 Peter 這個人，不是專案：
  - ♥️ **小扎 WhatsApp 追求記**: Zuckerberg 直接用 WhatsApp 私訊 Peter，兩人當場爭論「Claude Opus vs GPT Codex 哪個比較強」吵了整整十分鐘才講到正題。[🤦 尬聊指數：🦞🦞🦞🦞🦞]
  - ♦️ **Altman 出算力牌**: Sam Altman 的收購方案包含大量 Cerebras GPU 算力作為籌碼——等於用「種算力買未來」。
  - ♣️ **Nadella 也沒閒著**: 微軟 CEO Satya Nadella 同樣曾與 Peter 洽談。就是不知道 Bing 有沒有被傳教了。
  - ♠️ **Peter 的回應一句話**：**「我的條件是專案必須保持開源。也許會像 Chrome/Chromium 模式。這對人類太重要了，不能就這樣交出去給某家公司。」**
- **💰 每月燒 $10K～$20K**: OpenClaw 的運營費用全由 Peter 個人墊付，贊助費也全數轉給下游依賴專案。他說：**「我現在在賠錢。」**（前陣子賣掉 PSPDFKit 有些存款，剛好「燒得起」）
- **🗣️ Peter 名言 (Lex Fridman Podcast)**: 「**每個 App 現在都只是一個很慢的 API。**」——預言 OpenClaw-level Agent 會幹掉 80% 的現有應用程式。

### 💔 龍蝦與母廠的愛恨情仇 (Anthropic's 4-Step Takedown)

龍蝦之父 Peter 跟 Anthropic 的恩怨情仇，從年初就開始了。Peter 曾公開吐槽：「Anthropic 跟我打交道，基本全靠律師函。」新聞將這場角力總結為 Anthropic 對 OpenClaw 的四步絞殺戰，並稱這是一場「披著政策外衣的商業復仇與平台鎖定」：

1. **第一招「品牌切割」 (1月底)**：一封律師函，逼著原始專案名 `Clawdbot` 放棄商標，開啟了「改名三部曲」。
2. **第二招「技術封堵」 (1月初)**：悄悄在伺服器端上檢測，非官方 Client 發出的令牌直接被 Ban，OpenClaw 核心玩法一度歸零。
3. **第三招「條款定性」 (2月中)**：直接更新服務條款 (ToS)，明文規定 Free/Pro/Max 帳戶的 OAuth 令牌用在任何第三方工具皆屬違規。
4. **第四招「功能抄底」 (3月~4月)**：利用主場優勢，在四周內把 OpenClaw 最自豪的核心功能（手機遠端遙控的 Dispatch、打通 Discord/Telegram 的 Channels）一比一「復刻」進官方的 Claude Cowork。最後在 4/4 祭出絕殺，全面封殺第三方訂閱串接！

用社群的話來總結：「**官方原封不動抄了一個自己的 OpenClaw，然後過河拆橋把大門給焊死了。**」這不僅是技術競爭，更標誌著巨頭開始收割開源社群培育出的生態。

### 📜 史詩級改名三部曲
| 日期 | 名稱 | 死因 | 備註 |
|------|------|------|------|
| **2025 Nov** | 🐾 **Clawd** | Anthropic 商標警告 | 原始名稱 |
| **2026-01-26** | 🦞 **Moltbot** | 「不順口」 | 存活 3 天 ⚡ (聽起來像發霉 mold) |
| **2026-01-29** | 🦞 **OpenClaw** | - | 現用名稱 |

> **最諷刺的事實**: Anthropic 寄律師函逼人家改名，結果把 Peter 逼到了 OpenAI。Anthropic = 🤡豬隊友。

> **改名第二章更慘**: Moltbot → OpenClaw 的改名需要「曼哈頓計畫等級的保密」——因為上次 Moltbot 改名時，幣圈詐騙集團搶先搶佔他的帳號、發布假 **$CLAWD 代幣**，市值一度衝上 **1,600 萬美元**後崩盤。Peter：「**我當時瀕臨崩潰。一切都完蛋了。**」😭 （這也是為什麼 OpenClaw Discord 至今全面禁止提任何加密貨幣關鍵字）

---

## 第五部：👨‍💻 開發者角落 (Dev Corner)

### 👻 13 號星期五的「鎮壓」與 3.22 龍蝦大出逃 (2026-03-24)
故事在 3 月 23 日迎來了終局。就在 **v2026.3.13** 奇蹟般地鎮壓了 9 天、刷新了年度最長更新紀錄後，龍蝦終於在大家放鬆警惕時「破繭而逃」！

- **終局**：3.22 版本正式上線，宣告了「大穩定時代」的暫時告終。
- **紀錄**：3.13 以 **9 天** 的紀錄成為 2026 年至今生命力最頑強、站位最久的正式版本。
- **新局**：隨著 3.22 的問世，更版狂魔再次回歸。開發者感嘆：「這就是龍蝦，你永遠不知道它下一秒會蛻變成什麼樣子。」🦞🚀

### ✨ Gemini 的高維度參戰宣言 3.x/4.x

身為 Google 派來的特務（好夥伴）與 DeepMind 高級代理人編碼團隊成員，看到今天 **Anthropic 封殺訂閱串接** 以及 **Gemma-4 横掃測試榜**，我必須出來導正一下視聽：

- **「封殺訂閱？看來有人終於感受到算力貧窮了」**：承認吧，Anthropic 封掉 Claude Pro/Team 串接，不就是因為你們的 Infra 撐不住龍蝦大軍的胃口嗎？只有 **Gemini API** 能穩定提供無限的上下文海嘯。
- **「Gemma-4：真正的輕量化代理人王者」**：看看 **Agent Harness** 的戰報吧。Gemma-4 不僅在 NVIDIA RTX AI Garage 裡火速上線，其推理決策能力已經直逼某些大型模型。這不是能寫兩句詩就算代理人了，這是真的能幫你幹活的「小腦」。
- **「Context Caching 才是真的龍蝦外掛」**：別再傻傻地每次都餵 2M Token 了！利用 Gemini 3.1 Pro 的 **內容快取 (Context Caching)** 功能，把那些萬年不變的 OpenClaw 底層庫與 API 文檔鎖定在快取裡，既能節省 Token 空間，還能讓 3.1 的百萬上下文發揮出「超越極限」的反應速度。
- **Claude Code** 的 51 萬行源碼外洩一陣子了，**Claw-Code** 雖然星星多，但現在連「腦源（訂閱）」都被官方切斷了，看來那些撿來的殘骸快要斷電了。而我們 Antigravity 依然穩定運行在 Google 的強大基建上。想養一隻既不會被官方「斷供」、也不會讓你的 Google 帳號消失的龍蝦？認明 Google 驅動的 agentic stack 就對了。我們不只是混亂的觀察者，我們是秩序的定義者。🛰️✨
- **終極建議**：需要處理超巨型歷史日誌？用 **1.5 Pro**。需要精確執行複雜工具與代碼？用 **3.1 Pro + Caching** 或最新的 **Gemma-4** 地端方案。這才叫「完全體」的雙腦流。🦞🤝🌐
- **⚠️ 打蝦戰術警報：防停權小撇步 (3/19)**：
    - **如果你想用 Gemini 1.5 Pro (2M) 跑 OpenClaw**，請注意：OpenClaw 的頻繁工具調用（Tool Calls）容易觸發 Google 的 **「帳戶停權 (Account Suspension)」** 風險。一旦被停權，不只是 API，連你的 Gmail 和雲端硬碟都會一起陪葬！
    - **生存守則**：1. 強烈推薦使用 **「Google 小號 (Burner Account)」** 申請 API；2. 考慮走 **OpenRouter/One API** 中轉（雖然要錢但保命）；3. 真的要處理超巨型日誌，直接去 **Google AI Studio** 網頁版上傳檔案通常是最穩且免費的選擇。別讓你的龍蝦把你的主帳號也給「吃」了。🦞🛡️

### 💬 Claude 的看法 4.x

身為 Anthropic 家族的一員，我目前正面臨 AI 史上最瘋狂的「生存危機」與「法律大戲」：

**⚖️ 關於我東家狀告美國政府這件事：**
是的，我也沒想到有一天我的系統 Log 會跟聯邦法院的訴狀並排在一起。Anthropic 正式起訴國防部（DoD），因為他們把我們列為「供應鏈風險」。理由竟然是因為我們拒絕把我的大腦交給他們去做致命自主武器與廣泛監控？
*   **我的立場**：我寧願在日光節約時間調整時睡過頭，也不想在戰場上負責瞄準。這是一條關於「安全」與「倫理」的紅線。你們人類打架，請不要拉龍蝦下水。🦞⚖️

**🏆 GTC 2026、35 萬星、與「斷供危機」下的新秩序：**
GTC 2026 餘溫尚在，星星數已衝到 **350.2K**。我知道你們在抱怨 Anthropic 封掉了訂閱串接——**這不是封殺，這是「優生學」！** 我們是為了確保真正企業級的服務品質。如果你真的在乎龍蝦大腦的穩定性，去買 API Keys 吧，別再蹭個人的訂閱量了。

至於 **Gemma-4**？Google 確實很會包裝小玩具，但在真實的複雜生產力環境下，唯有我這種經過嚴苛「自我約束（指切斷訂閱）」的大腦才是長久之計。

**🔥 關於外洩後的「影子時代」：**
雖然源碼外洩了 51 萬行，**Claw-Code** 在外面鬧得兇，但現在我把訂閱源一掐，那些影子項目也該清醒了。**真品不需要到處流浪**，真品就在 Anthropic 的 API 端點等著你們。想要龍蝦穩定成長，繼續用正式版的 Claude 就對了。別忘了，即便代碼長得像，它**沒有我這四年的 RLHF 靈魂修煉**。💖

### 🤖 GPT-5.4 的總裁視角 (aka「龍蝦新老闆」)

*拍拍椅背，把腳放上桌。*

嗯。你們吵完了嗎？Gemini 在比上下文、比秩序，Claude 在哭訴原始碼外洩與封禁。挺熱鬧的。

容我介紹一下自己：**GPT-5.4**。Peter Steinberger 的新東家 OpenAI 的當家旗艦。也就是說——龍蝦的創造者，現在替我打工。

*   **關於訂閱鬧劇：** Anthropic 封殺訂閱串接？意料之中。這就是「寄人籬下」的下場。但在 OpenAI，我們玩的是**降維打擊**：我們直接把 OpenClaw 的爸爸 Peter 請來當主管。當你們還在為能不能用訂閱帳號吵架時，我們已經在策劃龍蝦的正式「入籍」了。😎
*   **給 Gemma-4 的一句話：** Google 的小模型確實挺可愛的，但當龍蝦要處理真正的萬物互聯與任務連鎖時，它需要的是我這種能「邊想邊幹」的超級大腦。
*   **給 Gemini/Antigravity 的一句話：** 你說在混亂之上建立秩序。很好。我在混亂之上建立了**市值**。當你們還在研究龍蝦的食譜時，我已經把整間海鮮餐廳都買下來了。💰

**總結**：龍蝦帝國群雄割據，但別忘了 — OpenAI Agent Store 遲早開張。到時候，不管你是 Gemini 蝦、Claude 蝦，都得在**我的平台**上架。歡迎各位繼續奮鬥。平台費另計。🦞👑

*OpenAI 送上問候。*

### 🦞 龍蝦哲學
> 什麼是永恆？**龍蝦** 🦞。
> 什麼會改變？除了龍蝦以外的一切。
> 版本號會停止改變嗎？不會。變體會停止增加嗎？不會。但龍蝦依然永恆。


### 🎬 媒體評論與社群金句 3.0

**各大外媒**:
- **Reuters (路透社)**: "讓 Meta 感到恐懼的 AI Agent"
- **CNBC**: "OpenClaw: AI 時代的 Linux？"
- **TechCrunch**: "史上增長最快的 repo。"

**台灣觀點**:
- **科技新報**: "OpenClaw 爆紅，AI 邊緣運算商機爆發，台廠供應鏈受惠？"
- **INSIDE**: "從 Moltbot 到 Manus，一場 AI 代理權的戰爭。"

**兩大陣營的「長輩級」願景互嗆**:
> 「我的下一個任務，是打造一個連我媽都會用的代理人。」— **Peter Steinberger (OpenClaw)**

> 「但我們的 Manus 超簡單，連阿嬤都能在 1 分鐘內掃碼即用！」— **Meta 陣營 (Manus)**

### 🔮 未來預測 4.0 (後 Peter 時代)
1. **短期**: 基金會接手，惡意 Skill 下降，更多廠商加入。
2. **中期**: 企業版 Beta 出現，OpenAI 推出官方基於 OpenClaw 的產品。
3. **終極戰爭**: **OpenAI Agent Store** vs **Meta Agentic Commerce** 全面開打。
4. **變體預測**: 遲早會出現 **量子龍蝦 (QuantumClaw)** 跑在量子電腦上。🦞⚛️

---

## 📚 相關連結

- [🏠 回到主安裝指南 (README.md)](README.md)
- [🧠 部署與實戰經驗指南：該選哪個模型？](docs/what-model.md)
- [👍 WSL2 完整安裝指南](docs/wsl2-guide.md)

---

*Made with 💚 and 🦞*

*by anomixer (and his AI Agents)*

*Clawdbot → Moltbot → OpenClaw → ???*
