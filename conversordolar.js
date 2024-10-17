var readlineSync = require('readline-sync');

// Função para obter e converter valores
function obterValor(mensagem) {
    return parseFloat(readlineSync.question(mensagem));
}

// Obtendo os valores de câmbio
var valorReal = obterValor('Insira o valor atual do real em relação ao dólar: ');
var valorDolar = obterValor('Insira o valor atual do dólar em relação ao real: ');

// Obtendo os valores a serem convertidos
var valorRealProposto = obterValor('Insira o valor em real que você quer converter para dólar: ');
var valorDolarProposto = obterValor('Insira o valor em dólar que você quer converter para real: ');

// Calculando os valores finais
var valorDolarFinal = valorRealProposto / valorReal;
var valorRealFinal = valorDolarProposto * valorDolar;

// Formatando os resultados
console.log(`O seu valor convertido de real para dólar é: ${valorDolarFinal.toFixed(2)}`);
console.log(`O seu valor convertido de dólar para real é: ${valorRealFinal.toFixed(2)}`);
