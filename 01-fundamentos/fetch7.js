//En este archivo se lee un archivo .html y se realizan distintas pruebas


//Si dentro de una promesa ocurre un error, dicho error será captado por el .catch de la misma.....
//Si el STATUS fue un 400 o 404, el error deberá de ser tratado como en el archivo anterior...!


//PENDIENTE: Hacer un fetch al archivo: no-encontrado.html, tratar su información para que se pueda cargar en el index.html y se visualice
//en el navegador. Tambien adaptar el codigo para que pueda capturar los errores 400 y 404 en caso de que no existiese el archivo...


fetch('no-encontrado.html')
.then(resp =>{
    if(resp.ok) return resp.text()
    else throw new Error ('Ese archivo no existe')
})
.then(html =>{
    let body = document.querySelector('body')
    body.innerHTML = html
})
.catch(error => console.log(error))