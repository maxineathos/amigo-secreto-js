//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    // Adiciona o amigo à lista
    // Verifica se o campo de entrada está vazio
    if (document.getElementById('amigo').value === '') {
        alert('Por favor, insira o nome do amigo.');
    }
    else {
    amigos.push(document.getElementById('amigo').value);
    atualizarLista()
    }
    document.getElementById('amigo').value = '';
}

function atualizarLista() {
    // Atualiza a lista de amigos na interface
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista atual

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    })
}

function sortearAmigo() {
    // Verifica se a lista de amigos está vazia
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    // Sorteia um amigo aleatório da lista e exibe o resultado na tela
    else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        let mensagem = `O amigo sorteado é: ${amigoSorteado}`;

        document.getElementById('resultado').textContent = mensagem;
        document.getElementById('resultado').style.display = 'block';
    }
}
