const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {

let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

 if(!rol) return message.channel.send(`
${client.emojis.get("647760202875142154")} Ayarlamam İçin Bir Rol Etiketlemeilisin.
Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
Örnek Kullanım : otorol @rol #kanal
`)

 if(!kanal) return message.channel.send(`
${client.emojis.get("647760202875142154")} Ayarlamam İçin Bir Kanal Etiketlemeilisin.

`)

  message.channel.send(`╔▬▬▬▬▬▬▬▬Otorol▬▬▬▬▬▬▬▬▬
║► ${client.emojis.get("792502004474839040")} Otorol Aktif Edildi.
║► ${client.emojis.get("792502004474839040")} **${rol}** Olarak Güncelledim!
║► ${client.emojis.get("792502004474839040")} Kayıt Kanalını **${kanal}** Olarak Güncelledim!
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)


  db.set(`otoRL_${message.guild.id}`, rol.id)
  db.set(`otoRK_${message.guild.id}`, kanal.id)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oto-rol-ayarla',
  description: 'Otorol Ayarlar',
  usage: '!oto-rol-ayarla'
};