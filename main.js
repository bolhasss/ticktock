function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="flashcard" onclick="this.classList.toggle('flip')">
        <div class="cartao-pergunta question">
            <h3>${categoria}</h3>
            <p>${pergunta}</p>
        </div>
        <div class="cartao-resposta answer">
            <p>${resposta}</p>
        </div>
    </div>
    `;
    
    container.appendChild(cartao);
}

// Chamada das funções para criar os cartões
criaCartao('Filosofia', 'Quem criou o marxismo', 'Karl Marx');
criaCartao('História', 'Quem descobriu o Brasil', 'Pedro Álvares Cabral');
criaCartao('Arte', 'Quem criou a escultura de David na igreja da Itália', 'Michelangelo');
criaCartao('Matemática', 'Qual a fórmula da razão', 'Numerador/Denominador');
criaCartao('Arte', 'Quem criou a Mona Lisa', 'Leonardo Da Vinci');
criaCartao('História', 'Aonde começou o fascismo', 'Itália');
criaCartao('História', 'Qual era o pilar principal para a ideologia do nazismo', 'Antissemitismo (ódio de judeus)');
criaCartao('Biologia', 'O que estuda as células', 'Citologia');
criaCartao('Arte', 'Por que Van Gogh cortou sua própria orelha', 'Briga em bar enquanto estava muito bravo');
criaCartao('Filosofia', 'O que é ética', 'Princípios que orientam o comportamento humano, determinando o que é certo e errado');
criaCartao('História', 'Quando começou e terminou a Segunda Guerra Mundial', '1939-1945');
criaCartao('Filosofia', 'O que foi o período socrático', 'Estudo da ética, política e conhecimento');
criaCartao('Arte', 'Qual artista criou o primeiro rascunho de um helicóptero', 'Leonardo Da Vinci');
criaCartao('Filosofia', 'Qual conceito Aristóteles é conhecido por', 'Que a felicidade é o fim da vida humana, alcançada pela virtude');
criaCartao('História', 'Quantos anos demorou a Primeira Guerra Mundial', '4 anos, de 1914-1918');
criaCartao('História', 'Antes da Revolução Russa, ela era conhecida por ser um país', 'Agrário, feudal, dominada pelo clero e por imperadores');
criaCartao('Arte', 'Quem pintou “The Last Supper”', 'Leonardo Da Vinci');
criaCartao('Biologia', 'Quantos cromossomos tem uma pessoa', '46');
criaCartao('Física', 'Qual a medida de comprimento em S.I.', 'Centímetro');
criaCartao('Biologia', 'Quantos cromossomos tem uma pessoa com síndrome de down', '47');
