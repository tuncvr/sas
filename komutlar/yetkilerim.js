const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
exports.run = (client, msg, args) => {
  let x;
  let x2;
  let x3;
  let x4;
  let x5;
  let x6;
  let x7;
  let x8;
  let x9;
  let x10;
  let x11;

  //yönetici
  if (msg.member.hasPermission("ADMINISTRATOR")) x = "<a:tik3:814445408141967382> ";
  if (!msg.member.hasPermission("ADMINISTRATOR")) x = "<a:no1:814445405604675616> ";

  //Denetim kaydı
  if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:tik3:814445408141967382> ";
  if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:no1:814445405604675616> ";

  //Sunucuyu yönet
  if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:tik3:814445408141967382> ";
  if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:no1:814445405604675616> ";

  //Rolleri yönet
  if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:tik3:814445408141967382> ";
  if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:no1:814445405604675616> ";

  //Kanalları yönet
  if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:tik3:814445408141967382> ";
  if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:no1:814445405604675616> ";

  //üyeleri at
  if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:tik3:814445408141967382> ";
  if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:no1:814445405604675616> ";

  //üyeleri yasakla
  if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:tik3:814445408141967382> ";
  if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:no1:814445405604675616> ";

  //mesajları yönet
  if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:tik3:814445408141967382> ";
  if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:no1:814445405604675616> ";

  //kullanıcı adlarını yönet
  if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:tik3:814445408141967382> ";
  if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:no1:814445405604675616> ";

  //emojileri yönet
  if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:tik3:814445408141967382> ";
  if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:no1:814445405604675616> ";

  //webhookları yönet
  if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:tik3:814445408141967382> ";
  if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:no1:814445405604675616> ";

  msg.channel.send(stripIndents`

    ${x} Yönetici
${x2} Denetim Kaydını Görüntüle
${x3} Sunucuyu Yönet
${x4} Rolleri Yönet
${x5} Kanalları Yönet
${x6} Üyeleri At
${x7} Üyeleri Yasakla
${x8} Mesajları Yönet
${x9} Kullanıcı Adlarını Yönet
${x10} Emojileri Yönet
${x11} Webhook'ları Yönet
   `);
  msg.channel.send(
    'Başında "<a:no1:814445405604675616> " olanlar o yetkiye sahip olunmadığını gösterir. Başında "<a:tik3:814445408141967382> " olanlar o yetkiye sahip olunduğunu gösterir.'
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["izinlerim"],
  permLevel: 0,
  kategori: "kullanıcı"
};
//CrewCode
exports.help = {
  name: "yetkilerim",
  description:
    "Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.",
  usage: "yetkilerim"
};