//En este archivo se pone en práctica el metodo all de las promesas.
//Promise.all


function sumaPares(num1,num2){
    //Si el metodo devuelve una promesa, no hay necesidad de crear una variable, devoverla directamente...!
    return new Promise((resolve,reject) =>{
        if((num1  % 2 != 0) || (num2 % 2 != 0)){
            reject("Los numeros deben ser pares");
        }else{
            resolve(num1+num2);
        }
    }); //Cierre promesa

} 


sumaPares(4,4).then(resultado => {console.log(resultado)}).catch(error => {console.log(error)});

function calculaSueldo(diasTrabajados){
    return new Promise((resolve,reject) =>{
        if(diasTrabajados < 5) reject ("Trabajaste menos de 5 días, has perdido el 100% de tu sueldo!");
        else resolve(diasTrabajados * 150);
    });
}

/*
calculaSueldo(7).then(salario => {console.log(salario)}).catch(error =>{console.log(error)});
calculaSueldo(5).then(salario => {console.log(salario)}).catch(error =>{console.log(error)});
calculaSueldo(4).then(salario => {console.log(salario)}).catch(error =>{console.log(error)});
*/

//Usando promise.all para calcular todos los sueldos
Promise.all([calculaSueldo(7),calculaSueldo(5),calculaSueldo(6)])
.then(salario => {console.log(salario)})
.catch(error =>{console.log(error)});


//Usando un arreglo para enviarlo como parametro en el Promise.all

let cosas = [calculaSueldo(7),calculaSueldo(5),calculaSueldo(2)];

Promise.all(cosas)
.then(salario => {console.log(salario)})
.catch(error =>{console.log(error)});

//En el ejemplo anterior se aprecia que solamente con el hecho de que falle una promise,
//basta para que todo el promise.all se detenga y ejecute el error del promise donde fue generado.
//