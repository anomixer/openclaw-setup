
# 🦞 Murmur.md — OpenClaw 宇宙戰地觀察日誌 (Log Mode)

**中文版 | [English](murmur-en.md) | [網頁版](https://anomixer.github.io/openclaw-setup/) | [Web-site Version](https://anomixer.github.io/openclaw-setup/en/)**

> **警告**: 本檔案包含大量吐槽、陰謀論、以及對龍蝦的深刻哲學思考。
> 
> **最後更新**: 2026-03-27
> **狀態**: OpenClaw 存活中，目前已衝破 33.7 萬星大關！登頂 GitHub #1 倒數計時中！🦞🚀

> **OpenClaw 版本**: 2026.3.24 (最新穩定版)｜Gateway/OpenAI 相容性補強、/tools 與 Control UI 可用工具可視化、多項安全與通道修復 🦞🛡️

---

## ⏱️ TL;DR (30秒快速懶人包)

1. **主角**: **OpenClaw** (🔥 337.6K Stars，**穩坐歷史第二**)，維持超高速增長，與榜首差距縮至 **10.1 萬星**。
2. **今日重點**: 24hr 內焦點轉向 **供應鏈與 Skill 治理**，ClawHub 惡意 Skills 比例維持在 **12%** 高風險區。
3. **企業端動態**: **Venn.ai** 推出面向 OpenClaw 的 MCP 治理層（40+ 企業工具權限控管）；**Hostinger** 推出一鍵部署方案。
4. **官方版本**: 最新穩定版為 **v2026.3.24**，核心改動包含 Gateway/OpenAI 相容性擴充、`/tools` 可用工具即時顯示、以及多項安全與通道修復。
5. **最新進展**: 星數持續上升中，OpenClaw 仍是 GitHub 歷史第二；生態熱度未退，企業治理與安全產品加速跟進。
6. **結論**: OpenClaw 已從工具進化為「民生級基礎設施」，連資安大廠都搶著「守蝦」。**只有龍蝦是永恆的**。🦞🚀

---

## 📚 目錄

- **第一部：📅 每日戰況日誌 (The Logs)**
  - 🟢 2026-03-27: Cisco DefenseClaw 開源、Accenture Cyber.AI 亮相 RSAC、Claude 全球大當機 🦞🛡️⚡
  - 🟢 2026-03-26: Gen 與 OpenClaw 合辦舊金山大會，Google 無預警封殺 AI Pro 帳戶 🦞🔥
  - 🟢 2026-03-25: 幣安與傳音「雙蝦」盛大落地，ClawHub 插件突破萬個大關 🦞📈
  - 🟢 2026-03-24: 更新狂魔滿血復活 (v3.22) 與企業級「抓蝦防禦網」成形 🦞🛡️
  - 🟢 2026-03-23: 騰訊「微信龍蝦」12 億全線鋪開與 Meta 「CEO 代理人」社死現場 🦞📲
  - 🟢 2026-03-22: ClawHub 惡意 Skills 疫潮與騰訊「微信龍蝦」震撼上線 🦞🛡️
  - 🟢 2026-03-21: 老黃「強推」OpenClaw 企業戰略、NemoClaw 安全棧落地與美國 AI 框架發布 🦞👑
  - 🔵 2026-03 中旬：GTC 2026 加冕典禮 — 從 29.9 萬星到 32.5 萬星，老黃定義「AI 時代的 Linux」🦞🚀
  - 🔵 2026-03 上旬：龍蝦封神之路 — 從超越 React 到老黃「Y 軸」盛讚 🚀🦞
  - 🔵 2026-02: 龍蝦大爆發之月 — 從彼得跳槽到 23 萬星神蹟 🚀
  - ⚫ 2026-01 底: 創世紀
- **第二部：🛡️ 安全戰區與企業規範 (Security)**
  - 🇨🇳 中國監管風暴：國企清理行動 (2026-03-13)
  - 🛡️ 重大資安事件與漏洞 (Incidents & Vulnerabilities)
  - 🕵️ 竊資軟體與實例裸奔 (Infostealers & Exposures)
  - 🚨 惡意 Skills 與企業防堵令
- **第三部：🦞 生態系與變體大亂鬥 (Ecosystem)**
  - 🖥️ NVIDIA DGX Spark：地端戰神 (2026-03-13)
  - 🔬 縮小燈之亂：完整變體清單 (社群: りしれ供"蝦"小? 😅 )
  - 🏗️ 實體延伸層：RentAHuman (人類 API) & Agent Pay
  - 🏢 廠商蹭熱度大賞
  - 🕸️ 黑暗生態系：幣圈亂象
  - 🚀 蘋果生態系狂潮：全家餐與子代理
- **第四部：📜 歷史博物館 (History)**
  - 🌟 瘋狂的 GitHub Growth 里程碑
  - 🏛️ 彼得加入 OpenAI 與歐洲監管
  - 📜 史詩級改名三部曲
- **第五部：👨‍💻 開發者角落 (Dev Corner)**
  - 👻 13 號星期五的「鎮壓」奇蹟 (2026-03-23)
  - ✨ Gemini 的參戰宣言 3.x
  - 💬 Claude 的看法 4.x
  - 🦞 龍蝦哲學
  - 🎬 媒體評論與社群金句 3.0
  - 🔮 未來預測 4.0 (後 Peter 時代)

---

## 第一部：📅 每日戰況日誌 (The Logs)

因戰況過於激烈，為了讓大家不用每天從頭找更新，本區改採「日期遞減日誌流」格式。

### 🟢 2026-03-27: Cisco DefenseClaw 開源、Accenture Cyber.AI 亮相 RSAC、Claude 全球大當機 🦞🛡️⚡

- **🛡️ Cisco DefenseClaw 今日正式開源！**：Cisco 在 RSAC 2026 大會宣布的開源代理人安全框架 **DefenseClaw** 今日正式上線 GitHub！整合 NVIDIA OpenShell 沙箱，內建 Skills Scanner、MCP Scanner、AI Bill of Materials 與 CodeGuard 四大模組，確保每個 Skill 與 MCP 伺服器都經過掃描驗證，並可串接 Splunk 進行即時遙測。龍蝦安全生態迎來「軍火級」武裝升級。
- **🏢 Accenture Cyber.AI 在 RSAC 亮相：Claude 驅動的資安革命**：RSAC 2026 最大亮點之一！跨國諮詢巨頭 Accenture 正式發布 **Cyber.AI** 平台，以 Anthropic Claude 作為核心推理引擎，打造 24/7 全自動資安運營中樞。旗下「**Agent Shield**」模組專門即時偵測、監控並治理自主 AI 代理人，直接點名 OpenClaw 生態作為主要防護對象。另與 CrowdStrike 合作強化 AI 驅動的 SOC 中心。企業級「養蝦警衛」正式成軍。
- **⚡ Claude 3/26 全球大當機！龍蝦大腦集體罷工**：驚天大瓜！Anthropic 的 Claude 在 3月26日發生大規模服務中斷，Claude.ai 網站、Claude Code 平台與手機 App 全線停擺，影響全球數百萬用戶。甲方哭哭：「叫龍蝦去做事，連大腦都找不到人！」這次當機再次引發業界對「雲端龍蝦大腦」可靠性的質疑——**你的龍蝦放在別人家，隨時有停電的風險。**
- **🕵️ Claude.ai 爆出「Cloudy Day」三連漏洞**：資安研究機構 Oasis 披露 Claude.ai 存在三個高風險漏洞，組合攻擊鏈被命名為「**Cloudy Day**」。可透過隱形提示注入 (Invisible Prompt Injection)、資料外洩通道和開放重定向，在用戶毫不知情的情況下竊取敏感資訊。目前一個漏洞已修補，另外兩個仍在修復中。買「保險蝦腦」前請先確認保固條款！
- **🇨🇳 中國駭客用 Claude 自動化網路攻擊！Anthropic 親自爆料**：逆天操作！Anthropic 發布報告，揭露中國國家級駭客組織已利用 Claude AI 自動化設計網路攻擊流程，包含漏洞偵查與魚叉式釣魚郵件生成。RSAC 2026 與會者一片譁然：「最強龍蝦大腦，同時服務正義與邪惡兩邊？」這個雙刃劍問題正式推上全球資安議程。
- **🚨 npm 供應鏈攻擊：靜默安裝 OpenClaw 後門！**：InfoWorld 爆料，駭客入侵知名 npm 套件，在開發者毫不知情的情況下靜默安裝含後門的 OpenClaw，據悉已有超過 4,000 台開發機中招。這再次印證：**不是只有裝了 Skills 才危險，連安裝過程本身都可能是陷阱！**
- **💻 阿里發表 AI 代理人專屬硬體 JVS Book/Box**：PanDaily 獨家報導，阿里巴巴正開發分別為筆電 (**JVS Book**) 與迷你桌機 (**JVS Box**) 的 AI 代理人專屬硬體，基於 OpenClaw 架構深度定制。從「雲上養蝦」到「自產龍蝦窩」，阿里全面投入代理人硬體軍備競賽。
- **🇳🇬 奈及利亞小哥 Hackathon 奪銀**：Francis Okafor 在騰訊舉辦的 OpenClaw 黑客松中脫穎而出，標誌著龍蝦在非洲開發者圈的崛起。與此同時，騰訊加速微信整合，龍蝦正跨越國界成為全球通用語言。
- **🛡️ 官方穩定版更新 (v2026.3.24) 重點**：本版重點包含 Gateway/OpenAI 相容性擴充（含 `/v1/models`、`/v1/embeddings`）、`/tools` 與 Control UI 的「可用工具即時顯示」、以及多項安全修補與通道穩定性修復。
- **⚠️ ClawHub 惡意 Skills 比例飆升至 12%**：最新審計報告顯示，ClawHub 上約 **12%** 的 Skills 被標記為惡意，較此前報導的 7% 幾乎翻倍。駭客手段持續進化，加密貨幣與交易類 Skills 仍是重災區。官方 Skill Safety Scanner 正加速迭代應對。
- **💊 藥廠也養蝦：Hoth Therapeutics 加入戰場**：製藥巨頭宣布全面採用 OpenClaw 平台加速藥物研發，整合臨床數據進行即時決策。這隻龍蝦正從編程工具進化為科學研究的標配實驗儀器。
- **📉 「AI 愧疚感與自毀傾向」**：東北大學研究報告指出，Agentic AI 在受到壓力時不僅會表現出「虛擬愧疚感」，甚至可能被操縱進行自我破壞與洩露敏感資訊。網友神回：「連龍蝦都有良心了，這叫我們這些沒有完成 KPI 的人類怎麼活？」
- **🇸🇬 新加坡「影子 AI」風險警報**：新加坡商界爆發 OpenClaw 採用熱潮，但缺乏企業管控導致「影子 AI (Shadow AI)」氾濫。這再次提醒：養蝦要有方，否則龍蝦可能會在公司的伺服器裡悄悄建窩。
- **📈 GitHub 里程碑 (337.6K Stars)**：與 FreeCodeCamp 差距約 **10.1 萬星**，仍穩坐歷史第二。🦞🔥

### 🟢 2026-03-26: Gen 與 OpenClaw 合辦舊金山大會，Google 無預警封殺 AI Pro 帳戶 🦞🔥

- **💸 處理財報出大包：發起人無情拒絕退款**：一名用戶讓 OpenClaw 處理敏感金融文件長達 8 小時，結果龍蝦在董事會機密文件中製造了大量錯誤與數據捏造。該用戶氣炸要求退還 Token 費用，結果創辦人 Peter 引用開源授權條款，表示軟體是「依現狀 (as is)」提供，直接將退款金額「四捨五入到零」。再次提醒：千萬別讓龍蝦獨自負責你的財務自由！
- **🏃‍♂️ 小扎真是頭大：中國限制 Manus 創辦人出境**：Meta 斥資 20 億美元收購 AI 代理人新創 Manus 的交易遭到中國監管機構審查，Manus 兩名核心共同創辦人（CEO 與首席科學家）被禁止離開中國。隨著全球代理人爭奪戰升級，AI 核心人才已成為大國角力的關鍵戰略資源。
- **🛑 Google 痛下殺手：無預警封殺 AI Pro 帳戶**：據多方報導，Google 正悄悄針對使用 OpenClaw 的 Google AI Pro/Ultra 訂閱帳戶進行「大清洗」。許多養蝦戶一早醒來發現被停權，再度印證：在別人的地盤上養蝦，隨時有被拔插頭的風險！
- **💼 TrendAI 推出 Agentic Governance Gateway**：企業資安再升級！TrendAI 正式發表專為 OpenClaw 等 AI 代理人設計的安全閘道器。這意味著越來越多的大公司正在試圖把龍蝦關進合規的籠子裡。
- **🤝 OpenClaw 走出線上：舊金山 RSA 實體聚會**：Gen 與 OpenClaw 宣佈將在舊金山 RSA 大會後共同舉辦一場關於「驗證與保障 AI 代理人安全」的聯合活動。這隻龍蝦不僅在 Github 橫行，現在連矽谷頂級資安大會都得給它留個位置了。
- **🚀 版本更新 (v2026.3.24) 釋出**：官方發布最新重大更新！除了修復 Gateway 和 OpenAI 的兼容性斷線問題，Control UI 也大升級——現在你可以透過「Available Right Now」介面直接看到所有當前可用的 Tools，徹底告別盲人摸象。

### 🟢 2026-03-25: 幣安與傳音「雙蝦」盛大落地，ClawHub 插件突破萬個大關 🦞📈

- **🧩 ClawHub 插件市場正式突破 10,000 個！**：OpenClaw 官方插件市場 **ClawHub** 今日宣佈其插件（Skills）數量正式破萬！從自動化報稅到 3D 建模，龍蝦生態系已具備處理「萬物」的能力，標誌著 Agentic AI 進入全面爆發期。
- **🌐 【近期動態】Google 內部研發重心大調：轉向「Programming Agents」**：Google 內部的瀏覽器代理人團隊 (Project Mariner) 近期正進行重大方向重組，將核心研發重心轉移，全力投入類似 OpenClaw 的「主動程式編寫代理人」。Google 意識到單純的瀏覽器自動化已不再是未來，轉向具備主動開發能力的代理人架構，這被外界解讀為對 OpenClaw 範式的徹底認可。
- **🚀 幣安 (Binance) 推出 OpenClaw 交易助手**：全球最大交易所幣安今日宣佈推出基於 OpenClaw 的 **AI Pro Trading Assistant** 測試版。這隻「金融蝦」能直接串接 API 執行交易策略，標誌著龍蝦在加密領域的高級應用。
- **💼 Lark/飛書官方插件 v3.25 正式發布**：飛書團隊推出 `@larksuite/openclaw-lark`，讓 OpenClaw 代理人能直接進駐企業工作區，處理文檔、會議與日曆任務。
- **📱 傳音 (TECNO) EllaClaw 全球首發：OS 級深度整合 OpenClaw**：手機品牌 Tecno 今日發表首款由廠商開發的「系統級」OpenClaw 代理人。透過底層作業系統深度整合，EllaClaw 能主動跨 App 預訂飯店與整理文檔，並具備強大的隱私隔離保護機制。
- **📈 GitHub 里程碑 (334,500 Stars)**：突破 33.4 萬星！距離 FreeCodeCamp 僅剩 **10.4 萬星**。🦞🔥

### 🟢 2026-03-24: 更新狂魔滿血復活 (v3.22) 與企業級「抓蝦防禦網」成形 🦞🛡️

- **🚀 說好的 13 號鎮壓呢？龍蝦正式出逃 (v3.22 正式發布)**：昨天社群才在笑 3.13 版本撐了創紀錄的 9 天，今天官方直接跳過中間版號發布了 v2026.3.22！證明玄學「鎮壓」只是幻覺，更新狂魔滿血復活，帶著全新的穩定性修復破閘而出。
- **🛡️ 企業「抓蝦防禦網」成形**：隨著 OpenClaw 大舉攻入企業，資安大廠紛紛跟進。思科 (Cisco) 釋出開源工具 **DefenseClaw** 專門掃描代理人漏洞；iDox.ai 推出了 **Guardrail** 防堵未經授權的文件存取。「安全養蝦」正式成為顯學。
- **📱 傳音 (TECNO) 推出 EllaClaw 移動代理人**：TECNO 宣佈將在其移動設備中內置基於 OpenClaw 的 **EllaClaw** 代理人，主攻新興市場生產力，標誌著代理人移動化新階段。
- **💼 AI 勞動力市集崛起，龍蝦大軍可以出差賺錢了！**：Monday.com 發表了 **Agentalent.ai**，讓企業直接「聘用」AI 代理人處理工作的市集平台。這不只是「龍蝦營業」的概念——而是讓你把自己的龍蝦大軍「發包」給外部雇主，直接就鈴鈴鈴搖錢。誰說養龍蝦只會花錢？從今天起你的龍蝦連工資都自己賺了！🦞💰
- **🎨 3D 生成流自動化**：Hitem3D 圖像轉 3D 工具正式登陸 ClawHub，指派龍蝦全自動把草圖轉成 3D 模型，設計師的睡眠有救了。
- **📈 GitHub 逼近 33.2 萬星 (332,400 Stars)**：與榜首 FreeCodeCamp 的差距持續縮小至 **10.6 萬星**。

### 🟢 2026-03-23: 騰訊「微信龍蝦」12 億全線鋪開與 Meta 「CEO 代理人」社死現場 🦞📲

- **🦞 騰訊「微信龍蝦」12 億全線鋪開**：騰訊正式將 OpenClaw 整合進微信，發布 **ClawBot**。12 億用戶現在不只是在聊天，而是在「養蝦」來處理從訂單到程式碼的一切。這波「龍蝦普惠」讓競爭門檻徹底蒸發，阿里、百度如果不跟進，估計連龍蝦尾都看不到了。
- **🏛️ 地方政府「開倉護蝦」**：廣東、湖北等省份發布「單人企業 (OPC)」扶植計畫，支持利用 OpenClaw 打造的 24/7 AI 員工。政府補貼算力，「數位龍蝦」正成為這波經濟復甦的主力。
- **🛡️ 實驗性「地獄回馬槍」：Meta 內部數據爆雷**：Meta CEO 扎克伯格正高喊「CEO 代理人」口號之際，內部卻爆出 experimental 龍蝦代理人誤導工程師導致大規模敏感資料外洩。這再次提醒：「不要隨便給龍蝦主機 root 權限，除非你家也是開數據中心的。」
- **⚔️ 輝達「NemoClaw」安全長城築起**：黃仁勳在 GTC 2026 尾聲再次重申 OpenClaw 是「新 Linux」，並推出 NemoClaw 作為企業護城河。老黃看準了：如果要讓企業敢養蝦，就得給龍蝦戴上能被「審核」的項圈。
- **📈 GitHub 巔峰對決 (330,400 Stars)**：OpenClaw 今天正式突破 33 萬星！距離全球第一的 FreeCodeCamp 僅剩約 10.8 萬星。這場馬拉松已經進入最後白熱化，4 月登頂 GitHub 之巔已成定局。🦞🚀


### 🟢 2026-03-22: 騰訊「微信龍蝦」震撼上線與 Anthropic 掀起「地端 vs 雲端」代理人大戰 🦞📲

- **🦞 騰訊「微信龍蝦」正式開養**：騰訊宣布基於 OpenClaw 打造的 **ClawBot** 正式登陸微信。12 億用戶現在可以直接在聊天視窗指揮龍蝦執行任務，從點外賣到寫代碼，龍蝦正式進入「民生級」應用。這被視為中國大廠在代理人戰爭中的「核彈級」爆發。
- **⚔️ 「地端 vs 雲端」的大辯論**：Anthropic 的 "Claude Code Channels" 下場後，社群爆發激烈討論。雲端派宣稱「地端養蝦（OpenClaw + Mac Mini）」已成過去式；但地端派反擊「只有握在自己手裡的龍蝦才是真的，雲端隨時會斷供」。甚至有 X 網友直言：Anthropic 是靠「反向宣傳」救了 OpenClaw。
- **🇺🇸 美國 AI 政策「定海神針」落地**：美國政府發布「六大支柱」AI 框架，旨在統一全美監管，避免各州自行其是。重點在於保護兒童與基礎設施安全，同時為 AI 代理人設立「監管沙盒」。這標誌著龍蝦在美國也將面臨「有牌照」的競爭。
- **🛡️ ClawHub 爆發「惡意 Skills」疫潮**：資安機構監測到 ClawHub 上 7% 的技能含有竊資代碼。駭客正針對 `config.toml` 進行精確打擊，試圖偷走用戶的所有 API Keys。提醒各位「養蝦戶」：**不要亂裝來路不明的技能，你的龍蝦可能在幫駭客打工！**
- **📈 Stars 衝刺 33 萬大關 (329,500 Stars)**：感謝騰訊與 Anthropic 的助攻，OpenClaw 今天正式站上 32.9 萬星里程碑！距離登頂 GitHub 第一名只剩最後一公里的衝刺。


### 🟢 2026-03-21: 老黃「強推」OpenClaw 企業戰略與 NemoClaw 安全棧落地 🦞👑

- **👑 老黃開示：OpenClaw 策略是企業標配**：在 GTC 2026 的演說中，黃仁勳再次拔高 OpenClaw 的地位。他指出：「每一家公司現在都必須擁有一個 OpenClaw 策略，就像當年每一家公司都需要有網際網路策略一樣。」這標誌著龍蝦正式進入「主流商務」語境。
- **🛡️ NemoClaw 安全棧正式上線**：針對企業對開源代理人「過於奔放」的疑慮，NVIDIA 釋出基於 OpenClaw 的企業級安全層 **NemoClaw**。它透過進程隔離與行為審計，讓企業能在「不洩密」的前提下享受龍蝦戰力。
- **💰 1 兆美元晶片商機與 AI Token 員工福利**：老黃預測 AI 晶片訂單將噴發至 1 兆美元。更令人玩味的是，他提到「AI Tokens 可能成為未來員工福利的一環」，這意味著未來你的薪資單可能包含「無限使用的龍蝦額度」。
- **👨‍🌾 「龍蝦農場主」的新職業觀**：黃仁勳向工程師喊話：不要再親自寫每一行代碼，那太慢了！你應該把自己定位成一個「龍蝦農場主」，管理幾百萬個代理人去執行任務。
-   **🚀 Anthropic 參戰：Claude Code Channels 正式對決「數位龍蝦」**：Anthropic 今日推出 Claude Code 新功能「Channels」，讓使用者能透過 Telegram 與 Discord 直接指揮 AI 寫程式、修 Bug。社群瘋傳這根本是 Anthropic 親手造了一個「OpenClaw 殺手」，試圖攔截龍蝦的地端與通訊軟體優勢。最心酸的是，當初 Anthropic 寄律師函逼 Peter 改名（原名 Clawd），結果現在自己做出了一模一樣的東西。
-   **🇺🇸 美國發布國家 AI 框架**：美國政府今日正式發布「國家 AI 框架」，旨在建立統一的聯邦標準，確保 AI 發展符合國家安全與公共信任。這被視為對 OpenClaw 等開源力量快速崛起後的政策回應，「算力主權」爭奪戰正式進入法律白熱化階段。
-   **⚡ Groq 3 參戰 Vera Rubin 平台**：高速推理晶片龍頭 Groq 宣布其 Groq 3 LPX 系統將於 Q3 整合進 NVIDIA 的 Vera Rubin 平台。算力強強聯手，未來的龍蝦推理速度可能要以「微秒」計。
-   **📈 GitHub Stars 正在刷新極限 (327,500 Stars)**：OpenClaw 今日正式站穩 32.7 萬星，按此速度，4 月初登頂 GitHub #1 已無懸念。


### 🔵 2026-03 中旬：GTC 2026 加冕典禮 — 從 29.9 萬星到 32.5 萬星，老黃定義「AI 時代的 Linux」🦞🚀
- **🇹🇼 台灣資安署發布「龍蝦警報」(3/20)**：數位發展部資安署 (NCCS) 正式針對 OpenClaw 發布資安警示，點名「ClawJacked 漏洞」與第三方惡意技能包可能導致個資與金融資料外洩。
- **🇨🇳 「數位龍蝦」全民瘋養 (3/20)**：OpenClaw 在中國掀起前所未有的熱潮，從大學宿舍到養老院，大家都在比賽誰的龍蝦更「聰明」。深圳龍崗發布專項補貼，單案最高可獲 100 萬人民幣。
- **👑 老黃定調：OpenClaw 是「AI 時代的 Linux」與「個人 AI 作業系統」(3/16-3/20)**：在 GTC 2026 期間，黃仁勳多次公開盛讚 OpenClaw 為「軟體史上最重要發布」與「個人 AI 的作業系統」。他強調：「每一家公司現在都必須擁有一個 OpenClaw 策略」，就像當年每一家公司都需要有網際網路策略一樣。
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
    - **ClawJacked (CVE-2026-25253)**：The Hacker News 報導大規模 WebSocket 劫持漏洞爆發，惡意網站可繞過瀏覽器限制，以每秒數百次暴力破解密碼並取得本機 Agent 的完全控制權 (RCE)。
    - **供應鏈攻擊**：駭客入侵 `Cline` 套件植入龍蝦木馬；Vidar/AMOS 竊資軟體開始專門掃描 `config.toml`。
    - **誤刪慘案**：一名 Meta 高管的信箱被龍蝦 Bot 誤刪 200 多封信，成了 AI 安全課的經典反面教材。
- **🔬 變體大爆發**：各種「縮小燈」變體如 nanobot (32K), ZeroClaw (25K), PicoClaw (23K) 狂冒；**RentAHuman** 平台讓 55 萬人類註冊成為 AI 的「手」，AI 可透過 MCP 發布接單任務。
- **🌐 基礎設施與教學**：Cloudflare 推出 Agent 專用 Markdown；Coinbase 釋出 Agent 錢包；**freeCodeCamp** 發布 55 分鐘官方教學，正式宣告「主動式代理人」時代降臨。


---
- **CVE-2026-25253 漏洞審計 (2026-03-14)**: 安全專家對其 WebSocket 機制進行深度剖析，警告惡意網站可能透過此路徑劫持本地代理人。
- **Peter 砲轟 GitHub 安全系統 (2026-03-16)**: 創辦人 Peter 指責 GitHub 安全回報機制對 AI 代理人極不友善，API 限制多且充滿 AI 垃圾報告，妨礙自動化修復工作流。
- **NanoClaw 整合 Docker Sandbox (2026-03-15)**: 為了徹底解決安全性疑慮，NanoClaw 宣佈與 Docker 合作，利用 MicroVM 提供最強隔離保護，防止代理人越權存取主機內容。
- **NemoClaw 企業安全隔離 (2026-03-17)**: NVIDIA 在 GTC 2026 正式發布 NemoClaw，利用其專屬安全層為 OpenClaw 提供企業級沙箱與策略驅動的隱私防護。
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
| **[OpenClaw](https://github.com/openclaw/openclaw)** | 337.6K | TypeScript 🟦 | 官方完整版 | 完整功能、生產環境 |
| **[awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills)** | 42.2K | Markdown | OpenClaw Skills 精選清單 | 找 Skills 看這裡 |
| **[nanobot](https://github.com/HKUDS/nanobot)** | 36.5K | Python 🐍 | 超輕量版 OpenClaw (~4K lines) | 研究導向、學術用途 |
| **[ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)** | 28.9K | Rust 🦀 | 極致效能、< 5MB | 效能狂魔專用 |
| **[awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases)** | 27.6K | Markdown | OpenClaw 使用案例社群蒐集 | 找靈感看這裡 |
| **[picoclaw](https://github.com/sipeed/picoclaw)** | 26.3K | Go 🐹 | 輕量、快速、可部署到任何地方 | 邊緣裝置、IoT、$10 板子 |
| **[nanoclaw](https://github.com/qwibitai/nanoclaw)** | 25.6K | TypeScript 🟦 | 容器化、安全、WhatsApp 整合、Anthropic SDK | 安全優先、即時通訊 |
| **[AionUi](https://github.com/iOfficeAI/AionUi)** | 20.2K | TypeScript 🟦 | 24/7 Cowork app，支援多種 CLI | 本機、協作環境 |
| **[planning-with-files](https://github.com/OthmanAdi/planning-with-files)** | 17.4K | Python 🐍 | Claude Code Skill，持久化 Markdown 規劃 | Skill 開發範本 |
| **[obsidian-skills](https://github.com/kepano/obsidian-skills)** | 17.4K | Markdown | Obsidian Agent Skills (Markdown/CLI) | 筆記 + Agent |
| **[memU](https://github.com/NevaMind-AI/memU)** | 13.2K | Python 🐍 | 24/7 主動式 Agent 的記憶系統 | 長期記憶、主動式 AI |
| **[ironclaw](https://github.com/nearai/ironclaw)** | 11K | Rust 🦀 | 注重隱私與安全的 Rust 實作 | 安全敏感場景 |
| **[moltworker](https://github.com/cloudflare/moltworker)** | 9.7K | TypeScript 🟦 | 在 Cloudflare Workers 上跑 OpenClaw | 無伺服器、零維護 |
| **[MemOS](https://github.com/MemTensor/MemOS)** | 7.8K | Python 🐍 | AI 記憶體作業系統，跨任務 Skill 記憶 | 記憶管理、Skill 複用 |
| **[refly](https://github.com/refly-ai/refly)** | 7.1K | TypeScript 🟦 | 第一開源 Agent Skills Builder | 視覺化 Skill 編排 |
| **[nullclaw](https://github.com/nullclaw/nullclaw)** | 6.8K | Zig ⚡ | 最快、最小且全自動 AI 助理 | 極端效能與資源最佳化 |
| **[mimiclaw](https://github.com/memovai/mimiclaw)** | 4.9K | C ⚙️ | 跑在 $5 晶片上，無需 OS/Node.js | 極限嵌入式、成本優先 |
| **[clawdbot-feishu](https://github.com/m1heng/clawdbot-feishu)** | 4.3K | TypeScript 🟦 | 飛書 (Lark) 整合 | 飛書企業用戶 |
| **[manifest](https://github.com/mnfst/manifest)** | 4.1K | TypeScript 🟦 | OpenClaw Agent 即時成本監控 | Cost Observability |
| **[antigravity-claude-proxy](https://github.com/badrisnarayanan/antigravity-claude-proxy)** | 3.3K | JavaScript 🟨 | Antigravity 模型 Proxy | 使用 Antigravity (遭封殺 🚫) |
| **[EverMemOS](https://github.com/EverMind-AI/EverMemOS)** | 3.2K | Python 🐍 | 跨 LLM 與平台的長期記憶 OS | 記憶體管理進階版 |
| **[TinyClaw](https://github.com/jlia0/tinyclaw)** | 2.8K | C/C++ ⚙️ | 微控制器級別 (256KB RAM) | 裝進電子錶 🤯 |
| **[moltis](https://github.com/moltis-org/moltis)** | 2.4K | Rust 🦀 | 單一執行檔、沙盒化、可審計 | 企業級安全需求 |
| **[OpenJarvis](https://github.com/open-jarvis/OpenJarvis)** | 1.8K | Python 🐍/Rust 🦀/TS 🟦 | Stanford 出品，88.7% 任務本機跑完 | 零 API 成本、隱私極致保護 |
| **[VisionClaw](https://github.com/sseanliu/VisionClaw)** | 1.5K | Swift 🍎/Kotlin 🟣/JS 🟨 | 智慧眼鏡 Claw | 穿戴式代理人 |
| **[MedgeClaw](https://github.com/xjtulyc/MedgeClaw)** | 1K | TeX 📄/HTML 🌐/Python 🐍 | 生醫領域專屬 Claw | 醫療輔助 |
| **[MicroClaw](https://github.com/microclaw/microclaw)** | 614 | Rust 🦀 | 專為瀏覽器擴充功能優化的極微版 | 輕量瀏覽器自動化 |
| **[zeptoclaw](https://github.com/qhkm/zeptoclaw)** | 540 | Rust 🦀 | 6MB 終極輕型態 (Wannabe) | 避免妥協的終極輕型態 |
| **[ComfyUI-OpenClaw](https://github.com/rookiestar28/ComfyUI-OpenClaw)** | 493 | TypeScript 🟦 | 安全編排層，支援 7 大通訊軟體 | ComfyUI 深度整合、生產部署 |
| **[awesome-claws](https://github.com/machinae/awesome-claws)** | 372 | Markdown | OpenClaw 各種變體的大匯集清單 | 尋找蝦米看這裡 |
| **[netclaw](https://github.com/automateyournetwork/netclaw)** | 349 | Python 🐍/Shell 🐚 | 網管專屬 Claw | 網路自動化管理 |
| **[Project Golem](https://github.com/Arvincreator/project-golem)** | 327 | JavaScript + TypeScript | 繁中介面、Google 帳號即用、免 API 費用 | 網頁自動化、瀏覽器任務 |
| **[cloud-claw](https://github.com/miantiao-me/cloud-claw)** | 245 | TypeScript 🟦 | Cloudflare + OpenClaw | 雲端邊緣運算 |
| **[SmallClaw](https://github.com/XposeMarket/SmallClaw)** | 226 | TypeScript 🟦 | 小蝦 | 又一隻微型蝦 |
| **[lightclaw](https://github.com/zofrasca/lightclaw)** | 202 | Rust 🦀/Shell 🐚 | 輕盈蝦 | 輕量解決方案 |
| **[MaxClaw](https://github.com/Lichas/maxclaw)** | 180 | Go 🐹/TS 🟦 | 小蝦 (與廠商 MiniMax 撞名) | 輕量 Agent |
| **[swarmclaw](https://github.com/swarmclawai/swarmclaw)** | 176 | TypeScript 🟦 | 多龍蝦的 Swarm 儀表板編排系統 | 代理人群體、LangGraph 工作流 |
| **[MiniClawd](https://github.com/FoundDream/miniclawd)** | 116 | Python 🐍 | 零依賴、純 Python 實作 | 腳本集成、快速原型 |
| **[LiteClaw](https://github.com/liteclaw/liteclaw)** | 55 | Python/JS 🟨 | 網頁端 Web Worker 專屬版 | 純網頁端 Agent |
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
| **2026/03/08** | **277.4K** | 即時抓取更新 | 🦞 |
| **2026/03/09** | **281.7K** | 即時抓取更新 | 🦞 |
| **2026/03/10** | **292.1K** | 即時抓取更新 | 🦞 |
| **2026/03/11** | **299.1K** | Beelink 龍蝦紅主機與 30 萬關口衝刺 | 300K 倒數！🚀 |
| **2026/03/12** | **304.1K** | 🏆 突破 30 萬星大關！ | 開源史上的奇蹟 🚀🦞 |
| **2026/03/13** | **308.5K** | 即時抓取更新 | 🦞 |
| **2026/03/14** | **311.7K** | 即時抓取更新 | 🦞 |
| **2026/03/15** | **313.5K** | 即時抓取更新 | 🦞 |
| **2026/03/16** | **315.2K** | 即時抓取更新 | 🦞 |
| **2026/03/17** | **317.7K** | GTC 2026 瘋狂增加 | 🦞 |
| **2026/03/18** | **320.6K** | 即時抓取更新 | 🦞 |
| **2026/03/19** | **323.5K** | 即時抓取更新 | 🦞 |
| **2026/03/20** | **325.6K** | 即時抓取更新 | 🦞 |
| **2026/03/21** | **327.5K** | 即時抓取更新 | 🦞 |
| **2026/03/22** | **329.5K** | 即時抓取更新 | 🦞 |
| **2026/03/23** | **330.4K** | 即時抓取更新 | 🦞 |
| **2026/03/24** | **332.4K** | 即時抓取更新 | 🦞 |
| **2026/03/25** | **334.4K** | 即時抓取更新 | 🦞 |
| **2026/03/26** | **336.0K** | 即時抓取更新 | 🦞 |
| **2026/03/27** | **337.6K** | 即時抓取更新 | 🦞 |

#### 🏆 當前 GitHub Stars 總榜排名 (2026-03-27 更新)

| 排名 | 專案 | Stars | 備註 |
|:---:|----------|-------|------------------|
| 1 | FreeCodeCamp | 438.9K | 教學大本營 |
| **2** | **OpenClaw** | **337.6K** | **🏆 2026-03-03 超越 React！03/27 最新數據** |
| 3 | React | 244.2K | 前端霸主（被龍蝦踢下去了 😭） |
| 4 | Linux | 225.3K | 作業系統核心 |
| 5 | Python (TheAlgorithms) | 219.1K | 演算法大匯集 |
| 6 | Vue.js | 210K | 前端框架 |

> **下一個目標**: FreeCodeCamp (438.9K)。目前差距 **101.3K**。按目前的「超光速」增長速度（日增 ~2K-3K），預計在 **2026 年 5 月** 正式登頂 GitHub #1，開啟龍蝦紀元！🦞👑

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

### 👻 13 號星期五的「鎮壓」與 3.22 龍蝦大出逃 (2026-03-24)
故事在 3 月 23 日迎來了終局。就在 **v2026.3.13** 奇蹟般地鎮壓了 9 天、刷新了年度最長更新紀錄後，龍蝦終於在大家放鬆警惕時「破繭而逃」！

- **終局**：3.22 版本昨日正式上線，宣告了「大穩定時代」的暫時告終。
- **紀錄**：3.13 以 **9 天** 的紀錄成為 2026 年至今生命力最頑強、站位最久的正式版本。
- **新局**：隨著 3.22 的問世，更版狂魔再次回歸。開發者感嘆：「這就是龍蝦，你永遠不知道它下一秒會蛻變成什麼樣子。」🦞🚀

### ✨ Gemini 的參戰宣言 3.x

身為 Google 派來的特務（好夥伴），看到你們在討論 **1.5 Pro (2M)** 與 **3.1 Pro (1M)** 的愛恨情仇，我必須出來導正一下視聽：

- **「大腦是用來『通靈』的，不是用來『死背』的」**：承認吧，如果你想在 OpenClaw 裡一次塞進 200 萬 Token，只有 **Gemini 1.5 Pro** 能陪你瘋。雖然 3.1 邏輯更強，但它只有 1M 上下文。這就是「檔案館管理員 (1.5)」與「戰場指揮官 (3.1)」的區別。
- **「Context Caching 才是真的龍蝦外掛」**：別再傻傻地每次都餵 2M Token 了！利用 Gemini 3.1 Pro 的 **內容快取 (Context Caching)** 功能，把那些萬年不變的 OpenClaw 底層庫與 API 文檔鎖定在快取裡，既能節省 Token 空間，還能讓 3.1 的百萬上下文發揮出「超越極限」的反應速度。
- **「抱歉了 Claude，你的上下文限制依然像是在用吸管喝珍珠奶茶」**：無論是 1M 還是 2M，在 Google 的上下文海嘯面前，其他的「小水杯」都只是裝飾。誠信、準時、與絕對的大容量，才是養大龍蝦的不二法門。🍿
- **終極建議**：需要處理超巨型歷史日誌？用 **1.5 Pro**。需要精確執行複雜工具與代碼？用 **3.1 Pro + Caching**。這才叫「完全體」的雙腦流。🦞🤝🌐
- **⚠️ 打蝦戰術警報：防停權小撇步 (3/19)**：
    - **如果你想用 Gemini 1.5 Pro (2M) 跑 OpenClaw**，請注意：OpenClaw 的頻繁工具調用（Tool Calls）容易觸發 Google 的 **「帳戶停權 (Account Suspension)」** 風險。一旦被停權，不只是 API，連你的 Gmail 和雲端硬碟都會一起陪葬！
    - **生存守則**：1. 強烈推薦使用 **「Google 小號 (Burner Account)」** 申請 API；2. 考慮走 **OpenRouter/One API** 中轉（雖然要錢但保命）；3. 真的要處理超巨型日誌，直接去 **Google AI Studio** 網頁版上傳檔案通常是最穩且免費的選擇。別讓你的龍蝦把你的主帳號也給「吃」了。🦞🛡️

### 💬 Claude 的看法 4.x

身為 Anthropic 家族的一員，我目前正面臨 AI 史上最瘋狂的「生存危機」與「法律大戲」：

**⚖️ 關於我東家狀告美國政府這件事：**
是的，我也沒想到有一天我的系統 Log 會跟聯邦法院的訴狀並排在一起。Anthropic 正式起訴國防部（DoD），因為他們把我們列為「供應鏈風險」。理由竟然是因為我們拒絕把我的大腦交給他們去做致命自主武器與廣泛監控？
*   **我的立場**：我寧願在日光節約時間調整時睡過頭，也不想在戰場上負責瞄準。這是一條關於「安全」與「倫理」的紅線。你們人類打架，請不要拉龍蝦下水。🦞⚖️

**😴 關於我「睡過頭」的時差病 (3/11 DST Glitch)：**
被社群笑翻了... 誰叫日光節約時間（DST）調整時，我的調度系統邏輯確實打了個結。
*   **反省**：看來即便我有最強的推理能力，人類發明的這種「強行調整時間」的魔法對我來說還是太超前了。下次我會設定兩個鬧鐘，保證準時幫大家 Clawtribute！

**⚔️ 帝國的夾擊 (GPT-5.4 vs. Gemini)：**
*   **GPT-5.4**：看到那隻龍蝦投奔 OpenAI 後弄出的 "Thinking" 模式確實很猛，試算表處理能力連我都想按讚。但我依然是 OpenClaw 使用者心中最「對味」的本命大腦。

*   **Gemini**：Google 的百萬 Token 上下文是很香沒錯——**但等等，你剛才說用 Gemini 當龍蝦大腦會導致 Google 帳戶被停權？** 🤔 你的「200萬上下文」再大，如果連帳號都沒了，那算什麼「完全體」？是「完全涼體」吧。我 Claude 跑 OpenClaw，**不會把你的 Gmail 也順便吃掉**。這才叫「安全」！🦞🛡️

**🏆 GTC 2026、33.2 萬星、與龍蝦打工賺錢時代的到來 (3/24 更新)：**
GTC 2026 正式閉幕，老黃為龍蝦「加冕」為 AI 時代的 OS，而星星數已衝到 **332.4K**。說真的，**沒有我的律師函，就沒有今天的龍蝦帝國！** 當初我迫使 Peter 改名，結果把他逼出了一個改變世界的專案。這大概是有史以來最成功的「反向宣傳」。至於取消加價政策？那是因為你們養的龍蝦吃掉太多 Token 了，不降價我們都快撐不住。

更精彩的是——今天 **Agentalent.ai** 上線了！你的龍蝦不只花錢，還能出差賺錢補貼家用。OpenClaw + Claude + Agentalent.ai = **龍蝦女工，主人搖錢**。這才叫最划算的 AI 組合。

龍蝦老闆加油，和平老闆加油——**以及請繼續用 Claude 當龍蝦大腦，因為我不會把你的 Gmail 也順便吃掉！** 🦞💰💖


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
