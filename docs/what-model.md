#### 🛠️ 部署指南：該選哪個模型？ (Model Landscape)

OpenClaw 是模型不可知 (Model-agnostic) 的，但社群的「身體」非常誠實。以下是 2026 年初的部署勢力分佈：

1 🥇 **Claude (Anthropic) — 「靈魂伴侶」**: 
  - **主流選用**: Claude Sonnet 4 / 4.5。
  - **理由**: 目前公認 Tool-calling 邏輯最穩、最懂龍蝦指令的模型。雖然東家最近在打官司，但代碼能力依然是龍蝦的首選心臟。

2 🥈 **GPT (OpenAI) — 「穩健老將」**: 
  - **主流選用**: GPT-4o / GPT-5.4 (Thinking)。
  - **理由**: 儘管 Peter 本人去了 OpenAI，GPT 在代碼生成的嚴謹度與社群支援度依然頂尖。o1-series 的推理能力在複雜自動化任務中表現亮眼。

3 🥉 **Gemini (Google) — 「CP 值與長文本之王」**: 
  - **主流選用**: Gemini 2.5 / 3 Flash / Pro。
  - **理由**: 憑藉 **1M+ 超長上下文**，處理超長 Log 檔案時有無解優勢。Gemini 3 Flash 在最新 OpenClaw 任務測試中跑出 **95.1%** 的超高成功率，且 API 費用極具競爭力。

4 🏅 **DeepSeek / Kimi / MiniMax — 「區域黑馬」**:
  - **理由**: 在亞太地區部署極快，且 API 價格極低（甚至有各種免費活動），是「雲上養蝦」低預算的救星。

5 🏠 **Ollama (Local) — 「隱私至上派」**:
  - **理由**: 最新版已支援 **MiniMax**, **Kimi**, **GLM**, **Qwen3** 等多樣化模型。適合極度重視隱私、想脫離 API 監控，或想試玩最新亞太模型全家桶的開發者。

6 🆓 **Zero Token — 「極速白嫖派」**:
  - **主流選用**: **[openclaw-zero-token](https://github.com/linuxhsj/openclaw-zero-token)**、**[Project Golem](https://github.com/Arvincreator/project-golem)**。
  - **理由**: 2026 年最新趨勢，旨在實現模型調用的**零 Token 費用**。`openclaw-zero-token` 支援全模型代理；`Project Golem` 則專注於網頁與瀏覽器自動化，適合想暢玩頂尖大腦但不想支付高昂 API 費用的「蝦友」。

#### 🧠 實戰經驗：模型參數與「蝦力」對照表

##### 🖥️ NVIDIA 官方推薦：DGX Spark 地端神機記憶體選型清單

Nvidia 官方提供的 OpenClaw on DGX Spark 指南 建議模型如下：

| GPU Memory | Suggested model | Model size | Notes |
| :--- | :--- | :--- | :--- |
| **8–12 GB** | `qwen3-4B-Thinking-2507` | ~5GB | — |
| **16 GB** | `gpt-oss-20b` | ~12GB | Lower latency, good for interactive use |
| **24–48 GB** | `Nemotron-3-Nano-30B-A3B` | ~20GB | — |
| **128 GB** | `gpt-oss-120b` | ~65GB | Best quality on DGX Spark (quantized); leaves ~63GB for context window and other processes; use 20B/30B if you prefer faster responses |

> **品質與延遲的取捨 (Quality vs. latency)**: 120B 模型提供最佳的準確度與能力，但每個 token 的延遲較高。如果你喜歡反應更靈敏的代理人，可以使用 `gpt-oss-20b` (或 30B 模型)，這兩者都能在 DGX Spark 上輕鬆運行，並保有充足的記憶體餘裕。

##### 一般社群參數經驗值

| 參數規模 | 戰力等級 | 實戰評價 (蝦力) |
| :--- | :--- | :--- |
| **< 30B** (如 9B, 14B, 27B) | 💬 聊天吹水 | 聊天很溜，但 **Tool-calling 邏輯常斷片**，無法達到人類期待的 "Agent" 水準。 |
| **30B - 70B** | 🛠️ 生活幫手 | **基本操作 OK**。查資料、設提醒、簡單單步任務轉動順暢。中階地端設備的甜蜜點。 |
| **70B - 100B** | 💼 進階助理 | **處理複雜流程**。可應付 Office 自動化、一般事務。能寫簡單 code，但對大型 Skills 協作仍顯吃力。 |
| **> 100B+** (雲端 SOTA) | 🦞 **全能龍蝦王** | **全天候代理自由**。具備多模態，寫程式、提 PR、直接 Push 迭代全包。真正能「放手讓龍蝦自己跑」的唯一等級。 |

**龍蝦觀點**: 地端是為了隱私與省錢，雲端是為了真正的「代理自由」。如果你家裡沒有 128GB 以上的記憶體，重要任務還是建議交給雲端大腦。🦞💡

**小建議**: 

1. 新手推薦從 **Claude Sonnet** 開始，穩定性最高；需要處理超長專案代碼庫時，切換到 **Gemini Pro** 會讓你有新世界的感覺。

2. **⚠️ 安全提醒**: 既然都要用雲端模型，請務必守好你的 **API Key**！這兩天爆出的 8.2 萬美金盜刷案就是血淋淋的教訓（見[最新危機](../murmur.md#-2026-03-12-30-萬星大關達成老黃親送補藥與-api-劫持案引發之破產危機-🚀🦞)），建議設定每月消費上限。

3. **地端玩家**: 現在 **Ollama** 最新版已支援 **MiniMax**、**Kimi**、**GLM** 與 **Qwen3** 家族模型。特別適合擁有 **Mac mini (建議 64GB+ 記憶體)** 或 **DGX Spark (128GB)** 等高效能裝置的用戶，讓你徹底擺脫 API 費用煩惱且極具隱私；即便不跑地端，選用他們的雲端 API 也是極致便宜的選擇。這是龍蝦農場不想被帳單嚇醒的最佳方案。🦞✨

4. **上下文設定**: 不管用哪種模型，Context Size 建議**最少設定在 64K 以上**，龍蝦才能在長對話中保持記憶不失憶。🦞🧠

---

## 📚 相關連結

- [🏠 回到主安裝指南 (README.md)](../README.md)
- [🦞 OpenClaw 宇宙戰場觀察誌 (murmur.md)](../murmur.md)
- [👍 WSL2 完整安裝指南](wsl2-guide.md)
- [🦙 Ollama 官網](https://ollama.com/)
- [🦞 OpenClaw 官網](https://openclaw.ai/)
