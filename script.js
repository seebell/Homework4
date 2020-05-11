
var startQuizButton = document.getElementById("start_quiz-btn");
var frontContainer = document.getElementById("front_page-container");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var button1Element = document.getElementById("button1");
var button2Element = document.getElementById("button2");
var button3Element = document.getElementById("button3");
var button4Element = document.getElementById("button4");
var checkElement = document.getElementById("check");
var checkDisplayElement = document.getElementById("check_display");
var viewHighScoreElement = document.getElementById("viewHighScore");
var timeElement = document.getElementById("time");
var middlePageContainerElement = document.getElementById("middlePageContainer");
var lastPageContainerElement = document.getElementById("lastPageContainer");
var finalScoreElement = document.getElementById("finalScore");
var initialsElement = document.getElementById("initials");
var submitButtonElement = document.getElementById("submitButton");
var goBackElement = document.getElementById("goBack");
var clearHighScoresElement = document.getElementById("clearHighScores");
var HighScoresElement = document.getElementById("HighscoresButton");
var navBarElement = document.getElementById("navbarId");
var scoreBoardElement = document.getElementById("scoreBoard");
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        button1Element :     "strings",
        button2Element :     "booleans",
        button3Element :     "alerts",
        button4Element :     "numbers",
        
        answer: "button3"
    },
    {
        title: "What is considered to be the most commonly used programming language in the world?:",
        
        button1Element :     "HTML",
        button2Element :    "Ruby",
        button3Element :     "Swift",
        button4Element :    "Javascript",
    
        answer: "button4"
    },
    {
        title: "In JavaScript, what element is used to store multiple values in a single variable?",
        button1Element :    "Functions",
        button2Element :     "Variables",
        button3Element :    "Strings",
        button4Element :     "Arrays",
        
        answer: "button4"
    },
    {
        title: "What kind of statement is used to execute actions based on a trigger or condition?:",
        button1Element :    "Boolean variable",
        button2Element :     "Fired event",
        button3Element :     "Regular Expression",
        button4Element :    "Conditional Statement",
        answer: "button4"
    },
    {
        title: "Where is the JavaScript placed inside an HTML document or page?",
        
        button1Element :    "in the <body> and <head> sections",
        button2Element :     "In the <meta> section",
        button3Element :     "In the <footer> section",
        button4Element :     "In the <title> section",
        
        answer: "button1"
    },
    {
        title: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
        
        button1Element :  "Variables",
        button2Element :  "Strings",
        button3Element :  "Function",
        button4Element :  "Arrays",
        answer: "button4"

    }
]
var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;
var questionLength = questions.length;
var totalQuestionTime = questionLength * 15; //15sec for each questions
var TIMER, flag;  
var finalScore = 0;

frontPage();

function startGame() {
    frontContainer.classList.add('hide');
    showQuestion();
    questionContainer.classList.remove('hide');
    counterRender();
    TIMER = setInterval(counterRender,1000);
}

function showQuestion() {
        var runningChoicesIndex = 0;
        questionElement.textContent = questions[runningQuestionIndex].title;
        button1Element.textContent = questions[runningQuestionIndex].button1Element;
        button2Element.textContent = questions[runningQuestionIndex].button2Element;
        button3Element.textContent = questions[runningQuestionIndex].button3Element;
        button4Element.textContent = questions[runningQuestionIndex].button4Element;
}

function counterRender() {
    --totalQuestionTime;
    timeElement.innerHTML = "Time : " + totalQuestionTime;
    if(totalQuestionTime === 0)
    {
        clearInterval(TIMER);
        scoreRender();
    }
}

function checkAnswer(buttonname) {
    if(buttonname == questions[runningQuestionIndex].answer) {
        answerIsCorrect();
    }
    else {
        answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        showQuestion();
    }
    else {
        clearInterval(TIMER);
        scoreRender();
    }
}

function answerIsCorrect() {
    checkElement.classList.remove('hide');
    checkDisplayElement.innerHTML = "Correct";
    setTimeout(function() {
        checkElement.classList.add('hide');
    }, 1000);
}

function answerIsWrong() {
    totalQuestionTime -= 15;
    checkElement.classList.remove('hide');
    checkDisplayElement.innerHTML = "Wrong";
    setTimeout(function() {
        checkElement.classList.add('hide');
    }, 1000);
}

function scoreRender() {
    questionContainer.classList.add('hide');
    middlePageContainerElement.classList.remove('hide');
    finalScoreElement.innerHTML = "Your Final Score is " + totalQuestionTime; 
    submitButtonElement.addEventListener('click', finalPage);
};

function finalPage() {
    const playerName = initialsElement.value;

    if (playerName && totalQuestionTime) {
        localStorage.setItem(playerName, totalQuestionTime);
        //location.reload();
    }

    middlePageContainerElement.classList.add('hide');
    lastPageContainerElement.classList.remove('hide');
    navBarElement.classList.add('hide');
    totalQuestionTime = questionLength * 15;

    for (let i=0; i < localStorage.length; i++) {
        const playerName = localStorage.key(i);
        const value = localStorage.getItem(playerName);

        scoreBoardElement.innerHTML += `${playerName} : ${value}<br/>`;
        
    }
    localStorage.removeItem(playerName);
    clearHighScoresElement.addEventListener('click', removeHighScore);
    goBackElement.addEventListener('click', frontPage);
}

function removeHighScore() {
    localStorage.clear();
    scoreBoardElement.innerHTML = "";
    scoreBoardElement.classList.add('hide');  
}

function frontPage() {
    navBarElement.classList.remove('hide');
    lastPageContainerElement.classList.add('hide');
    frontContainer.classList.remove('hide');
    timeElement.innerHTML = "Time : 0";
    runningQuestionIndex = 0;
    finalScore = 0;
    startQuizButton.addEventListener('click', startGame);
    scoreBoardElement.classList.remove('hide');
}

function viewHighScores() {
    navBarElement.classList.add('hide');
    lastPageContainerElement.classList.remove('hide');
    frontContainer.classList.add('hide');
    scoreBoardElement.classList.remove('hide');
    clearHighScoresElement.addEventListener('click', removeHighScore);
    goBackElement.addEventListener('click', frontPage);
}

HighscoresButton.addEventListener('click', viewHighScores);

    









   