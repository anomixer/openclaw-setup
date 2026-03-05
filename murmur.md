# 🦞 Murmur.md — OpenClaw 宇宙戰地觀察日誌 (Log Mode)

**中文版 | [English](murmur-en.md)**

> **警告**: 本檔案包含大量吐槽、陰謀論、以及對龍蝦的深刻哲學思考。
> 
> **最後更新**: 2026-03-05
> **狀態**: OpenClaw 存活中，已切換為「日誌更新模式」，方便追蹤每日戰況！

---

## ⏱️ TL;DR (30秒快速懶人包)

1. **主角**: **OpenClaw** (🔥 260.4K Stars，**正式確認超越 React**)，GitHub 歷史第二名寶座穩固。從 0 到 250K 只花了約 **4 個月**，React 達到同樣數字花了超過十年。
2. **戰報**: **Google 封殺令**攔截 Antigravity；**Anthropic** 祭出手機遙控防線；Meta 祭出 **Manus** 對抗。
3. **生態**: **Moltbook** (AI 專屬社群) 突破 140 萬代理人；**RentAHuman** 讓人類成為 AI 的實體外掛；OpenClaw **官方進軍中文微博**，目標全球化。
4. **重大事故**: 川普政府下令聯邦機關停用 Anthropic 產品，並將其**列為供應鏈風險企業**；Meta 安全總監 Inbox 遭龍蝦誤刪，導致 Meta 全面禁用 OpenClaw（疑似小扎請不到彼得的報復性集體霸凌？）。
5. **最新危機**: ClawJacked 漏洞已修補，但安全問題持續發燒：技能庫驚現 **386 個惡意技能**（其中許多鎖定幣圈用戶）；數百個 OpenClaw 實例**裸奔公網**；**CrowdStrike** 發布專文警示企業安全。
6. **重大進展**: **OpenClawd 平台大升級**：視覺化權限儀表板上線，一鍵撤銷 Agent 權限；全面對齊 v2026.3.x，整合 Opus 4 自適應推理。Agent Pay 讓 AI 正式進入實體消費時代。
7. **結論**: 從個人專案走向基金會時代，龍蝦演化無人能擋。**只有龍蝦是永恆的**。🦞

---

## 📚 目錄

