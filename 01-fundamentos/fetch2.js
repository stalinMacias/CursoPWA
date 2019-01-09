//En este archivo se aplicará el mismo ejemplo que en el anterior, pero esta vez si se trabajará directamente con fetch....

//Un fetch provee una definición generica de "Request and Response.
//Esto permitirá que sean usadas en cualquier momento que sea necesario.

//Al trabajar con fetch te darás cuenta que al final es una promesa, tiene los metodos then () y catch()

//Un fetch sirve para obtener información de un sitio web distinto al nuestro...

fetch('https://reqres.in/api/users')
.then(resp =>resp.json()   //convertir la respuesta que obtiene el fetch y parsearla a un archivo tipo json para poder leer la información
).then(respObj =>{
    console.log(respObj)
});
