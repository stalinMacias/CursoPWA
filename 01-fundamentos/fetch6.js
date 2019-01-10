//En este archivo se trabajará el manejo de errores personalizados al usar fetch

//CUANDO EN UNA PETICIÓN EL STATUS ES 400 O 404 significa que esa información no existe en la API, y dicho error no puede ser manejado directamente
//por el .catch de la petición fetch.
//Para hacer que pueda ser capturado por dicho .catch, se deben de hacer unas pequeñas adaptaciones al código...

//Si el valor de la propiedad ok de la peticion es true, la petición fue exitosa, pero si es false, ocurrio un error.... !

fetch('https://reqres.in/api/users/1000')
.then(resp => {
    if(resp.ok) return resp.json()                              //Si ok es true, parsear la data a json() para poder trabajar con ella
    else throw new Error ('Ese usuario no existe en la API')    //Este será el error que captará el .catch()
})
.then(usuario => console.log(usuario.data))                     //Si la petición fue existo, mostrar la data del usuario...
.catch(error => console.log(error))                             //Si ocurrio un error, mostrarlo!



fetch('https://reqres.in/api/users/1')
.then(resp =>{
    if(resp.ok) return resp.json()
    else throw new Error ('Ese usuario no existe en la API')
})
.then(usuario => console.log(usuario.data))
.catch(error => console.log(error))