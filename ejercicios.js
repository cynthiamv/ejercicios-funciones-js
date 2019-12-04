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


//EJERCICIO 3
//Crear la funcion obtenerResto(a, b) que retorne el resto de dividir a y b.

const obtenerResto = (a, b) => {
    return a % b
};

console.log(obtenerResto(5, 2));


// 4. Crear la funcion esPar(num) que retorne true si el numero es par, y false si es impar.
// Dentro de esa funcion debe utilizarse lo retornado por la funcion obtenerResto creada en 2.3.

const esPar = num => {
    if (obtenerResto(num, 2) === 0) {
        return true
    } else {
        return false
    }

};

console.log(esPar(5))
// forma simplificada 
// const esPar = num => obtenerResto(num, 2) === 0


// EJERCICIO 5
// Declarar la siguiente variable:
// const listaDeNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
// Crear una funcion llamada encontrarImpares() que recorre el array recibido por parametros
// y retorna un nuevo array compuesto solo por los numeros impares.
// Para saber si un número es par debe utilizarse la funcion esPar() creada en 2.4.

const listaDeNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];

const encontrarImpares = array => {
    let numerosImpares = []
    for (let i = 0; i < array.length; i++) {
        if (!esPar(array[i])) {
            numerosImpares.push(array[i])
        }
    }
    return numerosImpares
};

console.log(encontrarImpares(listaDeNumeros));