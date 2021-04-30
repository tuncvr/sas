const Discord = ('discord.js')
exports.run = async(client, message,args) => {

message.react(':831071980588498992');// emoji id
const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'hain'); // emoji ismi
 message.react(reactionEmoji);

};
exports.conf = {
aliases: []
};
exports.help = {
name: "top10"
};