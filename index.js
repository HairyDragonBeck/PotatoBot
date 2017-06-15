
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '<';

bot.on('ready', () => {
    console.log('Potato Bot open and ready for duty, captn!');
});

bot.on('message', msg => {
    let delm = m => m.delete(20000);
    if(!msg.content.startsWith(prefix)) {
        return;
    }
    const split = msg.content.substr(prefix.length).split(' ');
    const cmd = split[0].toLowerCase();
    const args = split.slice(1);
        if (cmd === 'github') {
            msg.reply('https://github.com/HairyDragonBeck/PotatoBot :potato:');
        }

        if (cmd === 'clearlogs'){
            if (msg.author.username != "loltatoez") {
                msg.channel.send('Sorry, you are not the best person ever, loltatoez!');
                console.log(msg.author.username + " attempted to clear the logs!");
            }
            else {
                
            }
        }
        if (cmd === 'ping') {
            msg.channel.sendMessage(`:potato:Pong! \`${msg.editedTimestamp - msg.createdTimestamp} ms\` `);
        }

});



bot.login('');
