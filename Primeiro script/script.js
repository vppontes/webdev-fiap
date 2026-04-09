/*
// EXERCÍCIO DE CONVERSÃO
// ENTRADA
let metros = prompt('Insira a distância em metros: ');

// PROCESSAMENTO
let centimetros = metros * 100;

// SAÍDA
alert(`A distância de ${metros} metros é igual à ${centimetros} centímetros.`);
*/

/*
// EXERCÍCIO DE IMC
// ENTRADA
let peso = Number(prompt('Insira seu peso: '));
let altura = Number(prompt('Insira sua altura: '));

// PROCESSAMENTO
let imc = Number(peso/(altura*altura))

// SAÍDA
alert(`Para a altura de ${altura.toFixed(2)}m e peso de ${peso.toFixed(2)}kg, o IMC é de ${imc.toFixed(2)}`)
*/

// PEGADINHA DE ADIÇÃO
// Number() se haver string no prompt ele retorna NaN
// parseInt() pega o número inteiro e desconsidera o resto
// parseFloat() pega o número completo

// ENTRADA
let num1 = parseFloat(prompt('Insira um número: '));
let num2 = parseFloat(prompt('Insira outro número: '));
let operacao = prompt('Qual operação você quer fazer? (+,-,/,*)');

let resultado;

console.log(typeof num1)
console.log(typeof num2)
console.log(typeof operacao)

// VALIDAÇÃO
let validacao;

num1 === null || num2 === null || operacao === null ? validacao = False : validacao = True;

num1 === '' || num2 === '' || operacao === '' ? validacao = False : validacao = True;

isNaN(num1) || isNaN(num2) ? validacao = False : validacao = True;

// PROCESSAMENTO
if (validacao !== False) {
    if (operacao === '+') {
        let resultado = (num1 + num2)

        // SAÍDA
        alert(`A soma de ${num1} e ${num2} é igual à ${resultado.toFixed(2)}`);
    }
    else if (operacao === '-') {
        let resultado = (num1 - num2)

        // SAÍDA
        alert(`A subtração de ${num1} e ${num2} é igual à ${resultado.toFixed(2)}`);
    }
    else if (operacao === '/') {
        if (num2 !== 0) {
            let resultado = (num1 / num2)
            // SAÍDA
            alert(`A divisão de ${num1} e ${num2} é igual à ${resultado.toFixed(2)}`);
        }
        else {
            alert('Não pode dividir por 0 !')
        }
    }
    else if (operacao === '*') {
        let resultado = (num1 * num2)

        // SAÍDA
        alert(`A multiplicação de ${num1} e ${num2} é igual à ${resultado.toFixed(2)}`);
    }
    else {
        alert('Não vai rolar !')
    }
}
else {
    alert('Vai dar não !')
}