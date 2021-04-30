const discord = require('discord.js')
exports.run = async(client, message,args) => {

message.react('831070002652119040');// emoji id
const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'nah'); // emoji ismi
 message.react(reactionEmoji);

};
exports.conf = {
aliases: []
};
exports.help = {
name: "ailemiz"
};