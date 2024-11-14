let jogoasAlugados = 0;

function contarEExibirjogosAlugados() {
    console.log('Total de jogos alugados: ' + jogoasAlugados)
}


function alterarStatus(id) {
    let gameClicado = document.getElementById('game-'+id);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Adiciona uma confirmação antes de devolver o jogo
        if (confirm('Voce tem certeza que deseja devolver o jogo ' + nomeJogo.textContent + '?' ))
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogoasAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        jogoasAlugados++;
    }

    contarEExibirjogosAlugados();
}
// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
        jogoasAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
        contarEExibirjogosAlugados();
    }
)