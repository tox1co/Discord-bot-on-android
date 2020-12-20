# creacion del primer bot

## crear la app del bot
supongo que ya lo saben pero en un proximo commit lo agrego

***ruta actual*** `/data/data/com.termux/files/home`

## inicio
bueno primero creamos la carpeta donde estara todo el bot
```
$ cd bot
```
listamos los archvos para comprobar que se creo la carpeta
```
$ ls
    storage bot
```
entramos a la carpeta 
```
$ cd bot
```
* ***ruta actual*** `/data/data/com.termux/files/home/bot`

 ahora inicializamos npm
```
$ npm init -y
```
instalamos [discord.js](https://www.npmjs.com/package/discord.js)
```
$ npm install discord.js
```
listamos los archvos y deveriamos tener 2 archivos y una carpeta
```
$ ls
    node_modules package-lock.json package.json
```

ahora con el editor [Vim](https://www.vim.org/) crearemos el archivo principal para el bot ([Vim Cheat Sheet](https://vim.rtorr.com/))

```
$ vim index.js
```
esto te abrira el editor vim

- precionamos la `i` y el editor se pondra en modo de edicion
![eCaj4I7kzZ](https://user-images.githubusercontent.com/59557369/102716400-b3e57e00-42a9-11eb-8203-e2df3451b7c1.gif)

* se recomienda escribir el codigo por si mismo y no solo copiar y pegar, esto para una mejor comprencion de lo que estamos haciendo.


primero requerimos la libreria y usamos su metodo client
```js
const Discord = require('discord.js');
const client = new Discord.Client();
```
ahora para cada vez que prendamos el bot mande un mensaje por consola usamos el evento ready
```js
client.on('ready', () => {
    console.log("El bot esta prendido");
});
```
esto eviara el mensaje `El bot esta prendido` cada vez que prendamos el bot

ahora toca crear el evento message(evento que se ejecuta cada vez que un usuario envia un mensaje)

```js
client.on('message', (message) => {

});
```
dentro de este evento pondremos nuestros comandos

* ahora vamos a crear nuestro primer comando basico
```js
if(message.content == "ping"){
    message.channel.send("pong!");
}
```
si el contenido del mensaje es igual a `ping` envia un mensaje a ese canal diciendo `pong!`

quedaria asi
```js
client.on('message', (message) => {
    if(message.content == "ping"){
        message.channel.send("pong!");
    }
});
```

ahora el metodo de registrar su bot
```js
client.login("Token");
```
remplaza `Token` por el token de su bot

podes ver el codigo [Aqui](https://github.com/tox1co/Discord-bot-on-android/blob/main/guide/Versiones/1.0/index.js)
