module.exports = {
  config: {
    name: "adminmention",
    version: "1.3.2",
    author: "ALVI-BOSS",
    countDown: 0,
    role: 0,
    shortDescription: "Replies angrily when someone tags admins",
    longDescription: "If anyone mentions an admin, bot will angrily reply with random messages.",
    category: "fun"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const adminIDs = ["100082607436864"].map(String);

    // Skip if sender is admin
    if (adminIDs.includes(String(event.senderID))) return;

    // যদি কেউ মেনশন দেয়
    const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
    const isMentioningAdmin = adminIDs.some(id => mentionedIDs.includes(id));

    if (!isMentioningAdmin) return;

    // র‍্যান্ডম রাগী রিপ্লাই
    const REPLIES = [
      "তোর সাহস তো কম না বসের নাম ধরে ডাকিস? 😩🐸",
      "বস এক আবাল আপনাকে ডাকতেছে 😂😏",
      "আবাল তুই মেনশন দিবি না আমার বস রে 🥹",
      "মেনশন দিছস আর বেঁচে যাবি? দারা বস রে বলতাছি 😠",
      "বস এখন বিজি আছে যা বলার আমাকে বলতে পারিস!! 😌🥱"
    ];

    const randomReply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    return message.reply(randomReply);
  }
};
