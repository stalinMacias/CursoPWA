
//En este archivo se trabaja con el origen de los FETCH-API, el cual proviene de los HMLHttpRequest
//
//Dado que los HMLHttpRequest son un poco complejos, se desarrollaron los FETCH-API
//El siguiente código muestra como trabaja un HMLHttpRequest:


var request = new XMLHttpRequest();

//Si el tercer argumento es true, lo convierte en una solicitud asíncrona...
request.open('GET','https://reqres.in/api/users',true);
request.send(null);

request.onreadystatechange = function(state){
    if(request.readyState == 4){
        var resp = request.response;
        var respObj = JSON.parse(resp);

        console.log(respObj);
    }
}