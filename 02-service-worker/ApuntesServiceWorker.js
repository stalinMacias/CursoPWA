//El service worker una vez que es instalado, permanecera como activado y no mostrará ningun cambio hasta que el mismo sea modificado!


//El service worker va a contener sucesos o acciones que ocurran en la aplicación, normalmente no debe de llevar codigo JS

//Si ya existe un service worker en ejecución, no se verán los cambios hechos en el nuevo service worker hasta que sea ejecutado!.

                    //La instrucción self apunta al archivo, en este caso al service worker 

//Desde el service worker se pueden modificar las respuestas que la pagina web obtiene al realizar peticiones fetch
//Cualquier instrucción que este relacionada con cargar archivos, se interpreta como un fetch-get, ejemplo: cargar los .css, .js, imagenes, el index.html, etc...


//Metodo que estará al pendiente de las peticiones fetch que se realicen en la página
//El primer parametro indica a que estará pendiente, y el segundo es una función la cual usa como parametro la respuesta del evento fetch

self.addEventListener('fetch', event =>{
    //Con el parametro event, se pueden manipular las respuestas que se obtienen con la petición fetch
    //Ademas de manipular, implementando el codigo correcto, es posible especificar y controlar los archivos!

                    //Cualquier petición de recursos que realice la página son manejadas como una petición fetch...

    //El evento respondWith permite manipular el evento con lo que se le indique de parametros
    //event.respondWith(fetch(event.request))

    //Al revisar en el apartado de Network, los archivos que muestren un engrane son los que solicito el service worker!


    /*      MANIPULAR ESPECIFICAMENTE UN ARCHIVO    */
    /*
    //El evento tiene la propiedad url a la cual se le puede aplicar el metodo include()
    if(event.request.url.includes('.css')){
        event.respondWith(null);
    }
    */

    //Prueba: Manipular la imagen original y cambiarla por otra :v
        //Para poder modificar la imagen actual, se tiene que crear una variable con la dirección de la nueva imagen
    if(event.request.url.includes('main.jpg')){
        //Modificar la imagen original!
            //Variable con la petición fetch a la imagen que se desea usar para substituir la imagen original
        let updateImage = fetch('img/guirnaldas.jpg');
            //Modificar la imagen usando el metodo respondWith()
        event.respondWith(updateImage);

        console.log("Se modifico la imagen putos");
    }


})


//Apuntes del video 8. Modificando....

self.addEventListener('fetch', event =>{

    //El objeto Response(``) es el resultado de cualquier petición fetch

    if(event.request.url.includes('style.css')){

        //Crear la variable que modificara el la respuesta del archivo style.css
        //Dentro de los ` ` (Primer Parametro) se puede escribir codigo puro de css,
        // y como segundo parametro van los headers, los cuales indican el tipo de archivo!.... en este caso text/css para que se interprete como .css
        let updateStyle = new Response(`
            body{
                background-color: red;
            }
        `,{
            headers:{
                'Content-Type':'text/css'
            }
        });

        //Modificar la respuesta auxiliandose de la variable anterior con la configuración creada en ella!
        event.respondWith(updateStyle);
    }

}) //Cierre metodo addEventListener de las peticiones fetch ...!
