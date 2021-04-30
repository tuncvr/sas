const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const NARCOSEMBED = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Grogu bot  **")
.setThumbnail("https://media.discordapp.net/attachments/814901535242453063/815242361076318228/SoggyContentCurassow-small.gif")
.setDescription(`
**» Bağlantılar** 

Bir komut hakkında detaylı __yardım için__: **-yardım**`)
                    

.addField('hediye-ver ','  Hediye verir ')
.addField('ilginçbilgi ','  İlginç bilgiler işte kanka')
.addField('intihar-et',' İntihar edersiniz')
.addField('kahve',' Kahve içersiniz ab')
.addField('renkara',' Renk ararsınız')
.addField('kutuaç',' bs kutu açarsın')
.addField('bilgisayara-bak','Pcnize ne olduğunu söyler')
.addField('burakreiz','rastgele burak reiz sözü atar')
.addField('aykutelmas','rastgele aykut elmas gifi atar')
.addField('atamın-sözü','rastgele atatürk sözü atar')
.addField('napim','lafı koyarsınız')
.addField('atamınsözü','rastgele bir atatürk sözü atar')
.addField('yaz','bot yazdığınız mesajı yazar')
.addField('deyim','bot rastgele deyim atar')
.addField('seviye-ayarla','seviye sistemini ayarlarsın')
.addField('seviye-aç','seviye sistemini açarsın')
.addField('seviye-kapat','seviye sistemini kapatırsın')
.addField('seviye-log','seviye log sistemini ayarlarsın')
.addField('seviye-rol','seviye rol sistemini ayarlarsın')
.addField('seviye-xp','mesaj başı verilecek xpyi ayarlarsın')
.addField('seviye','seviyene bakarsın')
.addField('fakemesaj','herahngi birine fake mesaj atırırsınız ')
.addField('meme','rastgele redditen meme atar')
.addField('discrim','discrim yapar')
.addField('docs','docs ararsınız')
return message.channel.send(NARCOSEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'eğlence2', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence2'
};