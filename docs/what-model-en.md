#### 🛠️ Deployment Guide: Which Model to Pick? (Model Landscape)

OpenClaw is model-agnostic, but the community's "heart" is quite vocal. Here is the deployment landscape for early 2026:

- 🥇 **Claude (Anthropic) — The "Soulmate"**: 
  - **Popular Choice**: Claude Sonnet 4 / 4.5.
  - **Why**: Widely considered the most stable for tool-calling logic and following Lobster-specific instructions. Despite the recent legal drama, its coding capability remains the heart of choice for most.
- 🥈 **GPT (OpenAI) — The "Veteran"**: 
  - **Popular Choice**: GPT-4o / GPT-5.4 (Thinking).
  - **Why**: Even with Peter moving to OpenAI, GPT's rigor in code generation and community support remain top-tier. The o1-series' reasoning shines in complex automation tasks.
- 🥉 **Gemini (Google) — The "King of Context & Value"**: 
  - **Popular Choice**: Gemini 1.5 Pro / 3 Flash.
  - **Why**: With **1M+ long context**, it has an unmatched advantage when dealing with massive log files. Gemini 3 Flash hit a staggering **95.1%** success rate in recent OpenClaw task benchmarks.
- 🏅 **DeepSeek / Kimi / MiniMax — The "Rising Stars"**:
  - **Why**: Extremely fast deployment in the APAC region and aggressive pricing (often with free tier events). The savior of low-budget "Cloud Lobster Farming."
- 🏠 **Ollama (Local) — The "Privacy Guard"**:
  - **Why**: The latest version now supports **MiniMax**, **Kimi**, **GLM**, and **Qwen3**. Perfect for privacy-conscious developers wanting to explore the latest model ecosystem locally.

#### 🧠 Field Notes: Model Parameters vs. "Lobster Power"

If you're torn between local and cloud, here's the collective wisdom from the Lobster farming community:

| Parameters | Tier | Field Notes (Lobster Power) |
| :--- | :--- | :--- |
| **< 30B** (e.g., 9B, 14B, 27B) | 💬 Chatty | Great for chatting, but **fails to meet human "Agent" expectations**. Tool-calling logic is often broken. |
| **30B - 70B** | 🛠️ Assistant | **Basic operations OK**. Competent for searches, reminders, and simple tasks. The "sweet spot" for mid-range local. |
| **70B - 100B** | 💼 Professional | **Handles complex workflows**. Good for Office automation and business processes. Can write simple code, but struggles with large Skills. |
| **> 100B+** (Cloud SOTA) | 🦞 **The Ultimate King** | **True Agentic Freedom**. Multimodal; handles coding/PRs/iteration solo. The only tier for "Set it and forget it" autonomy. |

**Lobster Insight**: Local is for privacy and thrift; Cloud is for true "Agentic Freedom." Unless you have 128GB+ RAM at home, leave the heavy lifting to the cloud brains. 🦞💡

**Quick Tip**: 
1. For beginners, start with **Claude Sonnet** for maximum stability. When handling massive project repos, switching to **Gemini 1.5 Pro** will feel like a different dimension.
2. **⚠️ Security Warning**: If you're using cloud models, guard your **API Keys** with your life! The recent $82,000 hijacking incident is a brutal wake-up call (see [Latest Crisis](#-latest-crisis)); always set strict usage quotas.
3. **Local Players**: The latest **Ollama** now supports the **MiniMax**, **Kimi**, **GLM**, and **Qwen3** families. This is ideal for users with **Mac mini (64GB+ RAM suggested)** or **DGX Spark (128GB)**, allowing you to forget about API bills entirely while ensuring maximum privacy. Even if you don't run them locally, their cloud APIs are extremely budget-friendly. It's the best option for Lobster Farmers to avoid bill shock. 🦞✨
4. **Context Size**: Regardless of the model, it is recommended to set the Context Size to **at least 64K** to ensure the Lobster maintains its "memory" during long sessions. 🦞🧠

---

## 📚 Related Links

- [🏠 Back to Main Guide (README-en.md)](../README-en.md)
- [🦞 OpenClaw Universe Battlefield Observation Log (murmur-en.md)](../murmur-en.md)
- [👍 Complete WSL2 Installation Guide](wsl2-guide-en.md)
- [🦙 Ollama Website](https://ollama.com/)
- [🦞 OpenClaw Website](https://openclaw.ai/)
