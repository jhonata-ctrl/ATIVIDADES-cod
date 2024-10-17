let readlineSync = require('readline-sync');

// Função para validar entradas numéricas
function obterNumero(mensagem) {
    let numero;
    do {
        numero = readlineSync.question(mensagem);
        if (isNaN(numero) || numero <= 0) {
            console.log('Por favor, insira um número válido maior que zero.');
        }
    } while (isNaN(numero) || numero <= 0);
    return parseFloat(numero);
}

// Solicita o peso e a altura do usuário
let peso = obterNumero('Digite seu peso em kg: '); 
let altura = obterNumero('Digite sua altura em metros: ');

// Calcula o IMC
let imc = peso / (altura * altura);
let imcFormatado = imc.toFixed(2);

// Classificação do IMC
let classificacao;
if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
} else if (imc < 24.9) {
    classificacao = 'Peso normal';
} else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
} else {
    classificacao = 'Obesidade';
}

// Exibe o resultado
console.log(`O seu IMC é: ${imcFormatado} (${classificacao})`);
