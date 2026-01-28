  <div align="center">

  <img src="https://i.imgur.com/dIWEn4s.jpeg" width="100%" style="border-radius: 10px;"/>

</div>

  # 𝐆𝐎𝐀𝐓 𝐁𝐎𝐓 𝐕𝟐 𝐁𝐘 𝐒𝐀𝐉𝐄𝐄𝐁 𝐀𝐇𝐀𝐌𝐄𝐃
  
  [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=25&pause=1000&color=00F0FF&center=true&vCenter=true&width=435&lines=MESSENGER+MULTI-DEVICE+BOT;FUN+GOAT+BOT+;POWERFUL+ADMIN+TOOLS;24%2F7+ACTIVE+SERVICE;This+repository+is;controlled+by+SAJEEB-AHAMED.)](https://git.io/typing-svg)

  <p align="center">
    <a href="https://github.com/sajeeb-ahamed/GOAT-BOT-V2">
      <img title="Stars" src="https://img.shields.io/github/stars/sajeeb-ahamed/GOAT-BOT-V2?color=cyan&style=for-the-badge&logo=github">
    </a>
    <a href="https://github.com/sajeeb-ahamed/GOAT-BOT-V2/forks">
      <img title="Forks" src="https://img.shields.io/github/forks/sajeeb-ahamed/GOAT-BOT-V2?color=cyan&style=for-the-badge&logo=github">
    </a>
    <a href="https://github.com/sajeeb-ahamed/GOAT-BOT-V2">
      <img title="Repo Size" src="https://img.shields.io/github/repo-size/sajeeb-ahamed/GOAT-BOT-V2?style=for-the-badge&color=cyan">
    </a>
    <a href="https://profile-counter.glitch.me/SILENT-SOBX-MD/count.svg">
       <img src="https://img.shields.io/badge/VISITORS-Active-blue?style=for-the-badge&logo=google-analytics">
    </a>
    <p align="center">
 𝚅𝙸𝚂𝙸𝚃𝙾𝚁𝚂 𝙲𝙾𝚄𝙽𝚃<br>
 <img src="https://komarev.com/ghpvc/?username=sajeeb-ahamed&label=Visitors&color=blue&style=flat" alt="Visitors">
  </p>

  <hr>

  <a href="https://www.youtube.com/@SAUniqueBro">
    <img src="https://img.shields.io/badge/WATCH%20TUTORIAL-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Watch Video">
  </a>
  <a href="https://github.com/sajeeb-ahamed/GOAT-BOT-V2/fork">
    <img src="https://img.shields.io/badge/FORK%20NOW-333?style=for-the-badge&logo=github&logoColor=white" alt="Fork Repo">
  </a>

</div>

---

### ❖ **ABOUT THE PROJECT**
> 🕋✨ **GOAT-BOT-V2** is a versatile Messenger automation tool designed to elevate your chat experience. It helps you find, download, and manage resources like **Logos, Stickers, Videos, Movies, Ai, custom chat, image gen** and much more efficiently.
> 
> *Based on the original work by [Goat-Bot-v2](https://github.com/ntkhang03/Goat-Bot-V2)*

---

### ❖ **DEPLOYMENT ZONES**

<div align="center">
  <table>
    <tr>
      <td align="center" width="150"><img src="https://img.shields.io/badge/HEROKU-430098?style=for-the-badge&logo=heroku&logoColor=white" width="100%"></td>
      <td align="center" width="300">
        <a href="https://dashboard.heroku.com/new-app?template=https://github.com/sajeeb-ahamed/GOAT-BOT-V2">
          <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center"><img src="https://img.shields.io/badge/REPLIT-F26207?style=for-the-badge&logo=replit&logoColor=white" width="100%"></td>
      <td align="center">
        <a href="https://repl.it/github/sajeeb-ahamed/GOAT-BOT-V2">
          <img src="https://img.shields.io/badge/DEPLOY%20ON%20REPLIT-black?style=flat-square&logo=replit" alt="Deploy to Replit">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center"><img src="https://img.shields.io/badge/KOYEB-121212?style=for-the-badge&logo=koyeb&logoColor=white" width="100%"></td>
      <td align="center">
        <a href="https://app.koyeb.com/services/deploy?type=git&repository=https://github.com/sajeeb-ahamed/GOAT-BOT-V2&branch=main">
          <img src="https://img.shields.io/badge/DEPLOY%20ON%20KOYEB-blue?style=flat-square&logo=koyeb" alt="Deploy to Koyeb">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center"><img src="https://img.shields.io/badge/RAILWAY-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" width="100%"></td>
      <td align="center">
        <a href="https://railway.app/new">
          <img src="https://img.shields.io/badge/DEPLOY%20ON%20RAILWAY-black?style=flat-square&logo=railway" alt="Deploy to Railway">
        </a>
      </td>
    </tr>
        <tr>
      <td align="center"><img src="https://img.shields.io/badge/RENDER-46E3B7?style=for-the-badge&logo=render&logoColor=white" width="100%"></td>
      <td align="center">
        <a href="https://dashboard.render.com">
          <img src="https://img.shields.io/badge/DEPLOY%20ON%20RENDER-black?style=flat-square&logo=render" alt="Deploy to Render">
        </a>
      </td>
    </tr>
  </table>
</div>

---

### ❖ **GET STARTED (MANUAL)**

<details>
<summary>🔎 <b>Click to View CI/CD Workflow</b></summary>

```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20.x]
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
    - name: Install dependencies
      run: npm install
    - name: Start the bot
      env:
        PORT: 8080
      run: npm start
```
</details>
❖ COMMUNITY & SUPPORT
<div align="center">

<a href="https://wa.me/966505748978?text=ᴀssᴀʟᴀᴍᴜ ᴀʟᴀɪᴋᴜᴍ+𝙰𝙻𝚅𝙸+ɪ+ɴᴇᴇᴅ+ʜᴇʟᴘ!.+ʙʀᴏᴛʜᴇʀ!!">
<img src="https://img.shields.io/badge/WHATSAPP-SUPPORT-25D366?style=for-the-badge&logo=whatsapp&logoColor=white">
</a>

<a href="https://m.me/ItzMeAlviOfficial/">
<img src="https://img.shields.io/badge/MESSENGER-GROUP-00B2FF?style=for-the-badge&logo=messenger&logoColor=white">
</a>

<a href="https://youtube.com/@sauniquebro?si=ciKy8Gn_trUtTfYw">
<img src="https://img.shields.io/badge/YOUTUBE-CHANNEL-FF0000?style=for-the-badge&logo=youtube&logoColor=white">
</a>

</div>



<a href="https://host.talkdrove.com/auth/signup?ref=9535F15A">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/GET%2520FREE%2520HOSTING-TALKDROVE-blueviolet%3Fstyle%3Dflat-square%26logo%3Dgoogle-cloud" width="300">
</a>
</div>

``
## 📋 Essential Commands

| Command | Description | Access |
|---------|-------------|---------|
| `/help` | View all commands | All Users |
| `/prefix` | View/change prefix | Group Admin |
| `/premium request` | Request premium | All Users |
| `/premium add` | Add premium user | Bot Admin |
| `/threadapprove` | Manage thread approval | Bot Admin |
| `/botlog` | Configure bot logging | Bot Admin |
| `/sthandlers` | Access command store | All Users |
| `/stai` | AI assistant | All Users |
| `/streport` | Report issues | All Users |
| `/update` | Update bot | Bot Admin |

---

### Global Prefix System

Configure prefix usage in `config.json`:

```json
{
  "prefix": "/",
  "usePrefix": {
    "enable": true,                    // Global prefix requirement
    "adminUsePrefix": {
      "enable": true,                  // Admin prefix requirement
      "specificUids": []               // Specific users who need prefix
    }
  }
}
```

**Options:**
- `usePrefix.enable: true` - All users must use prefix
- `usePrefix.enable: false` - No prefix required globally
- `adminUsePrefix.enable: true` - Admins must use prefix
- `adminUsePrefix.enable: false` - Admins don't need prefix
- `specificUids: ["uid1", "uid2"]` - Specific users affected by admin rules

### Bot Account Configuration

Login credentials are set in `config.json`:

```json
{
  "botAccount": {
    "email": "your_email@example.com",
    "password": "your_password",
    "userAgent": "Mozilla/5.0...",
    "autoUseWhenEmpty": true
  }
}
```

**Note:** If `account.txt` is empty, the bot will automatically use credentials from `config.json` to fetch cookies.


---

## 🚀 Features

- **Modular Command System** - Easy to add/remove commands
- **Premium System** - Advanced premium user management
- **Fast and Scalable** - Optimized bot core for high performance
- **Auto-restart and Watchdog** - Self-healing capabilities
- **MongoDB/SQLite Support** - Flexible database options
- **Dynamic Command Loader** - Hot-reload commands without restart
- **Thread Approval System** - Control bot access to groups
- **Anti-React System** - Advanced message management
- **Real-time Dashboard** - Live monitoring with WebSocket
- **Easy Deployment** - One-click deployment on Replit & Render
- **Custom ntkhang-fca** - Optimized Facebook Chat API
- **Bot Logging System** - Comprehensive logging configuration
- **Prefix Management** - Global and per-thread prefix control
- **Bio Update System** - Automatic bio updates
- **Startup Notifications** - Configurable startup messages

---

## 📄 License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software, but please maintain the original credits.

✨ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿:- 𝗦𝗔𝗝𝗘𝗘𝗕 𝗔𝗛𝗔𝗠𝗘𝗗  
📜 𝗢𝗿𝗶𝗴𝗶𝗻𝗮𝗹 𝗖𝗿𝗲𝗮𝘁𝗼𝗿:- 𝗡𝗧𝗞𝗛𝗔𝗡𝗚

---

## ❤️ Support the Project

If you find this project helpful:
- ⭐ Star this repository
- 🍴 Fork and contribute
- 📢 Share with others
- [![Subscribe YouTube](https://img.shields.io/badge/Subscribe-SAUNIQUE%20BRO-red?style=for-the-badge&logo=youtube)](https://youtube.com/@SAUniqueBro?si=7wqJsdLBRMvWkWOU)
- [![Follow Facebook Page](https://img.shields.io/badge/Follow-Facebook%20Page-blue?style=for-the-badge&logo=facebook)](https://www.facebook.com/profile.php?id=100001609058878)
- [![Join Telegram](https://img.shields.io/badge/Join%20Telegram-MR%20ALVI%20BRO-blue?style=for-the-badge&logo=telegram)](https://t.me/MRALVIBRO)
- [![Follow @SAJEE-AHAMED](https://img.shields.io/github/followers/sajeeb-ahamed?label=Follow%20%40GOAT-BOT-V2&style=social)](https://github.com/sajeeb-ahamed)

---

—͟͟͞͞𝐆𝐎𝐀𝐓 𝐁𝐎𝐓 𝐕𝟐 𝐁𝐘 𝐒𝐀𝐉𝐄𝐄𝐁 𝐀𝐇𝐀𝐌𝐄𝐃
</div>
<div align="center">
Made with ❤️ by SAJEEB BOT TEAM.
> Release Date : 28/01/2026 at 12.00 AM.




<i>Don't forget to give a ⭐ if you like this bot!</i>
</div>
