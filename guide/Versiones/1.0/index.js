const Discord = require('discord.js');//requerimos la libreria
const client = new Discord.Client();//usamos su metodo client

client.on('ready', () => {//abrimos el evento ready (se ejecuta cuando el bot se prende)
    console.log('El bot esta prendido');// enviamos un mensaje por consola cuando el bot se prenda
});//cerramos el evento ready

client.on('message', (message) => {//abrimos el vento message con un parametro (message) que recogera toda la informacion del mensaje enviado
    if (message.contet == "ping") {//si el contenido del mensaje es ping
        message.channel.send("pong!");//envia un mensaje al canal diciendo pong
    }
});//cerramos el evento message

client.login('Token');//usamos el metodo login de client para "logear" el bot
//remplazar Token por el token de su bot