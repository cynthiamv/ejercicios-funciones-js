// EJERCICIOS CON PARÁMETROS

// EJERCICIO 1

const mostrarNombreCompleto = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`)
};

mostrarNombreCompleto("Cynthia", "Vico");


// EJERCICIO 2

const sonIguales = (param1, param2) => {
    if (param1 === param2) {
        console.log("true")
    } else {
        console.log("false")
    }
};

sonIguales("Hola", "Hola");
sonIguales("Holis", "Chau");


// EJERCICIO 3

const agregarNumero = (array, numero) => {
    array.push(numero)
    console.log(array)
};

agregarNumero(["tomate", "lechuga", "cebolla", "zanahoria"], 3)


// EJERCICIO 4

const comprobarPosicion = (array, string) => {
    let datoEncontrado = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === string) {
            datoEncontrado = true
        }
    }
    console.log(datoEncontrado)
};


comprobarPosicion(["milanesa", "fugazzeta rellena", "canelones"], "fugazzeta rellena");


// EJERCICIO 5

const calcularPromedio = (array) => {
    let sumaParcial = 0;
    for (let i = 0; i < array.length; i++) {
        sumaParcial += array[i]    
    }
    console.log(sumaParcial / array.length)
}

let arrayNumeros = [7, 8, 5, 9];
calcularPromedio(arrayNumeros);



// Ejercicios con return
// EJERCICIO 1

const obtenerNombre = () => {
    return "Cynthia"
};

console.log("Mi nombre es " + obtenerNombre())


// EJERCICIO 2
// En el mismo código, crear una función llamada obtenerSaludo, que retorne un valor string

// Dentro de esta función obtener tu nombre utilizando la función obtenerNombre(), y guardarlo en una variable.

// Retornar un texto de la forma: ¡Hola, ${nombre}!, donde nombre tiene que ser el valor guardado en la variable de arriba.

// Ejecutar la función obtenerSaludo y mostrar el resultado por consola.

// console.log(obtenerSaludo());


const obtenerSaludo = () => {
    let nombre = obtenerNombre()
    return `¡Hola, ${nombre}!`
}

console.log(obtenerSaludo());