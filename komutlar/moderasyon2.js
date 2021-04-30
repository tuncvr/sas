const Discord = require ("discord.js");

exports.run = (client, message) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const Annenembed = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Grogu bot  **")
.setThumbnail("https://media.discordapp.net/attachments/814901535242453063/815242361076318228/SoggyContentCurassow-small.gif")
.setDescription(`
**» Bağlantılar** 

Bir komut hakkında detaylı __yardım için__: **yardım**


**• Komutlar**
> [giriş-çıkış-ayarla] → resimli hoşgeldin kanalını ayarlarsınız
> [giriş-çıkış-kapat] → resimli hoşgeldin kanalını sıfırlasınız
> [emojiler] → emojiler but sayfalı olanı
> [saat] → saati gösterir
> [mute] → mute atarsınız
> [muterol oluştur] →  mute rol oluşturusunuz
> [muterol] → mute rol seçersiniz
`)
 

return message.channel.send(Annenembed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'moderasyon2', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-moderasyon'
};