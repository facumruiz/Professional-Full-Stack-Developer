function contacto() {

    var nombre = document.form_contacto.nombre.value
    console.log(nombre)
    var apellido = document.form_contacto.apellido.value
    console.log(apellido)
    var dni = document.form_contacto.dni.value
    console.log(dni)
    var email = document.form_contacto.email.value
    console.log(email)

   /* Pregunto por el estado de todos los inputs */
    if(nombre == ""){
        document.getElementById("nombre_error").innerHTML = "El campo Nombre es obligatorio"

    }else document.getElementById("nombre_error").innerHTML = ""

    if(apellido == ""){
        document.getElementById("apellido_error").innerHTML = "El campo Apellido es obligatorio"

    }else document.getElementById("apellido_error").innerHTML = ""

    if(dni == ""){
        document.getElementById("dni_error").innerHTML = "El campo DNI es obligatorio"

    }else document.getElementById("dni_error").innerHTML = ""

    if(email == ""){
        document.getElementById("email_error").innerHTML = "El campo Email es obligatorio"

    }document.getElementById("email_error").innerHTML = ""







    /* Para obtener el valor */
    var cod = document.getElementById("seguro").value;


    /* Para obtener el texto */
    var combo = document.getElementById("seguro");
    var selected = combo.options[combo.selectedIndex].text;

    /* Para juntar texto mas valor */
    var preciototal = (selected + ": " + cod);

    /* Muestro en pantalla el valor del servicio */
    document.getElementById("precio").innerHTML = preciototal

}