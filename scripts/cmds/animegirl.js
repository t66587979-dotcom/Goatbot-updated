const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const path = global.nodemodule["path"];

module.exports.config = {
  name: "animegirl",
  aliases: ["waifu", "anime"],
  version: "1.0.0",
  author: "CYBER ☢️_𖣘 -BOT ⚠️ TEAM",
  role: 0,
  shortDescription: "Random anime girl picture",
  longDescription: "Send a random anime girl / waifu picture",
  category: "image",
  guide: {
    en: "{pn}"
  }
};

const links = [
  "https://i.imgur.com/2iXk7mU.jpg",
  "https://i.imgur.com/OQQeOP3.jpg",
  "https://i.imgur.com/bMM8iJZ.jpg",
  "https://i.imgur.com/vJBXAhy.jpg",
  "https://i.imgur.com/C3b91UO.jpg",
  "https://i.imgur.com/iQbs8eX.jpg",
  "https://i.imgur.com/ZkpN7kz.jpg",
  "https://i.imgur.com/rfzt2WQ.jpg",
  "https://i.imgur.com/KSJQf1f.jpg",
  "https://i.imgur.com/BJ6yXNe.jpg",
  "https://i.imgur.com/IMubWyZ.jpg",
  "https://i.imgur.com/bXHiz1E.jpg",
  "https://i.imgur.com/6TF2Xft.jpg",
  "https://i.imgur.com/ZLCFLkt.jpg",
  "https://i.imgur.com/dfBFRCY.jpg",
  "https://i.imgur.com/8hEm7Ib.jpg",
  "https://i.imgur.com/VjrmG8l.jpg",
  "https://i.imgur.com/g0rKS8v.jpg",
  "https://i.imgur.com/pwIiuie.jpg"
];

module.exports.onStart = async function ({ message }) {
  const cacheDir = path.join(__dirname, "cache");
  if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });

  const imgUrl = links[Math.floor(Math.random() * links.length)];
  const imgPath = path.join(cacheDir, `anime_${Date.now()}.jpg`);

  try {
    const res = await axios.get(imgUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(imgPath, res.data);

    await message.reply({
      body: `✨ Random Anime Girl ✨`,
      attachment: fs.createReadStream(imgPath)
    });

    fs.unlinkSync(imgPath);
  } catch (e) {
    message.reply("❌ Image load failed");
  }
};
