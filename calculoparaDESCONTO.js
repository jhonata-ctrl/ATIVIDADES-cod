var readlineSync = require('readline-sync');

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

// Solicita o valor do produto e o percentual de desconto
var preco = obterNumero('Insira o valor do produto que deseja: ');
var percentualDesconto = obterNumero('Insira o percentual do desconto: ');

// Calcula o preço final
var desconto = percentualDesconto / 100;
var precoFinal = preco * (1 - desconto); // Corrigido para calcular o preço com desconto

// Formata o preço final com duas casas decimais
var precoFinalFormatado = precoFinal.toFixed(2);
console.log(`O preço final do seu produto com desconto é: R$ ${precoFinalFormatado}`);
