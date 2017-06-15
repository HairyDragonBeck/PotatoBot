
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
            
            if (msg.author.id !== '161588907866062848') {
                msg.channel.send('Sorry, you are not the best person ever, loltatoez!');
                console.log(msg.author.username + ' attempted to clear the logs!');
            }
            else {
                
            }
        }
        if (cmd === 'ping') {
            msg.channel.send(':potato: Pong!').then(m => m.edit(`:potato: Pong! \`${m.createdTimestamp - msg.createdTimestamp}ms\``));
        }
        if (cmd === 'eval') {
            if (msg.author.id !== '161588907866062848') {
                msg.channel.send('Sorry, you are not the best person ever, loltatoez!');
                console.log(msg.author.username + ' attempted to use the eval command!');
        }
        else {
            
        }
        }
        if (cmd === 'emojispam') {
             if (msg.author.id !== '161588907866062848') {

                msg.channel.send('Sorry, you are not the best person ever, loltatoez!');

                console.log(msg.author.username + ' attempted to use the eval command!'); 
            
            } else {
                msg.channel.fetchMessages({count: 25}).then(m => {

        for(const r of m.values()) r.react('🥔');
            
        
});
        
        }
}
});



bot.login('');
