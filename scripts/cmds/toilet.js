const fs = require("fs-extra");

module.exports = {
  config: {
    name: "toilet",
    aliases: ["potty", "poop"],
    version: "1.6",
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

      // ✅ 1. Mention check
      const mention = event.mentions ? Object.keys(event.mentions).filter(id => id !== senderID) : [];
      if (mention.length > 0) {
        targetID = mention[0];
      }

      // ✅ 2. Reply check
      else if (event.messageReply && event.messageReply.senderID) {
        targetID = event.messageReply.senderID;
      }

      // ✅ 3. UID from args
      else if (args[0]) {
        const possibleID = args[0].replace(/[^0-9]/g, "");
        if (possibleID.length >= 5) targetID = possibleID; // simple check
      }

      // ❌ যদি কোন target না হয়
      if (!targetID) return message.reply("🚽 কাউকে target কর bro!");

      // UsersData থেকে নাম
      const senderName = await usersData.getName(senderID).catch(() => senderID);
      const targetName = await usersData.getName(targetID).catch(() => targetID);

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

      // Send reply
      await message.reply(randomMsg);

    } catch (error) {
      console.error("TOILET ERROR:", error);
      message.reply("❌ কিছু error হয়েছে bro!");
    }
  }
};
