const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "toilet",
    aliases: ["potty", "poop"],
    version: "1.1",
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
      const one = event.senderID;
      let two;

      // Debug log
      console.log("Event Mentions:", event.mentions);
      console.log("Message Reply:", event.messageReply);
      console.log("Args:", args);

      // ১. Mention
      const mention = event.mentions ? Object.keys(event.mentions) : [];
      if (mention.length > 0) {
        two = mention[0];
      }
      // ২. Reply
      else if (event.messageReply && event.messageReply.senderID) {
        two = event.messageReply.senderID;
      }
      // ৩. UID
      else if (args[0]) {
        two = args[0].replace(/[^0-9]/g, ""); // শুধু numeric
      } 
      else {
        return message.reply("🚽 কাউকে target কর bro!");
      }

      // দুইটা যদি empty হয়
      if (!two) return message.reply("🚽 কাউকে target কর bro!");

      // UsersData থেকে নাম
      const name1 = await usersData.getName(one);
      const name2 = await usersData.getName(two);

      // funny messages
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
      message.reply("❌ কিছু error হয়েছে bro!");
    }
  }
};
