var readlineSync = require('readline-sync');

// Função para obter notas
function obterNota(mensagem) {
    return Number(readlineSync.question(mensagem));
}

// Obtendo as notas
var Nota1 = obterNota('Qual a primeira nota? ');
var Nota2 = obterNota('Qual a segunda nota? ');
var Nota3 = obterNota('Qual a terceira nota? ');

// Calculando a média
var media = (Nota1 + Nota2 + Nota3) / 3;
console.log(`O resultado da média é ${media.toFixed(1)}`); // Formada a média
