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

      // 👉 Avatar
      const avatar = await usersData.getAvatarUrl(target);

      let imgUrl;

      // ✅ Main API (Popcat)
      try {
        imgUrl = `https://simsimi-api-tjb1.onrender.com=${encodeURIComponent(avatar)}`;
        await axios.get(imgUrl); // test request
      } catch {
        // ❗ Fallback API (Simsimi)
        imgUrl = `https://simsimi-api-tjb1.onrender.com/toilet?image=${encodeURIComponent(avatar)}`;
      }

      // 👉 Stream
      const res = await axios.get(imgUrl, {
        responseType: "stream"
      });

      return message.reply({
        body: "🚽 | Toilet image ready 😂\nCredit: Mamun OP",
        attachment: res.data
      });

    } catch (err) {
      console.error(err);
      message.reply("❌ Error hoise bro! API problem 😢");
    }
  }
};
