
var questions = [
    {
        question: "Commonly used data types DO NOT include:",

        answers: [
             "strings",
             "booleans",
             "alerts",
             "numbers"
        ],
        correctAnswer: "alerts"
    },
    {
        question: "What is considered to be the most commonly used programming language in the world?:",
        answers: [
             "HTML",
             "Ruby",
             "Swift",
             "Javascript"
        ],
        correctAnswer: "Javascript"
    },
    {
        question: "In JavaScript, what element is used to store multiple values in a single variable?",
        answers: [
             "Functions",
             "Variables",
             "Strings",
             "Arrays",
        ],
        correctAnswer: "Arrays"
    },
    {
        question: "What kind of statement is used to execute actions based on a trigger or condition?:",
        answers: [
             "Boolean variable",
             "Fired event",
             "Regular Expression",
             "Conditional Statement",
        ],
        correctAnswer: "Conditional statement"
    },
    {
        question: "Where is the JavaScript placed inside an HTML document or page?",
        answers: [
             "in the <body> and <head> sections",
             "In the <meta> section",
             "In the <footer> section",
             "In the <title> section"
        ],
        correctAnswer: "in the <body> and <head> sections"
    },
    {
        question: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
        answers: [
             "Variables",
             "Strings",
             "Function",
             "Arrays",
        ],
        correctAnswer: "Arrays"

    }
]

var startButton = document.querySelector("#start");

var myTimer = document.querySelector("#timer");

var myQuiz = document.querySelector("#quiz");

var mySection = document.querySelector("#instructions");

var score = document.querySelector("#score");

startButton.addEventListener("click", function() {
    
    setTime()
    renderQuestion()
    mySection.setAttribute("style", "display:none")
    startButton.setAttribute("style", "display:none")
    
});

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    myTimer.textContent = secondsLeft
    
    if(secondsLeft === 0) {
    myTimer.textContent=("Sorry time out!")
      clearInterval(timerInterval);
      
    }

  }, 1000);
}


function renderQuestion(){
    
    var question=document.createElement("p")
    question.textContent = questions[0].question
    quiz.appendChild(question)

    for(var i=0; i<questions[0].answers.length; i++){
        var answerOptions=document.createElement("button")
        answerOptions.textContent = questions[0].answers[i]
        answerOptions.setAttribute("data-index", i);
        console.log(questions[0].answers[i])
        quiz.appendChild(answerOptions)
    }
    

answerOptions.addEventListener("click", function(event) {
var element = event.target;

if (element.matches("button") == true) {
    
        
        var question=document.createElement("p")
        question.textContent = questions[1].question
        quiz.appendChild(question)
    
        for(var i=0; i<questions[0].answers.length; i++){
            var answerOptions=document.createElement("button")
            answerOptions.textContent = questions[1].answers[i]
            answerOptions.setAttribute("data-index", i);
            console.log(questions[1].answers[i])
            quiz.appendChild(answerOptions)
        }
    alert("Correct!")
    score++;
    
    
} else {
    alert("Wrong!")
    score--;
}

});

}






   