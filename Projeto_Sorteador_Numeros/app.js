function sortear() {
    let quantidadeNumeros = parseInt(document.getElementById("quantidade").value);
    let numeroMinimo = parseInt(document.getElementById("de").value);
    let numeroMaximo = parseInt(document.getElementById("ate").value); 

    if (numeroMinimo < numeroMaximo){
        alert("Campo 'Do número' deve ser inferior ao campo 'Até o número'. Verifique!");
        return;
    };

    if (quantidadeNumeros > (numeroMaximo - numeroMinimo + 1)) {
        alert("Campo 'Quantidade' deve ser menor ou igual ao intervalo informado no campo 'Do número' até o campo 'Até o número'. Verifique!");
        return;
    }
    
    let sorteados= [];
    let numero;

    for (let i = 0; i < quantidadeNumeros; i++) {
        numero = obterNumeroAleatorio(numeroMinimo, numeroMaximo);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(numeroMinimo, numeroMaximo);
        };

        sorteados.push(numero);
    };

    let resultado = document.getElementById("resultado");
    resultado.innerHTML ="<label class='texto__paragrafo'>Números sorteados: " + sorteados + "</label>"

    alterarStatusBotaoReiniciar();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarStatusBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }
    else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = ""; 
    document.getElementById("resultado").innerHTML = "<label class='texto__paragrafo'>Numeros sorteados: nenhum até agora</label>"
    alterarStatusBotaoReiniciar();
}