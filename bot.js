const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("533136515119972382")
setInterval(function() {
channel.send(`يارب صلى على النبى واله ومن اهتدى بهديه الى يوم القيامه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
