const DIG = require("discord-image-generation");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "kiss",
    aliases: ["kissimg"],
    version: "1.1",
    author: "Mamun Edit",
    countDown: 5,
    role: 0,
    shortDescription: "Send a kiss image 💋",
    longDescription: "Generate a kiss image with mentioned users",
    category: "fun",
    guide: "{pn} @mention"
  },

  onStart: async function ({ api, message, event, usersData }) {
    try {
      let one, two;
      const mention = Object.keys(event.mentions);

      // ❌ No mention
      if (mention.length === 0) {
        return message.reply("❌ Please mention someone!");
      }

      // ✅ One mention
      if (mention.length === 1) {
        one = event.senderID;
        two = mention[0];
      } 
      // ✅ Two mentions
      else {
        one = mention[0];
        two = mention[1];
      }

      // Avatar URL
      const avatar1 = await usersData.getAvatarUrl(one);
      const avatar2 = await usersData.getAvatarUrl(two);

      // Generate image
      const img = await new DIG.Kiss().getImage(avatar1, avatar2);

      // Save path
      const filePath = path.join(__dirname, "tmp", `${one}_${two}_kiss.png`);

      // Ensure folder exists
      fs.ensureDirSync(path.join(__dirname, "tmp"));

      fs.writeFileSync(filePath, img);

      // Send message
      await message.reply({
        body: "😘💋 Kiss for you!",
        attachment: fs.createReadStream(filePath)
      });

      // Delete file after send
      fs.unlinkSync(filePath);

    } catch (err) {
      console.error(err);
      message.reply("❌ Error generating kiss image!");
    }
  }
};
