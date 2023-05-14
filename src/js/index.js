//PASSO 1 - Pegar no JS o elemento HTML correspondente ao botão troca de tema.
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//PASSO 2 - Dar um jeito de pega no JS o elemento HTML, correspondente ao body
const body = document.querySelector("body");
const imagemBotaoTrocaTema = document.querySelector(".tema-claro");

//PASSO 3 - Dar um jeito de identificar o clique do usuário no botão da troca de tenma
botaoAlterarTema.addEventListener("click", () => {
    //PASSO 4 - Verificar se a classe já tem o modo-escuro e remover a classe do body.
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    if (modoEscuroEstaAtivo) {
        //PASSO 5 - Trocar a imagem do botão de alterar tema para sol.
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png");
    }
    else {
        //PASSO 7 - Trocar a imagem do botão de alterar tema pra lua.
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
