
//Interceptar la petición a la imagen original y modificarla por otra :v


self.addEventListener('fetch', event =>{
    if(event.request.url.includes('main.jpg')){
        //Crear en una variable una peticion fetch a la imagen que se utilizara para modificar la imagen original
        let updateImage = fetch('img/guirnaldas.jpg')
        event.respondWith(updateImage);
    }
})
