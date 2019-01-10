// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.co/api/people/1/
 Imprima en consola el nombre y género de la persona.
*/

// Resolución de la tarea #1

/*
fetch('https://swapi.co/api/people/1/')
.then(resp => {
    if(resp.ok) return resp.json()
    else throw new Error ('Error en la tarea 1')
})
.then(usuario =>{
    console.log("Nombre del usuario en la tarea 1: "+usuario.name);
    console.log("Genero del usario en la tarea 1: "+usuario.gender);
})
.catch(error => console.log(error))

*/

// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.co/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegúrese que tenga
 el ID y la fecha de creación del objeto
*/

// Resolución de la tarea #2


//Cuando se use esta función, recibirá como parametro la respuesta de una petición fetch get
function postData(persona){
    //Esta promesa devolverá la respuesta del fetch post
    let datosUsuarioToPost = {
        nombre : persona.name,
        genero : persona.gender
    }
    return fetch('https://reqres.in/api/users',{
        method: 'POST',
        body: JSON.stringify(datosUsuarioToPost),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}//Cierre postData


fetch('https://swapi.co/api/people/1/')
.then(resp =>{
    if(resp.ok) return resp.json()                                          //Este será el parametro que se envíe al metodo para postear la información!
    else throw new Error ('Error al conseguir el usuario de la tarea 2')
})
//En la siguiente promesa se invoca el metodo para postear la información, el parametro que se enviará será el return de la promesa anerior...!
.then(postData)
.then(resp => resp.json())
.then(console.log)



