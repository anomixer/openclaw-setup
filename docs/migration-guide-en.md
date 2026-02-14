# Migrating from Windows to WSL2

**[中文版](migration-guide.md) | English**

> If you've already installed OpenClaw on native Windows, this guide will help you safely migrate to WSL2.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Backup Windows Configuration](#2-backup-windows-configuration)
3. [Install WSL2](#3-install-wsl2)
4. [Install OpenClaw on WSL2](#4-install-openclaw-on-wsl2)
5. [Restore Configuration](#5-restore-configuration)
6. [Test and Verify](#6-test-and-verify)
7. [Clean Up Old Installation](#7-clean-up-old-installation)
8. [Daily Usage](#8-daily-usage)

---

## 1. Prerequisites

### 1.1 Check Current Status

In Windows Command Prompt:

```cmd
openclaw --version
openclaw status --all
```

Confirm OpenClaw is running properly.

### 1.2 Record Important Information

Note down the following (you'll need them later):

- Gateway token
- Telegram bot token (if configured)
- Your current model name

You can view them from:

```cmd
type %USERPROFILE%\.openclaw\openclaw.json
```

Or open with Notepad: `C:\Users\YourUsername\.openclaw\openclaw.json`

---

## 2. Backup Windows Configuration

In Windows PowerShell:

```powershell
$src = "$env:USERPROFILE\.openclaw"
$dst = "C:\openclaw-backup"
Copy-Item $src $dst -Recurse -Force
```

Verify backup succeeded:

```powershell
dir C:\openclaw-backup
```

You should see:

- `openclaw.json`
- `.env` (if exists)
- `skills/`
- `credentials/`
- `agents/`

---

## 3. Install WSL2

### 3.1 Enable WSL2

Open PowerShell **as Administrator**:

```powershell
wsl --install -d Ubuntu-24.04
```

**Restart your computer**.

### 3.2 Configure Ubuntu

After reboot, Ubuntu will auto-start. Follow prompts to set:

- Username
- Password (remember it, you'll need it for sudo)


### 3.3 Enable systemd

In Ubuntu WSL terminal:

```bash
sudo tee /etc/wsl.conf >/dev/null <<'EOF'
[boot]
systemd=true
EOF
```

Back to Windows PowerShell:

```powershell
wsl --shutdown
```

Open Ubuntu again.

---

## 4. Install OpenClaw on WSL2

Please refer to [wsl2-guide-en.md](wsl2-guide-en.md) for details.

---

## 5. Restore Configuration

### 5.1 Copy Files from Windows to WSL

In WSL:

```bash
# Create directory
mkdir -p ~/.openclaw

# Restore configuration
cp /mnt/c/openclaw-backup/.openclaw/openclaw.json ~/.openclaw/
cp /mnt/c/openclaw-backup/.openclaw/.env ~/.openclaw/ 2>/dev/null || true

# Restore credentials
cp -r /mnt/c/openclaw-backup/.openclaw/credentials ~/.openclaw/ 2>/dev/null || true
```

> ⚠️ **Note**: Do NOT copy the `skills/` directory directly, as Windows binaries won't work on Linux.

### 5.2 Reconfigure Ollama

```bash
ollama launch openclaw
```

Select the model you want to use (preferably the same as Windows version), then confirm the changes.

---

## 6. Test and Verify

### 6.1 Check Service Status

```bash
openclaw status --all
```

Should show:

- ✅ Gateway: reachable
- ✅ Ollama: connected


### 6.2 Run Diagnostics

```bash
openclaw doctor
```

Check for any warnings or errors.


### 6.3 Test Telegram (if configured)

Send a message to your Telegram bot to confirm it responds normally.

If you need to re-pair:

```bash
openclaw pairing approve telegram <pairing-code>
```

### 6.4 Test Memory Feature

```bash
openclaw memory status
```

If errors occur, run:

```bash
openclaw memory rebuild
```


---

## 7. Clean Up Old Installation

### 7.1 Confirm WSL2 Version Works Properly

Before cleaning up Windows version, **confirm WSL2 version works completely**:

- ✅ Web UI can connect
- ✅ AI responds normally
- ✅ Telegram works (if configured)
- ✅ Memory feature works


### 7.2 Remove Windows Version

In Windows PowerShell (**as Administrator**):

```powershell
# Remove OpenClaw
openclaw uninstall --all --yes --non-interactive

# Remove npm package
npm uninstall -g openclaw

# Delete configuration files (backup exists at C:\openclaw-backup)
Remove-Item "$env:USERPROFILE\.openclaw" -Recurse -Force
```


### 7.3 Keep Backup (Recommended)

It's recommended to keep `C:\openclaw-backup` for at least 1-2 weeks until you confirm the WSL2 version is stable.

---

## 8. Daily Usage

### 8.1 Operating WSL2 from Windows

When you want to run OpenClaw commands, you have two options:

**Method A: Inside WSL Terminal**

```cmd
wsl
```

Then in Ubuntu:

```bash
openclaw status --all
openclaw doctor
```

**Method B: Directly from Command Prompt**

```cmd
wsl openclaw status --all
wsl openclaw doctor
wsl openclaw memory status
```

### 8.2 Managing Gateway Service

Inside WSL:

```bash
# Check status
sudo systemctl status openclaw-gateway

# Restart
sudo systemctl restart openclaw-gateway

# View logs
journalctl -u openclaw-gateway -f
```


---

## FAQ

### Q: Gateway won't start after restoration?

```bash
# View detailed logs
journalctl -u openclaw-gateway -f

# Reinstall Gateway
openclaw gateway install
```


### Q: Token doesn't match?

```bash
# View correct token
cat ~/.openclaw/openclaw.json | grep -A 2 '"token"'
```


### Q: Skills won't install?

Don't copy skills directly from Windows, reinstall them in WSL2:

```bash
clawhub install <skill-name>
```


### Q: Memory feature issues?

```bash
# Rebuild memory index
openclaw memory rebuild

# Check dependencies
openclaw doctor --verbose
```


### Q: Want to keep both Windows and WSL2 versions?

**Not recommended**, because:

- Both will compete for port 18789
- Gateway token / Telegram pairing will conflict
- Easy to mix up configurations

If you really need to, change the port on one side:

```bash
# In WSL2's openclaw.json
"gateway": {
  "port": 18790  # Use a different port
}
```


---

## Related Links

- [Main README](../README-EN.md) - Windows native version guide
- [Why WSL2?](why-wsl2-en.md) - Technical explanation
- [WSL2 Complete Installation Guide](wsl2-guide-en.md) - Install from scratch

---

**Last Updated**: 2026-02-13  
**by anomixer**
