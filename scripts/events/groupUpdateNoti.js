module.exports.config = {
  name: "groupupdate",
  eventType: [
    "log:thread-name",
    "log:thread-image",
    "log:user-nickname",
    "log:thread-admins",
    "log:thread-color",
    "log:thread-emoji",
    "call_started"
  ],
  version: "1.3.0",
  credits: "ALVI",
  description: "Stylish Group Update Notification (Member Join/Leave Removed)"
};

module.exports.run = async function({ api, event, Users }) {
  const { threadID, logMessageType, logMessageData, author } = event;

  let authorName = "Unknown";
  try {
    authorName = await Users.getNameUser(author);
  } catch {}

  const box = (title, body) =>
`╭────── ${title} ──────╮
${body}
╰──────────────────────╯`;

  // ✅ AUTO DELETE FUNCTION
  const sendAutoDelete = async (msg) => {
    api.sendMessage(msg, threadID, (err, info) => {
      if (err) return;
      setTimeout(() => {
        api.unsendMessage(info.messageID);
      }, 5000);
    });
  };

  // ✏️ GROUP NAME
  if (logMessageType === "log:thread-name") {
    return sendAutoDelete(
      box("𝐆𝐑𝐎𝐔 𝐍𝐀𝐌𝐄 𝐔𝐏𝐃𝐀𝐓𝐄",
        `📝 𝐍𝐞𝐰 𝐍𝐚𝐦𝐞:\n${logMessageData.name}\n\n👤 𝐂𝐡𝐚𝐧𝐠𝐞𝐝 𝐛𝐲: ${authorName}`
      )
    );
  }

  // 🖼️ GROUP PHOTO
  if (logMessageType === "log:thread-image") {
    return sendAutoDelete(
      box("𝐆𝐑𝐎𝐔𝐏 𝐏𝐇𝐎𝐓𝐎 𝐔𝐏𝐃𝐀𝐓𝐄",
        `📸 𝐆𝐫𝐨𝐮𝐩 𝐩𝐫𝐨𝐟𝐢𝐥𝐞 𝐩𝐢𝐜𝐭𝐮𝐫𝐞 𝐜𝐡𝐚𝐧𝐠𝐞𝐝\n👤 𝐂𝐡𝐚𝐧𝐠𝐞𝐝 𝐛𝐲: ${authorName}`
      )
    );
  }

  // 📝 NICKNAME
  if (logMessageType === "log:user-nickname") {
    const targetName = await Users.getNameUser(logMessageData.participant_id);
    return sendAutoDelete(
      box("𝐍𝐈𝐂𝐊𝐍𝐀𝐌𝐄 𝐔𝐏𝐃𝐀𝐓𝐄",
        `👤 𝐔𝐬𝐞𝐫: ${targetName}\n🏷️ 𝐍𝐞𝐰 𝐍𝐢𝐜𝐤𝐧𝐚𝐦𝐞: ${logMessageData.nickname || "Removed"}\n✏️ 𝐂𝐡𝐚𝐧𝐠𝐞𝐝 𝐛𝐲: ${authorName}`
      )
    );
  }

  // 👑 ADMIN ADD / REMOVE
  if (logMessageType === "log:thread-admins") {
    const targetName = await Users.getNameUser(logMessageData.target_id);

    if (logMessageData.ADMIN_EVENT === "add_admin") {
      return sendAutoDelete(
        box("𝐀𝐃𝐌𝐈𝐍 𝐀𝐃𝐃𝐄𝐃",
          `✅ ${targetName} 𝐢𝐬 𝐧𝐨𝐰 𝐚𝐧 𝐀𝐝𝐦𝐢𝐧\n✏️ 𝐀𝐝𝐝𝐞𝐝 𝐛𝐲: ${authorName}`
        )
      );
    }

    if (logMessageData.ADMIN_EVENT === "remove_admin") {
      return sendAutoDelete(
        box("𝐀𝐃𝐌𝐈𝐍 𝐑𝐄𝐌𝐎𝐕𝐄",
          `❌ ${targetName} 𝐫𝐞𝐦𝐨𝐯𝐞𝐝 𝐟𝐫𝐨𝐦 𝐀𝐝𝐦𝐢𝐧\n✏️ 𝐑𝐞𝐦𝐨𝐯𝐞𝐝 𝐛𝐲: ${authorName}`
        )
      );
    }
  }

  // 🎨 THEME
  if (logMessageType === "log:thread-color") {
    return sendAutoDelete(
      box("𝐓𝐇𝐄𝐌𝐄 𝐔𝐏𝐃𝐀𝐓𝐄𝐃",
        `🌈 𝐆𝐫𝐨𝐮𝐩 𝐭𝐡𝐞𝐦𝐞 𝐜𝐨𝐥𝐨𝐫 𝐜𝐡𝐚𝐧𝐠𝐞𝐝\n👤 𝐂𝐡𝐚𝐧𝐠𝐞𝐝 𝐛𝐲: ${authorName}`
      )
    );
  }

  // 😀 EMOJI
  if (logMessageType === "log:thread-emoji") {
    return sendAutoDelete(
      box("𝐆𝐑𝐎𝐔𝐏 𝐄𝐌𝐎𝐉𝐈 𝐔𝐏𝐃𝐀𝐓𝐄𝐃",
        `✨ 𝐍𝐞𝐰 𝐄𝐦𝐨𝐣𝐢: ${logMessageData.emoji}\n👤 𝐂𝐡𝐚𝐧𝐠𝐞𝐝 𝐛𝐲: ${authorName}`
      )
    );
  }

  // 📞 AUDIO / VIDEO CALL
  if (logMessageType === "call_started") {
    const callType = logMessageData.is_video_call ? "📹 VIDEO CALL" : "🎧 AUDIO CALL";
    return sendAutoDelete(
      box("𝐂𝐀𝐋𝐋 𝐒𝐓𝐀𝐑𝐓𝐄𝐃",
        `${callType} 𝐡𝐚𝐬𝐛𝐞𝐞𝐧 𝐬𝐭𝐚𝐫𝐭𝐞𝐝\n👤 𝐒𝐭𝐚𝐫𝐭𝐞𝐝 𝐛𝐲: ${authorName}`
      )
    );
  }
};
