const Discord = require("discord.js");
const db = require("../database.json");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (message.author.id !== ayarlar.sahip)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`:x: Bu Komudu Sadece Yapımcım Kullanabilir.**`)
    );
  if (args[0] === "aç") {
    if (!args[1]) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setTimestamp()
          .setFooter(`Grogu bot Bakım Modu`)
          .setColor("RED")
          .addField("Grogu bot",
            "**📓|Bakım modu sebebini belirtin!**")
      );
    }
    db.set("bakım", args.slice(1).join(" "));
    if (args.slice(1).join(" ")) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setTimestamp()
          .setColor("GREEN")
          .setFooter(` Grogu bot Bakım Modu`)
          .addField("Grogu bot", "**🛡|Bakım Açıldı**")
      );
    }
  } else if (args[0] === "kapat") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setTimestamp()
        .setFooter(`Grogu bot Bakım Modu`)
        .setColor("GREEN")
        .addField("Grogu bot", "**🛰Bakım Kapatıldı**")
    );
    db.delete("bakım");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bakım"],
  permLevel: 0
};
exports.help = {
  name: "bakım",
  description: "Bakım.",
  usage: "Bakım"
};