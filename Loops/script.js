let i =  0

while (i < 10) {
    console.log(i)
    i += 2
}

const num = Number(prompt('Insira um número inteiro positivo:'))

function contagemRegressiva(numero) {
    if (isNaN(numero)) {
        alert('Isso não é um numero !')
    }
    else if (numero <= 0) {
        alert('O número deve ser maior que 0 (zero) !')
    }
    else if (numero !== Math.floor(numero)) {
        alert('O número deve ser inteiro !')
    }
    else {  
        while (numero !== 0) {
            console.log(numero)
            numero--
        }
    }
}

contagemRegressiva(num)

// Do while exercício
let nome
let idade
let salario
let genero
let estadoCivil

do {
    nome = prompt('Digite seu nome:')

    if (nome.length < 3) {
        alert('Digite um nome de verdade !')
    }
}
while (nome.length < 3 || !nome)

do {
    idade = Number(prompt('Digite sua idade:'))
 
    if (idade <= 0 || idade >= 150 || isNaN(idade) || idade !== Math.floor(idade)) {
        alert('Insira uma idade válida !')
    }
    console.log(idade)
}
while (idade <= 0 || idade >= 150 || idade !== Math.floor(idade) || isNaN(idade))

do {
    salario = parseFloat(prompt('Digite seu salário:'))

    if (salario <= 0 || isNaN(salario)) {
        alert('Insira um salário válido !')
    }
    console.log(salario)
}
while (salario <= 0 || isNaN(salario))

do {
    genero = prompt('Digite seu gênero (H ou M):').toLowerCase()

    if (genero !== 'm' || genero !== 'h') {
        alert('Insira um gênero válido (H ou M) !')
    }
}
while (genero !== 'm' && genero !== 'h')

do {
    estadoCivil = prompt('Digite seu estado civil (S, C, V ou D):').toLowerCase()

    if (estadoCivil !== 's' || estadoCivil !== 'c' || estadoCivil !== 'v' || estadoCivil !== 'd') {
        alert('Digite um estado civil válido (S, C, V ou D) !')
    }
    console.log(estadoCivil, typeof estadoCivil)
} while (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd');

// Clássico da tabuada em JS
let numeroEscolha = Number(prompt('Insira um número para a tabuada:'))

function tabuada(numero) {
    if (numero && numero === Math.floor(numero) && !isNaN(numero)) {
        console.log(`A tabuada do número ${numero} é:`)

        for (let i = 1; i <= 10; i ++) {
            console.log(`${numero} x ${i} = ${numero*i}`)
        }
    }
    else {
        alert('Insira um número inteiro válido !')
    }
}

tabuada(numeroEscolha)