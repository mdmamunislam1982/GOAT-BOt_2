const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "toilet",
    aliases: ["potty", "poop"],
    version: "1.0",
    author: "Mamun OP",
    countDown: 5,
    role: 0,
    shortDescription: "Send someone to toilet 😂",
    longDescription: "Mention / Reply / UID দিয়েও কাজ করবে",
    category: "fun",
    guide: "{pn} @mention | reply | uid"
  },

  onStart: async function ({ message, event, args, usersData }) {
    try {
      let one = event.senderID;
      let two;

      const mention = Object.keys(event.mentions);

      // mention
      if (mention.length > 0) {
        two = mention[0];
      }
      // reply
      else if (event.messageReply) {
        two = event.messageReply.senderID;
      }
      // uid
      else if (args[0] && !isNaN(args[0])) {
        two = args[0];
      }
      else {
        return message.reply("🚽 কাউরে target কর bro!");
      }

      const name1 = await usersData.getName(one);
      const name2 = await usersData.getName(two);

      // random funny message
      const msgs = [
        `🚽 ${name1} ${name2} কে টয়লেটে পাঠাইছে 💩😂`,
        `💩 ${name2} এখন টয়লেটে busy 🤣`,
        `🚽 ${name1} বলছে: তাড়াতাড়ি যাস ${name2} 😆`,
        `😂 ${name2} situation serious 🚽💩`,
        `💀 ${name2} আর বাঁচলো না... সরাসরি টয়লেট!`
      ];

      const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];

      await message.reply(randomMsg);

    } catch (e) {
      console.error(e);
      message.reply("❌ error hoise bro!");
    }
  }
};
