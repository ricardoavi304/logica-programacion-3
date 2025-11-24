// 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularFactorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
    }

rl.question("Ingresa un número para calcular su factorial: ", (respuesta) => {
    const numero = Number(respuesta);

    if (!isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
        console.log(`El factorial de ${numero} es: ${calcularFactorial(numero)}`);
    } else {
    console.log("Error: Debes ingresar un número entero válido.");
    }

    rl.close();
});
