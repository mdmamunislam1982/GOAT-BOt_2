const fs = require("fs-extra");

module.exports = {
  config: {
    name: "toilet",
    aliases: ["potty", "poop"],
    version: "1.8",
    author: "Mamun OP",
    countDown: 5,
    role: 0,
    shortDescription: "Send someone to toilet 😂",
    longDescription: "Mention / Reply / UID দিয়েও কাজ করবে",
    category: "fun",
    guide: "{pn} @mention | reply | uid"
  },

  onStart: async function({ message, event, args, usersData }) {
    try {
      const senderID = event.senderID;
      let targetID;

      // ✅ 1️⃣ Mention (self-ignore)
      if (event.mentions && Object.keys(event.mentions).length > 0) {
        const mentionIDs = Object.keys(event.mentions).filter(id => id !== senderID);
        if (mentionIDs.length > 0) targetID = mentionIDs[0];
      }

      // ✅ 2️⃣ Reply
      if (!targetID && event.messageReply && event.messageReply.senderID) {
        targetID = event.messageReply.senderID;
      }

      // ✅ 3️⃣ UID from args
      if (!targetID && args && args[0]) {
        const possibleID = args[0].replace(/[^0-9]/g, "");
        if (possibleID.length >= 5) targetID = possibleID;
      }

      // ❌ No target
      if (!targetID) return message.reply("🚽 কাউকে target কর bro!");

      // ✅ Get names safely
      let senderName = senderID;
      let targetName = targetID;
      try { senderName = await usersData.getName(senderID); } catch {}
      try { targetName = await usersData.getName(targetID); } catch {}

      // 💩 Toilet messages
      const msgs = [
        `🚽 ${senderName} ${targetName} কে টয়লেটে পাঠাল 💩😂`,
        `💩 ${targetName} এখন টয়লেটে busy 🤣`,
        `🚽 ${senderName} বলছে: তাড়াতাড়ি যাস ${targetName} 😆`,
        `😂 ${targetName} situation serious 🚽💩`,
        `💀 ${targetName} আর বাঁচলো না... সরাসরি টয়লেট!`
      ];

      // Random selection
      const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];

      // Send reply
      await message.reply(randomMsg);

    } catch (error) {
      console.error("TOILET ERROR:", error);
      message.reply("❌ কিছু error হয়েছে bro!");
    }
  }
};
