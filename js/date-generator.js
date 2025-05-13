// Ideias de dates organizadas por categoria
const dateIdeas = {
    romantic: [
        "🌅 Assistir ao nascer do sol juntos na praia",
        "🕯️ Jantar à luz de velas preparado por vocês",
        "⭐ Observar estrelas em um lugar afastado da cidade",
        "🌹 Piquenique ao pôr do sol com vinho e queijos",
        "💑 Massagem relaxante em casa com óleos aromáticos"
    ],
    adventure: [
        "🎨 Aula de pintura ou cerâmica para casais",
        "🚴‍♀️ Passeio de bicicleta por trilhas românticas",
        "🎪 Visitar um parque de diversões juntos",
        "🏖️ Day trip para uma praia próxima",
        "🧗‍♀️ Escalada indoor ou rapel"
    ],
    home: [
        "🍳 Preparar um café da manhã especial em casa",
        "🎬 Maratona de filmes românticos com pipoca",
        "🎮 Noite de jogos com prêmios românticos",
        "🧁 Fazer cupcakes decorados juntos",
        "📚 Ler um livro juntos, um para o outro"
    ],
    cultural: [
        "🎭 Assistir uma peça de teatro ou musical",
        "🖼️ Visitar museu ou exposição de arte",
        "🎪 Show de comédia stand-up",
        "🎵 Show de música ao vivo",
        "📸 Tour fotográfico pela cidade"
    ],
    special: [
        "🍷 Degustação de vinhos em uma vinícola local",
        "🧖‍♀️ Dia no spa com tratamentos para casais",
        "🎈 Passeio de balão ao nascer do sol",
        "🚁 Tour de helicóptero pela cidade",
        "🛥️ Passeio de barco com jantar"
    ]
};

// Array simples com todas as ideias
const allDateIdeas = Object.values(dateIdeas).flat();

// Função para mostrar o gerador de dates
function showDateGenerator() {
    const container = document.getElementById('dateGenerator');
    container.style.display = 'block';
    document.getElementById('quizContainer').style.display = 'none';
    
    // Inicializar o conteúdo
    initializeDateGenerator();
    
    // Scroll suave até o gerador
    setTimeout(() => {
        container.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

// Gerar date aleatório
function generateDate() {
    const randomIndex = Math.floor(Math.random() * allDateIdeas.length);
    const suggestion = allDateIdeas[randomIndex];
    
    const suggestionElement = document.getElementById('dateSuggestion');
    
    // Adicionar animação de fade
    suggestionElement.style.opacity = '0';
    
    setTimeout(() => {
        suggestionElement.textContent = suggestion;
        suggestionElement.style.opacity = '1';
    }, 300);
}

// Gerar date por categoria
function generateDateByCategory(category) {
    const categoryIdeas = dateIdeas[category];
    const randomIndex = Math.floor(Math.random() * categoryIdeas.length);
    const suggestion = categoryIdeas[randomIndex];
    
    document.getElementById('dateSuggestion').textContent = suggestion;
}

// Inicializar gerador de dates
function initializeDateGenerator() {
    const generatorContainer = document.getElementById('dateGenerator');
    if (!generatorContainer) return;
    
    generatorContainer.innerHTML = `
        <h3>Gerador de Dates</h3>
        <p>Clique para descobrir seu próximo date perfeito!</p>
        <button class="feature-btn" onclick="generateDate()">🎲 Gerar Date Aleatório</button>
        <div class="date-suggestion" id="dateSuggestion"></div>
        
        <div class="category-buttons" style="margin-top: 20px;">
            <p style="font-size: 0.9em; margin-bottom: 10px;">Ou escolha por categoria:</p>
            <button class="category-btn" onclick="generateDateByCategory('romantic')">❤️ Romântico</button>
            <button class="category-btn" onclick="generateDateByCategory('adventure')">🎯 Aventura</button>
            <button class="category-btn" onclick="generateDateByCategory('home')">🏠 Em Casa</button>
            <button class="category-btn" onclick="generateDateByCategory('cultural')">🎭 Cultural</button>
            <button class="category-btn" onclick="generateDateByCategory('special')">✨ Especial</button>
        </div>
    `;
}

// Adicionar estilos para os botões de categoria
const style = document.createElement('style');
style.textContent = `
    .category-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }
    
    .category-btn {
        padding: 8px 15px;
        background: rgba(255, 182, 193, 0.3);
        border: 2px solid #FFB6C1;
        border-radius: 20px;
        color: #8B0020;
        font-size: 0.9em;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .category-btn:hover {
        background: #FFB6C1;
        transform: scale(1.05);
    }
    
    .date-suggestion {
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);

// Tornar funções globais
window.showDateGenerator = showDateGenerator;
window.generateDate = generateDate;
window.generateDateByCategory = generateDateByCategory;