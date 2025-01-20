# Desafio-amigo-secreto
Challenge da Alura para Testar Logica de programação
# Amigo Secreto

Este projeto é uma aplicação simples de "Amigo Secreto",para treinar a lógica de programação com principalmente Javascript, permite adicionar amigos, exibir a lista de amigos e sortear aleatoriamente um amigo secreto. É uma ótima forma de organizar a dinâmica de amigo secreto para eventos, festas ou confraternizações.

## Funcionalidades

- Adicionar nomes de amigos à lista.
- Exibir a lista atualizada de amigos.
- Sortear aleatoriamente um amigo secreto.
- Validações para entradas e resultados.

## Estrutura do Projeto

O projeto é composto por três partes principais: HTML, CSS e JavaScript.

### HTML (`index.html`)

O HTML fornece a estrutura básica da página, incluindo:

- Um campo de entrada para adicionar o nome dos amigos.
- Uma lista para exibir os amigos adicionados.
- Um botão para adicionar amigos.
- Um botão para sortear o amigo secreto.
- Um local para exibir o resultado do sorteio.

### CSS (`style.css`)

O CSS é utilizado para estilizar a página, tornando-a mais agradável visualmente. Você pode personalizar as cores, fontes e layout de acordo com sua preferência.

### JavaScript (`app.js`)

O JavaScript implementa a lógica da aplicação com as seguintes funções:

1. **`adicionarAmigo()`**: 
   - Captura o nome do amigo do campo de entrada.
   - Valida a entrada (não pode estar vazio).
   - Adiciona o nome ao array `amigos`.
   - Atualiza a lista exibida na tela.

2. **`exibirListaDeAmigos()`**: 
   - Limpa a lista existente.
   - Percorre o array `amigos` e cria um elemento `<li>` para cada amigo.
   - Adiciona os elementos à lista HTML.

3. **`sortearAmigo()`**: 
   - Verifica se há amigos disponíveis no array.
   - Gera um índice aleatório.
   - Obtém o nome do amigo sorteado e exibe o resultado.


