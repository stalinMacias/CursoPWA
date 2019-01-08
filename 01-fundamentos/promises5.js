//En este archivo se pone en práctica el metodo race de las Promesas
//Promise.race()
/*
    *Retorna una Promise que se comporta como tal. Se cumple o se rechaza,
    *lo que suceda antes de en alguno de sus argumentos.

                                    ****    ojito aquí  ****

    **Si la primer promesa que se ejecuta termina en reject, hasta ese punto termina la ejecución de .race() y 
    **se mostrará dicho error...

    ***Si alguna de las promesas falla, pero previamente ya se ejecuto una en menor tiempo, 
    ***se tomará como resultado el de la promesa que se ejecuto primero... :D
*/

//Este ejemplo será tal cual como el del video del curso....

//Definir 2 promesas que se ejecutarán en distinto tiempo y despues aplicar el metodo Promise.race() para comprobar su funcionamiento

let sumarLento = (numero) =>{
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            resolve(numero+1);
        },800);
    });
}

let sumarRapido = (numero) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            //resolve(numero+1);
            reject("Error inesperado en sumarRapido");
        },1000);
    })
}

//Promise.all()
//Promise.all([sumarRapido(8),sumarLento(5)]).then(resultado =>{console.log(resultado)})

//Promise.race()
//Promise.race([sumarLento(5),sumarRapido(8)]).then(resultado =>{console.log(resultado)}) //Siempre gana sumarRapido...

//Hace que en sumarRapido ocurra un reject
//Promise.race([sumarLento(5),sumarRapido(8)])
//.then(resultado =>{console.log(resultado)}) 
//.catch(error => {console.log(error)})

//Hace que en sumarRapido ocurra un reject pero esta vez se modifico el tiempo y es mas largo que en sumarLento
Promise.race([sumarLento(5),sumarRapido(8)])
.then(resultado =>{console.log(resultado)}) 
.catch(error => {console.log(error)})

