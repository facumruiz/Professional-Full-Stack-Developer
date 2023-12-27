var http = require("http");
let fs = require('fs');


var server = http.createServer(function(peticion, respuestas){

    fs.readFile('files/hola_mundo.txt', 'utf-8', function(err, data){
        if(err){
            console.log('error: ', err);

        }else {
            respuestas.end(data)
        }
    });
    console.log("ya")
});


server.listen(3000, function(){
    console.log(`servidor ${this.address().port}`)
});