module.exports.config = {
  name: "toilet",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mamun",
  description: "test",
  commandCategory: "fun",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  return api.sendMessage("🚽 Command Working 😂", event.threadID, event.messageID);
};
