const axios = require("axios");

module.exports = {
  config: {
    name: "toilet",
    version: "4.0",
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

      // ✅ Facebook avatar (MOST STABLE)
      let avatar = `https://graph.facebook.com/${target}/picture?width=512&height=512`;

      let imgUrl;

      // ✅ API 1 (Popcat)
      try {
        imgUrl = `https://api.popcat.xyz/toilet?image=${encodeURIComponent(avatar)}`;
        await axios.get(imgUrl); // test
      } catch {
        // ✅ API 2 (fallback)
        imgUrl = `https://some-random-api.ml/canvas/toilet?avatar=${encodeURIComponent(avatar)}`;
      }

      // ✅ Final Image Stream
      const res = await axios.get(imgUrl, {
        responseType: "stream"
      });

      return message.reply({
        body: "🚽 | Toilet image ready 😂\nCredit: Mamun OP",
        attachment: res.data
      });

    } catch (err) {
      console.error("FULL ERROR 👉", err);
      message.reply("❌ Error hoise bro! Net/API problem 😢");
    }
  }
};
