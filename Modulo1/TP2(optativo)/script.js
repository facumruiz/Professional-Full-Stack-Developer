// Fucion Array para operaciones
const sumar = (a, b) => {
  return a + b;
};
const restar = (a, b) => {
  return a - b;
};
const multiplicar = (a, b) => {
  return a * b;
};
const dividir = (a, b) => {
  return a / b;
};

//Funcion por BOTONES
function suma() {
  let n1 = parseInt(document.getElementById("N1").value);
  let n2 = parseInt(document.getElementById("N2").value);
  console.log(n1, n2);

  let operacion_suma = sumar(n1, n2);
  document.getElementById("resultado").innerHTML = `${operacion_suma}`;
}

function resta() {
  let n1 = parseInt(document.getElementById("N1").value);
  let n2 = parseInt(document.getElementById("N2").value);
  console.log(n1, n2);

  let operacion_resta = restar(n1, n2);
  document.getElementById("resultado").innerHTML = `${operacion_resta}`;
}

function multi() {
  let n1 = parseInt(document.getElementById("N1").value);
  let n2 = parseInt(document.getElementById("N2").value);
  console.log(n1, n2);

  let operacion_multi = multiplicar(n1, n2);
  document.getElementById("resultado").innerHTML = `${operacion_multi}`;
}

function divi() {
  let n1 = parseInt(document.getElementById("N1").value);
  let n2 = parseInt(document.getElementById("N2").value);

  if (n2 === 0) {
    document.getElementById(
      "resultado"
    ).innerHTML = `no se puede dividir entre 0`;
  } else {
    let operacion_dividir = dividir(n1, n2);

    document.getElementById("resultado").innerHTML = `${operacion_dividir}`;
  }
}