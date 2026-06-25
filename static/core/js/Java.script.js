
const questions = [
    {
        question: "Qual é o maior animal do mundo?",
        answers: [
            { id: 1, text: "Tubarão", correct: false },
            { id: 2, text: "Baleia Azul", correct: true },
            { id: 3, text: "Elefante", correct: false },
            { id: 4, text: "Girafa", correct: false }
        ]
    },
    {
        question: "Qual é o maior deserto do mundo?",
        answers: [
            { id: 1, text: "Saara", correct: true },
            { id: 2, text: "Kalahari", correct: false },
            { id: 3, text: "Gobi", correct: false },
            { id: 4, text: "Antártida", correct: false }
        ]
    },
    {
        question: "Qual é o menor continente do mundo?",
        answers: [
            { id: 1, text: "Ásia", correct: false },
            { id: 2, text: "Oceania", correct: false },
            { id: 3, text: "Austrália", correct: true },
            { id: 4, text: "África", correct: false }
        ]
    },
    {
        question: "Qual é o menor país do mundo?",
        answers: [
            { id: 1, text: "Vaticano", correct: true },
            { id: 2, text: "Butão", correct: false },
            { id: 3, text: "Mônaco", correct: false },
            { id: 4, text: "Sri Lanka", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers-buttons");
const nextButton = document.getElementById("proxima_questao-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    startQuiz();
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.dataset.id = answer.id; // Armazena o ID no dataset [7]
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers.find(ans => ans.correct);
    
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id; // Verifica se o ID clicado é o correto [8]

    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Marca a correta e desabilita os botões para evitar múltiplos cliques [9, 10]
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.id == correctAnswer.id) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
