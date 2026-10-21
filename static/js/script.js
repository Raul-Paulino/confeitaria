document.addEventListener('DOMContentLoaded', () => {
    let contadorCarrinho = 0;

    // 1. Contador no Carrinho ao clicar em adicionar/detalhes
    const botoesDetalhes = document.querySelectorAll('.btn-detalhes');
    botoesDetalhes.forEach((botao) => {
        botao.addEventListener('click', (e) => {
            const card = e.target.closest('.produto-card');
            const nomeProduto = card ? card.querySelector('h3').innerText : 'Produto';
            
            contadorCarrinho++;
            alert(`🧁 ${nomeProduto} adicionado ao carrinho!\nTotal de itens no carrinho: ${contadorCarrinho}`);
        });
    });

    // 2. Ação no botão de pesquisa (lupa)
    const iconeLupa = document.querySelector('img[alt="Pesquisar"]');
    if (iconeLupa) {
        iconeLupa.addEventListener('click', () => {
            const busca = prompt('O que você está procurando hoje? (ex: Pudim, Rocambole, Torta)');
            if (busca) {
                alert(`Buscando por: "${busca}"...`);
            }
        });
    }

    // 3. Processamento do Formulário de Encomenda (Página encomenda.html)
    const formEncomenda = document.getElementById('form-encomenda');
    if (formEncomenda) {
        formEncomenda.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const produtos = document.getElementById('produtos').value;
            alert(`Obrigado, ${nome}! Seu pedido de "${produtos}" foi recebido com sucesso!\nEntraremos em contato via WhatsApp em breve.`);
        });
    }
});