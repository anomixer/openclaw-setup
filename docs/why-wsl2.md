# 為什麼 Windows 使用者需要 WSL2？

## 官方立場

OpenClaw 官方文件明確表示：

> "OpenClaw on Windows is recommended via WSL2 (Ubuntu recommended)... Native Windows might be trickier. WSL2 gives you the full Linux experience."

這不是技術上「不能跑」，而是：

1. **原生 Windows 只是「技術預覽」狀態** - 有 `install.ps1` 但官方主力支援是 macOS/Linux/WSL2
2. **Skills 生態以 Linux/macOS 為主** - 很多 skills 的 installer 需要 Homebrew、apt、或 Linux binary

---

## Memory 功能問題

OpenClaw 的 memory 子系統（RAG / vector DB）在 Windows 原生環境常見問題：

### 技術層面的挑戰

- **Embeddings 套件相容性**：某些 embeddings 套件（如 `onnxruntime-node`）在 Windows 需要額外 Visual C++ runtime
- **路徑處理差異**：檔案路徑處理（`\` vs `/`）可能導致 memory 索引失敗
- **原生模組編譯**：部分依賴需要 node-gyp + Visual Studio Build Tools

### WSL2 的優勢

在 WSL2 裡這些問題基本不存在，因為是標準 Linux 環境：

✅ 標準 POSIX 路徑  
✅ 完整的原生模組編譯工具鏈  
✅ 與上游開發環境一致  

---

## Skills 相容性

### Skills 的運作機制

Skills 的 `metadata.openclaw.os` 欄位與 installer 機制決定了可用性：

```yaml
os: ["darwin", "linux"]  # 很多 skills 只寫這兩個
installer:
  type: brew             # Windows 上沒有 Homebrew
  package: some-tool
```

### 原生 Windows 的限制

在原生 Windows 上：

❌ **OS gating**：skill 的 `os` 欄位沒有 `win32`，會被自動排除  
❌ **Installer 缺失**：就算手動裝，`brew` 指令也不存在  
❌ **Binary 不相容**：Linux/macOS 的執行檔無法在 Windows 上運行  

### WSL2 的優勢

在 WSL2 環境：

✅ **正確的平台識別**：`process.platform === 'linux'`，skills 被視為可用  
✅ **完整的套件管理**：可以用 apt / Homebrew for Linux 安裝依賴  
✅ **社群測試涵蓋**：大多數 skills 開發者會測試 Linux 環境  

### 實際影響範圍

根據社群統計，約 **60-70% 的公開 skills** 需要以下之一：

- Homebrew（macOS/Linux only）
- apt/yum 等 Linux 套件管理器
- Linux 專用的 CLI 工具（如 `jq`、`curl` 特定版本）

---

## Homebrew 問題

### 官方說明

Homebrew 官方明確表示：

> "Homebrew does not support native Windows. You can use WSL to install Homebrew on Linux."

### 為什麼不能移植到 Windows？

1. **依賴 Unix 工具鏈**：Homebrew 深度依賴 bash、make、gcc 等 Unix 工具
2. **路徑假設**：許多 formula 假設 `/usr/local`、`/opt/homebrew` 等 Unix 路徑
3. **符號連結**：Windows 的符號連結機制與 Unix 不同

### 替代方案

| 方案 | 優點 | 缺點 |
|------|------|------|
| **Scoop / Chocolatey** | Windows 原生 | skills 不支援 |
| **MSYS2 / Cygwin** | 提供 POSIX 環境 | 非官方 Homebrew 支援 |
| **WSL2** | 真正的 Linux | 需要虛擬化支援 |

---

## 效能考量

### WSL2 的效能表現

- **CPU 運算**：接近原生 Linux（~95-99% 效能）
- **記憶體**：動態分配，與 Windows 共享
- **磁碟 I/O**：WSL2 檔案系統內接近原生，跨檔案系統（`/mnt/c`）較慢

### 最佳實踐

✅ **推薦**：將 OpenClaw 相關檔案放在 WSL2 檔案系統內（`~/`）  
⚠️ **避免**：頻繁存取 `/mnt/c` 下的檔案  

---

## 總結：何時該用 WSL2？

### 使用 Windows 原生版的情境

✅ 只想快速體驗 OpenClaw + Ollama  
✅ 不需要 skills / memory 進階功能  
✅ 主要用途是聊天對話  

### 應該使用 WSL2 的情境

✅ 需要完整的 memory 功能（RAG / 長期記憶）  
✅ 想安裝社群 skills  
✅ 需要穩定的生產環境  
✅ 打算參與開發或除錯  

---

## 參考資料

- [OpenClaw 官方文件 - Windows 平台](https://docs.openclaw.ai/platforms/windows)
- [Homebrew 官方說明](https://github.com/orgs/Homebrew/discussions/72)
- [WSL2 官方文件](https://docs.microsoft.com/en-us/windows/wsl/)

---

**回到**：[主要 README](../README.md) | [WSL2 安裝指南](wsl2-guide.md) | [遷移指南](migration-guide.md)