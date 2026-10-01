const questions = {
    general: [
        {
            question: "What is the capital of France?",
            answers: [
                "London",
                "Paris",
                "Berlin",
                "Madrid"
            ],
            correct: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                "Earth",
                "Mars",
                "Jupiter",
                "Venus"
            ],
            correct: "Mars"
        },
        {
            question: "How many continents are there?",
            answers: [
                "5",
                "6",
                "7",
                "8"
            ],
            correct: "7"
        },
        {
            question: "Which ocean is the largest?",
            answers: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Arctic Ocean",
                "Pacific Ocean"
            ],
            correct: "Pacific Ocean"
        },
        {
            question: "Who wrote Romeo and Juliet?",
            answers: [
                "William Shakespeare",
                "Charles Dickens",
                "Mark Twain",
                "Leo Tolstoy"
            ],
            correct: "William Shakespeare"
        },
        {
            question: "What is the largest mammal?",
            answers: [
                "Elephant",
                "Blue Whale",
                "Giraffe",
                "Hippopotamus"
            ],
            correct: "Blue Whale"
        },
        {
            question: "Which country has the largest population?",
            answers: [
                "India",
                "USA",
                "China",
                "Brazil"
            ],
            correct: "India"
        },
        {
            question: "What is the currency of Japan?",
            answers: [
                "Won",
                "Yuan",
                "Yen",
                "Dollar"
            ],
            correct: "Yen"
        },
        {
            question: "Which language has the most native speakers?",
            answers: [
                "English",
                "Spanish",
                "Hindi",
                "Mandarin Chinese"
            ],
            correct: "Mandarin Chinese"
        },
        {
            question: "How many days are there in a leap year?",
            answers: [
                "365",
                "366",
                "364",
                "367"
            ],
            correct: "366"
        }
    ],

    science: [
        {
            question: "What gas do humans need to breathe?",
            answers: [
                "Carbon dioxide",
                "Oxygen",
                "Nitrogen",
                "Hydrogen"
            ],
            correct: "Oxygen"
        },
        {
            question: "What is H2O?",
            answers: [
                "Oxygen",
                "Hydrogen",
                "Water",
                "Salt"
            ],
            correct: "Water"
        },
        {
            question: "What force keeps us on Earth?",
            answers: [
                "Magnetism",
                "Gravity",
                "Friction",
                "Electricity"
            ],
            correct: "Gravity"
        },
        {
            question: "What is the center of an atom called?",
            answers: [
                "Electron",
                "Nucleus",
                "Proton",
                "Molecule"
            ],
            correct: "Nucleus"
        },
        {
            question: "Which organ pumps blood through the body?",
            answers: [
                "Brain",
                "Liver",
                "Heart",
                "Lung"
            ],
            correct: "Heart"
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: [
                "Ag",
                "Au",
                "Fe",
                "Gd"
            ],
            correct: "Au"
        },
        {
            question: "How many bones are in an adult human body?",
            answers: [
                "106",
                "206",
                "306",
                "406"
            ],
            correct: "206"
        },
        {
            question: "Which planet is closest to the Sun?",
            answers: [
                "Venus",
                "Earth",
                "Mercury",
                "Mars"
            ],
            correct: "Mercury"
        },
        {
            question: "What is the boiling point of water at sea level?",
            answers: [
                "50°C",
                "75°C",
                "100°C",
                "150°C"
            ],
            correct: "100°C"
        },
        {
            question: "What is the hardest natural substance?",
            answers: [
                "Iron",
                "Diamond",
                "Gold",
                "Quartz"
            ],
            correct: "Diamond"
        }
    ],

    technology: [
        {
            question: "What does CPU stand for?",
            answers: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Computer Processing Utility"
            ],
            correct: "Central Processing Unit"
        },
        {
            question: "Which company developed Windows?",
            answers: [
                "Apple",
                "Google",
                "Microsoft",
                "IBM"
            ],
            correct: "Microsoft"
        },
        {
            question: "What does URL stand for?",
            answers: [
                "Uniform Resource Locator",
                "Universal Reference Link",
                "User Resource Link",
                "Uniform Reference Locator"
            ],
            correct: "Uniform Resource Locator"
        },
        {
            question: "Which device is used to connect computers to a network?",
            answers: [
                "Router",
                "Monitor",
                "Keyboard",
                "Printer"
            ],
            correct: "Router"
        },
        {
            question: "What does RAM stand for?",
            answers: [
                "Random Access Memory",
                "Read Access Memory",
                "Rapid Access Module",
                "Random Application Memory"
            ],
            correct: "Random Access Memory"
        },
        {
            question: "Which company created Android?",
            answers: [
                "Microsoft",
                "Google",
                "Apple",
                "Intel"
            ],
            correct: "Google"
        },
        {
            question: "What does HTML stand for?",
            answers: [
                "HyperText Markup Language",
                "HighText Machine Language",
                "HyperTransfer Markup Language",
                "HyperText Machine Language"
            ],
            correct: "HyperText Markup Language"
        },
        {
            question: "Which technology is used to style web pages?",
            answers: [
                "HTML",
                "CSS",
                "SQL",
                "Python"
            ],
            correct: "CSS"
        },
        {
            question: "What does AI stand for?",
            answers: [
                "Automated Internet",
                "Artificial Intelligence",
                "Advanced Interface",
                "Automatic Information"
            ],
            correct: "Artificial Intelligence"
        },
        {
            question: "Which is a popular version control system?",
            answers: [
                "Git",
                "Linux",
                "Docker",
                "Apache"
            ],
            correct: "Git"
        }
    ],

    programming: [
        {
            question: "Which language is primarily used for web page structure?",
            answers: [
                "Python",
                "HTML",
                "Java",
                "C++"
            ],
            correct: "HTML"
        },
        {
            question: "Which keyword declares a variable in modern JavaScript?",
            answers: [
                "var",
                "let",
                "Both var and let",
                "define"
            ],
            correct: "Both var and let"
        },
        {
            question: "Which symbol is used for comments in JavaScript?",
            answers: [
                "//",
                "#",
                "<!--",
                "**"
            ],
            correct: "//"
        },
        {
            question: "Which language is known for using indentation to define code blocks?",
            answers: [
                "Python",
                "Java",
                "C",
                "JavaScript"
            ],
            correct: "Python"
        },
        {
            question: "What does CSS primarily control?",
            answers: [
                "Database storage",
                "Web page styling",
                "Server hardware",
                "File compression"
            ],
            correct: "Web page styling"
        },
        {
            question: "Which data structure follows FIFO?",
            answers: [
                "Stack",
                "Queue",
                "Tree",
                "Graph"
            ],
            correct: "Queue"
        },
        {
            question: "Which data structure follows LIFO?",
            answers: [
                "Queue",
                "Stack",
                "Array",
                "Graph"
            ],
            correct: "Stack"
        },
        {
            question: "Which keyword is used to define a function in Python?",
            answers: [
                "function",
                "func",
                "def",
                "define"
            ],
            correct: "def"
        },
        {
            question: "Which language is used with Node.js?",
            answers: [
                "JavaScript",
                "Python",
                "C#",
                "Ruby"
            ],
            correct: "JavaScript"
        },
        {
            question: "What does API stand for?",
            answers: [
                "Application Programming Interface",
                "Advanced Programming Input",
                "Application Process Integration",
                "Automated Program Interface"
            ],
            correct: "Application Programming Interface"
        }
    ]
};


