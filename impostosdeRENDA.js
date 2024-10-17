var readlineSync = require('readline-sync');

// Função para calcular o salário com imposto
function calcularSalarioComImposto(salario) {
    let imposto;
    
    if (salario <= 2259) {
        console.log(`Seu salário é ${salario.toFixed(2)} e está isento de imposto de renda.`);
        return salario;
    } else if (salario <= 2826) {
        imposto = salario * 0.075;
    } else if (salario <= 3751) {
        imposto = salario * 0.15;
    } else if (salario <= 4664) {
        imposto = salario * 0.225;
    } else {
        imposto = salario * 0.275;
    }

    return salario - imposto;
}

// Solicita o salário
var salario = parseFloat(readlineSync.question('Insira seu salário: '));

// Calcula o salário final após imposto
var salariocomImposto = calcularSalarioComImposto(salario);

// Exibe o resultado
console.log(`Seu salário após imposto é: ${salariocomImposto.toFixed(2)}`);
