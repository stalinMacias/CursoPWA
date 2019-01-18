//Para manejar los errores 404 de peticiones a recursos, lo mejor es auxiliarse del parametro ok:true/false

//Para optimizar las acciones que el sw realizará dependiendo que archivos no encuentre, tenemos que especificar el tipo de archivo para el que
//se esta preparando el codigo en cuestión.... Ejemplo, un codigo para las imagenes, otro para los .css, etc...

                /* ************* UN ERROR 404 NO ES INTERCEPTADO POR EL .catch() *********************/

//al trabajar en el respondWith cuando se manejene errores, se tiene que devolver una promesa que regrese una respuesta!
//Es decir, que dentro del respondWith debe de ir una peticion fetch o una referencia de una!


self.addEventListener('fetch',event=>{
    
    //Crear una variable que realice una peticion fetch a la peticion del evento para poder analizar el parametro ok!
    //Si es al parametro ok es true, devolver lo que la petición fetch obtiene, 
    //si es false, realizar una petición fetch por el recurso que se utilizará para substituir el recurso que esta generando el error!
    let fixError =  fetch(event.request)
                    .then(resp =>{
                        //if(resp.ok) return resp
                        //else return fetch('img/guirnaldas.jpg')

                        //Operador ternario para optimizar el codigo
                        return resp.ok ? resp : fetch('img/guirnaldas.jpg')
                        //return expresionAnalizar ? lo que devolvera si la expresion es true : lo que devolvera si la expresion es false
                    })

    //Con el metodo respondWith se le indica el como respondera cada petición fetch!, no importa que sea correcta o incorrecta!!!
    event.respondWith(fixError)
})