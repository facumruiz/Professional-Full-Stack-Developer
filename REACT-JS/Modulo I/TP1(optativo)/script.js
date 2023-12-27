function contacto() {

  /* ADQUIERO DATOS DE FORMULARIO */
  var nombre = document.form_contacto.nombre.value;
  var apellido = document.form_contacto.apellido.value;
  var dni = document.form_contacto.dni.value;
  var email = document.form_contacto.email.value;
  var button = document.form_contacto.button;

  /* SWITCH CASE PARA DEFINIR VALOR DE SEGUROS */
  var cod = document.getElementById("seguro").value;
  var precio;
  switch (cod) {
    case "1":
      precio = 500;
      break;
    case "2":
      precio = 1000;
      break;
    case "3":
      precio = 1500;
      break;
  }

  /*MUESTRO EN PANTALLA EL VALOR DE CADA SERVICIO*/
  document.getElementById("precio").style.color = "color: green;"; // cambio estilos de mensaje
  document.getElementById("precio").style.fontSize = "20px"; // cambio estilos de mensaje
  document.getElementById("precio").innerHTML = "$" + precio; //muestro valor con estilos







  /* PARTE ERROR EN INPUTS */
  /* Pregunto por el estado de todos los inputs */
  if (nombre == "") {
    document.form_contacto.nombre.style.border = "1px solid rgb(255, 45, 45)";
    document.getElementById("nombre_error").style.color = "rgb(255, 45, 45)";
    document.getElementById("nombre_error").innerHTML =
      "El campo Nombre es obligatorio";
  } else document.getElementById("nombre_error").innerHTML = ".";

  if (apellido == "") {
    document.form_contacto.apellido.style.border = "1px solid rgb(255, 45, 45)";
    document.getElementById("apellido_error").style.color = "rgb(255, 45, 45)";
    document.getElementById("apellido_error").innerHTML =
      "El campo Apellido es obligatorio";
  } else document.getElementById("apellido_error").innerHTML = ".";

  if (dni == "") {
    document.form_contacto.dni.style.border = "1px solid rgb(255, 45, 45)";
    document.getElementById("dni_error").style.color = "rgb(255, 45, 45)";
    document.getElementById("dni_error").innerHTML =
      "El campo DNI es obligatorio";
  } else document.getElementById("dni_error").innerHTML = ".";

  if (email == "") {
    document.form_contacto.email.style.border = "1px solid rgb(255, 45, 45)";
    document.getElementById("error").style.color = "rgb(255, 45, 45)";
    document.getElementById("error").innerHTML =
      "El campo Email es obligatorio";
  } else document.getElementById("error").innerHTML = ".";

  /* En el caso de que no se llenen todos los campos del formulario.... */
  if (nombre == "" || apellido == "" || dni == "" || email == "") {
    /* Muestro mensaje de error */
    document.getElementById("precio").style.color = "rgb(255, 45, 45)"; // cambio estilos de mensaje
    document.getElementById("precio").innerHTML =
      "Complete los campos, para ver el precio del servicio"; //muestro mensaje error con estilos
  } else {
    document.getElementById("precio").style.color = "green";
    document.form_contacto.nombre.style.color = "green";
    document.form_contacto.apellido.style.color = "green";
    document.form_contacto.email.style.color = "green";
    document.form_contacto.dni.style.color = "green";
    document.form_contacto.nombre.style.border = "1px solid  green";
    document.form_contacto.apellido.style.border = "1px solid  green";
    document.form_contacto.email.style.border = "1px solid  green";
    document.form_contacto.dni.style.border = "1px solid  green";
    document.getElementById("validacion").style.color = "green";
    document.getElementById("validacion").style.fontSize = "20px";
    document.getElementById("validacion").innerHTML = "Bienvenido " + nombre + ", estaremos en contaco" //muestro mensaje error con estilos
  }
}
