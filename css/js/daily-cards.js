// Conteúdo diário
const dailyContent = [
    { 
        title: "Nosso Primeiro Encontro", 
        text: "Lembra quando nos conhecemos? Foi o dia mais especial!", 
        image: "memory1.jpg" 
    },
    { 
        title: "Primeiro Beijo", 
        text: "Aquele momento mágico que mudou tudo...", 
        image: "memory2.jpg" 
    },
    // ... adicionar 30 dias
];

// Criar cards de 30 dias
function createDailyCards() {
    const container = document.getElementById('dailyCards');
    const today = new Date();
    const programStart = new Date(coupleConfig.startDate);
    
    for (let i = 1; i <= 30; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardDate = new Date(programStart);
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
}

// Abrir card
function openCard(day) {
    const content = dailyContent[(day - 1) % dailyContent.length];
    document.getElementById('modalTitle').textContent = `Dia ${day}: ${content.title}`;
    document.getElementById('modalText').textContent = content.text;
    document.getElementById('modalImage').src = `${coupleConfig.photos.folder}${content.image}`;
    document.getElementById('modal').style.display = 'flex';
}// Conteúdo diário
const dailyContent = [
    { 
        title: "Nosso Primeiro Encontro", 
        text: "Lembra quando nos conhecemos? Foi o dia mais especial!", 
        image: "memory1.jpg" 
    },
    { 
        title: "Primeiro Beijo", 
        text: "Aquele momento mágico que mudou tudo...", 
        image: "memory2.jpg" 
    },
    // ... adicionar 30 dias
];

// Criar cards de 30 dias
function createDailyCards() {
    const container = document.getElementById('dailyCards');
    const today = new Date();
    const programStart = new Date(coupleConfig.startDate);
    
    for (let i = 1; i <= 30; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardDate = new Date(programStart);
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
}

// Abrir card
function openCard(day) {
    const content = dailyContent[(day - 1) % dailyContent.length];
    document.getElementById('modalTitle').textContent = `Dia ${day}: ${content.title}`;
    document.getElementById('modalText').textContent = content.text;
    document.getElementById('modalImage').src = `${coupleConfig.photos.folder}${content.image}`;
    document.getElementById('modal').style.display = 'flex';
}