const Discord = require('discord.js');
const db = require('wio.db');


exports.run = function(client, message, args) {
  let yetkili = db.fetch(`byetkili_${message.guild.id}`)
  if (!message.member.roles.cache.has(yetkili)) return message.channel.send('Bu Komutu Kullanamazsın').then (msg => msg.delete (5000))
    let botisim = args[0]
  let sahip = args[1]
  
    let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
    let kanal = db.fetch(`bot-ekle_${message.guild.id}`)
  let log =   db.fetch(`bot-log_${message.guild.id}`)
    if(!log) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.").then (msg => msg.delete (5000))
  if(!basvuru) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.").then (msg => msg.delete (5000))
  if(!kanal) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.").then (msg => msg.delete (5000))
  const onay = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<@${sahip}> adlı kişinin <@${botisim}> adlı botu onaylandı.\nOnaylayan yetkili : ${message.author}`)
    
    if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(5000))
  message.delete()
  if (!sahip) return message.channel.send(`:no_entry: Botun sahipinin ID'sini yazmalısın.`).then(msg => msg.delete(5000))
        client.channels.cache.get(log).send(onay)      
  message.channel.send(`Botu onayladınız.`).then(msg => msg.delete(1000))
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'onayla'],
  permLevel: 3
};

exports.help = {
  name: 'bot-onayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};