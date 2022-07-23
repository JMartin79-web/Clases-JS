/*
if(true){
    alert("Hola")
}
if (false){
    alert("chau")
}
*/

/*let num = 50
if(num > 150){ //si pasa esto....
    alert("el número es mayor a 150")
}else{ //sino...
    alert("el número es menor a 150")
}*/

/*
let num = 50
if(num > 50){
    alert("el número es mayot a 50")
}
*/


// EJERCICIO 1
// Entrar al bar >=18 años
/*
let edad = 19
if(edad >=18){
    alert("puede ingresar")
}else{
    alert("No puede ingresar")
}
*/

//IF ANIDADO

/*
let edad = parseInt(prompt("ingresá tu edad"));

if(edad > 18){
    alert("puede ingresar")
}else if(edad < 18) { //sino si...
    alert("No puede ingresar")
}else if(edad == 18) {
    alert("Tiene 18, puede ingresar")
}else{
    alert("Algo salió mal")
}
*/

// AND && / OR || 
/*
let nombreIngresado = prompt("ingrese su nombre")
let apellidoIngresado = prompt("ingrese su apellido")

if((nombreIngresado != "") && (apellidoIngresado != "")){
    alert("Nombre: " + nombreIngresado + "\nApellido: "+apellidoIngresado);
}else{
    alert("Error: ingrese nombre y apeliido")
}
*/

//EJEMPLO

let nombreIngresado = prompt("ingrese su nombre");
// el nombre tiene que ser diferente a nada, y tiene que ser "Emma", "emma" o "EMMA"
if((nombreIngresado != "") && ((nombreIngresado == "Emma") || (nombreIngresado == "emma") || (nombreIngresado == "EMMA"))){
    alert("Bienvenida " + nombreIngresado)
} else{
    alert("El nombre ingresado es incorrecto")
};




