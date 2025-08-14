# 🎁 Amigo Secreto JS

Um projeto simples e interativo em **JavaScript**, **HTML** e **CSS** para adicionar amigos, exibir a lista e sortear aleatoriamente um participante no estilo *Amigo Secreto*.  

Este projeto foi desenvolvido para treinar **lógica de programação**, **manipulação do DOM** e **arrays** no JavaScript.

---

🔗 [Visualize o projeto no GitHub Pages](http://amigo-secreto-js.maxineathos.github.io/)

---

## 🚀 Funcionalidades

- Adicionar nomes de amigos a uma lista.
- Exibir a lista de amigos atualizada.
- Sortear aleatoriamente um amigo secreto.
- Validação para impedir sorteios com menos de 2 participantes.
- Interface simples e intuitiva.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura da página.
- **CSS3** – Estilização.
- **JavaScript (Vanilla)** – Lógica e manipulação do DOM.

---

## 📂 Estrutura de Arquivos

```bash
📁 amigo-secreto-js
│-- index.html       # Estrutura principal
│-- style.css        # Estilo da aplicação
│-- app.js           # Lógica do projeto
│-- assets/          # Imagens e ícones usados
```

---

## 📜 Como Usar

1. **Clone este repositório**
   ```bash
   git clone https://github.com/seuusuario/amigo-secreto-js.git
   ```

2. **Abra o arquivo `index.html`** no seu navegador.

3. **Digite o nome de cada amigo** no campo de entrada e clique em **"Adicionar"**.

4. Após inserir pelo menos dois nomes, clique em **"Sortear amigo"**.

---

## 💻 Exemplo de Código Principal

```javascript
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let mensagem = `O amigo sorteado é: ${amigoSorteado}`;

    document.getElementById('resultado').textContent = mensagem;
    document.getElementById('resultado').style.display = 'block';
}
```

---

## 🎯 Objetivo do Projeto

Este projeto foi criado para reforçar habilidades de lógica de programação através de:

- Estruturas de decisão (`if`, `else`).
- Estruturas de repetição (`forEach`).
- Manipulação de arrays (`push`, acesso por índice).
- Manipulação do DOM com JavaScript puro.

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo como quiser.
