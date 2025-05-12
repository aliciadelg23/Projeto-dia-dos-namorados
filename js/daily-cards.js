// Conteúdo das surpresas diárias
const dailyContent = [
    {
        day: 1,
        title: "Nosso Começo",
        text: "Todo grande amor começa com um olhar. Hoje celebramos o dia em que nossos caminhos se cruzaram.",
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=200&fit=crop"
    },
    {
        day: 2,
        title: "Primeiro Sorriso",
        text: "Seu sorriso iluminou meu dia desde o primeiro momento. Ainda me faz sorrir só de lembrar.",
        image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=300&h=200&fit=crop"
    },
    {
        day: 3,
        title: "Nossas Conversas",
        text: "Horas passam como minutos quando estamos conversando. Você é minha pessoa favorita no mundo.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=200&fit=crop"
    },
    {
        day: 4,
        title: "Primeiro Encontro",
        text: "Nervoso, ansioso, feliz... Todos os sentimentos misturados naquele dia especial.",
        image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=300&h=200&fit=crop"
    },
    {
        day: 5,
        title: "Mãos Entrelaçadas",
        text: "A primeira vez que segurei sua mão, soube que nunca mais queria soltar.",
        image: "https://images.unsplash.com/photo-1518563077661-8b7a6ded1e14?w=300&h=200&fit=crop"
    },
    {
        day: 6,
        title: "Nosso Filme",
        text: "Cinema, pipoca e você ao meu lado. A combinação perfeita para uma noite inesquecível.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=200&fit=crop"
    },
    {
        day: 7,
        title: "Risadas Juntos",
        text: "Seu senso de humor me conquista todos os dias. Obrigado por tornar a vida mais leve.",
        image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=300&h=200&fit=crop"
    },
    {
        day: 8,
        title: "Passeio no Parque",
        text: "Caminhadas de mãos dadas, conversas sob as árvores... Momentos simples que valem ouro.",
        image: "https://images.unsplash.com/photo-1516967124798-10656f7dca28?w=300&h=200&fit=crop"
    },
    {
        day: 9,
        title: "Café da Manhã Especial",
        text: "Acordar ao seu lado e preparar nosso café juntos. Assim começa um dia perfeito.",
        image: "https://images.unsplash.com/photo-1506784881475-0e408bbca849?w=300&h=200&fit=crop"
    },
    {
        day: 10,
        title: "Pôr do Sol",
        text: "Cada pôr do sol fica mais bonito quando compartilhado com você.",
        image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=300&h=200&fit=crop"
    },
    {
        day: 11,
        title: "Nossa Música",
        text: "Quando toca nossa música, o mundo para e só existimos nós dois.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop"
    },
    {
        day: 12,
        title: "Abraço Apertado",
        text: "Em seus braços encontro meu lugar favorito no mundo. Meu porto seguro.",
        image: "https://images.unsplash.com/photo-1528306897236-6a7c89a2296f?w=300&h=200&fit=crop"
    },
    {
        day: 13,
        title: "Cozinhando Juntos",
        text: "Receitas ganham sabor especial quando preparadas a quatro mãos e com muito amor.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop"
    },
    {
        day: 14,
        title: "Primeira Viagem",
        text: "Explorar o mundo ao seu lado torna cada destino ainda mais especial.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop"
    },
    {
        day: 15,
        title: "Noite de Estrelas",
        text: "Sob o céu estrelado, fazemos promessas e sonhamos com nosso futuro juntos.",
        image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=300&h=200&fit=crop"
    },
    {
        day: 16,
        title: "Dança a Dois",
        text: "Mesmo sem música, dancemos pela vida juntos, no ritmo do nosso amor.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop"
    },
    {
        day: 17,
        title: "Praia e Mar",
        text: "Pés na areia, som das ondas e você. Tudo que preciso para ser feliz.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=200&fit=crop"
    },
    {
        day: 18,
        title: "Piquenique Romântico",
        text: "Toalha xadrez, cesta de lanches e muito amor. Receita perfeita para um dia especial.",
        image: "https://images.unsplash.com/photo-1503772717560-7e94742e478f?w=300&h=200&fit=crop"
    },
    {
        day: 19,
        title: "Dia de Chuva",
        text: "Nem a chuva consegue apagar o brilho do nosso amor. Dias cinzas ficam coloridos com você.",
        image: "https://images.unsplash.com/photo-1518181835702-6eef8b4b2113?w=300&h=200&fit=crop"
    },
    {
        day: 20,
        title: "Nossos Planos",
        text: "Sonhar o futuro juntos é construir castelos no ar com alicerce no amor.",
        image: "https://images.unsplash.com/photo-1529635004303-c44dbe3e83e8?w=300&h=200&fit=crop"
    },
    {
        day: 21,
        title: "Surpresas do Amor",
        text: "Pequenos gestos, grandes significados. Você me surpreende todos os dias.",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&h=200&fit=crop"
    },
    {
        day: 22,
        title: "Foto Favorita",
        text: "De todas as nossas fotos, minha favorita é o sorriso que você tem quando está comigo.",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=200&fit=crop"
    },
    {
        day: 23,
        title: "Cumplicidade",
        text: "Um olhar basta para nos entendermos. Nossa conexão vai além das palavras.",
        image: "https://images.unsplash.com/photo-1516588532356-8d6b6f831834?w=300&h=200&fit=crop"
    },
    {
        day: 24,
        title: "Aventuras Juntos",
        text: "Cada dia com você é uma nova aventura. Mal posso esperar pelas próximas.",
        image: "https://images.unsplash.com/photo-1537419535277-6fa5a5317b6f?w=300&h=200&fit=crop"
    },
    {
        day: 25,
        title: "Manhãs Preguiçosas",
        text: "Domingos na cama, café na xícara e você nos meus braços. Paraíso encontrado.",
        image: "https://images.unsplash.com/photo-1489710020360-66e504159b34?w=300&h=200&fit=crop"
    },
    {
        day: 26,
        title: "Jantar a Dois",
        text: "Velas, vinho e você. A receita perfeita para uma noite romântica.",
        image: "https://images.unsplash.com/photo-1556126918-f89113963aee?w=300&h=200&fit=crop"
    },
    {
        day: 27,
        title: "Nosso Lar",
        text: "Lar é onde o coração está, e o meu está sempre com você.",
        image: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=300&h=200&fit=crop"
    },
    {
        day: 28,
        title: "Momentos Simples",
        text: "São os momentos simples do dia a dia que constroem nossa história de amor.",
        image: "https://images.unsplash.com/photo-1471723025126-a0d8fc5859de?w=300&h=200&fit=crop"
    },
    {
        day: 29,
        title: "Promessas de Amor",
        text: "Prometo te amar, respeitar e fazer sorrir todos os dias da nossa vida.",
        image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=300&h=200&fit=crop"
    },
    {
        day: 30,
        title: "Para Sempre",
        text: "30 dias são apenas o começo. Tenho uma vida inteira para te mostrar o quanto te amo.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop"
    }
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
    const content = dailyContent.find(item => item.day === day) || dailyContent[0];
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