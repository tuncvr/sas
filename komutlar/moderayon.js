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


**• Komutlar**
> [taç] → Sunucunun sahibini gösterir. !!Geçici olarak çalışmaz bakımda
> [sil] → 100000 bine kadar mesaj silebilirsiniz uyarı! botta ping çıkar az kullanın.
> [ban] → Etiketlediğiniz kişiyi sunucudan banlarsınız.
> [kick] → Etiketlediğiniz kişiyi sunucudan atarsınız.
> [reklam] → Reklam engel sistemi açarsınız.
> [slowmode] → Yavaş modu ayarlarsınız. 
> [duyuru] → Bot yazdıgının mesajı duyuru yapar.
> [küfür] → Küfür engel sistemini açarsınız.
> [sa-as] →  Sa-As sistemini aktif eder.
> [sunucubilgi] →  Sunucu hakkında bilgi verir
> [üyedurum] →  Sunucu üyeleri hakkında bilgi verir
> [çekiliş] → Çekiliş yaparsınız.
> [sunucu-kur-normal] → Normal sunucu kurar
> [kanalıkilitle] → berirli bir süre kanalı kilitler
> [nuke] → bot bulunduğunuz kanalı siler ve geri oluşturur
> [banlist] → sunucudan banlanan kişileri gösterir
> [kapat] → Bulunduğun kanalı yazı yazmaya kapatır
> [aç] → Bulunduğun kanalı yazı yazmayı açar
> [isimreklamkoruma] → Kulanıcının isminde reklam varsa oto banlar not!:100 bi değere sahip değildir
> [mod-log] → modlog ayarlarsın not!: bazen sesliye biri girince veya çıkınca undefined der bu sorun discordan kaynaklıdır
> [küfür-engel] → küfür engel sistemi
> [rol-koruma] → rol koruma 
> [kanal-koruma] → kanal koruma 
> [emoji-koruma] → emoji koruma 
> [otorol] → otorol kanalı ve otorolu ayarlarsın 
> [anti-raid] → saldırı engel ve saldırı botu engel sistemidir 
> [bot-izni] → eklenen bota izin verirsiniz 
`)
 
 

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
    name: 'moderasyon', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-moderasyon'
};