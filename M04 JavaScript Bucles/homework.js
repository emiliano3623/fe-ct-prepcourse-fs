/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
    // "x" e "y" son números enteros.
    // Retornar el número más grande.
    // Si son iguales, retornar cualquiera de los dos.
    // Tu código:

    if (x>=y) {
        console.log(x);
    } else {
        console.log(y);
    }


    
 }
 
 function mayoriaDeEdad(edad) {
    // Determinar si la persona puede ingresar al evento según su edad.
    // Si tiene 18 años ó más debe retornar el string: "Allowed".
    // Caso contrario: "Not allowed".
    // Tu código:
    if (edad>=18) 
    {
        console.log("Allowed");  
    } else {
        console.log("Not allowed"); 
    }
 }
 
 function conection(status) {
    // El argumento "status" representa el estado de conexión de un usuario.
    // Si el estado es igual a 1, el usuario está "Online".
    // Si el estado es igual a 2, el usuario está "Away".
    // De lo contrario, presumimos que el usuario está "Offline".
    // Retornar el estado de conexión del usuario.
    // Tu código:

    switch (status) {
        case 1:
            console.log("Online");
            break;
        case 2:
            console.log("Away");
            break;
        default:
            console.log("Offline");
            break;
    }
 }
 
 function saludo(idioma) {
    // Retornar un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!".
    // Si "idioma" es "mandarin", devuelve "Ni Hao!".
    // Si "idioma" es "ingles", devuelve "Hello!".
    // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
    // Tu código:
    switch (idioma) {
        case "aleman":
            console.log("Guten Tag!");
            break;
        case "mandarin":
            console.log("Ni Hao!");
            break;
        case "ingles":
            console.log("Hello!");
            break;    
        default:
            console.log("Hola!");
            break;
    }
 }
 
 function colors(color) {
    // La función recibe un color. Retornar el string correspondiente:
    // En caso que el color recibido sea "blue"   --> "This is blue".
    // En caso que el color recibido sea "red"    --> "This is red".
    // En caso que el color recibido sea "green"  --> "This is green".
    // En caso que el color recibido sea "orange" --> "This is orange".
    // Si no es ninguno de esos colores           --> "Color not found".
    // IMPORTANTE: utilizar el statement SWITCH.
    // Tu código:
    switch (idioma) {
        case "blue":
            console.log("This is blue");
            break;
        case "red":
            console.log("red");
            break;
        case "green":
            console.log("This is green");
            break;    
        case "orange":
            console.log("This is orange");
            break;   
        default:
            console.log("Color not found");
            break;
    }
 }
 
 function esDiezOCinco(num) {
    // Retornar true si "num" es 10 o 5.
    // De lo contrario, retornar false.
    // Tu código:
    if (num==10 || num==5) {
        return(true);
        console.log("TRUE");
    } else {
        return(false);
        console.log("FALSE");
        
    }

 }
 
 function estaEnRango(num) {
    // Retornar true si "num" es menor que 50 y mayor que 20.
    // De lo contrario, retornar false.
    // Tu código:

    if (num<50 && num>20) {
        return(true);
        console.log("true");
        
    } else {
        return(false);
        console.log("false");
        
    }


 }
 
 function esEntero(num) {
    // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
    // Tu código:

    if (Number.isInteger(num)) {

        return(true);
        console.log("true");
        
    } else {
        return(false);
        console.log("false");
        
    }
 }
 
 function fizzBuzz(num) {
    // Si "num" es divisible entre 3, retorna "fizz".
    // Si "num" es divisible entre 5, retorna "buzz".
    // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
    // De lo contrario, retorna false.
    // Tu código:
    var num1 = num;
    num1=num/3;
    var num2 = num;
    num2=num2/5;
    if (Number.isInteger(num1)&& Number.isInteger(num2)) {

        return("fizzbumm");
        
        
    } else {
        if (Number.isInteger(num1)) {
            return("fizz");
            console.log("fizz")
        } else {
            if (Number.isInteger(num2)) {
                return("buzz");
                console.log("buzz");
            } else {
                
                return(false);
                console.log("false");
            }
            
        }
    }
 }
 
 function operadoresLogicos(num1, num2, num3) {
    // La función recibe tres números distintos.
    // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
    // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
    // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    // Si todos los argumentos son cero, retornar ---> "Error".
    // Si no se cumple ninguna de las condiciones anteriores, retornar false.
    // Tu código:

    if (num1<0 || num2<0 || num3<0) {
        return("hay negativos");
        console.log("hay negativos");
        
    } else {
        if (num3>num2 && num3>num1) {
            num3++;
            return(num3);
            console.log(num3);
            
        } else {
            if (num1>num2 && num1>num3) {
                return("numero 1 es mayor y positivo");
                console.log("el numero uno es mayor y positivo");
                
            } else {
                if (num1==0 && num2==0 && num3==0) {
                    return("error");
                    console.log("error");
                } else {
                    return(false);
                    console.log("false");
                }
            }
            
        }
    }

    
 }
 
 function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    const esPrimo = num => {
        
        if (num == 0 || num == 1 || num == 4) return false;
        for (let x = 2; x < num / 2; x++) {
            if (num % x == 0) return false;
        }
        
        return true;
    }

 }
 
 function esVerdadero(valor) {
    // Si "valor" es verdadero retornar "Soy verdadero".
    // Caso contrario, retornar "Soy falso".
    // Tu código:

    if (valor == true) {
        return("soy verdadero");
        console.log("soy verdadero");
        
    } else {
        return("soy falso");
        console.log("soy falso");
    }
 }
 
 function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos retornar true.
    // Caso contrario, retornar false.
    // Tu código:
    


    var  largo = num;

    largo.Number.toString();

    if(largo.legth==3){
        return(true);
        console.log("es verdadero");
    }else{
        return(false);
        console.log("es falso");
    }

 }
 
 function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    var i=0;
    do {
        
        num=num+5;
        i++;

    } while (i==8);
 }
 
 /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
 module.exports = {
    obtenerMayor,
    mayoriaDeEdad,
    conection,
    saludo,
    colors,
    esDiezOCinco,
    estaEnRango,
    esEntero,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    esVerdadero,
    tieneTresDigitos,
    doWhile,
 };
 
