// CICLOS

// i se pone como variable en los ciclos como convención. Nos ayuda a entender que se itera
// num ++ es lo mismo que num +1
// num -- es lo mismo que num -1

//FOR (desde; hasta; incremento/decremento)

/*
for(let i = 0; i < 11; i++){
    alert(i)


let inc = 0
for(inc; inc<5; inc++){
    alert(inc)
}


//solicitamos un valor al usuario
let ingresarNum = parseInt(prompt("Ingresar número"));

for(let i = 1; i <=10; i++){ // le decimos como itera el número
    let resultado = ingresarNum * i; // creamos una variable "resultado", que es el numero ingresado por el usuario que no cambia, y el que itera
    console.log(ingresarNum + " x " + i + " = " + resultado) //devuelve el valor que no cambia, el i que cambia y el resultado de ingresarNum*i
}


//secuencia BREAK

for (let i = 0; i <= 10; i++) {
    let ingresarNombre = prompt("ingresar nombre")
    if (i == 5) {
        //break        
        //continue
      }
      console.log('turnos ' + i);
  }
}*/

//WHILE - compara
//Mientras se cumpla la condicion indicada, repite las intrucciones incluidas entrod el bucle.


let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}


