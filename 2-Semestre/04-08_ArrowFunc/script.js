const palavras = ['Senhor', 'Decidi', 'Largar', 'Conforto'];

const palavras2 = palavras.map(function (palavraAtual, posicao) {
    return `A palavra ${palavraAtual} é o ${posicao+1}º`
});
// OU
const palavras3 = palavras.map((palavraAtual, posicao) => `A palavra ${palavraAtual} é a ${posicao+1}ª`);

console.log(palavras2);

const modificarPalavras = (listaPalavras) => listaPalavras.map(palavraAtual => palavraAtual.toUpperCase());
// OU
function modificarPalavras2(listaPalavras) {
    listaPalavras.map(function (palavraAtual) {
        return palavraAtual.toUpperCase();
    })
}

// Função normal
function somar(a, b) {
    return a + b
};

// Arrow function
const somar2 = (a, b) => {
    return a + b
};
// OU
const somar3 = (a, b) => a + b;
// OU
const apresentar = palavra => console.log(palavra);

// Treinando map
const precos = [29.9, 150, 45.5, 8, 320, 99.99]

function desconto(listaPrecos) {
    listaPrecos.map(function (precoAtual) {
        return precoAtual * 0.9
    })
}
// OU
const desconto2 = listaPrecos => listaPrecos.map(precoAtual => precoAtual * 0.9);
// OU
const desconto3 = (listaPrecos, valorDesconto) => listaPrecos.map(precoAtual => precoAtual * valorDesconto);

// Filter
const precosCaros = precos.filter(precoAtual => precoAtual > 99);
console.log(precosCaros);

const filmes = [
    {
        titulo: 'Odisseia',
        lancamento: 2026,
        diretor: 'Christopher Nollan',
        atores: ['Zendaya', 'Anne Hathaway', 'Tom Holland']
    },
    {
        titulo: 'Miranha',
        lancamento: 2026,
        diretor: 'Sony',
        atores: ['Zendaya', 'Tom Holland']
    },

];

console.log(filmes[0].atores[1]);
console.log(filmes[1].diretor);

const criarCard = listaFilmes => listaFilmes.map(filmeAtual => {
    return `
        <div>
            <h1>${filmeAtual.titulo}</h1>
            <h3>${filmeAtual.lancamento}</h3>
            <p>${filmeAtual.atores.map(atorAtual => `${atorAtual} está presente.`)}</p>
        </div>
    `
}); // Exemplo de react