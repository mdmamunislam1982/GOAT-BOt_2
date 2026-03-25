const DIG = require("discord-image-generation");
const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");

module.exports = {
  config: {
    name: "toilet",
    version: "5.0",
    author: "Mamun OP",
    countDown: 5,
    role: 0,
    shortDescription: "Toilet image 🚽",
    category: "fun"
  },

  onStart: async function ({ message, event, args }) {
    try {
      let target;
      const mention = Object.keys(event.mentions);

      if (mention.length > 0) target = mention[0];
      else if (event.messageReply) target = event.messageReply.senderID;
      else if (args[0]) target = args[0];
      else return message.reply("❌ কাউকে mention/reply দে!");

      // 👉 Facebook avatar (direct)
      const avatarURL = `https://graph.facebook.com/${target}/picture?width=512&height=512`;

      // 👉 Buffer বানানো (IMPORTANT)
      const res = await axios.get(avatarURL, {
        responseType: "arraybuffer"
      });

      // 👉 Image generate (NO API)
      const img = await new DIG.Toilet().getImage(res.data);

      // 👉 Save temp file
      const filePath = path.join(__dirname, "tmp", `${target}.png`);
      fs.ensureDirSync(path.join(__dirname, "tmp"));
      fs.writeFileSync(filePath, img);

      // 👉 Send
      await message.reply({
        body: "🚽 | Toilet image ready 😂\nCredit: Mamun OP",
        attachment: fs.createReadStream(filePath)
      });

      fs.unlinkSync(filePath);

    } catch (err) {
      console.error("REAL ERROR 👉", err);
      message.reply("❌ এখনও error 😢 console screenshot দে!");
    }
  }
};
