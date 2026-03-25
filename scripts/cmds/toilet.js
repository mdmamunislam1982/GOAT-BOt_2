module.exports = {
  config: {
    name: "toilet",
    aliases: ["potty", "poop"],
    version: "2.0",
    author: "Mamun OP FIXED",
    countDown: 5,
    role: 0,
    shortDescription: "Send someone to toilet 😂",
    longDescription: "Mention / Reply / UID দিয়ে কাজ করবে",
    category: "fun",
    guide: "{pn} @mention | reply | uid"
  },

  onStart: async function ({ message, event, args, usersData }) {
    try {
      let targetID;

      // ✅ Mention
      if (Object.keys(event.mentions || {}).length > 0) {
        targetID = Object.keys(event.mentions)[0];
      }

      // ✅ Reply
      else if (event.messageReply) {
        targetID = event.messageReply.senderID;
      }

      // ✅ UID
      else if (args[0]) {
        targetID = args[0].replace(/\D/g, "");
      }

      // ❌ যদি target না থাকে
      if (!targetID) {
        return message.reply("🚽 কাউকে target কর bro!");
      }

      // ✅ Name system (safe)
      let senderName = "User";
      let targetName = "User";

      try {
        senderName = await usersData.getName(event.senderID);
      } catch {}

      try {
        targetName = await usersData.getName(targetID);
      } catch {}

      // 💩 Messages
      const msgs = [
        `🚽 ${senderName} ${targetName} কে টয়লেটে পাঠাইছে 💩😂`,
        `💩 ${targetName} এখন টয়লেটে busy 🤣`,
        `🚽 ${senderName}: তাড়াতাড়ি যা ${targetName} 😆`,
        `😂 ${targetName} situation dangerous 🚽💩`,
        `💀 RIP ${targetName}... সরাসরি টয়লেট!`
      ];

      const msg = msgs[Math.floor(Math.random() * msgs.length)];

      return message.reply(msg);

    } catch (e) {
      console.log(e);
      return message.reply("❌ Error হইছে bro!");
    }
  }
};
