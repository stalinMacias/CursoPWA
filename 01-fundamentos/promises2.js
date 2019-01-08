function sumarUno (numero){

    //Crear la promesa
    //Una promesa manda llamar una función, la cual tiene 2 parámetros -> Resolve y Reject,
    // ambos parametros hacen referencia a una función....
    var promesa = new Promise(function(resolve,reject){
        //Código que se ejecutara dentro de la promesa


        if(numero >= 8){
            //Se usa el metodo reject para terminar con la promesa...
            reject("El numero es mayor o igual a 8!");
        }

        setTimeout(function(){
            //Se usa el metodo resolve para resolver la promesa...
            resolve(numero + 1);
        },1000);
    });//Cierre de la promesa

    //Devolver la promesa
    return promesa;
}

//Una manera de trabajar con las promesas
/*
sumarUno(5).then( nuevoNumero => {
    console.log(nuevoNumero);
    return sumarUno(nuevoNumero).then(nuevoNumero =>{
        console.log(nuevoNumero);
        return sumarUno(nuevoNumero).then(nuevoNumero =>{
            console.log(nuevoNumero);
        });
    });
});
*/

//La manera más optima de trabajar con promesas si se va a estar invocando el mismo metodo...
sumarUno(2)         
.then(sumarUno)             
.then(sumarUno)     
.then(sumarUno)     
.then(resultado => {console.log("El resultado final es: "+resultado)})
//Para manejar los errores en las promesas se usa catch....
.catch(error => {
    console.log("Error en la promesa");
    console.log(error);
});