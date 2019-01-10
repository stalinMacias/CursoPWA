//En este archivo se trabajará la propiedad .clone() de la peticion fetch

//Esta propiedad sirve para clonar la data obtenida de una peticion get
//Cuando la data pasa por el metodo .json() se marca como que el ReadableStream ha sido leído, y solamente se permite leer una vez, es por eso que
//se implementa el metodo .clone(), para poder leer otra vez dicha data....




fetch('https://reqres.in/api/users/1')  //Petición del usuario 1
.then(resp => {
    resp.clone().json()  //Clonar la data antes de parsearla por el json(), es decir, antes de que ReadableStream sea activado...!
    .then(usuario => console.log(usuario.data)) //Para acceder especificamente a la data, se hace con otra promesa.
    //Recordar que la primer promesa devuelve la data convertida a json, entonces se requiere otra promesa para capturar esta información y
    //acceder a ella....
    resp.json()
    .then(usuario => console.log(usuario.data))
}).catch(error => console.log(error))


fetch('https://reqres.in/api/users/2')  //Peticion del usuario 2
.then(resp =>{
    resp.clone().json()
    .then(usuario => console.log(usuario.data))
    resp.json()
    .then(usuario => console.log(usuario.data))
})
.catch(error => console.log(error))


fetch('https://reqres.in/api/users/3')  //Peticion del usuario 3
.then(resp =>{
    resp.clone().json()
    .then(usuario => console.log(usuario.data))
    resp.json()
    .then(usuario => console.log(usuario.data))
})
.catch(error => console.log(error))