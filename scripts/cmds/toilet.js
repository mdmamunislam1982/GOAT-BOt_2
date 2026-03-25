const axios = require("axios");

module.exports = {
  config: {
    name: "toilet",
    aliases: ["toiletimg"],
    version: "2.0",
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

      // 👉 Facebook avatar (v2 compatible)
      const avatar = `https://graph.facebook.com/${target}/picture?width=512&height=512`;

      // 👉 SIMPLE WORKING IMAGE API (tested)
      const imgUrl = `https://api.popcat.xyz/toilet?image=${encodeURIComponent(avatar)}`;

      // 👉 stream (v2 compatible)
      const res = await axios.get(imgUrl, {
        responseType: "stream"
      });

      return message.reply({
        body: "🚽 | Toilet image ready 😂\nCredit: Mamun OP",
        attachment: res.data
      });

    } catch (err) {
      console.error("ERROR 👉", err.message);

      // 👉 real error show করবে
      return message.reply("❌ Error: " + err.message);
    }
  }
};
