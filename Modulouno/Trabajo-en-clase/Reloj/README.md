# Reloj hecho en JS
Desarrollemos un pequeño “reloj” que muestre la hora actual por pantalla utilizando javascript

new Date() al no recibir parámetro en su constructor nos retorna la fecha actual
- var hora = momentoActual.getHours()
- var minuto = momentoActual.getMinutes()
- var segundo = momentoActual.getSeconds()
Con el objeto resultante de Date() obtenemos la hora, minutos y segundos

## Con setTimeout("mueveReloj()",1000)
- Seteamos el value del input correspondiente y actualizamos cada 1 segundo utilizando la función setTimeout
- La función setTimeout sirve para hacer el retardo antes de ejecutar la sentencia. La sentencia es una simple llamada a la función y el retardo es de 1000 milisegundos (un segundo).

