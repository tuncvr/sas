const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  await message.delete();
  const tuncvr = message.mentions.users.first();
  const msg = args.slice(1).join(" ");
  if (!tuncvr) return message.reply("Birisini Etiketlemen gerek!").then(m => m.delete({ timeout: 5000 }));
  if (!msg) return message.reply("Bir Mesaj yazman lazım!").then(m => m.delete({ timeout: 5000 }));
  if(tuncvr.bot) return message.channel.send('Bota Sahtemesaj Attıramassın yigeniM! :)').then(m => m.delete({ timeout: 5000}));
  const hook = await message.channel
    .createWebhook(tuncvr.username, {
      avatar: tuncvr.avatarURL()
    })
    .then(async a => {
      await a.send(msg);
      a.delete({ timeout: 100 });
    });
};

exports.conf = {
  aliases: ['sahtemesaj'],
  permLevel: 0 
};
exports.help = {
  name: "fakemesaj", 
  description: '',
  usage: '' 
};