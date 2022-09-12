// Fucion Array para operaciones
const sumar = (a,b) =>{
    return  a+b;
}
const restar = (a,b) =>{
    return  a-b;
}
const multiplicar = (a,b) =>{
    return  a*b;
}
const dividir = (a,b) =>{
    return  a/b;
}

//Funcion por BOTONES
function suma(){

    let n1 = parseInt( document.getElementById("N1").value)
    let n2 = parseInt( document.getElementById("N2").value)

    let operacion_suma = (sumar(n1,n2))
    document.getElementById("resultado").innerHTML = `${operacion_suma}`

}

function resta(){
    let n1 = document.getElementById("N1").value
    let n2 = document.getElementById("N2").value    

    let operacion_resta = (restar(n1,n2))
    document.getElementById("resultado").innerHTML = `${operacion_resta}`
}

function multi(){
    var n1 = document.getElementById("N1").value
    var n2 = document.getElementById("N2").value

    var operacion_multi = (multiplicar(n1,n2))
    document.getElementById("resultado").innerHTML = `${operacion_multi}`
}


function divi(){
    let n1 = document.getElementById("N1").value
    let n2 = document.getElementById("N2").value    

    let operacion_dividir = (dividir(n1,n2))
    document.getElementById("resultado").innerHTML = `${operacion_dividir}`

}


