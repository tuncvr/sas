const Discord = require("discord.js");
var http = require("https");
const {
    JsonDatabase
} = require("wio.db");



exports.run = async (client, message, args) => {
        var yazi = args[0];
        if (!yazi) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle("Bir şehir girin."));
        var yazi = yazi.toLowerCase();
        var options = {
          "method": "GET",
          "hostname": "api.collectapi.com",
          "port": null,
          "path": "/pray/all?data.city=" + yazi.toLowerCase(),
          "headers": {
            "content-type": "application/json",
            "authorization": "apikey 6sJcBTwcyeGy2qhMgUwUtR:5cZOX1KoKIKGOOlSDcK6D8"
          }
        };
    
        try {
    
          var req = http.request(options, function(res) {
            var chunks = [];
    
            res.on("data", function(chunk) {
              chunks.push(chunk);
            });
    
            res.on("end", function() {
              var body = Buffer.concat(chunks);
              let json = JSON.parse(body);
              if(!json.result) return message.channel.send(`Yanlış şehir ismi girdiniz.`);
              message.channel.send(`${yazi}\n\nSahur: ${json.result[0].saat}\nİftar: ${json.result[4].saat}`);
              });
              });
              }catch(err){
              return message.channel.send(`Yanlış şehir ismi girdiniz.`);
        }
    
        req.end();
    
    
    
      } 

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "vakit"
};
