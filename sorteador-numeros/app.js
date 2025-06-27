let numerosSorteados = document.getElementById("resultado");
let btnReiniciar = document.getElementById("btn-reiniciar");

function sortear() {
    let quantidadeNumeros = parseInt(document.getElementById("quantidade").value);
    let numeroInicial = parseInt(document.getElementById("de").value);
    let numeroFinal = parseInt(document.getElementById("ate").value);
    
    let sorteados = [];
    let numero;

    if(numeroFinal <= numeroInicial) {
        alert("O número final é invalido!");
        return;
    }

    if (1 + numeroFinal - numeroInicial < quantidadeNumeros) {
        alert("Quantidade de números invalida!");
        return;
    }

    for (i = 1; i <= quantidadeNumeros; i++) {
        numero = gerarNumeroAleatorio(numeroInicial, numeroFinal);
        while (sorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(numeroInicial, numeroFinal);
        }       
        sorteados.push(numero);        
    }
    numerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    btnReiniciar.classList.replace("container__botao-desabilitado", "container__botao");;
}

function gerarNumeroAleatorio(min, max) {    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    numerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    btnReiniciar.classList.replace("container__botao", "container__botao-desabilitado");
}