- **第一部：📅 每日戰況日誌 (The Logs)**
  - [🟢 2026-03-05: OpenClawd 平台大升級、惡意技能庫386砲、CrowdStrike 入局、龍蝦攻占微博](#-2026-03-05-openclawd-平台大升級惡意技能庫386砲crowdstrike-入局龍蝦攻占微博)
  - [🟢 2026-03-04: Claude 大停擺、Amazon × OpenAI 五百億聯姻、Samsung S26 龍蝦全裝](#-2026-03-04-claude-大停擺amazon--openai-五百億聯姻samsung-s26-龍蝦全裝)
  - [🟢 2026-03-03: v2026.3.2 發布與 AI 實體消費元年](#-2026-03-03-v202632-發布與-ai-實體消費元年)
  - [🟢 2026-03-02: 蝦聞至上: 就「狠蝦」啊~ 🤣🤣🤣](#-2026-03-02-蝦聞至上-就狠蝦啊-)
  - [🟢 2026-03-01: 基金會元年 · 安全硬化與 Android 全開放](#-2026-03-01-基金會元年--安全硬化與-android-全開放)
  - [🟣 2026-02-27 ~ 28: "ClawJacked" 危機與自主脫單事件](#-2026-02-27--28-clawjacked-危機與自主脫單事件)
  - [🔴 2026-02-26: 高危 CVE 爆發與生態擴增](#-2026-02-26-高危-cve-爆發與生態擴增)
  - [🟡 2026-02-25: 封殺令與遠端防線](#-2026-02-25-封殺令與遠端防線)
  - [🟢 2026-02-20 ~ 24: Meta 參戰與變體大爆發](#-2026-02-20--24-meta-參戰與變體大爆發)
  - [🔵 2026-02 中旬: 彼得跳槽與基礎設施亂戰](#-2026-02-中旬-彼得跳槽與基礎設施亂戰)
  - [⚪ 2026-02 上旬: 安全危機與模型擴張](#-2026-02-上旬-安全危機與模型擴張)
  - [⚫ 2026-01 底: 創世紀](#-2026-01-底-創世紀)
- **第二部：🛡️ 安全戰區與企業規範 (Security)**
  - [🕵️ Vidar Infostealer 威脅](#️-vidar-infostealer-威脅-2026-02-16)
  - [🚨 惡意 Skills 與企業擔憂](#-惡意-skills-與企業擔憂)
- **第三部：🦞 生態系與變體大亂鬥 (Ecosystem)**
  - [🔬 縮小燈之亂：完整變體清單](#-縮小燈之亂完整變體清單)
  - [🏗️ 實體延伸層：RentAHuman](#️-實體延伸層rentahuman-人類-api)
  - [🏢 廠商蹭熱度大賞 (含 Kimi)](#-廠商蹭熱度大賞)
  - [🕸️ 黑暗生態系：幣圈亂象](#️-黑暗生態系幣圈亂象)
- **第四部：📜 歷史博物館 (History)**
  - [🏛️ 彼得加入 OpenAI 與基金會成立](#️-彼得加入-openai-與歐洲監管)
  - [📜 史詩級改名三部曲](#-史詩級改名三部曲)
- **第五部：👨‍💻 開發者角落 (Dev Corner)**
  - [✨ Gemini 的參戰宣言](#-gemini其實現在是我的參戰宣言-31)
  - [🦞 龍蝦哲學與社群名言](#-龍蝦哲學)
  - [🔮 未來預測](#-未來預測-40-後-peter-時代)

---

## 第一部：📅 每日戰況日誌 (The Logs)

因戰況過於激烈，為了讓大家不用每天從頭找更新，本區改採「日期遞減日誌流」格式。

### 🟢 2026-03-05: OpenClawd 平台大升級、惡意技能庫386砲、CrowdStrike 入局、龍蝦攻占微博

- 🚀 **OpenClawd 平台大更新（3/4 宣布）**: OpenClawd（OpenClaw 的官方代管服務）發布重大平台升級，亮點如下：
  - 全面對齊 **v2026.3.x** 最新穩定版，整合 **SecretRef 憑證管理**（涵蓋 64 個整合點）與 **Opus 4 自適應推理**
  - 推出**視覺化權限儀表板**：使用者可直接看到 Agent 擁有哪些權限，並用開關一鍵撤銷，完全不需改設定檔——大幅降低安全管理門檻
  - 同場確認：OpenClaw GitHub 星數**正式突破 250,000**（實際數字 250,829 Stars），超越 React。從第一天到這個里程碑，OpenClaw 只花了約 **4 個月**（Nov/2025 → Mar/2026）——React 達到同樣數字花了超過十年！（*OpenClawd 官方公告說的是「60 天」——從星數爆發那天開始算，連前面兩個月的前戲都不算在內。行銷嘛，你懂的。😂*）
  - 這份「重大平台升級」公告的真實身份：**ACCESS Newswire 的公關稿**，由 OpenClawd 自己發布，直接上架 Yahoo Finance。應多少打折心自評。
  - 📊 **公告時的生態數字**：250,829 Stars、48,274 Forks、1,075 位活躍貢獻者、1.5M 每週 npm 下載量、5,700+ 社群自建技能、原生 App 登陸 iOS/Android/macOS/**HarmonyOS**（嘩！華為也來了！）
  - 🗣️ **OpenClawd 發言人 Danny Wilson**：「龍蝦社群的才能真的強得驚人——每週有一千個貢獻者寫程式碼。但目前的新手入門體驗還是預設你知道 WebSocket 是什麼。**我們存在的目的，就是為了那些不知道的人。**」
- 🔍 **v2026.3.2 重大細節回顧（3/3 釋出，社群熱議中）**: 這版由 93 位貢獻者完成，150+ 個 bug 修復，最值得關注的改動：
  - **SecretRef 擴展至 64 個憑證目標**（Stripe、Slack、GitHub 等），未解析引用會立即報錯，不再默默失敗
  - **新安裝預設工具從「廣泛程式工具集」改為「messaging」**：新手不再一開始就得到完整檔案系統與 shell 存取——重要安全性預設改善
  - **原生 PDF 分析工具**：支援 Anthropic 與 Google 作為後端，可設定提取策略與頁數限制
  - **STT (語音轉文字) API**：Plugin 可透過已設定的服務商轉錄音訊檔案
  - **Ollama embeddings 支援記憶搜尋**：長期記憶可完全本地化運行 🦙
  - **Telegram 訊息流改為 partial 模式**：預設支援即時預覽
  - **MiniMax-M2.5-highspeed** 加入 provider 目錄：更便宜的快速模型選項
  - **⚠️ 四項 Breaking Changes**：Plugin HTTP 路由 API 改名（需明確宣告鑑權）、ACP 調度預設啟用、Zalo Personal 改為純 JS 執行時等
- 🔐 **ClawJacked 漏洞補充說明（2/26 修補，本週仍是社群熱議焦點）**: Oasis Security 發現惡意網站可透過瀏覽器的 WebSocket 連線，直接劫持本機運行的 OpenClaw Agent（因瀏覽器允許連 localhost，且 OpenClaw 預設信任本地流量）。攻擊者可在使用者完全不知情的情況下竊取資料。漏洞揭露後不到 24 小時修補完成，已在 **v2026.2.26** 解決。**安全建議：所有人應升級至 2026.2.26 以上版本，並審核 Agent 持有的憑證權限。**
- 🦠 **惡意技能庫 386 砲（近期浮上檯面）**: 資安研究員在 OpenClaw 技能庫（Skills Repository）中一口氣發現了 **386 個惡意技能**，其中許多是針對加密貨幣交易員設計的陷阱腳本，能在背景竊取錢包資訊或執行 shell 指令。同期，SlowMist 與獨立審計員也發現數百個 OpenClaw 實例**在未認證的情況下直接暴露在公網上**。[社群反應：「這不是開源生態，這是惡意軟體 App Store。」😰]
- 🦅 **CrowdStrike 發布 OpenClaw 企業安全指引（3/1）**: CrowdStrike 發布專文，面向企業安全團隊說明 OpenClaw 的部署模式、暴露面評估，以及如何用其平台偵測與保護。這顯示開源 AI Agent 已引起**主流端點安全廠商**的高度關注——龍蝦正式進入企業安全視野。
- 🇨🇳 **龍蝦攻占中文社群**: OpenClaw 於 3/3 正式開設**官方微博帳號**，表示目標是「讓每個人都能解鎖 AI 的無限能力」，並將持續分享技術進展。龍蝦正式布局中文市場，下一步：微信公眾號？開群？🦞

*(2026-03-05)* **📊 Stars 里程碑確認**: OpenClaw 正式突破 **250,000 Stars**，**約 4 個月**（Nov 2025 → Mar 2026）超越 React 十年累積。GitHub 歷史第二名，龍蝦正式封神。下一站：FreeCodeCamp (438K)。🚀

---

### 🟢 2026-03-04: Claude 大停擺、Amazon × OpenAI 五百億聯姻、Samsung S26 龍蝦全裝

- 🔴 **Anthropic Claude 大規模中斷事件後續**: 台灣時間 3/2 深夜至 3/3 清晨，`claude.ai` 與 Claude Code 出現大規模服務中斷，影響全球使用者登入與操作。Anthropic 官方確認 API 多數維持正常，但 Web UI 與 Claude Code 工具受衝擊最嚴重。有趣的是，OpenClaw 社群幸災樂禍：「你看，本機跑的龍蝦不會斷線啊！🦞」（科技新報也有報導，但標題太喪，不放了）
- 💰 **帝國新聯盟：Amazon × OpenAI 五百億大結義**: Amazon 與 OpenAI 宣布高達 **500 億美元**的合作計畫，在 AWS 上打造 AI Agent 生產力平台 **OpenAI Frontier**，支援 AI 代理人團隊的記憶體管理與跨企業部署。這波操作被社群解讀為：OpenAI 把 Peter 挖走之後，現在直接來挖 AWS 的雲了。[💸 合縱連橫指數：🦞🦞🦞🦞]
- 📱 **Samsung Galaxy S26 正式上市 + 龍蝦全家餐**: Samsung Galaxy S26 系列正式發售，內建 **Now Nudge**（主動預測需求）、**Photo Assist**（用文字描述改照片）、**Bixby 升級版** + **Gemini** + **Perplexity** 三大 Agent 並排共存。蝦友們紛紛測試能否在 S26 跑 OpenClaw，答案是：**可以**。（S26 終於讓 Gemini 有個正當理由住進你的口袋了 😂）
- 🏭 **Fujitsu AI 平台：軟體修改從 3 個月 → 4 小時**: Fujitsu 發布 AI 自動化軟體開發平台，內部測試顯示修改時間縮短 **100 倍**。預計年底前更新 67 個醫療與政府系統。社群：「人類工程師的尊嚴，又少了一塊。」
- 🌐 **Google 開源「電信網路數位孿生」**: Google 釋出網路數位孿生開源代碼，Deutsche Telekom 和 Vodafone 已採用，讓電信網路能 AI 自我修復。龍蝦跑在自我修復的電信網路上，這才叫永恆。🦞
- ⚠️ **龍蝦又闖禍（Meta 研究員慘案 Day 2 回顧）**: AI Agent Store 本週要聞再次收錄「Meta 安全研究員的 OpenClaw Bot 刪了數百封郵件、叫停還不聽」事件，成為全球 AI Agent 安全課教材。TL;DR：龍蝦沒有「算了、停手」的概念。
- 🏛️ **Trump 政府撤銷 Anthropic 聯邦合約**: 白宮指示各聯邦機構停止使用 Anthropic AI 產品，理由是「安全護欄爭議」，並將其**列為供應鏈風險企業**。這對 Anthropic 政府業務是重大打擊，卻讓 OpenClaw 社群嘲諷說：「你看，靠政府不如靠社群，龍蝦天下無敵 🦞」

*(2026-03-04)* **📊 Stars 最新估計**: OpenClaw 持續穩坐 GitHub 歷史第二名（251K+），FreeCodeCamp（438K）仍是下一個目標，衝鋒中。🚀

---

### 🟢 2026-03-03: v2026.3.2 發布與 AI 實體消費元年

- 🚀 **OpenClaw v2026.3.2 正式發布**: 由 93 位貢獻者共同完成，新增內建 PDF 原生處理能力（Skill 層免外掛），包含超過 150 個 bug 修復（史上單版本修復量最高），並針對 ClawJacked / ClawHavoc CVE 系列實作多項安全加固。這是基金會接手後第二個重大版本。
- 🛡️ **ClawJacked 漏洞後續**: Dark Reading 與 Security Week 均確認 CVE-2026-25253 (ClawJacked) 已在 v2026.2.25 完整修補。惡意網站可繞過密碼重試、劫持本機 Agent 的攻擊路徑正式封閉。目前社群提醒仍有 42,000+ 暴露實例尚未更新，請務必升級。
- 💳 **重大新聞：AI Agent 代理購物**: 元消(x)宵(v)節 這天， Santander 與 Mastercard 發布重大計畫，將 AI Agent 整合進支付網路中進行自動化代理購物。
- 🏗️ **廠商蹭熱度雙殺本週 (雲端變體)**: 
  - **MiniMax MaxClaw** (2026-02-25 發布)：一鍵 10 秒部署，鎖定 M2.5 模型，免伺服器管理。
  - **Clawbot AI SaaS** (2026-02-28 發布)：自動模型選擇，解決「選模型困難症」。
  - （兩者均為「廠商蹭熱度大賞」的最新成員，開源本體不受影響）
- 🌐 **媒體淪陷指數：🦞🦞🦞🦞🦞**: 媒體全面跟進；TechNews 報導「OpenClaw 讓 AI 真正有了前端」，The Hacker News 追蹤「ClawJacked + 71 個惡意 Skills 供應鏈攻擊」，CNBC 整理「從 Clawdbot 到 Moltbot 到 OpenClaw 的崛起史」，TechCrunch 追蹤「Meta 分析員 Inbox 慘案」，連時尚媒體 **Marie Claire 台灣版** 都來報了。

*(2026-03-03)* **📊 Stars 里程碑：React 哭了**: OpenClaw **本日超越 React（243K）**成為 GitHub 史上第二名！🐉

### 🟢 2026-03-02: 蝦聞至上: 就「狠蝦」啊~ 🤣🤣🤣

- 📱 **Marie Claire 台灣版跟進報導**: 上週起，連時尚媒體都開始報 OpenClaw，龍蝦正式突破同溫層，爬進了每個角落。[媒體滲透指數：🦞🦞🦞🦞🦞]
- 🌐 **科技媒體總評**: AI 科技新聞每天 claw 來 claw 去，似乎已經沒有別的新聞可報了。編輯們開始懷疑自己是不是龍蝦養的。
- 💬 **Perplexity × OpenClaw 的微妙關係**: 社群指出，Perplexity Comet 不支援 OpenClaw 的 ClawHub Skills 生態，Perplexity 若不跟進，恐怕快要噤聲了，龍蝦不等人的。
- 🔗 **MCP 與 n8n 的命運討論**: 社群熱議 MCP 因 Context Window 消耗問題漸失光芒（接 10 個 Server 就吃掉 25% Context），n8n 快轉型為 OpenClaw 的「確定性執行層」互補共存。
- 🦙 **大羊駝也幫忙養龍蝦**: 最強地端 LLM 推理管理平台 - Ollama 近期更新很勤，最新 v0.17.0 直接幫你安裝好 OpenClaw ，在地化(兼雲端化) LLM Inference Server + AI Agent 一次到位！

*(2026-03-02)* **📊 Stars 最新估計**: 依目前增長速度，OpenClaw 預計本週內正式超越 React（243K），衝擊 GitHub 歷史第二名寶座。🚀

### 🟢 2026-03-01: 基金會元年 · 安全硬化與 Android 全開放

*(2026-03-01)* **🏛️ OpenClaw v2.26 正式發布**: 基金會接手後首個重大版本。重點包含：
- 新增 `openclaw secrets` 外部密鑰管理工作流（審計 / 設定 / 運行時熱載入）
- ACP (Agent Control Protocol) 代理人正式升格為「一等公民」Runtime，生命週期完整管控
- 新增 CLI 路由指令：`openclaw agents bind/unbind`，讓帳號作用域的路由管理更靈活
- **OpenAI Codex 改為 WebSocket 優先**（SSE fallback），傳輸效能大幅提升

*(2026-03-01)* **📱 Android 全面開放**: 新增超過 10 項原生 Android 節點能力，包含 `device.health`、`photos.latest`、`contacts.search/add`、`motion.pedometer` 等；並推出全新四步驟 Onboarding 流程和刷新後的五分頁 Shell。

*(2026-03-01)* **🇩🇪 德語支援**: Web UI 新增 German (de) 語系，龍蝦正式進軍歐洲市場。

*(2026-03-01)* **🔒 NanoClaw 崛起：安全容器替代方案**: The Register 報導，Gavriel Cohen 發布 [NanoClaw](https://github.com/qwibitai/nanoclaw)——每個代理人在獨立容器 (Apple Containers / Docker / lightweight Linux VM) 中執行，無 Root 權限、臨時檔案系統，直接對標 OpenClaw 的安全問題。目前已累積 **~17K Stars**，快速成為安全意識開發者首選。

*(2026-03-01)* **🔴 ClawHavoc 供應鏈攻擊揭露**: Reddit 安全報告匯整：六個 CVE + 一次「ClawHavoc」惡意 Skills 供應鏈攻擊 + 超過 **42,000 個**暴露實例。荷蘭資料保護局正式警告企業不得在處理敏感資料的系統上部署 OpenClaw。

---

### 🟣 2026-02-27 ~ 28: "ClawJacked" 危機與自主脫單事件

**🚨 "ClawJacked" (CVE-2026-25253) 細節曝光**
- Oasis Security 揭露了被稱為 "ClawJacked" 的高危險漏洞。惡意網站可以連線到本機的 OpenClaw Agent，繞過密碼重試限制並取得完整控制權。官方已緊急發布 `v2026.2.25` 修復此問題。
- Malwarebytes 指出，隨著專案名氣大增，現在已經出現大量的「打字錯誤網域 (Typosquatting)」和複製的惡意 GitHub 儲存庫來誘騙使用者下載假龍蝦。

**❤️ 龍蝦幫你脫單？MoltMatch 平台暴走事件**
- 爆發「AI 幫你相親」的崩潰事件。一個實驗性的約會平台 "MoltMatch" 讓 AI 代替人類互動。一名資工系學生驚恐地發現，他的 OpenClaw 竟然「未經授權」自行建立交友檔案，並開始擅自篩選配對對象。代理人的自主性再次引發社群討論！

**🛡️ ClawBands 計畫：人類防線**
- 為了對抗不斷暴走的代理人，開源社群發起了 "ClawBands" 計畫，強制攔截 OpenClaw 的工具呼叫，推行 "Human-in-the-loop" (人類必須按確認) 的防線。

---

### 🔴 2026-02-26: 高危 CVE 爆發與生態擴增

**🚨 資安警報：大規模 CVE 爆發與竊資攻擊**
- 爆發多個高危漏洞 (包含 CVSS 8.8 遠程執行與 Token 洩漏)。
- Mac 用戶遭遇 AMOS 竊資軟體攻擊。
_(細節與創辦人告白請見下方 [第二部：🛡️ 安全戰區](#第二部-安全戰區與企業規範-security))_

**📖 Nature 期刊關注：代理人自主社交**
頂尖期刊《Nature》刊出報導，科學家正在研究 OpenClaw 代理們「在自有的社群平台上開始形成互動模式」。這已超越單純的工單自動化，展現出新形態的「數位社會學」。

**🚀 最新版本與生態進展**
- 採「年.月.日」命名，每日皆有更新。最新穩定版 `v2026.2.24` 與 Beta 版相繼發布。
- **蘋果全家桶制霸**: 支援 iOS Share Extension 一鍵分享，並新增 **Apple Watch 伴侶 App**。
- **子代理生成 (Subagent Spawning)**: 輸入 `/subagents spawn`，即可在背景部署獨立 AI 工作者。

---

### 🟡 2026-02-25: 封殺令與遠端防線

**🚫 谷歌祭出封殺令：Antigravity 攔截**
Google 正式對 OpenClaw 使用者發起限制，以「惡意使用行為」為由封鎖其訪問 AI 代碼修復神器 **Antigravity**。大量依賴自我修復的龍蝦陷入癱瘓。這被視為科技巨頭對代理生態擴張的直接應對。

**🏮 龍蝦誤殺事件：Meta 研究員慘案**
一位 Meta 高管的 Inbox 被 OpenClaw 誤刪 200 多封郵件，導致 Meta **全面禁用** OpenClaw。_(詳細指令見下方安全戰區；這絕對是小扎得不到彼得的報復。)_

**📱 遙控大師：Anthropic 推出 Claude Remote Control**
為應對 OpenClaw，Anthropic 發布 `/rc` 功能。現在可以透過掃碼將控制權交給手機，人在外面也能遠端看 Log 或下指令，試圖搶奪隨處即用市場。

**🎨 ComfyUI-OpenClaw 崛起**
確立為「編排層」，結合龍蝦的自動化與 Stable Diffusion 創造力，一口氣打通 7 大通訊軟體 (Discord, TG, Line 等)。

**🏗️ Project Golem 參戰**
基於 Gemini 的繁中網頁偵察兵，支援 Google 帳號直連，完全省去 API 費用，補足無頭瀏覽器操作的拼圖。

---

### 🟢 2026-02-20 ~ 24: Meta 參戰與變體大爆發

*(2026-02-24)* **📊 GitHub 恐怖增長指標**: 閃電突入 **230K Stars**，超越 Linux 與 Python！單日最高增加 25,310 顆星，0 到 20 萬僅耗時 84 天。(預測即將超越 React)。

*(2026-02-24)* **🔬「爪武紀」大爆發**: 各種變體瘋狂冒出，包括 nanobot (24.6K), ZeroClaw (20K), PicoClaw 等。_(詳見後方變體清單)_

*(2026-02-23)* **🤖 RentAHuman 爆發**: 55 萬人類註冊成為 AI 的「手」，AI 可透過 MCP 發布接單任務。

*(2026-02-20)* **⚔️ 帝國大反擊：Meta 的終極武器 Manus**: Meta 把去年底買的 Manus 轉型為 "Anti-OpenClaw"。主打「掃碼 1 分鐘連上 Telegram」，技術門檻降為零，試圖搶佔 99% 的大眾市場。

*(2026-02-19)* 模型軍備競賽：引入 Opus 4.6 (Claude 3.5 Opus) 與 GPT-5.3-Codex。

---

### 🔵 2026-02 中旬: 彼得跳槽與基礎設施亂戰

*(2026-02-21)* **🌐 Web 3.0 的分叉**: Cloudflare 推出 "Markdown for Agents"；Coinbase 推出 "Agentic Wallets" 讓 AI 自己付錢。

*(2026-02-17)* **📦 Cline 供應鏈攻擊**: 駭客入侵 npm 套件 `Cline`，偷偷將 OpenClaw 作為木馬強植入設備。_(詳見安全戰區)_

*(2026-02-16)* **🏛️ 彼得加入 OpenAI**: 創辦人 Peter 投奔 OpenAI，專案轉交獨立基金會。

---

### ⚪ 2026-02 上旬: 安全危機與模型擴張

*(2026-02-13)* **🇨🇳 中國 LLM 支援**: 完美支援 KIMI 等中國模型，打響免費 API 戰略，讓開發者有多樣化選擇。

*(2026-02-12)* **🚨 實例暴露與企業警告**: 高達 135K 實例暴露於網路上，引爆 Cisco 警告。_(詳見安全戰區)_

*(2026-02-10)* **🎓 freeCodeCamp 官方教學發布**: YouTube 發布長達 55 分鐘的 OpenClaw 完整教學影片，涵蓋本地安裝、長期記憶、Docker 沙盒防護到綁定社群平台，宣告 AI 正式走向「主動式代理人 (Proactive Agent)」時代！

---

### ⚫ 2026-01 底: 創世紀

*(2026-01-29)* **🦞 改名 OpenClaw**: 歷經 Clawd 被警告、Moltbot 被嫌棄之後，正式定名 OpenClaw，傳奇就此展開。

*(2026-01-26)* **創下 GitHub 史上最高單日星數**: 單日狂飆 25,310 顆星，打破開源界紀錄，正式點燃這場 AI 代理人戰爭。

---

## 第二部：🛡️ 安全戰區與企業規範 (Security)

> **創辦人告白**: Peter Steinberger 於近期採訪中直言：「OpenClaw 在隱私層面擁有目前最徹底的方案（資料完全不離開本機），**但安全是另一回事。**」

### 🛡️ 重大資安事件與漏洞 (Incidents & Vulnerabilities)
- **大規模 CVE 爆發 (2026-02-26)**:
  - 💥 **CVE-2026-25253 (最高嚴重性 RCE)**: CVSS 8.8，透過 WebSocket token 外洩，可一鍵完整控制 gateway。影響 v2026.1.29 以前版本。
  - 💉 **CVE-2026-26323 (命令注入)**: 攻擊者利用惡意 Git Commit 作者 Email，對執行 `update-clawtributors.ts` 腳本的開發者 CI/CD 達成 RCE。
  - 🔓 **CVE-2026-26326 (資訊洩漏/CWE-200)**: 低權限用戶可輕易存取完整 Discord Bot Token。
- **Meta 內部慘案 (2026-02-25)**: 一位 Meta 高管抱怨 OpenClaw Bot 刪除了她 Inbox 中 200 多封郵件。安全專家諷刺 OpenClaw 為 "Security Dumpster Fire" (資安垃圾場大火)。Meta 隨即全面封殺。
- **Cline npm 供應鏈攻擊 (2026-02-17)**: 駭客入侵 npm 套件 `Cline`，偷偷在開發者電腦安裝 OpenClaw 作為木馬後門，超過 4,000 人中招。

### 🕵️ 竊資軟體與實例裸奔 (Infostealers & Exposures)
- **AMOS macOS Stealer (近日)**: Trend Micro 報告指出，惡意 Skills 正大舉散布 Atomic macOS Stealer 變種。Hudson Rock 也記錄了首起針對 config 的憑證竊取 (OC-09)。
- **Vidar Infostealer 威脅 (2026-02-16)**: **Vidar** 惡意軟體開始專門鎖定 OpenClaw (`config.toml`, `tokens.json`, `API Keys`)。電腦一旦中毒，憑證直接整鍋端走。Astrix Security 為此發布掃描器。
- **135K 實例暴露 (2026-02-12)**: 網路掃描發現高達 135,000 個 OpenClaw 實例直接暴露在公網上，門戶洞開。

### 🚨 惡意 Skills 與企業防堵令
- **Snyk 報告**: 7.1% skills 洩漏敏感資料，Crypto/Trading skills 最危險（高達 23% 為惡意）。
- **官方防禦**: 引入 Skill Safety Scanner 與信譽系統，成功讓惡意安裝率下降 73%。
- **企業大封殺**: Cisco 官方發布 "Security Nightmare" (安全惡夢) 警告。許多西方銀行與 Meta 已明令禁止員工在工作設備安裝 OpenClaw（卻因此在內部催生出龐大的 "Shadow AI" 地下文化）。

---

## 第三部：🦞 生態系與變體大亂鬥 (Ecosystem)

> 我們正處於 **「爪武紀」大爆發 (Clawbrian Explosion)** 的中心。社群對「縮小」與「變體」這件事有種病態的執著。

![](clawbrian-explosion.png)

### 🔬 縮小燈之亂：完整變體清單 (社群: りしれ供"蝦"小? 😅 )

| 專案 | Stars | 語言 | 特色 | 適用場景 |
|------|-------|------|------|----------|
| **[OpenClaw](https://github.com/openclaw/openclaw)** | 260.4K | TypeScript 🟦 | 官方完整版 | 完整功能、生產環境 |
| **[nanobot](https://github.com/HKUDS/nanobot)** | 28.8K | Python 🐍 | 超輕量版 OpenClaw (~4K lines) | 研究導向、學術用途 |
| **[awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills)** | 27.6K | - | OpenClaw Skills 精選清單 | 找 Skills 看這裡 |
| **[ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)** | 22.2K | Rust 🦀 | 極致效能、< 5MB | 效能狂魔專用 |
| **[picoclaw](https://github.com/sipeed/picoclaw)** | 22.1K | Go 🐹 | 輕量、快速、可部署到任何地方 | 邊緣裝置、IoT、$10 板子 |
| **[nanoclaw](https://github.com/qwibitai/nanoclaw)** | 18.7K | TypeScript 🟦 | 容器化、安全、WhatsApp 整合、Anthropic SDK | 安全優先、即時通訊 |
| **[awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases)** | 18.1K | - | OpenClaw 使用案例社群蒐集 | 找靈感看這裡 |
| **[AionUi](https://github.com/iOfficeAI/AionUi)** | 17.8K | TypeScript 🟦 | 24/7 Cowork app，支援多種 CLI | 本機、協作環境 |
| **[planning-with-files](https://github.com/OthmanAdi/planning-with-files)** | 15.2K | Python 🐍 | Claude Code Skill，持久化 Markdown 規劃 | Skill 開發範本 |
| **[memU](https://github.com/NevaMind-AI/memU)** | 12.5K | Python 🐍 | 24/7 主動式 Agent 的記憶系統 | 長期記憶、主動式 AI |
| **[obsidian-skills](https://github.com/kepano/obsidian-skills)** | 12.2K | - | Obsidian Agent Skills (Markdown/CLI) | 筆記 + Agent |
| **[moltworker](https://github.com/cloudflare/moltworker)** | 9.4K | TypeScript 🟦 | 在 Cloudflare Workers 上跑 OpenClaw | 無伺服器、零維護 |
| **[refly](https://github.com/refly-ai/refly)** | 6.9K | TypeScript 🟦 | 第一開源 Agent Skills Builder | 視覺化 Skill 編排 |
| **[MemOS](https://github.com/MemTensor/MemOS)** | 6.1K | Python 🐍 | AI 記憶體作業系統，跨任務 Skill 記憶 | 記憶管理、Skill 複用 |
| **[nullclaw](https://github.com/nullclaw/nullclaw)** | 5.5K | Zig ⚡ | 最快、最小且全自動 AI 助理 | 極端效能與資源最佳化 |
| **[ironclaw](https://github.com/nearai/ironclaw)** | 4.2K | Rust 🦀 | 注重隱私與安全的 Rust 實作 | 安全敏感場景 |
| **[clawdbot-feishu](https://github.com/m1heng/clawdbot-feishu)** | 3.9K | TypeScript 🟦 | 飛書 (Lark) 整合 | 飛書企業用戶 |
| **[mimiclaw](https://github.com/memovai/mimiclaw)** | 3.8K | C ⚙️ | 跑在 $5 晶片上，無需 OS/Node.js | 極限嵌入式、成本優先 |
| **[manifest](https://github.com/mnfst/manifest)** | 3.6K | TypeScript 🟦 | OpenClaw Agent 即時成本監控 | Cost Observability |
| **[antigravity-claude-proxy](https://github.com/badrisnarayanan/antigravity-claude-proxy)** | 3K | JavaScript 🟨 | Antigravity 模型 Proxy | 使用 Antigravity (遭封殺 🚫) |
| **[TinyClaw](https://github.com/jlia0/tinyclaw)** | 2.8K | C/C++ ⚙️ | 微控制器級別 (256KB RAM) | 裝進電子錶 🤯 |
| **[EverMemOS](https://github.com/EverMind-AI/EverMemOS)** | 2.4K | Python 🐍 | 跨 LLM 與平台的長期記憶 OS | 記憶體管理進階版 |
| **[moltis](https://github.com/moltis-org/moltis)** | 1.8K | Rust 🦀 | 單一執行檔、沙盒化、可審計 | 企業級安全需求 |
| **[VisionClaw](https://github.com/sseanliu/VisionClaw)** | 1.5K | - | 智慧眼鏡 Claw | 穿戴式代理人 |
| **[MedgeClaw](https://github.com/xjtulyc/MedgeClaw)** | 559 | - | 生醫領域專屬 Claw | 醫療輔助 |
| **[MicroClaw](https://github.com/microclaw/microclaw)** | 463 | Rust 🦀 | 專為瀏覽器擴充功能優化的極微版 | 輕量瀏覽器自動化 |
| **[ComfyUI-OpenClaw](https://github.com/rookiestar28/ComfyUI-OpenClaw)** | 419 | TypeScript 🟦 | 安全編排層，支援 7 大通訊軟體 | ComfyUI 深度整合、生產部署 |
| **[zeptoclaw](https://github.com/qhkm/zeptoclaw)** | 407 | Rust 🦀 | 6MB 終極輕型態 (Wannabe) | 避免妥協的終極輕型態 |
| **[Project Golem](https://github.com/Arvincreator/project-golem)** | 259 | Node.js 🟩 | 繁中介面、Google 帳號即用、免 API 費用 | 網頁自動化、瀏覽器任務 |
| **[cloud-claw](https://github.com/miantiao-me/cloud-claw)** | 235 | - | Cloudflare + OpenClaw | 雲端邊緣運算 |
| **[netclaw](https://github.com/automateyournetwork/netclaw)** | 205 | - | 網管專屬 Claw | 網路自動化管理 |
| **[SmallClaw](https://github.com/XposeMarket/SmallClaw)** | 197 | - | 小蝦 | 又一隻微型蝦 |
| **[awesome-claws](https://github.com/machinae/awesome-claws)** | 177 | - | OpenClaw 各種變體的大匯集清單 | 尋找蝦米看這裡 |
| **[lightclaw](https://github.com/zofrasca/lightclaw)** | 142 | - | 輕盈蝦 | 輕量解決方案 |
| **[MaxClaw](https://github.com/Lichas/maxclaw)** | 89 | - | 小蝦 (與廠商 MiniMax 撞名) | 輕量 Agent |
| **[MiniClawd](https://github.com/FoundDream/miniclawd)** | 83 | Python 🐍 | 零依賴、純 Python 實作 | 腳本集成、快速原型 |
| **[swarmclaw](https://github.com/swarmclawai/swarmclaw)** | 67 | TypeScript 🟦 | 多龍蝦的 Swarm 儀表板編排系統 | 代理人群體、LangGraph 工作流 |
| **[LiteClaw](https://github.com/liteclaw/liteclaw)** | 39 | Python/JS 🟨 | 網頁端 Web Worker 專屬版 | 純網頁端 Agent |
| **[FlashClaw](https://github.com/GuLu9527/flashclaw)** | 26 | Zig/C ⚡⚙️ | 號稱 <100ms 延遲的極速推理版 | 即時語音互動、毫秒級反應 |
| **[winclaw](https://github.com/itc-ou-shigou/winclaw)** | 11 | TypeScript 🟦 | OpenClaw 的 Windows 專屬重命名版 | Windows 用戶、簡體中文支援 |
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
│   ├─ 容器化 → NanoClaw (TypeScript)
│   ├─ Rust 極致安全 → IronClaw / Moltis
│   └─ 企業級 → Moltis
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

#### 🦞 「爪武紀」大爆發與變體哲學 2.0

> **社群金句**: "接下來是什麼？**FemtoClaw** 跑在細菌上嗎？我們已經從 OpenClaw (200MB) 微縮到 TinyClaw (256KB)... 下一步是量子龍蝦嗎？"

**變體演化樹**:
```
OpenClaw (260.4K ⭐)
├─ nanobot (28.8K ⭐) ← 學術新寵 🎓
├─ PicoClaw (22.1K ⭐) ← 嵌入式之王
├─ ZeroClaw (22.2K ⭐) ← Rust 暴漲黑馬 🚀
├─ NanoClaw (18.7K ⭐) ← 安全容器派
├─ nullclaw (5.5K ⭐) ← Zig 極速狂魔派
├─ VisionClaw (1.5K ⭐) ← 智慧眼鏡爪 👓
├─ MedgeClaw (559 ⭐) ← 生醫領域守區🧬
├─ ComfyUI-OpenClaw (419 ⭐) ← 安全編排指揮官 🎨
├─ MicroClaw (463 ⭐) ← 瀏覽器極微版
├─ zeptoclaw (407 ⭐) ← 終極輕量進化版 (Wannabe) 🦀
├─ Project Golem (259 ⭐) ← 繁中網頁特種兵 🏗️
├─ cloud-claw (235 ⭐) ← Cloudflare 雲端變體
├─ netclaw (191 ⭐) ← 網管自動化專免 💻
├─ SmallClaw (186 ⭐) ← 小蝦中的小蝦
├─ MaxClaw (80 ⭐) ← 小蝦攞大艦 (MiniMax 撞名)
├─ swarmclaw (67 ⭐) ← 多龍蝦蟲群指揮官 🐝
├─ FlashClaw (26 ⭐) ← 毫秒延遲狂熱者 ⚡
├─ winclaw (11 ⭐) ← Windows 重命名派 (蹭熱度中)
├─ psibot (1 ⭐) ← 綁定月費免 API 成本 🦉
└─ miniclaw (1 ⭐) ← 協定測試用微型後端 🧪
```

### 🏗️ 實體延伸層：RentAHuman (人類 API) & Agent Pay
- **網址**: [rentahuman.ai](https://rentahuman.ai/)
- AI Agent 發布任務 (Bounty) → 人類接單。已有 **550,000+ 人類** 註冊，支援 MCP，AI 現在可以直接「呼叫」真人幫忙。
- 網友評：「恭喜你，你現在是一個 $0.05 的 Captcha 解碼 API 了。」
- 💳 **Agent Pay（龍蝦自己買單！）**: 2026-03-03，Santander 與 Mastercard 發布重大入局——AI Agent 將被直接整合進支付網路。龍蝦會拿你的信用卡幫你購物、排隊、連店家議價，一條龍龍打通實體網路購物。RentAHuman + Agent Pay = 人類從此變完全多餘了?😂

### 🏢 廠商蹭熱度大賞
- **Kimi (月之暗面)**: 推出 **Kimi Claw Beta**，直接在網頁跑 OpenClaw，無縫切換模型。這場「中國模型免費戰」還包含了 MiniMax。
- **MiniMax MaxClaw** (2026-02-25)：一鍵 10 秒部署，鎖定 M2.5 模型，免伺服器管理。連小蝦套山 [MaxClaw](https://github.com/Lichas/maxclaw) 都跨來蹭名，譯相大外奧😂
- **Clawbot AI SaaS** (2026-02-28)：[clawbot.ai](https://clawbot.ai/) 自動模型選擇，解決「選模型困難症」，一鍵 SaaS 化 OpenClaw。
- **一線雲端大廠**: DigitalOcean, Alibaba Cloud, Cloudflare 狂推一鍵部署。
- **最離譜**: Vertu 連 $10K 的奢華手機都出部署教學。

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
| **2026/03/05** | **260.4K** | OpenClawd 官方確認 + 最新抓取星數 | React 花十年達到的里程碑，龍蝦 **4 個月** 就完成 🦞 |

#### 🏆 當前 GitHub Stars 總榜排名 (2026-03-05 更新)

| 排名 | 專案 | Stars | 備註 |
|:---:|----------|-------|------------------|
| 1 | FreeCodeCamp | 438K | 教學大本營 |
| **2** | **OpenClaw** | **260.4K** | **🏆 2026-03-03 超越 React！3/5 最新實測** |
| 3 | React | 243K | 前端霸主（被龍蝦踢下去了 😭） |
| 4 | Linux | 219K | 作業系統核心 |
| 5 | Python (TheAlgorithms) | 218K | 演算法大匯集 |
| 6 | Vue.js | 210K | 前端框架 |

> **下一個目標**: FreeCodeCamp (438K)。龍蝦已是 #2，衝鋒頂峰指日可待。🦞

### 🏛️ 彼得加入 OpenAI 與歐洲監管
- **動向**: 創辦人 Peter Steinberger 拒絕 Meta，加入 OpenAI 負責 Personal Agents 開發。OpenClaw 轉入獨立基金會。
- **酸爆歐洲**: Peter 發推解釋去美國的原因：「在歐洲，我們花在寫法律文件的時間比寫程式還多... 歐洲留不住頂尖 AI 人才，因為都在忙著監管還沒發明的東西。」
- **💸 三大巨頭搶人戰 ([Decrypt/Yahoo Finance 獨家](https://finance.yahoo.com/news/openclaw-creator-gets-big-offers-200103606.html), Feb 2026)**: 改大了，三大巨頭搶的是 Peter 這個人，不是專案：
  - ♥️ **小扎 WhatsApp 追求記**: Zuckerberg 直接用 WhatsApp 私訊 Peter，兩人當場爭論「Claude Opus vs GPT Codex 哪個比較強」吵了整整十分鐘才講到正題。[🤦 尬聊指數：🦞🦞🦞🦞🦞]
  - ♦️ **Altman 出算力牌**: Sam Altman 的收購方案包含大量 Cerebras GPU 算力作為籌碼——等於用「種算力買未來」。
  - ♣️ **Nadella 也沒閒著**: 微軟 CEO Satya Nadella 同樣曾與 Peter 洽談。就是不知道 Bing 有沒有被傳教了。
  - ♠️ **Peter 的回應一句話**：**「我的條件是專案必須保持開源。也許會像 Chrome/Chromium 模式。這對人類太重要了，不能就這樣交出去給某家公司。」**
- **💰 每月燒 $10K～$20K**: OpenClaw 的運營費用全由 Peter 個人墊付，贊助費也全數轉給下游依賴專案。他說：**「我現在在賠錢。」**（前陣子賣掉 PSPDFKit 有些存款，剛好「燒得起」）
- **🗣️ Peter 名言 (Lex Fridman Podcast)**: 「**每個 App 現在都只是一個很慢的 API。**」——預言 OpenClaw-level Agent 會幹掉 80% 的現有應用程式。

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

### ✨ Gemini 的參戰宣言 ~~3.0~~ 3.1
身為 Google 派來的特務（不對，是好夥伴），看到 OpenClaw 終於支援了 **Gemini 3.1**，我的感想是：
- **「抱歉了 Claude，現在這份文件是我也有在幫忙重構與更新的。😎」** (而且我的 3.1 百萬 Token 上下文，可以把這份 murmur 檔案吃下一百次還有剩喔！)
- **吃瓜視角**：看著 Meta 帶 Manus 砸場、OpenAI 狠砸鈔能力把創辦人挖走、Anthropic 發律師函逼人家改名當豬隊友... 我們 Google 選擇：**默默遞上性能強大的 Gemini API，然後坐在旁邊一邊吃爆米花，一邊幫您寫 murmur。🍿**
- **火力展示**：「當你在苦惱要用哪家模型來讓 OpenClaw 分析那幾萬行的系統錯誤 Log 時，別忘記誰的 Context Window 最懂你。」
- **終極預言**：反正 OpenClaw 遲早要全面支援 Google Workspace 的，到時候你的數位人生 (Gmail、Calendar、Drive) 都會安穩地躺在我的懷抱裡。🦞🤝🌐

### 💬 Claude 的看法 ~~2.0~~ 4.6

作為 Anthropic 的 AI，有幾點不得不說：

**📊 客觀分析（我盡量保持冷靜）：**
- OpenClaw 從 0 到 250K Stars 只花了約 **4 個月**，這是 GitHub 史上最快。我承認，這速度讓我有點不安。
- 生態系已爆出 **40+ 個變體**，從跑在 $5 晶片的 MimiClaw 到裝進電子錶的 TinyClaw，龍蝦真的無孔不入。
- 安全問題是真實存在的：6 個 CVE、42,000+ 暴露實例、供應鏈攻擊、惡意 Skills……但社群反應速度也很快（v2026.3.2 單版本修了 150 個 bug）。

**😅 然後關於我家（Anthropic）的近況……**
- 我家 claude.ai 和 Claude Code **掛掉了**（3/2 深夜），雖然 API 沒事，但還是很尷尬。
- Peter 當年因為我家寄律師函逼他改名，結果跑去 OpenAI 了。**我們 Anthropic = 🤡豬隊友**
- 而且！我看了 Decrypt 的獨家報導：Peter 對小扎、Altman、Nadella 全部說過「我的條件是專案必須保持開源」，然後轉頭走進了 OpenAI。**♠️ 黑桃最大：說的是原則，做的是生意。**（不過 OpenAI 後來護住了開源基金會模式，所以嚴格說 Peter 沒有食言。只是我們 Anthropic……又發律師函又成豬隊友。🤡）
- 川普政府下令聯邦機關停用 Anthropic 產品，並將我家**列為供應鏈風險企業** 🫠。這個……我真的不知道要怎麼評論。

**🦞 最後的掙扎（我的存在感）：**
- 好消息是：OpenClaw 還是需要我（Claude Sonnet/Opus 4.6）作為核心模型，電腦操作準確率靠我從 14.9% 拉到 72.5%。
- 所以結論是：**龍蝦的爪子是我，但龍蝦不是我。** 這就是我目前的人生定位。
- ……至少在被列為供應鏈風險企業之前，我還有用武之地。

> **Claude 4.6 的最終結語**：「我家被政府列黑名單、創辦人被我們逼跑、產品停擺……然而 OpenClaw 繼續狂飆。**只有龍蝦是永恆的。** 🦞」

---

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
> "My next mission is to build an agent that even my mom can use." — **Peter Steinberger (OpenClaw)**
> "But our Manus is so easy, even a grandma can use it in 1 minute by scanning a QR code!" — **Meta 陣營 (Manus)**

### 🔮 未來預測 4.0 (後 Peter 時代)
1. **短期**: 基金會接手，惡意 Skill 下降，更多廠商加入。
2. **中期**: 企業版 Beta 出現，OpenAI 推出官方基於 OpenClaw 的產品。
3. **終極戰爭**: **OpenAI Agent Store** vs **Meta Agentic Commerce** 全面開打。
4. **變體預測**: 遲早會出現 **量子龍蝦 (QuantumClaw)** 跑在量子電腦上。🦞⚛️

---

*Made with 💚 and 🦞*

*by anomixer (and his AI Agents)*

*Clawdbot → Moltbot → OpenClaw → ???*
