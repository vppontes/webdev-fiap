// function saudacao(nome = 'Pessoa', periodo = 'dia') {
//     alert(`Olá ${nome}, seja bem-vindo(a) ao curso de JavaScript! Tenha um ótimo ${periodo}!`)
// }

// const fraseSaudacao = saudacao(undefined, 'noite')

// alert(fraseSaudacao)

function numeroMaior(numero1 , numero2) {
    let primeiroNumero = Number(numero1)
    let segundoNumero = Number(numero2)

    if (primeiroNumero != null && segundoNumero != null) {
        if (primeiroNumero > segundoNumero) {
            return `${primeiroNumero} é maior que o ${segundoNumero} !`
        }
        else if (segundoNumero > primeiroNumero) {
            return `${segundoNumero} é maior que o ${primeiroNumero} !`
        }
        else {
            return `Os números são iguais (${primeiroNumero}, ${segundoNumero}) !`
        }
    }
}
alert(numeroMaior(5, 2))

function limparEFormatarTexto(texto) {
    let textoLimpoEFormatado = texto.trim().toUpperCase()
    return textoLimpoEFormatado
}
alert(limparEFormatarTexto('   Olá, seja bem-vindo(a) ao curso de JavaScript!   '))

function sorte(numero) {
    let escolha = Number(numero)

    if (escolha >= 1 && escolha <= 10) {
        numeroSorteado = Math.floor(Math.random() * 10) + 1

        if (escolha === numeroSorteado) {
            alert(`Parabéns! Você acertou o número sorteado (${numeroSorteado})!`)
        }
        else {
            alert(`Que pena! O número sorteado foi ${numeroSorteado}. Tente novamente!`)
        }
    }
    else {
        alert('Número inválido! Por favor, escolha um número entre 1 e 10.')
    }
}
let numeroEscolhido = prompt('Escolha um número entre 1 e 10 para tentar a sorte:')
sorte(numeroEscolhido)