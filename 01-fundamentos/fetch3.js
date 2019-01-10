//Petición POST
//URL 'https://reqres.in/api/users'


//Postear información por medio de fetch....

//UNA PETICIÓN FETCH- POST SIRVE PARA POSTEAR INFORMACIÓN

//Parametros del fetch:

//  1.- El primer parametro es el url al que se va a conectar
//  2.- El segundo parametro es un objeto en el cual se definiran las propiedades del fetch
    //  2.1- La primer propiedad se llama: method: [En este caso será POST] o cualquier otro tipo de petición fetch...
    //  2.2- Va lo que se desea enviar en la petición, body: ****TIENE QUE SER UN JSON EN FORMA DE STRING****
        //Convertir un objeto a JSON EN FORMA DE STRING se hace con el metodo JSON.stringify()
    //  2.3- Son los headers, son una configuracion: 
//

//Una vez terminados los parametros del fetch, recordar que el fetch al final es una promesa, se agrega el metodo .then()
//Y tambien se debe de agregar el metodo .catch() para capturar los posibles errores que se pudiesen generar...!


let infoNaveGoly = {
    nombre : 'goly',
    lasers : 15
}

fetch('https://reqres.in/api/users',{
    method: 'POST',                     //Tipo de petición fetch
    body: JSON.stringify(infoNaveGoly), //Data a enviar.... ***DEBE SER UN JSON EN FORMA DE STRING***
    headers:{                           //headers...
        'Content-Type': 'application/json'
    }
}).then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log("Error en la peticion");
    console.log(error);
})

/////////////////////////////////////////////////////
let infoNaveVengui = {
    nombre : 'vengui',
    lasers : 10
}

fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: JSON.stringify(infoNaveVengui), //Data a enviar....
    headers:{
        'Content-Type': 'application/json'
    }
}).then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log("Error en la peticion");
    console.log(error);
})


let autor = {
    nombre : "Stalin",
    edad : 22
}

fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: JSON.stringify(autor),
    headers:{
        'Content-Type': 'application/json'
    }
}).then(resp => resp.json())
.then(resp => console.log(resp))
.catch(error => console.log(error))