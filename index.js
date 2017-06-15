
const Discord = require('discord.js');
const bot = new Discord.Client();

function commandIs(str, msg) {
    return msg.content.toLowerCase().startsWith("<" + str);
}


bot.on('ready', () => {
    console.log('Potato Bot open and ready for duty, captn!');
});

bot.on('message', msg => {
    let delm = m => m.delete(20000);
    let args = msg.content.split(' ').slice(1);
        if (commandIs("github", msg)) {
            msg.reply('https://github.com/HairyDragonBeck/PotatoBot :potato:').then(delm);
        }

        if (commandIs("clearlogs", msg)){
            if (msg.author.username != "loltatoez") {
                msg.channel.send('Sorry, you are not the best person ever, loltatoez!');
                console.log(msg.author.username + " attempted to clear the logs!");
            }
            else {
                
            }
        }
        if (commandIs("ping", msg)) {
            msg.channel.sendMessage(`:potato:Pong! \`${msg.editedTimestamp - msg.createdTimestamp} ms\` `);
        }

});



bot.login('');
