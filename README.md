# Jogo do Número Secreto

Este é um jogo simples onde o usuário tenta adivinhar um número secreto entre 1 e 50.

## Funcionalidades

- Gera um número aleatório secreto entre 1 e 50.
- Exibe mensagens de dica para ajudar o usuário a adivinhar o número.
- Utiliza a Web Speech API para narrar as mensagens exibidas.
- Conta o número de tentativas do usuário.
- Permite reiniciar o jogo após a adivinhação correta.

## Como Jogar

1. Abra o jogo em seu navegador.
2. Leia o texto inicial que será exibido na tela.
3. Insira um número entre 1 e 50 no campo de entrada e pressione "Enter".
4. O jogo fornecerá dicas se o número inserido for maior ou menor que o número secreto.
5. Continue tentando até adivinhar o número secreto.
6. O jogo exibirá uma mensagem de vitória com o número de tentativas e permitirá reiniciar o jogo.

## Estrutura do Código

- `listaNumerosAleatorios`: Lista para armazenar os números aleatórios gerados.
- `tentativas`: Contador de tentativas do usuário.
- `numeroSecreto`: Número secreto gerado aleatoriamente.

### Funções Principais

- `ExibirTextoNaTela(tag, texto)`: Exibe texto no elemento HTML especificado e usa a Web Speech API para narrar o texto.
- `exibirTextoInicial()`: Exibe o texto inicial do jogo.
- `verificarChute()`: Verifica o chute do usuário e exibe mensagens de dica ou vitória.
- `LimparCampo()`: Limpa o campo de entrada.
- `reiniciarJogo()`: Reinicia o jogo e gera um novo número secreto.
- `NumeroAleatorio()`: Gera um número aleatório entre 1 e 50 que não tenha sido gerado anteriormente.

## Tecnologias Utilizadas

- HTML
- JavaScript
- Web Speech API

## Como Executar

1. Clone este repositório.
2. Abra o arquivo `index.html` em seu navegador.

Divirta-se jogando e tentando adivinhar o número secreto! 🎉

