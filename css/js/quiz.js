// Perguntas do quiz
const quizQuestions = [
    {
        question: "Qual foi nosso primeiro filme juntos?",
        options: ["Titanic", "O Rei Leão", "Diário de uma Paixão", "La La Land"],
        correct: 2
    },
    {
        question: "Onde foi nosso primeiro beijo?",
        options: ["Na praia", "No parque", "No cinema", "Em casa"],
        correct: 1
    },
    // ... mais perguntas
];

let currentQuizQuestion = 0;

// Mostrar quiz
function showQuiz() {
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('dateGenerator').style.display = 'none';
    loadQuizQuestion();
}

// Carregar pergunta
function loadQuizQuestion() {
    if (currentQuizQuestion >= quizQuestions.length) {
        currentQuizQuestion = 0;
    }
    
    const question = quizQuestions[currentQuizQuestion];
    const container = document.getElementById('quizContainer');
    
    container.innerHTML = `
        <h3>Quiz do Nosso Amor</h3>
        <div class="quiz-question">${question.question}</div>
        <div id="quizOptions"></div>
    `;
    
    const optionsContainer = document.getElementById('quizOptions');
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

// Verificar resposta
function checkAnswer(selected) {
    const correct = quizQuestions[currentQuizQuestion].correct;
    if (selected === correct) {
        alert('Parabéns! Você acertou! 🎉');
        currentQuizQuestion++;
        if (currentQuizQuestion < quizQuestions.length) {
            loadQuizQuestion();
        } else {
            alert('Você completou o quiz! Você realmente me conhece! 💕');
            currentQuizQuestion = 0;
            document.getElementById('quizContainer').style.display = 'none';
        }
    } else {
        alert('Ops! Tente novamente! 😊');
    }
}

// Inicializar quiz
function initializeQuiz() {
    // Setup inicial se necessário
}