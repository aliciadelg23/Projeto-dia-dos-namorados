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
    
    // Criar cards
    createDailyCards();
    
    // Inicializar componentes
    initializeQuiz();
    initializeDateGenerator();
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