const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", () => {

console.log(`${client.user.username} is klaar voor gebruik`);
client.user.setActivity("Minecraft", {type: "PLAYING"});


});


client.on("message", async message => {

 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}hulp`) {
 
        return message.channel.send("als je vragen heb kan je het aan @baxdw123#9252 of @SeppyCool912#9391 vragen");

    }

    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}hoi`) {
 
        return message.channel.send("Hallo!!");

    }

    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}corona`) {
 
        return message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8olmoV9jDNgjXNMz8rwcHl7ORYTKXwPuMFQ&usqp=CAU");

    }

    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}leaderboard`) {
 
        return message.channel.send("https://mee6.xyz/leaderboard/699929047190470677");

    }

    
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}poep`) {
 
        return message.channel.send("dat doe je hopelijk op de wc");

    }
    

    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}cool`) {
 
        return message.channel.send("jij ben niet cool maar baxdw123 en seppycool912 wel");

    }
});