#Termux

##download
podes instalar termux [Aqui](https://play.google.com/store/apps/details?id=com.termux&hl=es_PE&gl=US)

##importante
- si les hace la pregunta  `Do you continue? [y/n]`
es para preguntar si deseas continuar con la instalacion de los paquetes
    - y => yes
    - n => no

- colores de los archivos
    - las carpetas son de color azul
    - los archivos son de color blanco

- sitax 
    - </> requerido
    - [] opcional



##instalaciones
- Primero necesitamos darle permisos de almacenamiento.
```
$ termux-setup-storage
```
- Ahora necesitamos actulizar los paquetes de termux.
```
$ apt update && apt upgrade 
```
esto para tener todos los paquetes mas actuales de termux.
- instalar node
```
$ apt install nodejs
```
- y por ultimo intalar un editor de codigo
```
apt install vim
```


## comandos basicos
unos comandos basicos de termux 
cuando inicar termux estaras en esta ruta
` /data/data/com.termux/files/home`

- `cd` entar/salir de una carpeta
    ```
    $ cd ..
    /data/data/com.termux/files/

    $ cd home
    /data/data/com.termux/files/home
    ```
- `ls` listar todos los archivos de la carpeta
    ```
    $ ls
    storage

    $ ls ..
    home usr
    ```
- `pwd` => muestra la ruta actual en la que estas
    ```
    $ pwd 
    /data/data/com.termux/files/home
    ```
- `mkdir` => crea una carpeta
    ```
    $ mkdir </nombre> [mas nombres]
    ```
