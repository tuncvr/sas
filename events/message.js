const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
module.exports = async message => {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  {
  if(cmd) {
  if(message.author.id !== '703985300304822293') {
  if(db.fetch(message.guild.owner.user.id) && !db.fetch(message.author.id)) return message.reply('Bu sunucunun sahibi botun karalistesinde. O yüzden sende komut kullanamazsın.'); 
  if(db.fetch(message.author.id)) return message.reply('Sen botun karalistesindesin. Komutları kullanamazsın.');
  };
  };

    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};
   
