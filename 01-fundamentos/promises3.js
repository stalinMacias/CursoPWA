function writeLetter(){
    var letra = new Promise (function(resolve,reject){
        setTimeout(function(){
            resolve(".com");
        },1000);
    });//Cierre Promise

    return letra;   //Retornar la Promesa
}

function anotherLetter(){
    var otherLetter = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Otra promesa");
        },1000);//Cierre setTimeOut
    });//Cierre promesa

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