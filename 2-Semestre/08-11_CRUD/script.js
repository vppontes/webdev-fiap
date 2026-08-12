// =============================================================
// AULA: Consumindo API + filter/map no DOM
// API usada: https://fakestoreapi.com  (não precisa de token)
// =============================================================

const URL_PRODUTOS = "https://fakestoreapi.com/products";
let todosProdutos = [];

const buscarProdutos = async () => {
    const resposta = await fetch(URL_PRODUTOS);
    // console.log(resposta);
    const dados = await resposta.json();
    // console.log(dados);
    todosProdutos = dados;
    // renderCard(todosProdutos)
    console.log(todosProdutos[19]);
}

const renderCard = listaProdutos => {
    const grid = document.querySelector("#grid-categoria");
    grid.innerHTML = "";

    listaProdutos.forEach(produto => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
        <img src="${produto.image}" alt="${produto.title}" />
        <h3>${produto.title}</h3>
        <p class="preco">$${produto.price.toFixed(2)}</p>
        <p class="avaliacao">⭐ ${produto.rating.rate} (${produto.rating.count} avaliações)</p>`
        grid.append(card);
    });
};

// -------------------------------------------------------------
// Disparo inicial — não mexer, só chama a função de fetch.
// -------------------------------------------------------------
buscarProdutos();