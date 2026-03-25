const fs = require("fs-extra");

module.exports = {
  config: {
    name: "toilet",
    aliases: ["potty", "poop"],
    version: "1.2",
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
      const senderID = event.senderID;
      let targetID;

      // Debug log
      console.log("Event Mentions:", event.mentions);
      console.log("Message Reply:", event.messageReply);
      console.log("Args:", args);

      // ১️⃣ Mention
      const mention = event.mentions ? Object.keys(event.mentions) : [];
      if (mention.length > 0) {
        targetID = mention[0];
      }
      // ২️⃣ Reply
      else if (event.messageReply && event.messageReply.senderID) {
        targetID = event.messageReply.senderID;
      }
      // ৩️⃣ UID
      else if (args[0]) {
        targetID = args[0].replace(/[^0-9]/g, "");
      } 
      else {
        return message.reply("🚽 কাউকে target কর bro!");
      }

      if (!targetID) return message.reply("🚽 কাউকে target কর bro!");

      // UsersData থেকে নাম
      const senderName = await usersData.getName(senderID);
      const targetName = await usersData.getName(targetID);

      // funny toilet messages
      const msgs = [
        `🚽 ${senderName} ${targetName} কে টয়লেটে পাঠাল 💩😂`,
        `💩 ${targetName} এখন টয়লেটে busy 🤣`,
        `🚽 ${senderName} বলছে: তাড়াতাড়ি যাস ${targetName} 😆`,
        `😂 ${targetName} situation serious 🚽💩`,
        `💀 ${targetName} আর বাঁচলো না... সরাসরি টয়লেট!`
      ];

      // Random message
      const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];

      // Send reply with text
      await message.reply(randomMsg);

    } catch (error) {
      console.error(error);
      message.reply("❌ কিছু error হয়েছে bro!");
    }
  }
};
