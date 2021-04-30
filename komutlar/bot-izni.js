const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (db.has(`antiraidK_${message.guild.id}`) === false) {
    return message.channel.send(
      "Anti-raid açılmamış. Açmak için **-anti-raid aç**"
    );
  }
  if (!args[1]) return message.reply("Lütfen bir bot id si girin").then (msg => msg.delete (5000))
 
  if (isNaN(args[1])) {
    return message.reply("Sadece ID").then (msg => msg.delete (5000))
  }
  if (args[0] == "ver") {
    client.users.get(args[0]);
    db.set(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + "ID li bota izin verildi").then (msg => msg.delete(500))
  }
  if (args[0] == "kaldır") {
    db.delete(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + " ID li botun izni kaldırıldı").then (msg => msg.delete(5000))
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "bot-izni"
};