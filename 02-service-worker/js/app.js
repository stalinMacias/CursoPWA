
//El primer paso para comenzar a trabajar es verificar si podemos usar el serviceWorker en el navegador, esto se realiza con la siguiente linea de codigo

if(navigator.serviceWorker) {
    //console.log("Si podemos usar el serviceWorker");

    //Si el SW se puede utilizar en el navegador, se procede a INSTALARLO!
    navigator.serviceWorker.register("/sw.js")      //El archivo sw.js debe de estar en la raíz del proyecto, al mismo nivel del index.html
    //El SW tiene control total de lo que se encuentre en su carpeta, por lo tanto, si se encuentra en la raíz, tiene control de todo el proyecto



    //En todas las paginas de la aplicación se debe de tener la referencia al archivo del sw.js

    //Cuando el navegador detecta que el service worker ha cambiado, inicia de nuevo el ciclo de vida del mismo, es decir, 
                //*Ejecutar todo el codigo,
                //*Agregar los listener
                //*Estar pendiente para ser activado

    //Mientras el SW siga siendo el mismo, solamente se mantendrá activado!

}