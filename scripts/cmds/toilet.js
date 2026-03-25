const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
  name: "toilet",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mamun OP FIXED",
  description: "Send someone to toilet 😂",
  commandCategory: "fun",
  usages: "@mention | reply",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args, Users }) {
  try {
    let targetID;

    // ✅ Mention
    if (Object.keys(event.mentions || {}).length > 0) {
      targetID = Object.keys(event.mentions)[0];
    }

    // ✅ Reply
    else if (event.messageReply) {
      targetID = event.messageReply.senderID;
    }

    // ❌ No target
    if (!targetID) {
      return api.sendMessage("🚽 কাউকে target কর bro!", event.threadID, event.messageID);
    }

    // ✅ Name fix (V2 style)
    let senderName = "User";
    let targetName = "User";

    try {
      senderName = await Users.getNameUser(event.senderID);
    } catch {}

    try {
      targetName = await Users.getNameUser(targetID);
      if (!targetName) targetName = "Unknown";
    } catch {}

    // 💩 Message
    const msg = `🚽 ${senderName} ${targetName} কে টয়লেটে পাঠাইছে 😂`;

    // 🌐 Image URL
    const imgUrl = "https://i.imgur.com/3ZQ3Z6K.png";
    const imgPath = __dirname + "/cache/toilet.png";

    // 📥 Download image
    const res = await axios.get(imgUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(imgPath, res.data);

    // 📤 Send
    api.sendMessage({
      body: msg,
      attachment: fs.createReadStream(imgPath)
    }, event.threadID, () => fs.unlinkSync(imgPath), event.messageID);

  } catch (e) {
    console.log(e);
    return api.sendMessage("❌ Error হইছে bro!", event.threadID, event.messageID);
  }
};
