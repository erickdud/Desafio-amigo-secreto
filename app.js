// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    if (!inputAmigo) {
        console.error("Elemento com ID 'amigo' não encontrado.");
        return;
    }

    const nome = inputAmigo.value.trim(); // Remover espaços em branco

    // Validar a entrada
    if (!nome) {
        alert("Por favor, insira um nome."); // Exibir mensagem de erro
        return; // Interromper a execução da função
    }

    // Adicionar o nome ao array de amigos
    amigos.push(nome);

    // Atualizar a lista exibida na tela
    exibirListaDeAmigos();

    // Limpar o campo de entrada
    inputAmigo.value = "";
}

// Função para exibir os amigos na lista HTML
function exibirListaDeAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    if (!listaAmigos) {
        console.error("Elemento com ID 'listaAmigos' não encontrado.");
        return;
    }

    // Limpar a lista existente
    listaAmigos.innerHTML = "";

    // Percorrer o array amigos e adicionar cada nome como <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); // Criar elemento <li>
        li.textContent = amigos[i]; // Definir o texto como o nome do amigo
        listaAmigos.appendChild(li); // Adicionar o <li> à lista HTML
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Validar se há amigos disponíveis no array
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return; // Interrompe a execução se o array estiver vazio
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    const resultado = document.getElementById("resultado");
    if (!resultado) {
        console.error("Elemento com ID 'resultado' não encontrado.");
        return;
    }

    resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}
