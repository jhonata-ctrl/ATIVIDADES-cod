var readlineSync = require('readline-sync');

// Solicita ao usuário que insira a base e a altura do triângulo
var base = readlineSync.question('Digite a base do triângulo: ');
var altura = readlineSync.question('Digite a altura do triângulo: ');

// Calcula a área do triângulo
var AreaTri = (base * altura) / 2;  

// Exibe o resultado
console.log(`A área do triângulo com base ${base} e altura ${altura} é ${AreaTri.toFixed(2)}`);
