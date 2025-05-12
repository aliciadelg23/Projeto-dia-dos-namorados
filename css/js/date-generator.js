// Ideias de dates
const dateIdeas = [
    "🌅 Assistir ao nascer do sol juntos na praia",
    "🍳 Preparar um café da manhã especial em casa",
    "🎬 Maratona de filmes românticos com pipoca",
    "🌳 Piquenique no parque com suas comidas favoritas",
    "🎨 Aula de pintura ou cerâmica para casais",
    "🍷 Degustação de vinhos em uma vinícola local",
    "🎮 Noite de jogos com prêmios românticos",
    "📸 Ensaio fotográfico em lugares especiais",
    "🕯️ Jantar à luz de velas preparado por vocês",
    "⭐ Observar estrelas em um lugar afastado da cidade",
    "🎪 Visitar um parque de diversões juntos",
    "🏖️ Day trip para uma praia próxima",
    "🎭 Assistir uma peça de teatro ou musical",
    "🚴‍♀️ Passeio de bicicleta por trilhas românticas",
    "🧁 Fazer cupcakes decorados juntos"
];

// Mostrar gerador de dates
function showDateGenerator() {
    document.getElementById('dateGenerator').style.display = 'block';
    document.getElementById('quizContainer').style.display = 'none';
}

// Gerar date aleatório
function generateDate() {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const suggestion = dateIdeas[randomIndex];
    document.getElementById('dateSuggestion').textContent = suggestion;
}

// Mostrar memórias
function showMemories() {
    alert('Em breve: Galeria de fotos especiais! 📸');
}

// Inicializar gerador
function initializeDateGenerator() {
    document.getElementById('dateGenerator').innerHTML = `
        <h3>Gerador de Dates</h3>
        <p>Clique para descobrir seu próximo date perfeito!</p>
        <button class="feature-btn" onclick="generateDate()">🎲 Gerar Date</button>
        <div class="date-suggestion" id="dateSuggestion"></div>
    `;
}