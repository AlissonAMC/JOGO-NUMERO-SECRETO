let listaNumerosAleatorios = []; // Cria uma lista para armazenar os números aleatórios gerados

// Variáveis globais
let tentativas = 0; // Conta o número de tentativas
let numeroSecreto = NumeroAleatorio(); // Gera um número secreto aleatório

// Função para exibir texto em um elemento HTML
function ExibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona o elemento pelo tag
    campo.innerHTML = texto; // Define o conteúdo do elemento
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 2.1; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

// Função para exibir o texto inicial do jogo
function exibirTextoInicial() {
    ExibirTextoNaTela("h1", ""); // Exibe o título
    ExibirTextoNaTela("p", "Tente adivinhar o número secreto entre 1 e 50"); // Exibe a descrição
}

// Chama a função para exibir o texto inicial
exibirTextoInicial();

// Função para verificar o chute do usuário
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value); // Pega o valor do input e converte para inteiro
    if (chute == numeroSecreto) { // Se o chute for igual ao número secreto
        tentativas++; // Incrementa o número de tentativas
        ExibirTextoNaTela("h1", "Você acertou!"); // Exibe mensagem de acerto
        ExibirTextoNaTela("p", `Você descobriu o número secreto! Com ${tentativas} tentativas!`); // Exibe mensagem de vitória
        document.getElementById("reiniciar").removeAttribute("disabled"); // Habilita o botão de reiniciar
    } else { // Se o chute não for igual ao número secreto
        tentativas++; // Incrementa o número de tentativas
        if (chute > numeroSecreto) { // Se o chute for maior que o número secreto
            ExibirTextoNaTela("p", "O número secreto é menor!"); // Exibe mensagem
        } else { // Se o chute for menor que o número secreto
            ExibirTextoNaTela("p", "O número secreto é maior!"); // Exibe mensagem
        }
        document.getElementById("reiniciar").setAttribute("disabled", true); // Desabilita o botão de reiniciar
    }
}

// Função para limpar o campo de entrada
function LimparCampo() {
    document.querySelector("input").value = ""; // Limpa o valor do input
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    exibirTextoInicial(); // Exibe o texto inicial
    numeroSecreto = NumeroAleatorio(); // Gera um novo número secreto
    LimparCampo(); // Limpa o campo de entrada
    tentativas = 0; // Reinicia o contador de tentativas
    document.getElementById("reiniciar").setAttribute("disabled", true); // Desabilita o botão de reiniciar
}

// Função para gerar um número aleatório entre 1 e 10
function NumeroAleatorio() {
    let GerarNumeroAleatorio = parseInt(Math.random() * 50 + 1); // Gera um número inteiro aleatório
    while (listaNumerosAleatorios.includes(GerarNumeroAleatorio)) { // Verifica se o número já foi gerado
        GerarNumeroAleatorio = parseInt(Math.random() * 50 + 1); // Gera outro número se já estiver na lista
    }
    listaNumerosAleatorios.push(GerarNumeroAleatorio); // Adiciona o número à lista de números aleatórios
    console.log(listaNumerosAleatorios); // Exibe a lista de números gerados no console
    return GerarNumeroAleatorio; // Retorna o número gerado
}
