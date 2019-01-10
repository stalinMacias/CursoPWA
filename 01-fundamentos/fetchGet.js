//En este archivo js se practicará el fetch-get

fetch('practiceFetch.txt')
.then(texto => texto.text())
.then(texto => console.log(texto))
.catch(error =>{
    console.log("Error leyendo el fichero");
    console.log(error);
})