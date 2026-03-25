const axios = require("axios");

module.exports = {
  config: {
    name: "toilet",
    aliases: ["toiletimg"],
    version: "2.00",
    author: "Mamun OP",
    countDown: 5,
    role: 0,
    shortDescription: "Put someone in toilet 🚽",
    longDescription: "Mention / Reply / UID দিয়েও কাজ করবে",
    category: "fun",
    guide: "{pn} @mention | reply | uid"
  },

  onStart: async function ({ message, event, args, usersData }) {
    try {
      let target;
      const mention = Object.keys(event.mentions);

      // ✅ Mention
      if (mention.length > 0) {
        target = mention[0];
      }

      // ✅ Reply
      else if (event.messageReply) {
        target = event.messageReply.senderID;
      }

      // ✅ UID
      else if (args[0] && !isNaN(args[0])) {
        target = args[0];
      }

      // ❌ Nothing
      else {
        return message.reply("❌ কাউকে mention/reply/uid দে!");
      }

      // 👉 Avatar
      const avatar = await usersData.getAvatarUrl(target);

      // 👉 Toilet Image API
      const imgUrl = `https://api.popcat.xyz/toilet?image=${encodeURIComponent(avatar)}`;

      // 👉 Send Image
      return message.reply({
        body: "🚽 | Here is your toilet image 😂\n\nCredit: Mamun OP 2.00",
        attachment: await global.utils.getStreamFromURL(imgUrl)
      });

    } catch (err) {
      console.error(err);
      message.reply("❌ Error hoise bro! আবার try কর 😢");
    }
  }
};
