const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: ` Kuyruğu görüntüleyebilmek için bir ses kanalında olmanız gerekmektedir!` }})
const kuyruk = client.player.getQueue(message.guild.id);
if(!kuyruk) return message.channel.send({embed: {color: FynxHata, description: `  | Şu anda hiçbir müzik çalmamaktadır!` }})
let q = kuyruk.songs.map((song, i) => {
return `${i === 0 ? '  | Şu Anda Çalınan Müzik' : `\nKuyruk No: ${i}`} \n**Müzik:** \`${song.name}\` \n**Kanal:** \`${song.author}\``
    }).join('\n');  
message.channel.send({embed: {color: FynxDogru, title: ` Müzik Kuyruğu`, description: `${q}`}})
}
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
    name: "kuyruk",
    aliases: []
};
