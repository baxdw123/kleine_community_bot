const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", () => {

console.log(`${client.user.username} is klaar voor gebruik`);
client.user.setActivity("Fortnite", {type: "PLAYING"});


});



client.on("message", async message => {

 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}hulp`) {
 
        return message.channel.send("dit team probeert de grootste discord server te maken (heel europe).en wij Hoopen dat jij ook mee wil helpen om het doel te Halen.");

    }


});