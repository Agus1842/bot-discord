const {Client,RichEmbed} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`El Bot esta listo: ${client.user.tag}`);
    client.user.setStatus('online');

    console.log(client.user.presence.status);

    //const testChannel = client.channels.find(channel => channel.name == 'test');
    //console.log(testChannel);

});

client.on('message', async message =>{
    //Reciviendo el mensaje
    console.log(message.content);

    if(message.content == 'ping'){
        message.reply('pong');
    }

    if(message.content =='Hola'){
        message.channel.send(`Hola ${message.author}`);
    }

    if(message.content.includes('!test')){
        message.channel.send('Feliz que estes Escribiendo');
    }

    if(message.content ==  'Agustin'){
        message.channel.send('https://www.youtube.com/channel/UCXDIlv1sVzvf9Ci-GxRGgVA');
        message.channel.send('https://www.facebook.com/');
        message.channel.send('https://www.instagram.com/?utm_source=pwa_homescreen');
    }

    if(message.content == '!pretty'){
        const embed = new RichEmbed()
        .setTitle('A Pretty Message')
        .setColor('#000000')
        .setAutor('Agustin')
        // .addField('Somthing One', 'Lorem Impsun')
        // .addField('Somthing One', 'Lorem Impsun')
        // .addField('Somthing One', 'Lorem Impsun')
        // .addField('Somthing One', 'Lorem Impsun')
        // .addField('Somthing One', 'Lorem Impsun');
        message.channel.send(embed);
    }
    
    if(message.content == '!clear'){
        const fecthed = await message.channel.fetchMessages({limit: 100});
        message.channel.bulkDelete(fecthed);
        console.log('Mensajes Eliminados');
    }

});

client.login('ODU4NTE3MTEwMTQxODc4MzIz.YNfSXQ.UugjYrDFTcf-5RvgYBx9iSfP6tY');


