const fs = require("fs-extra");

module.exports = {
  config: {
    name: "toilet",
    aliases: ["potty", "poop"],
    version: "1.4",
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

      // ✅ ১️⃣ Mention check
      if (event.mentions) {
        const mentionIDs = Object.keys(event.mentions).filter(id => id !== senderID); // sender self-ignore
        if (mentionIDs.length > 0) {
          targetID = mentionIDs[0]; // প্রথম মেনশন
        }
      }

      // ✅ ২️⃣ Reply check
      if (!targetID && event.messageReply && event.messageReply.senderID) {
        targetID = event.messageReply.senderID;
      }

      // ✅ ৩️⃣ UID from args
      if (!targetID && args && args[0]) {
        targetID = args[0].replace(/[^0-9]/g, "");
      }

      // ❌ যদি কোন target না হয়
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
