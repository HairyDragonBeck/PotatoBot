
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "<";

function commandIs(str, msg) {
    return msg.content.toLowerCase()(prefix + str);
}


bot.on('ready', () => {
    console.log('Potato Bot open and ready for duty, captn!');
});
bot.on('message', msg => {
    var args = msg.content.split(/[ ]+/);
        if (commandIs("github", msg)) {
            msg.reply('https://github.com/HairyDragonBeck/PotatoBot :potato:')
        }


});



bot.login('');
