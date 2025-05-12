// Configurações do casal
const coupleConfig = {
    names: "João & Maria",
    startDate: "2024-01-01",
    photos: {
        folder: "assets/images/",
        extension: ".jpg"
    }
};

// Calcular dias juntos
function calculateDays() {
    const startDate = new Date(coupleConfig.startDate);
    const today = new Date();
    const daysResult = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('daysCounter').textContent = daysResult;
}

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
    // Setar nomes do casal
    document.getElementById('coupleNames').textContent = coupleConfig.names;
    
    // Calcular dias
    calculateDays();
    
    // Criar cards diários
    createDailyCards();
    
    // Inicializar componentes
    if (typeof initializeQuiz === 'function') {
        initializeQuiz();
    }
    if (typeof initializeDateGenerator === 'function') {
        initializeDateGenerator();
    }
});

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Funções de modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Funções globais que serão chamadas pelos botões
function showQuiz() {
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('dateGenerator').style.display = 'none';
    loadQuizQuestion();
}

function showDateGenerator() {
    document.getElementById('dateGenerator').style.display = 'block';
    document.getElementById('quizContainer').style.display = 'none';
}

function showMemories() {
    alert('Em breve: Galeria de fotos especiais! 📸');
}