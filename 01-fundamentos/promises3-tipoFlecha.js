//Las funciones escritas en el archivo promises3.js serán reescritas en el formato de ES6 funciones tipo flecha...
//Funciones tipo flecha
/*  Sintaxis de una función tipo flecha...
    (argumento,argumento)=>{
        //Codigo a ejecutar
        return ...
    }
*/
function writeLetter(){
    var letra = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(".com");},1000);
    });//Cierre Promise

    return letra;   //Retorna la Promesa
}

function anotherLetter(){
    var otherLetter = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("Otra promesa");},1000);
    });//Cierre promise
    return otherLetter; //Retorna la promesa
}

writeLetter().then( letra => {
    console.log(letra)
    return writeLetter().then( letra => {
        console.log(letra);
        return writeLetter().then( letra => {
            console.log(letra);
        });
    });
});