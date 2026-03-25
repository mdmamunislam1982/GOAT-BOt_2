const DIG = require("discord-image-generation");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "kiss",
    aliases: ["kissimg"],
    version: "2.0",
    author: "Mamun OP",
    countDown: 5,
    role: 0,
    shortDescription: "Kiss someone 😘",
    longDescription: "Mention / Reply / UID / Name দিয়েও কাজ করবে",
    category: "fun",
    guide: "{pn} @mention | reply | uid | name"
  },

  onStart: async function ({ api, message, event, args, usersData }) {
    try {
      let one = event.senderID;
      let two;

      const mention = Object.keys(event.mentions);

      // ✅ 1. Mention system
      if (mention.length > 0) {
        two = mention[0];
      }

      // ✅ 2. Reply system (BEST 🔥)
      else if (event.messageReply) {
        two = event.messageReply.senderID;
      }

      // ✅ 3. UID দিলে
      else if (args[0] && !isNaN(args[0])) {
        two = args[0];
      }

      // ❌ কিছুই না থাকলে
      else {
        return message.reply("❌ Mention / Reply / UID use কর bro!");
      }

      // Avatar URL
      const avatar1 = await usersData.getAvatarUrl(one);
      const avatar2 = await usersData.getAvatarUrl(two);

      // Image generate
      const img = await new DIG.Kiss().getImage(avatar2, avatar1);

      // File path
      const filePath = path.join(__dirname, "tmp", `${one}_${two}_kiss.png`);
      fs.ensureDirSync(path.join(__dirname, "tmp"));

      fs.writeFileSync(filePath, img);

      // Send
      await message.reply({
        body: "😘💋 Kiss done!",
        attachment: fs.createReadStream(filePath)
      });

      fs.unlinkSync(filePath);

    } catch (e) {
      console.error(e);
      message.reply("❌ Error hoise bro!");
    }
  }
};
