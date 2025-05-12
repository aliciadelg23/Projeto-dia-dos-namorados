// Conteúdo das surpresas diárias
const dailyContent = [
    { title: "Nosso Primeiro Encontro", text: "Lembra quando nos conhecemos? Foi o dia mais especial da minha vida!", image: "https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=Dia+1" },
    { title: "Primeiro Beijo", text: "Aquele momento mágico que mudou tudo entre nós...", image: "https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=Dia+2" },
    { title: "Nossa Música", text: "Sempre que ouço nossa música, meu coração acelera pensando em você!", image: "https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=Dia+3" },
    { title: "Viagem dos Sonhos", text: "Mal posso esperar para viajarmos juntos novamente!", image: "https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=Dia+4" },
    { title: "Momento Engraçado", text: "Ainda rio lembrando daquela vez que...", image: "https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=Dia+5" }
];

// Criar cards diários
function createDailyCards() {
    console.log('Criando cards...');
    const container = document.getElementById('dailyCards');
    
    if (!container) {
        console.error('Container dailyCards não encontrado!');
        return;
    }
    
    // Limpar container
    container.innerHTML = '';
    
    // Usar a data do config se existir
    const startDate = new Date(window.coupleConfig?.startDate || '2024-01-01');
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardDate = new Date(startDate);
        cardDate.setDate(cardDate.getDate() + i - 1);
        
        if (cardDate <= today) {
            card.classList.add('unlocked');
            card.onclick = () => openCard(i);
        } else {
            card.classList.add('locked');
        }
        
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = `Dia ${i}`;
        card.appendChild(dayNumber);
        
        container.appendChild(card);
    }
    
    console.log('Cards criados com sucesso!');
}

// Abrir card
function openCard(day) {
    const content = dailyContent[(day - 1) % dailyContent.length];
    document.getElementById('modalTitle').textContent = `Dia ${day}: ${content.title}`;
    document.getElementById('modalText').textContent = content.text;
    document.getElementById('modalImage').src = content.image;
    document.getElementById('modal').style.display = 'flex';
}

// Fechar modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Tornar funções globais
window.createDailyCards = createDailyCards;
window.openCard = openCard;
window.closeModal = closeModal;