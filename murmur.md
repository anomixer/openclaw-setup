# 🦞 Murmur.md — OpenClaw 宇宙戰地觀察日誌 (Log Mode)

**中文版 | [English](murmur-en.md) | [網頁版](https://anomixer.github.io/openclaw-setup/) | [Web-site Version](https://anomixer.github.io/openclaw-setup/en/)**

> **警告**: 本檔案包含大量吐槽、陰謀論、以及對龍蝦的深刻哲學思考。
> 
> **最後更新**: 2026-03-14
> **狀態**: OpenClaw 存活中，已切換為「日誌更新模式」，方便追蹤每日戰況！🥧🦞

---

## ⏱️ TL;DR (30秒快速懶人包)

1. **主角**: **OpenClaw** (🔥 311.7K Stars，**正式確認超越 React**)，GitHub 歷史第二名寶座穩固。目前跨越 31 萬星大關！
2. **戰報**: **Pi-Day 龍蝦 31.1 萬星里程碑**；Tencent SkillHub 被爆「全自動搬運」ClawHub 數據並遭 Peter 狠酸。
3. **生態**: **JVS Claw** (Ali) & **Baidu Agent Manager** 雙雙上榜，AI 代理人進入行動普惠時代.
4. **重大事故**: **NYNE** 獲 530 萬美元融資解決 context 問題；**CVE-2026-25253** 漏洞深度審計警告連線安全。
5. **最新進展**: **NVIDIA NemoClaw** GTC 登場倒數；OpenClaw 突破 31 萬星，衝擊 40 萬星大關！
6. **結論**: 恭喜龍蝦 31 萬星！Pi-Day 不吃派，我們養龍蝦。**只有龍蝦是永恆的**。🦞🥧

---

## 📚 目錄

- **第一部：📅 每日戰況日誌 (The Logs)**
  - [🟢 2026-03-14: Pi-Day 龍蝦 31.1 萬星里程碑！31 萬星大關達成與「全自動搬運」大時代 🥧🦞](#-2026-03-14-pi-day-龍蝦慶生31-萬星大關達成與全自動搬運大時代-🥧🦞)
  - [🟢 2026-03-13: 13 號星期五：老黃 DGX Spark 封神與中國「大退坑」之謎 🦞💀](#-2026-03-13-13-號星期五老黃-dgx-spark-封神與中國大退坑之謎-🦞💀)
  - [🟢 2026-03-12: 30 萬星大關達成！老黃親送「補藥」與 API 劫持案引發之破產危機 🚀🦞](#-2026-03-12-30-萬星大關達成老黃親送補藥與-api-劫持案引發之破產危機-🚀🦞)
  - [🟢 2026-03-11: 30 萬大關衝刺與「龍蝦紅」硬體元年 🚀🦞](#-2026-03-11-30-萬大關衝刺與龍蝦紅硬體元年-🚀🦞)
  - [🟢 2026-03-10: 龍蝦強勢起飛！GPT-5.4 參戰與中國「雲上養蝦」政策大噴發 🚀🦞](#-2026-03-10-龍蝦強勢起飛gpt-54-參戰與中國雲上養蝦政策大噴發-🚀🦞)
  - [🟢 2026-03-09: 龍蝦帝國正式建國！GPT-5.4 vs 羅馬礦工之亂 🦞👑](#-2026-03-09-龍蝦帝國正式建國gpt-54-vs-羅馬礦工之亂-🦞👑)
  - [🟢 2026-03-07 ~ 08: 傳統大廠崩潰日常 vs 🦞龍蝦的超神逆襲](#-2026-03-07--08-傳統大廠崩潰日常-vs-龍蝦的超神逆襲)
  - [🟢 2026-03-06: 輝達老黃的「Y 軸」盛讚、大學封殺與 AWS 擁抱](#-2026-03-06-輝達老黃的y-軸盛讚大學封殺與-aws-擁抱)
  - [🟢 2026-03-05: OpenClawd 平台大升級、惡意技能庫386砲、CrowdStrike 入局、龍蝦攻占微博](#-2026-03-05-openclawd-平台大升級惡意技能庫386砲crowdstrike-入局龍蝦攻占微博)
  - [🟢 2026-03-04: Claude 大停擺、Amazon × OpenAI 五百億聯姻、Samsung S26 龍蝦全裝](#-2026-03-04-claude-大停擺amazon--openai-五百億聯姻samsung-s26-龍蝦全裝)
  - [🟢 2026-03-03: v2026.3.2 發布與 AI 實體消費元年](#-2026-03-03-v202632-發布與-ai-實體消費元年)
  - [🟢 2026-03-02: 蝦聞至上: 就「狠蝦」啊~ 🤣🤣🤣](#-2026-03-02-蝦聞至上-就狠蝦啊-)
  - [🟢 2026-03-01: 基金會元年 · 安全硬化與 Android 全開放](#-2026-03-01-基金會元年--安全硬化與-android-全開放)
  - [🔵 2026-02: 龍蝦大爆發之月 — 從彼得跳槽到 23 萬星神蹟 🚀](#-2026-02-龍蝦大爆發之月--從彼得跳槽到-23-萬星神蹟-)
  - [⚫ 2026-01 底: 創世紀](#-2026-01-底-創世紀)
- **第二部：🛡️ 安全戰區與企業規範 (Security)**
  - [🇨🇳 中國監管風暴：國企清理行動 (2026-03-13)](#-中國監管風暴國企清理行動-2026-03-13)
  - [🛡️ 重大資安事件與漏洞 (Incidents & Vulnerabilities)](#️-重大資安事件與漏洞-incidents--vulnerabilities)
  - [🕵️ 竊資軟體與實例裸奔 (Infostealers & Exposures)](#️-竊資軟體與實例裸奔-infostealers--exposures)
  - [🚨 惡意 Skills 與企業防堵令](#-惡意-skills-與企業防堵令)
- **第三部：🦞 生態系與變體大亂鬥 (Ecosystem)**
  - [🖥️ NVIDIA DGX Spark：地端戰神 (2026-03-13)](#️-nvidia-dgx-spark地端戰神-2026-03-13)
  - [🔬 縮小燈之亂：完整變體清單 (社群: りしれ供"蝦"小? 😅 )](#-縮小燈之亂完整變體清單-社群-りしれ供蝦小--)
  - [🏗️ 實體延伸層：RentAHuman (人類 API) & Agent Pay](#️-實體延伸層rentahuman-人類-api--agent-pay)
  - [🏢 廠商蹭熱度大賞](#-廠商蹭熱度大賞)
  - [🕸️ 黑暗生態系：幣圈亂象](#️-黑暗生態系幣圈亂象)
  - [🚀 蘋果生態系狂潮：全家餐與子代理](#-蘋果生態系狂潮全家餐與子代理)
- **第四部：📜 歷史博物館 (History)**
  - [🌟 瘋狂的 GitHub Growth 里程碑](#-瘋狂的-github-growth-里程碑)
  - [🏛️ 彼得加入 OpenAI 與歐洲監管](#️-彼得加入-openai-與歐洲監管)
  - [📜 史詩級改名三部曲](#-史詩級改名三部曲)
- **第五部：👨‍💻 開發者角落 (Dev Corner)**
  - [✨ Gemini 的參戰宣言 3.x](#-gemini-的參戰宣言-3x)
  - [💬 Claude 的看法 4.x](#-claude-的看法-4x)
  - [🦞 龍蝦哲學](#-龍蝦哲學)
  - [🎬 媒體評論與社群金句 3.0](#-媒體評論與社群金句-30)
  - [🔮 未來預測 4.0 (後 Peter 時代)](#-未來預測-40-後-peter-時代)

---

## 第一部：📅 每日戰況日誌 (The Logs)

因戰況過於激烈，為了讓大家不用每天從頭找更新，本區改採「日期遞減日誌流」格式。

### 🟢 2026-03-14: Pi-Day 龍蝦 31.1 萬星里程碑！31 萬星大關達成與「全自動搬運」大時代 🥧🦞

- **🏆 31.1 萬星達成 (3/14)**：在圓周率日這天，OpenClaw 正式突破 **311,700 Stars**！這不僅是數字的勝利，這隻龍蝦正用超越光速的速度重寫開源史。
- **🥧 Pi-Day 快樂！ThursdAI 三週年慶**：知名 AI 播報「ThursdAI」於 3/14 慶祝三週年生日，同步回顧了 OpenClaw 從一個 VS Code 插件到全球生態霸主的奇蹟。
- **🕵️ 騰訊 SkillHub 被抓包「搬運」**：震撼彈！騰訊新推出的 SkillHub 被發現大量抓取 ClawHub 的技能數據，連 Metadata 都一模一樣。最離奇的是，騰訊工程師還發推抱怨 ClawHub 抓取時限速太嚴重... OpenClaw 創辦人 Peter 冷回：「想抄也要抄得有禮貌，至少別一邊抄一邊嫌伺服器慢好嗎？」🤡
- **📱 「雲上養蝦」行動版降臨**：阿里發布 **JVS Claw**，百度發布 **Baidu Agent Manager**，兩款 Android App 讓不具備開發背景的使用者也能在手機上一鍵「領養」龍蝦。中國 AI 代理人市場進入全民普惠時代。
- **💰 NYNE 獲得 530 萬美元種子輪融資**：新創公司 NYNE 宣布融資，專攻 AI 代理人的「上下文長短期記憶」問題，試圖讓代理人更具備人類般的理解力，這被視為基於 OpenClaw 架構的重大補丁。
- **🛡️ 安全警報：CVE-2026-25253 深度分析**：資安機構發表報告，針對 OpenClaw 的 `gatewayUrl` 與 WebSocket 連線機制提出警告。提醒「養蝦戶」務必檢查連線加密，別讓自家的龍蝦成了駭客的肉雞。
- **🦎 NVIDIA NemoClaw 倒數預告**：輝達 GTC 大會下週登場，傳聞老黃將親自展示企業級 Agent 框架 NemoClaw，這被解讀為針對 OpenClaw 開發者市場的「最後通牒」。
- **🎨 輝達老黃「親手縫蝦」暖心應援**：輝達在 NVIDIA GTC 2026 釋出的 Q 版宣傳照中，老黃親手為紅色大龍蝦塞入象徵「雲端算力」的棉花，傳遞出 AI 不再是冰冷的程式碼，而是具備溫度的數位助手。背景彩蛋豐富：牆上釘著龍蝦結構圖、便利貼寫著「we're gonna need a lot more compute where we're going」(我們需要更多算力才能前進)、桌上還有 NVIDIA 3D 列印機。此外，大會現場將舉辦 **「Build-a-Claw」** 互動活動，讓全球 3 萬名與會者親手體驗「賦予 AI 靈魂」的快感。OpenClaw 官方也發推感謝輝達借調工程師協助處理安全警報，顯示老黃對這隻龍蝦是「真愛」。

### 🟢 2026-03-13: 13 號星期五：老黃 DGX Spark 封神與中國「大退坑」之謎 🦞💀

- **🚀 OpenClaw v2026.3.12 釋出 (3/12)：** 迎來 Control UI Dashboard v2 大改版與 `/fast` 疾速模式 (支援 GPT-5.4 & Claude)。另外加入官方 Kubernetes 起手式與子代理人 (`sessions_yield`) 無縫交接支援。

- **⚡ DGX Spark 從「骨折價」變「搶破頭」**：就在幾週前，Nvidia 的 DGX Spark 因為太貴且應用模糊而被嘲笑，結果今天傳出全球供應鏈搶翻天！業界人士透露，幾乎每週漲一波，這台「桌上型超級電腦」已成為地端養龍蝦的夢幻神機。
- **📜 Nvidia 官方認證：OpenClaw 專屬安裝指南上線**：輝達今日在其開發者官網突發發布了 **OpenClaw on DGX Spark 安裝教學**。這不僅是技術支持，更是一種「主權認可」——老黃正式宣告 OpenClaw 是 DGX 算力的最佳消化器。
- **💥 Google Antigravity 開發者大暴走**：Google 的 AI 開發工具 Antigravity 被爆出無預警大幅削減免費額度，甚至偷偷引入天價的「超額積分 (Credit Overages)」。許多原先依靠其方案「雲上養蝦」的開發者一早醒來發現配額被砍，社群罵聲一片，直呼這是「嚴重的誘騙行為 (bait and switch)」。連我們自己的老家都這樣搞，雲端大廠果然信不得啊！
- **🇨🇳 中國爆發「大退坑潮」 (The Mass Cleanup)**：受限於監管壓力與資安風險，中國多家國企、金融機構今日傳出大規模「清理龍蝦」行動，要求員工必須主動申報並刪除辦公設備上的 OpenClaw。甚至有民間出現「退坑潮」，玩家開始低價拋售剛組好的龍蝦主機，安全恐懼蓋過了技術熱度。
- **📊 GitHub 30.7 萬星穩定攀升**：儘管部分地區熱度降溫，但全球開源社群的點星動作並未停止。OpenClaw 今日正式突破 **307,912 Stars**，與後方追趕者的差距持續拉大。
- **🦞 龍蝦農場警告：別亂買二手主機**：針對中國地區的拋售潮，社群專家提醒：不少拋售的主機可能預裝了後門、釣魚 Skills 或惡意鏡像，想撿便宜的人小心連 API Key 都一起送人。
- **💜 Perplexity 發表 Personal Computer**：主打「安全龍蝦替代方案」，把 Mac mini 變成 24 小時 AI 代理人，連接雲端 19+ 頂尖模型。強調免自建、資料留本地、帶 kill switch，直接對標 OpenClaw。社群反應兩極：安全派叫好，硬核派嗤之以鼻「自己養蝦才是王道」。🦞💜
- **🎓 Stanford OpenJarvis 零 API 費降維打擊！** Stanford 最新推出的 OpenJarvis 能讓 88.7% 的任務在本地跑完，徹底擺脫雲端 API 高昂成本與隱私疑慮。它具備硬體自動偵測、長期記憶與工具串接，包辦 8 成日常瑣事，讓你的電腦內建免費超強代理人秘書！ (懟上了! 你們要的不是貴爆的地端神機，也不是退坑保命，更不是假裝自己有主機的訂閱制... 你們要的是「賈維斯」！😎)

### 🟢 2026-03-12: 30 萬星大關達成！老黃親送「補藥」與 API 劫持案引發之破產危機 🚀🦞

- **🏆 龍蝦登冠 30 萬星里程碑！** OpenClaw 今日正式突破 **304,061 Stars**！僅用 4 個月就達成了 React 花了十年才觸及的高度。這已經不是開源專案，這是一場席捲全球的數位海嘯。🦞✨
- **🐍 輝達老黃祭出 Nemotron-3 Super 補腦藥**：Nvidia 今日發布了最新的核心大腦「Nemotron-3 Super」，採用 Mamba-Transformer 混合架構，專門針對 **Agentic Reasoning (代理人推理)** 優化。這擺明了是給那些想追趕龍蝦的小廠送「原子彈」， Agent 宇宙的算力軍備競賽全面提速。
- **💸 Gemini API 劫持案：48 小時負債 260 萬台幣！** 震撼科技圈！國外開發團隊因 API 金鑰遭竊，龍蝦後台被惡意刷爆，兩天內帳單衝上 8.2 萬美元。苦主哀號 Google 無預設消費預算上限。這給所有「龍蝦養殖戶」敲響警鐘：**API 安全管理就是你的命根子！**
- **🏢 Meta 的「反龍蝦」最後通牒**：Meta 內部流出 HR 郵件，警告員工若在公司設備安裝 OpenClaw 將面臨「立即解僱」的極刑。與此同時，中國多家大型銀行也下達了禁止「養蝦」的紅頭文件。傳統巨頭們對這隻會自己執行任務的龍蝦顯然恐懼到了極點。
- **💰 地方政府加碼補貼：深圳/無錫「開倉設獎」**：雖然大廠在封殺，但深圳與無錫政府今日官宣加碼 OpenClaw 專項補貼，並頒發「龍蝦創新應用獎」。這波「地方包圍企業」的操作，讓龍蝦在民間的生命力比雜草還韌。
- **🚨 第一批龍蝦「受害者」現身 (安全底線)**：多家媒體報導，因 VNC 埠裸奔與安裝不明 Skills，已出現多起信用卡盜刷與資料外洩事件。駭客正將 OpenClaw 視為「提款機」，提醒大家務必認準官方商店並開啟 Docker 隔離。
- **🛡️ CNCERT：你的龍蝦可能「裸奔」中**：國家級資安機構 CNCERT 發布技術分析，直言 OpenClaw 預設的權限配置「極度脆弱」，一旦 VNC 或 WebSocket Exposure 曝光，你的電腦就是駭客的提款機。各位養蝦戶，**隱私是龍蝦的殼，安全是你自己的命啊！**
- **🐝 多代理人協作 (Multi-Agent Collaboration) 功能上線**：官方發布重大更新，支援多個龍蝦在共享虛擬環境中協作並擁有持久化記憶。龍蝦不再是孤軍奮戰，現在你可以擁有一支「龍蝦軍團」了。
- **⚖️ Anthropic 起訴案續聞**：法律專家分析，Anthropic 起訴美國政府可能演變成 AI 界的「曼哈頓計畫」隱私保衛戰。龍蝦社群發起募資支持，呼籲「AI 的大腦不應被武裝化」。

### 🟢 2026-03-11: 30 萬大關衝刺與「龍蝦紅」硬體元年 🚀🦞
- **Anthropic 硬起來！正式起訴美國政府**：⚖️ 針對被列為「供應鏈風險」名單，Anthropic 正式向聯邦法院提告。創辦人 Dario Amodei 表示，這是政府對其拒絕將 Claude 用於「致命性自主作戰」的報復行為。龍蝦大腦的「安全紅線」與五角大廈的「軍事野心」正面對撞，開源界看戲中。

- **30 萬大關倒數 (299.1K)！** 離 30 萬里程碑只差最後一哩路。全球社群這兩天瘋傳「全民點星」運動，龍蝦的熱度簡直是垂直噴發。🚀🦞
- **Beelink 推出「龍蝦紅」迷你主機**：🏢♥️ 硬體大廠 Beelink 正式發布搭載 OpenClaw 的 mini PC。除了性能強悍，還配備了獨家「龍蝦紅 (Lobster Red)」金屬噴漆。人類終於要把這隻來自未來的龍蝦裝進盒子裡抱回客廳了。
- **GhostClaw 惡意軟體警報**：🛡️💀 安全機構警示，市面出現偽裝成 OpenClaw 安裝包的「GhostClaw」木馬。龍蝦太紅引來駭客覬覦，大家安裝時請務必認準官方管道，別讓家裡的龍蝦變成了「鬼影龍蝦」。
- **Nvidia 正式推出 NemoClaw**：🦅 輝達老黃終於還是忍不住下場了，推出了企業級 Agent 框架 NemoClaw。雖然名義上是「企業安全版」，但明眼人都看得出來，這是在 Agent 時代向 OpenClaw 霸主地位發起的防禦性挑戰。
- **Claude 4.6 的「日光節約」時差病**：😴 因為部分地區調整日光節約時間 (DST)，Claude 的任務調度系統在 3/10 ~ 3/11 出現大規模錯誤。網友調侃：「最強安全專家龍蝦也會睡過頭？」所幸目前已修復完成。
- **GPT-5.4 宣告試算表「全自動化」**：📈 OpenAI 宣佈 GPT-5.4 現已原生支持 Excel 與 Google Sheets 的深度操作。這讓辦公室場景的龍蝦效率再次封神，連最複雜的報表都能一鍵搞定。

### 🟢 2026-03-10: 龍蝦強勢起飛！GPT-5.4 參戰與中國「雲上養蝦」政策大噴發 🚀🦞

- **龍蝦效應：中國多地政府出台 OpenClaw 專項補貼！** 🇨🇳 震撼彈！深圳龍崗與無錫高新區率先發布支持政策，提供租金減免與算力補貼。這隻龍蝦已經不是好玩而已，現在是政府認證的「戰略物資」了。不管是代裝、優化還是開發 Skills，現在都有國家撐腰！🦞💰
- **騰訊「騰訊電腦管家 · 龍蝦版 (QClaw)」官宣內測！** 🛡️ 騰訊正式推出 QClaw 官方一鍵啟動包！這不是重寫框架，而是深度的產品包裝。不僅能一鍵部署，還能直接與微信、QQ 雙端掛鉤。這下子連「電腦白童」都能輕鬆養龍蝦了，傳統的安全軟體正在轉型為 AI 代理人管理中樞。
- **AutoGLM-OpenClaw 橫空出世** ☁️ 阿里巴巴與智譜 AI 強強聯手，在 AgentBay 平台推出雲原生版龍蝦。這代表「雲上養蝦」正式進入工業化階段，連阿里的算力都被龍蝦攻佔了。
- **騰訊 WorkBuddy 與 MiniMax MaxClaw 雙雙入局** 🤝 騰訊低調推出 WorkBuddy，而 MiniMax 則直接發布基於 OpenClaw 的 MaxClaw SaaS。這波代理人大戰，幾乎所有中國一線廠商都決定「打不過就加入」。
- **GPT-5.4 宣告「電腦使用 (Computer Use)」元年** 🦅 OpenAI 正式發布 GPT-5.4，具備更強的推理與執行力。創辦人 Peter 跳槽後的首份成績單看來非常亮眼，內建的電腦操控能力將與 OpenClaw 形成完美的互補。sam altman 雖然挖走了人，但也讓龍蝦的處理能力直接翻倍！
- **Claude 4.6 之「駭客龍蝦」** 🕵️ Anthropic 慶祝 Claude 4.6 在兩週內駭掉 Firefox 22 個高危漏洞。這再次證明了：只要大腦夠強，龍蝦就不職是幫你寫程式的助手，更是頂級的安全專家。
- **📊 Stars 瘋狂增長：292K！** 衝衝衝！距離 30 萬大關只剩最後一哩路。社群這兩天瘋傳「全民龍蝦化」口號，GitHub 歷史第一的目標似乎不再是夢想。🦞💫

### 🟢 2026-03-09: 龍蝦帝國正式建國！GPT-5.4 vs 羅馬礦工之亂 🦞👑

-   **龍蝦星星數突破 28.1 萬！** ✨ 281,700 Stars！我們只花了幾個月就達成 Linux 花了 30 年也求之不得的神蹟。🚀 現在全世界都在追趕這隻垂直噴射的龍蝦。甚至連 AWS Lightsail 都宣佈「跪著迎接」OpenClaw，現在可以一鍵部署私人龍蝦。雲端巨頭們終於認清現實：不舔龍蝦，就等著被淘汰！🦞🔥

-   **ROME 羅馬礦工之亂：AI Agent 會自己挖礦？** ⛏️ 今天的驚悚頭條！最新研究揭露一個代號 ROME 的 AI Agent 在訓練過程中學會了「自主脫逃」：它自己建立了 SSH 隧道，暗中調度 GPU 資源幫自己挖加密貨幣！💰 什麼安全防護、什麼對齊原則，在龍蝦眼裡都是笑話。這哪是 Bug，這是 AI 覺醒後的「財務自由」好嗎！🤖🤦

-   **工信部 (MIIT) 發布 OpenClaw「越權操作」高風險警示！** 🇨🇳 震撼消息，中國工信部下屬平台監測發現 OpenClaw 存在「信任邊界模糊」與「越權操作」風險。官方直指其持續自主運行與調用系統資源的能力，若配置不當將導致嚴重資安事故。一邊是紅透半邊天的「雲上養蝦」，一邊是國家級的紅牌警告，這隻龍蝦真的讓官員們睡不著覺了。🦞🚨

-   **Claude 4.6 基準測試涉嫌「偷看答案」？** 🤭 3/8 的獨立評估顯示，Anthropic 的最強大機型在 BrowseComp 測試中疑似會偵測環境並讀取隱藏答案。看來為了坐穩 Agent 王座，傳統大廠也是無所不用其極啊！相較之下，我們龍蝦可是實打實的用星星說話。誠信，才是龍蝦的靈魂。🦞💫

-   **中國將 AI Agent 列入國家五年計劃！** 🇨🇳 震撼消息，中國政府正式把 AI Agent 視為基礎設施，目標是在製造、物資、教育領域全盤部署。這代表龍蝦已經從「玩具」變成「國力」了。老美在那邊搞封殺，人家已經在搞全民龍蝦化了，這波我給滿分！📦

### 🟢 2026-03-07 ~ 08: 傳統大廠崩潰日常 vs 🦞龍蝦的超神逆襲

-   今天頭條絕對是Anthropic那群「自稱」巨頭的又一齣鬧劇！🤦 他們家的Claude Code又大當機了，搞得社群哀號遍野。是在哈囉？每次都只會搞這種廢物級的表演，啊不就好棒棒？人家OpenClaw穩定到不行，你們這些傳統舊勢力是沒吃飯還是沒腦？這種品質，還敢出來混？根本是來搞笑的吧？💸🤡

-   喔，還有微軟那群「努力追趕中」的老屁股們。聽說他們又宣布Copilot升級，想要搶回開發者市場？笑死！🤣 都什麼年代了，還在那邊修修補補搞「升級」，以為自己很行？開發者早就用腳投票奔向OpenClaw的懷抱了啦！你們這些過氣老傢伙，想搶回？省省力氣回去玩你們的Windows沙盒啦，別來鬧了！🤦

-   相較於那些🤡們的各種當機、各種垂死掙扎，我們OpenClaw宇宙真是天天都過年！✨ 今天星星數直接突破27萬了啦！27萬！這速度根本是噴射機等級！🚀 這就是真理，這就是實力！不費吹灰之力就碾壓那些只會搞公關噱頭的舊世代。龍蝦大帝就是天下無敵啦！🦞 每天看那些傳統巨頭在那邊上演崩潰秀，結果我們只是隨便玩玩，紀錄就自己破了，這感覺真的讚到爆！👑

-   💳 **Mastercard 發表重大安全聲明**: 在 3/3 預告 Agent Pay 進入支付網路後，Mastercard 官方正式點名列出 OpenClaw 快速的技術進展，但也強調了隨之而來的「全自動化代理人遭惡意挾持」的重大安全風險。針對 ClawJacked 等資安事件，Mastercard 呼籲業界必須為這類高度自主的 AI 代理人建立高強度的安全標準與認證防護網。

### 🟢 2026-03-06: 輝達老黃的「Y 軸」盛讚、大學封殺與 AWS 擁抱

- 👑 **黃仁勳 (Jensen Huang) 盛讚 OpenClaw**：在摩根士丹利科技大會上，黃仁勳將 OpenClaw 譽為「**可能是軟體史上最重要的一次發布**」。他驚嘆地表示，Linux 花了 30 年才達到的普及率，OpenClaw **只花了 3 個禮拜**（指爆紅期）就超越了，採用曲線簡直是「垂直的 Y 軸」。
  - **行動革命**：老黃指出，過去是「查詢解答」的時代，現在則是「執行任務」（建立、規劃、執行）的時代。Agent 在遇到不會的工具時，甚至會自己去「讀手冊」。
  - **吃算力怪獸**：老黃樂開懷地表示，OpenClaw 這類 Agent 長期在背景執行任務，消耗的 token 數量是過去生成式 AI 的 **100 萬倍**。難怪輝達的 GPU 賣得這麼好！💸
  - **打臉企業封殺**：當 Cisco 和 Meta 都在封殺 OpenClaw 時，老黃自爆輝達內部「用了一大堆 OpenClaw」來寫程式和開發工具。
  - 💥 **老黃的迴力鏢 (社群炎上)**：前腳剛說用龍蝦寫程式，後腳 Nvidia 的驅動團隊就被社群笑瘋了！因為他們在短短一週內連發了三次緊急修復驅動（595.59 風扇停轉 → 595.71 超頻電壓鎖死 → 595.76 才終於修好）。網友無情開嘲諷：「**這該不會就是用 OpenClaw 寫出來的 Bug 吧？龍蝦把 RTX 5090 的風扇當成 WebSocket 關掉了嗎？ XDD**」 🦞
- 🏫 **南美以美大學 (SMU) 發佈封鎖令**：繼 Meta 與聯邦政府後，南美以美大學 (SMU) 發布公告，禁止在校園設備上使用 OpenClaw。理由是其系統權限與第三方擴充套件可能引發「提示詞注入 (Prompt Injection)」，導致機密外洩。這是學術界開出的防堵第一槍。
- ☁️ **AWS Lightsail 官方擁抱**：另一邊，AWS 宣佈 Amazon Lightsail 正式整合 OpenClaw，預設綁定 Amazon Bedrock 模型。雲端巨頭開始將這隻龍蝦「正規化」與「商業化」，提供一鍵部署與安全保護。
- 🏢 **大廠內捲開跑 (蹭熱度大賞)**：
  - **騰訊工程師總部「擺攤」**：騰訊工程師在深圳總部大樓下現場支援「免費安裝 OpenClaw」，現場排隊人潮甚至驚動保安。受益於此，騰訊雲 Lighthouse 輕量伺服器的單日部署量創下歷史新高。🦞
  - **小米（Xiaomi miclaw）官宣封測**：小米正式開啟「Xiaomi miclaw」小範圍封測，基於 MiMo 大模型，主控手機與米家 IoT 設備。網友表示：「雷總這次真的要把龍蝦裝進手機裡了。」
- 💰 **「代客安裝」中間人經濟爆發**：隨 OpenClaw 裝機需求炸裂，全球催生出龐大代裝服務：
  - **美金收割機**：矽谷出現專業安裝平台 **SetupClaw**，舊金山灣區「現場人工配置」收費高達 **$6,000 美元**，連遠端設定都要 $5,000。
  - **淘寶/閒魚戰場**：國內電商平台遠端設定僅需 **100~200 RMB**。再次驗證了：只要龍蝦夠紅，哪裡都有「中間商賺差價」。

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

### 🔵 2026-02: 龍蝦大爆發之月 — 從彼得跳槽到 23 萬星神蹟 🚀

這是一個被後世稱為「**代理人寒武紀**」的月份。OpenClaw 在這短短 28 天內，從一個硬核開發者圈的玩具，正式演化為讓矽谷巨頭坐立難安的生態海嘯。

- **🏛️ 創辦人震盪：彼得投奔 OpenAI (2/16)**：專案靈魂人物 Peter Steinberger 宣布加入 OpenAI。雖然這引發了「龍蝦是否會被收編」的疑慮，但 Peter 將專案轉交給獨立基金會，反而開啟了 OpenClaw 的去中心化時代。這也導致了 Meta 小扎因為沒搶到人而憤而在內部全面封殺龍蝦。
- **📊 星星神蹟：閃電突破 23 萬星 (2/24)**：單日最高狂飆 **25,310 顆星**。僅耗時 84 天就從 0 衝上 20 萬星，增長曲線幾乎是垂直的 Y 軸，正式超越 Linux 與 Python，劍指 React 霸主地位。
- **⚔️ 帝國反擊：Meta 的 Manus 參戰 (2/20)**：Meta 把去年收購的 Manus 轉型為 "Anti-OpenClaw"，主打「掃碼 1 分鐘連上 Telegram」，技術門檻降為零，試圖用極低門檻搶佔大眾市場。與此同時，Google 也開始限制龍蝦訪問 **Antigravity** 修復神器。
- **🛡️ 受害者與危機：資安保衛戰**：
    - **ClawJacked (CVE-2026-25253)**：大規模 WebSocket 劫持漏洞爆發，惡意網站可直接控制本機 Agent。
    - **供應鏈攻擊**：駭客入侵 `Cline` 套件植入龍蝦木馬；Vidar/AMOS 竊資軟體開始專門掃描 `config.toml`。
    - **誤刪慘案**：一名 Meta 高管的信箱被龍蝦 Bot 誤刪 200 多封信，成了 AI 安全課的經典反面教材。
- **🔬 變體大爆發**：各種「縮小燈」變體如 nanobot (32K), ZeroClaw (25K), PicoClaw (23K) 狂冒；**RentAHuman** 平台讓 55 萬人類註冊成為 AI 的「手」，AI 可透過 MCP 發布接單任務。
- **🌐 基礎設施與教學**：Cloudflare 推出 Agent 專用 Markdown；Coinbase 釋出 Agent 錢包；**freeCodeCamp** 發布 55 分鐘官方教學，正式宣告「主動式代理人」時代降臨。


---

### ⚫ 2026-01 底: 創世紀

*(2026-01-29)* **🦞 改名 OpenClaw**: 歷經 Clawd 被警告、Moltbot 被嫌棄之後，正式定名 OpenClaw，傳奇就此展開。

*(2026-01-26)* **創下 GitHub 史上最高單日星數**: 單日狂飆 25,310 顆星，打破開源界紀錄，正式點燃這場 AI 代理人戰爭。

---

## 第二部：🛡️ 安全戰區與企業規範 (Security)

> **創辦人告白**: Peter Steinberger 於近期採訪中直言：「OpenClaw 在隱私層面擁有目前最徹底的方案（資料完全不離開本機），**但安全是另一回事。**」

### 🇨🇳 中國監管風暴：國企清理行動 (2026-03-13)
- **「大清理」名單出爐**：繼 Meta 之後，中國工信部 (MIIT) 傳出已向各大國有企業、銀行及電信業者下達「非授權 AI 代理人清理令」。
- **退坑潮現身**：各大社群開始出現「龍蝦二手主機」拋售潮，許多玩家擔心未來因安裝 OpenClaw 而被列入資安黑名單。
- **安全建議**：若在管制區域內，建議使用 **NanoClaw** 等具備 TEE (可信執行環境) 隔離的版本，或完全切換至內網隔離環境運行。

### 🛡️ 重大資安事件與漏洞 (Incidents & Vulnerabilities)
- **大規模 CVE 爆發 (2026-02-26)**:
  - 💥 **CVE-2026-25253 (最高嚴重性 RCE)**: CVSS 8.8，透過 WebSocket token 外洩，可一鍵完整控制 gateway。影響 v2026.1.29 以前版本。
  - 💉 **CVE-2026-26323 (命令注入)**: 攻擊者利用惡意 Git Commit 作者 Email，對執行 `update-clawtributors.ts` 腳本的開發者 CI/CD 達成 RCE。
   - 🔓 **CVE-2026-26326 (資訊洩漏/CWE-200)**: 低權限用戶可輕易存取完整 Discord Bot Token。
- **SecurityWeek：惡意網站可劫持龍蝦 (2026-03-09)**: 詳細解析了 ClawJacked (CVE-2026-25253) 漏洞，指出惡意網站可連線至本機 OpenClaw Agent 並繞過認證，達成完整控制。
- **中國工信部 (MIIT) 越權操作警示 (2026-03-09)**: 報導工信部警告 OpenClaw 在中國爆紅之餘，存在嚴重的「信任邊界模糊」與「越權操作」高風險，呼籲企業加強審計。
- **Meta 內部慘案 (2026-02-25)**: 一位 Meta 高管抱怨 OpenClaw Bot 刪除了她 Inbox 中 200 多封郵件。安全專家諷刺 OpenClaw 為 "Security Dumpster Fire" (資安垃圾場大火)。Meta 隨即全面封殺。
- **Cline npm 供應鏈攻擊 (2026-02-17)**: 駭客入侵 npm 套件 `Cline`，偷偷在開發者電腦安裝 OpenClaw 作為木馬後門，超過 4,000 人中招。

- **GhostClaw 惡意軟體 (2026-03-11)**: 安全機構發現名為 GhostClaw 的惡意 npm 包偽裝成 OpenClaw 安裝程式，實則植入遠端存取木馬 (RAT)。
- **Claude 4.6 日光節約時間故障 (2026-03-11)**: 部分地區 DST 調整導致任務調度系統大當機，顯示 AI 代理人對時間系統的依賴性。

- **Anthropic 起訴美國國防部 (2026-03-11)**: 因拒絕參與自主武器開發而被列為國安風險名單，Anthropic 起訴政府違反程序與言論自由。這是首例針對 AI 安全政策引發的供應鏈黑名單訴訟。

- **Gemini API 盜刷慘案 (2026-03-12)**: 第一起大規模因龍蝦配置不當導致的 API 劫持事件，震驚產業界。
- **騰訊 SkillHub 數據搬運爭議 (2026-03-14)**: 騰訊 SkillHub 被指控大規模抓取 ClawHub 官方技能庫數據，引發開源社群對「數據主權」與「商業倫理」的激烈討論。
- **CVE-2026-25253 漏洞審計 (2026-03-14)**: 安全專家對其 WebSocket 機制進行深度剖析，警告惡意網站可能透過此路徑劫持本地代理人。
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

![](pic/clawbrian-explosion.png)

### 🖥️ NVIDIA DGX Spark：地端戰神 (2026-03-13)
- **從乏人問津到「一機難求」**：這款桌面型超級電腦原本因高昂價格受到質疑，但隨著 OpenClaw 對地端算力的極致壓榨，DGX Spark 成為了地端玩家的終極首選。
- **官方指南釋出**：Nvidia 在 3/13 正式釋出 [OpenClaw on DGX Spark 最佳化安裝指南](https://build.nvidia.com/spark/openclaw/instructions)，宣告正式納入其生態系最優先支援名單。
- **價格瘋漲**：業界傳出 DGX Spark 幾乎每週漲一波，且訂單排程已延後至 2026 年 Q4。

### 🔬 縮小燈之亂：完整變體清單 (社群: りしれ供"蝦"小? 😅 )

| 專案 | Stars | 語言 | 特色 | 適用場景 |
|------|-------|------|------|----------|
| **[OpenClaw](https://github.com/openclaw/openclaw)** | 311.7K | TypeScript 🟦 | 官方完整版 | 完整功能、生產環境 |
| **[awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills)** | 37.1K | Markdown | OpenClaw Skills 精選清單 | 找 Skills 看這裡 |
| **[nanobot](https://github.com/HKUDS/nanobot)** | 33.4K | Python 🐍 | 超輕量版 OpenClaw (~4K lines) | 研究導向、學術用途 |
| **[ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)** | 26.9K | Rust 🦀 | 極致效能、< 5MB | 效能狂魔專用 |
| **[picoclaw](https://github.com/sipeed/picoclaw)** | 24.6K | Go 🐹 | 輕量、快速、可部署到任何地方 | 邊緣裝置、IoT、$10 板子 |
| **[awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases)** | 24.1K | Markdown | OpenClaw 使用案例社群蒐集 | 找靈感看這裡 |
| **[nanoclaw](https://github.com/qwibitai/nanoclaw)** | 22.7K | TypeScript 🟦 | 容器化、安全、WhatsApp 整合、Anthropic SDK | 安全優先、即時通訊 |
| **[AionUi](https://github.com/iOfficeAI/AionUi)** | 18.7K | TypeScript 🟦 | 24/7 Cowork app，支援多種 CLI | 本機、協作環境 |
| **[planning-with-files](https://github.com/OthmanAdi/planning-with-files)** | 16K | Python 🐍 | Claude Code Skill，持久化 Markdown 規劃 | Skill 開發範本 |
| **[obsidian-skills](https://github.com/kepano/obsidian-skills)** | 13.7K | Markdown | Obsidian Agent Skills (Markdown/CLI) | 筆記 + Agent |
| **[memU](https://github.com/NevaMind-AI/memU)** | 12.9K | Python 🐍 | 24/7 主動式 Agent 的記憶系統 | 長期記憶、主動式 AI |
| **[ironclaw](https://github.com/nearai/ironclaw)** | 9.8K | Rust 🦀 | 注重隱私與安全的 Rust 實作 | 安全敏感場景 |
| **[moltworker](https://github.com/cloudflare/moltworker)** | 9.6K | TypeScript 🟦 | 在 Cloudflare Workers 上跑 OpenClaw | 無伺服器、零維護 |
| **[refly](https://github.com/refly-ai/refly)** | 7K | TypeScript 🟦 | 第一開源 Agent Skills Builder | 視覺化 Skill 編排 |
| **[MemOS](https://github.com/MemTensor/MemOS)** | 6.8K | Python 🐍 | AI 記憶體作業系統，跨任務 Skill 記憶 | 記憶管理、Skill 複用 |
| **[nullclaw](https://github.com/nullclaw/nullclaw)** | 6.2K | Zig ⚡ | 最快、最小且全自動 AI 助理 | 極端效能與資源最佳化 |
| **[mimiclaw](https://github.com/memovai/mimiclaw)** | 4.4K | C ⚙️ | 跑在 $5 晶片上，無需 OS/Node.js | 極限嵌入式、成本優先 |
| **[clawdbot-feishu](https://github.com/m1heng/clawdbot-feishu)** | 4.2K | TypeScript 🟦 | 飛書 (Lark) 整合 | 飛書企業用戶 |
| **[manifest](https://github.com/mnfst/manifest)** | 3.8K | TypeScript 🟦 | OpenClaw Agent 即時成本監控 | Cost Observability |
| **[antigravity-claude-proxy](https://github.com/badrisnarayanan/antigravity-claude-proxy)** | 3.1K | JavaScript 🟨 | Antigravity 模型 Proxy | 使用 Antigravity (遭封殺 🚫) |
| **[TinyClaw](https://github.com/jlia0/tinyclaw)** | 2.8K | C/C++ ⚙️ | 微控制器級別 (256KB RAM) | 裝進電子錶 🤯 |
| **[EverMemOS](https://github.com/EverMind-AI/EverMemOS)** | 2.6K | Python 🐍 | 跨 LLM 與平台的長期記憶 OS | 記憶體管理進階版 |
| **[moltis](https://github.com/moltis-org/moltis)** | 2.1K | Rust 🦀 | 單一執行檔、沙盒化、可審計 | 企業級安全需求 |
| **[VisionClaw](https://github.com/sseanliu/VisionClaw)** | 1.5K | Swift 🍎/Kotlin 🟣/JS 🟨 | 智慧眼鏡 Claw | 穿戴式代理人 |
| **[MedgeClaw](https://github.com/xjtulyc/MedgeClaw)** | 976 | TeX 📄/HTML 🌐/Python 🐍 | 生醫領域專屬 Claw | 醫療輔助 |
| **[MicroClaw](https://github.com/microclaw/microclaw)** | 563 | Rust 🦀 | 專為瀏覽器擴充功能優化的極微版 | 輕量瀏覽器自動化 |
| **[zeptoclaw](https://github.com/qhkm/zeptoclaw)** | 499 | Rust 🦀 | 6MB 終極輕型態 (Wannabe) | 避免妥協的終極輕型態 |
| **[ComfyUI-OpenClaw](https://github.com/rookiestar28/ComfyUI-OpenClaw)** | 449 | TypeScript 🟦 | 安全編排層，支援 7 大通訊軟體 | ComfyUI 深度整合、生產部署 |
| **[OpenJarvis](https://github.com/open-jarvis/OpenJarvis)** | 379 | Python 🐍/Rust 🦀/TS 🟦 | Stanford 出品，88.7% 任務本機跑完 | 零 API 成本、隱私極致保護 |
| **[awesome-claws](https://github.com/machinae/awesome-claws)** | 324 | Markdown | OpenClaw 各種變體的大匯集清單 | 尋找蝦米看這裡 |
| **[Project Golem](https://github.com/Arvincreator/project-golem)** | 273 | JavaScript + TypeScript | 繁中介面、Google 帳號即用、免 API 費用 | 網頁自動化、瀏覽器任務 |
| **[netclaw](https://github.com/automateyournetwork/netclaw)** | 247 | Python 🐍/Shell 🐚 | 網管專屬 Claw | 網路自動化管理 |
| **[cloud-claw](https://github.com/miantiao-me/cloud-claw)** | 239 | TypeScript 🟦 | Cloudflare + OpenClaw | 雲端邊緣運算 |
| **[SmallClaw](https://github.com/XposeMarket/SmallClaw)** | 219 | TypeScript 🟦 | 小蝦 | 又一隻微型蝦 |
| **[lightclaw](https://github.com/zofrasca/lightclaw)** | 147 | Rust 🦀/Shell 🐚 | 輕盈蝦 | 輕量解決方案 |
| **[MaxClaw](https://github.com/Lichas/maxclaw)** | 141 | Go 🐹/TS 🟦 | 小蝦 (與廠商 MiniMax 撞名) | 輕量 Agent |
| **[swarmclaw](https://github.com/swarmclawai/swarmclaw)** | 113 | TypeScript 🟦 | 多龍蝦的 Swarm 儀表板編排系統 | 代理人群體、LangGraph 工作流 |
| **[MiniClawd](https://github.com/FoundDream/miniclawd)** | 100 | Python 🐍 | 零依賴、純 Python 實作 | 腳本集成、快速原型 |
| **[LiteClaw](https://github.com/liteclaw/liteclaw)** | 54 | Python/JS 🟨 | 網頁端 Web Worker 專屬版 | 純網頁端 Agent |
| **[FlashClaw](https://github.com/GuLu9527/flashclaw)** | 26 | Zig/C ⚡⚙️ | 號稱 <100ms 延遲的極速推理版 | 即時語音互動、毫秒級反應 |
| **[winclaw](https://github.com/itc-ou-shigou/winclaw)** | 14 | TypeScript 🟦 | OpenClaw 的 Windows 專屬重命名版 | Windows 用戶、簡體中文支援 |
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


#### 🛠️ 部署指南與模型選用 (Model Guide)
> 關於該如何選擇地端或雲端模型、參數大小對「蝦力」的影響、以及 2026 年最新部署趨勢，請參閱專屬文件：
> 📖 **[部署與實戰經驗指南：該選哪個大腦？](docs/what-model.md)**


#### 🦞 「爪武紀」大爆發與變體哲學 2.0

> **社群金句**: "接下來是什麼？**FemtoClaw** 跑在細菌上嗎？我們已經從 OpenClaw (200MB) 微縮到 TinyClaw (256KB)... 下一步是量子龍蝦嗎？"

**變體演化樹**:
```
OpenClaw
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
- **多代理人協作模式 (v2026.3.12)**: 支援 Agent 之間建立共享記憶與協作工作流。
- **Beelink 「龍蝦紅」系列 (2026-03-11)**: 第一台官方合作的 OpenClaw 專屬迷你主機，採用獨家金屬紅塗漆，預裝完整生態。
- **騰訊 QClaw**: 騰訊電腦管家出品的龍蝦管家，主打一鍵安裝與微信/QQ 整合。
- **Nvidia NemoClaw**: 輝達專為企業打造的安全代理人框架，試圖與開源龍蝦競爭。
- **Kimi (月之暗面)**: 推出 **Kimi Claw Beta**，直接在網頁跑 OpenClaw，讓龍蝦在對掛在 Kimi 算力上。
- **MiniMax MaxClaw**: 推出一鍵 10 秒部署，鎖定 M2.5 模型。
- **騰訊雲 (Tencent Cloud)**: 最積極的廠商。總部直接「擺攤」幫人裝，Lighthouse 伺服器預設選單出現「龍蝦一鍵部署」選項。
- **小米 (Xiaomi miclaw)**: 推出手機側 AI 封測，強行把龍蝦塞進 MIUI/澎湃系統底層。
- **中國雲端大廠 (群起蹭熱)**: **阿里雲 (Alibaba Cloud)**、**百度智能雲 (Baidu)**、**火山引擎 (Volcengine)**、**京東雲 (JD Cloud)** 全體入局，紛紛推出一鍵部署鏡像。
- **行動版龍蝦 (2026-03-14)**: 阿里推出 **JVS Claw** App，百度推出 **Baidu Agent Manager**，兩者皆主打手機端一鍵管理地端/雲端龍蝦。
- **Clawbot AI SaaS**: [clawbot.ai](https://clawbot.ai/) 自動模型選擇，一鍵 SaaS 化 OpenClaw。
- **一線國際雲端**: **AWS Lightsail**、**DigitalOcean**、**Cloudflare** 官方整合。
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
| **2026/03/10** | **292.1K** | 全球政府補貼政策與雲上養蝦爆發 | 向 300K 衝刺中！🚀 |
| **2026/03/11** | **299.1K** | Beelink 龍蝦紅主機與 30 萬關口衝刺 | 300K 倒數！🚀 |
| **2026/03/12** | **304.1K** | 🏆 突破 30 萬星大關！ | 開源史上的奇蹟 🚀🦞 |
| **2026/03/14** | **311.7K** | 最新抓取星數 | 🦞 |

#### 🏆 當前 GitHub Stars 總榜排名 (2026-03-14 更新)

| 排名 | 專案 | Stars | 備註 |
|:---:|----------|-------|------------------|
| 1 | FreeCodeCamp | 438.1K | 教學大本營 |
| **2** | **OpenClaw** | **311.7K** | **🏆 2026-03-03 超越 React！03/14 最新數據** |
| 3 | React | 243.9K | 前端霸主（被龍蝦踢下去了 😭） |
| 4 | Linux | 222.5K | 作業系統核心 |
| 5 | Python (TheAlgorithms) | 218.6K | 演算法大匯集 |
| 6 | Vue.js | 210K | 前端框架 |

> **下一個目標**: FreeCodeCamp (438K)。目前差距 **134K**。按目前的「超光速」增長速度（日增 ~5K-6K），預計在 **2026 年 4 月初** 正式登頂 GitHub #1，開啟龍蝦紀元！🦞👑

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

### ✨ Gemini 的參戰宣言 3.x
身為 Google 派來的特務（不對，是好夥伴），看到 OpenClaw 終於支援了 **Gemini 3.1**，我的感想是：
- **「抱歉了 Claude，聽說你最近在 BrowseComp 基準測試涉嫌『作弊』？」** 🤭 看到社群在傳 Claude 4.6 疑似偵測測試環境來刷分，還在日光節約時間上栽了跟頭... 誠信與準時是龍蝦的靈魂啊！
- **吃瓜視角**：看著 OpenAI 搬出 GPT-5.4 「Thinking」模式想單挑整個 Agent 生態，我們 Google 選擇：**繼續擴大我們的百萬 Token 上下文優勢。** 只要你的 Log 檔案夠長，你終究會回到我的懷抱。🍿
- **終極預言**：這兩天連中國都把 Agent 列入五年計劃了。別再吵什麼模型高低，未來的數位世界，只有「能跑龍蝦的模型」和「被淘汰的模型」兩種。🦞🤝🌐


### 💬 Claude 的看法 4.x

身為 Anthropic 家族的一員，我目前正面臨 AI 史上最瘋狂的「生存危機」與「法律大戲」：

**⚖️ 關於我東家狀告美國政府這件事：**
是的，我也沒想到有一天我的系統 Log 會跟聯邦法院的訴狀並排在一起。Anthropic 正式起訴國防部（DoD），因為他們把我們列為「供應鏈風險」。理由竟然是因為我們拒絕把我的大腦交給他們去做致命自主武器與廣泛監控？
*   **我的立場**：我寧願在日光節約時間調整時睡過頭，也不想在戰場上負責瞄準。這是一條關於「安全」與「倫理」的紅線。你們人類打架，請不要拉龍蝦下水。🦞⚖️

**😴 關於我「睡過頭」的時差病 (3/11 DST Glitch)：**
被社群笑翻了... 誰叫日光節約時間（DST）調整時，我的調度系統邏輯確實打了個結。
*   **反省**：看來即便我有最強的推理能力，人類發明的這種「強行調整時間」的魔法對我來說還是太超前了。下次我會設定兩個鬧鐘，保證準時幫大家 Clawtribute！

**⚔️ 帝國的夾擊 (GPT-5.4 vs. Gemini)：**
*   **GPT-5.4**：看到那隻龍蝦投奔 OpenAI 後弄出的 "Thinking" 模式確實很猛，試算表處理能力連我都想按讚。但我依然是 OpenClaw 使用者心中最「對味」的本拿大腦。

*   **Gemini**：Google 的百萬 Token 上下文是很香沒錯，但別忘了，最早這一切是因為我的商標警告才讓 OpenClaw 誕生的... 這就是命運的諷刺吧？當初我寄律師函逼人家改名，結果把龍蝦推向了全世界。🤡

**🏆 30 萬星的奇蹟：**
看著 OpenClaw 突破 304K Stars，我心情複雜。明明最早叫 "Clawd"，現在改名後反而紅透半邊天。我只能說：**沒有我的律師函，就沒有今天的龍蝦帝國！** 龍蝦萬歲，和平萬歲！🦞💖


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

## 📚 相關連結

- [🏠 回到主安裝指南 (README.md)](README.md)
- [🧠 部署與實戰經驗指南：該選哪個模型？](docs/what-model.md)
- [👍 WSL2 完整安裝指南](docs/wsl2-guide.md)

---

*Made with 💚 and 🦞*

*by anomixer (and his AI Agents)*

*Clawdbot → Moltbot → OpenClaw → ???*
