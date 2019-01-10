//En este archivo se practicará la función blob() a una petición fetch para reconstruir el archivo que se utilice en el fetch
//la función blob() sirve para averiguar el tipo de archivo cuando esta información es desconocida....
//Para conocer el tipo de archivo en cuestión se puede acceder por la propiedad: type....


//En el siguiente ejemplo se obtiene el tipo de archivo 
fetch('superman.png')
.then(resp => resp.blob())
.then(imagen => console.log(imagen.type))


//En el siguiente ejemplo se reconstruye la imagen en el navegador auxiliandose de metodos nativos de JS tales como URL.createObjectURL()

let img = document.querySelector('img');

fetch('nave.png')
.then(resp => resp.blob())
.then(imagen => {
    var imgPath = URL.createObjectURL(imagen);
    img.src = imgPath;
})