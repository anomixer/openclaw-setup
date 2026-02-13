# 從 Windows 遷移到 WSL2

**中文版 | [English](migration-guide-en.md)**

> 如果你已經在 Windows 原生環境安裝過 OpenClaw,這份指南將幫你安全地遷移到 WSL2。

---

## 目錄

1. [前置作業](#1-前置作業)
2. [備份 Windows 設定](#2-備份-windows-設定)
3. [安裝 WSL2](#3-安裝-wsl2)
4. [在 WSL2 安裝 OpenClaw](#4-在-wsl2-安裝-openclaw)
5. [還原設定](#5-還原設定)
6. [測試與驗證](#6-測試與驗證)
7. [清理舊安裝](#7-清理舊安裝)
8. [後續使用](#8-後續使用)

---

## 1. 前置作業

### 1.1 確認目前狀態

在 Windows Command Prompt：

```cmd
openclaw --version
openclaw status --all
```

確認 OpenClaw 可以正常執行。

### 1.2 記錄重要資訊

記下以下資訊（稍後需要）：

- Gateway token
- Telegram bot token（如果有的話）
- 你目前使用的模型名稱

可以從這裡查看：

```cmd
type %USERPROFILE%\.openclaw\openclaw.json
```

或直接用記事本開啟：`C:\Users\你的使用者名稱\.openclaw\openclaw.json`

---

## 2. 備份 Windows 設定

在 Windows PowerShell：

```powershell
$src = "$env:USERPROFILE\.openclaw"
$dst = "C:\openclaw-backup"
Copy-Item $src $dst -Recurse -Force
```

確認備份成功：

```powershell
dir C:\openclaw-backup
```

應該能看到：

- `openclaw.json`
- `.env`（如果有）
- `skills/`
- `credentials/`
- `agents/`

---

## 3. 安裝 WSL2

### 3.1 啟用 WSL2

以 **系統管理員身份** 開啟 PowerShell：

```powershell
wsl --install -d Ubuntu-24.04
```

**重新啟動電腦**。

### 3.2 設定 Ubuntu

重開後，Ubuntu 會自動啟動，依提示設定：

- 使用者名稱
- 密碼（記住，之後 sudo 要用）


### 3.3 啟用 systemd

在 Ubuntu WSL 終端機：

```bash
sudo tee /etc/wsl.conf >/dev/null <<'EOF'
[boot]
systemd=true
EOF
```

回到 Windows PowerShell：

```powershell
wsl --shutdown
```

再次開啟 Ubuntu。

---

## 4. 在 WSL2 安裝 OpenClaw 

請參考 [wsl2-guide.md](wsl2-guide.md) 內容


---

## 5. 還原設定

### 5.1 將檔案從 Windows 複製至 WSL

進入 WSL :

```bash
# 建立目錄
mkdir -p ~/.openclaw

# 還原設定檔
cp /mnt/c/openclaw-backup/.openclaw/openclaw.json ~/.openclaw/
cp /mnt/c/openclaw-backup/.openclaw/.env ~/.openclaw/ 2>/dev/null || true

# 還原 credentials
cp -r /mnt/c/openclaw-backup/.openclaw/credentials ~/.openclaw/ 2>/dev/null || true
```

> ⚠️ **注意**：不要直接拷貝 `skills/` 目錄，因為 Windows binary 在 Linux 無法使用。

### 5.2 重新配置 Ollama

```bash
ollama launch openclaw
```

選擇你想用的模型（建議與 Windows 版相同），確認修改。

---

## 6. 測試與驗證

### 6.1 檢查服務狀態

```bash
openclaw status --all
```

應該顯示：

- ✅ Gateway: reachable
- ✅ Ollama: connected


### 6.2 執行診斷

```bash
openclaw doctor
```

檢查是否有任何警告或錯誤。


### 6.3 測試 Telegram（如果有配置）

向你的 Telegram bot 傳訊息，確認能正常回應。

如果需要重新配對：

```bash
openclaw pairing approve telegram <配對碼>
```

### 6.4 測試 Memory 功能

```bash
openclaw memory status
```

如果顯示錯誤，執行：

```bash
openclaw memory rebuild
```


---

## 7. 清理舊安裝

### 7.1 確認 WSL2 版本完全正常

在清理 Windows 版之前，**先確認 WSL2 版完全正常**：

- ✅ Web UI 可以連線
- ✅ AI 能正常回應
- ✅ Telegram 正常（如果有的話）
- ✅ Memory 功能正常


### 7.2 移除 Windows 版本

在 Windows PowerShell（**系統管理員身份**）：

```powershell
# 移除 OpenClaw
openclaw uninstall --all --yes --non-interactive

# 移除 npm 套件
npm uninstall -g openclaw

# 刪除設定檔（備份已存在 C:\openclaw-backup）
Remove-Item "$env:USERPROFILE\.openclaw" -Recurse -Force
```


### 7.3 保留備份（建議）

建議保留 `C:\openclaw-backup` 至少 1-2 週，確認 WSL2 版本穩定後再刪除。

---

## 8. 後續使用

### 8.1 從 Windows 操作 WSL2

以後想執行 OpenClaw 指令時，有兩種方式：

**方法 A：在 WSL 終端機裡**

```cmd
wsl
```

然後在 Ubuntu 裡執行：

```bash
openclaw status --all
openclaw doctor
```

**方法 B：直接從 Command Prompt**

```cmd
wsl openclaw status --all
wsl openclaw doctor
wsl openclaw memory status
```

### 8.2 管理 Gateway 服務

在 WSL 內：

```bash
# 查看狀態
sudo systemctl status openclaw-gateway

# 重啟
sudo systemctl restart openclaw-gateway

# 查看日誌
journalctl -u openclaw-gateway -f
```


---

## 常見問題

### Q: 還原後 Gateway 無法啟動？

```bash
# 查看詳細日誌
journalctl -u openclaw-gateway -f

# 重新安裝 Gateway
openclaw gateway install
```


### Q: Token 不對？

```bash
# 查看正確的 token
cat ~/.openclaw/openclaw.json | grep -A 2 '"token"'
```


### Q: Skills 無法安裝？

不要直接拷貝 Windows 的 skills，在 WSL2 重新安裝：

```bash
clawhub install <skill-name>
```


### Q: Memory 功能異常？

```bash
# 重建 memory 索引
openclaw memory rebuild

# 檢查依賴
openclaw doctor --verbose
```


### Q: 想同時保留 Windows 和 WSL2 版本？

**不建議**，因為：

- 兩邊會搶 18789 port
- Gateway token / Telegram pairing 會衝突
- 容易搞混設定

如果真的需要，建議改其中一邊的 port：

```bash
# 在 WSL2 的 openclaw.json 裡
"gateway": {
  "port": 18790  # 改成其他 port
}
```


---

## 相關連結

- [主 README](../README.md) - Windows 原生版教學
- [為什麼需要 WSL2？](why-wsl2.md) - 技術說明
- [WSL2 完整安裝指南](wsl2-guide.md) - 從零開始安裝

---

**最後更新**: 2026-02-13  
**by anomixer**