// DOM Elements

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const categorySelect = document.getElementById("category");

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

const questionNumber = document.getElementById("question-number");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

const scoreElement = document.getElementById("score");
const correctCount = document.getElementById("correct-count");
const wrongCount = document.getElementById("wrong-count");
const percentageElement = document.getElementById("percentage");
const resultMessage = document.getElementById("result-message");


// Quiz State

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;


// Start Quiz

startBtn.addEventListener("click", startQuiz);

function startQuiz() {

    const category = categorySelect.value;

    currentQuestions = [...questions[category]];

    currentQuestionIndex = 0;
    score = 0;

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}


// Show Question

function showQuestion() {

    resetTimer();

    const currentQuestion = currentQuestions[currentQuestionIndex];

    questionNumber.textContent =
        `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

    questionElement.textContent = currentQuestion.question;

    progressBar.style.width =
        `${((currentQuestionIndex) / currentQuestions.length) * 100}%`;

    answersElement.innerHTML = "";

    nextBtn.disabled = true;

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");

        button.classList.add("answer-btn");
        button.textContent = answer;

        button.addEventListener("click", () => {
            selectAnswer(button, answer);
        });

        answersElement.appendChild(button);
    });

    startTimer();
}


// Select Answer

function selectAnswer(selectedButton, selectedAnswer) {

    clearInterval(timer);

    const currentQuestion =
        currentQuestions[currentQuestionIndex];

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === currentQuestion.correct) {
            button.classList.add("correct");
        }
    });

    if (selectedAnswer === currentQuestion.correct) {

        selectedButton.classList.add("correct");
        score++;

    } else {

        selectedButton.classList.add("wrong");
    }

    nextBtn.disabled = false;
}


// Timer

function startTimer() {

    timeLeft = 15;

    timerElement.textContent = `${timeLeft}s`;

    timer = setInterval(() => {

        timeLeft--;

        timerElement.textContent = `${timeLeft}s`;

        if (timeLeft <= 0) {

            clearInterval(timer);

            revealCorrectAnswer();

            nextBtn.disabled = false;
        }

    }, 1000);
}


function resetTimer() {

    clearInterval(timer);

    timeLeft = 15;

    timerElement.textContent = "15s";
}


// Reveal correct answer when time expires

function revealCorrectAnswer() {

    const currentQuestion =
        currentQuestions[currentQuestionIndex];

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {

        button.disabled = true;

        if (button.textContent === currentQuestion.correct) {
            button.classList.add("correct");
        }
    });
}


// Next Question

nextBtn.addEventListener("click", () => {

    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {

        showQuestion();

    } else {

        showResults();
    }
});


// Show Results

function showResults() {

    clearInterval(timer);

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const total = currentQuestions.length;

    const wrong = total - score;

    const percentage =
        Math.round((score / total) * 100);

    scoreElement.textContent = score;
    correctCount.textContent = score;
    wrongCount.textContent = wrong;
    percentageElement.textContent = `${percentage}%`;

    if (percentage === 100) {

        resultMessage.textContent =
            "Perfect score! Outstanding work!";

    } else if (percentage >= 70) {

        resultMessage.textContent =
            "Great job! You know your stuff!";

    } else if (percentage >= 50) {

        resultMessage.textContent =
            "Good effort! Keep practicing!";

    } else {

        resultMessage.textContent =
            "Keep learning and try again!";
    }
}


// Restart

restartBtn.addEventListener("click", () => {

    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

});
