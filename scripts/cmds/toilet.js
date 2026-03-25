const axios = require("axios");

module.exports = {
  config: {
    name: "toilet",
    version: "2.1",
    author: "Mamun OP",
    countDown: 5,
    role: 0,
    shortDescription: "Toilet image 🚽",
    category: "fun"
  },

  onStart: async function ({ message, event, args, usersData }) {
    try {
      let target;
      const mention = Object.keys(event.mentions);

      if (mention.length > 0) target = mention[0];
      else if (event.messageReply) target = event.messageReply.senderID;
      else if (args[0]) target = args[0];
      else return message.reply("❌ কাউকে mention/reply দে!");

      // ✅ FIX: usersData avatar (best for v2)
      let avatar = await usersData.getAvatarUrl(target);

      // 👉 fallback avatar
      if (!avatar || avatar.includes("undefined")) {
        avatar = "https://i.imgur.com/4M34hi2.png";
      }

      // 👉 API
      const url = `https://api.popcat.xyz/toilet?image=${encodeURIComponent(avatar)}`;

      const res = await axios.get(url, {
        responseType: "stream"
      });

      return message.reply({
        body: "🚽 | Toilet ready 😂\nCredit: Mamun OP",
        attachment: res.data
      });

    } catch (err) {
      console.error("REAL ERROR 👉", err.message);
      message.reply("❌ Error: " + err.message);
    }
  }
};
