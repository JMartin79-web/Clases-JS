//coemntario de una linea

/*comentario de varias lineas
Esta es otra linea. Se comenta como css
*/



let nombreIngresado = prompt("Ingresá tu nombre");

let apellidoIngresado = prompt("Ingresá tu apellido");

let edadIngresada = parseInt(prompt("ingresá tu edad"));
//parseInt es para que lo que el usuario ingrese sea un numero y no un string
let todayYear = 2022;
let edad = todayYear - edadIngresada;
alert("Hola " + nombreIngresado + " " + apellidoIngresado + "," + " " + "naciste en el año " + edad +". ¡Ya sos un dinosaurio!");