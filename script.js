// event listener on the button to start the game
var startButton = $("#start");
var myTimer =$("#timer");

var questions = [
    {
        question1: "Commonly used data types DO NOT include:",

        answers: [
             "strings",
             "booleans",
             "alerts",
             "numbers"
        ],
        correctAnswer: "alerts"
    },
    {
        question2: "What is considered to be the most commonly used programming language in the world?:",
        answers: [
            choiceA = "HTML",
            choiceB = "Ruby",
            choiceC = "Swift",
            choiceD = "Javascript"
        ],
        correctAnswer: "Javascript"
    },
    {
        question3: "In JavaScript, what element is used to store multiple values in a single variable?",
        answers: [
             "Functions",
             "Variables",
             "Strings",
             "Arrays",
        ],
        correctAnswer: "Arrays"
    },
    {
        question4: "What kind of statement is used to execute actions based on a trigger or condition?:",
        answers: [
              "Boolean variable",
             "Fired event",
             "Regular Expression",
             "Conditional Statement",
        ],
        correctAnswer: "Conditional statement"
    },
    {
        question5: "Where is the JavaScript placed inside an HTML document or page?",
        answers: [
            choiceA = "in the <body> and <head> sections",
            choiceB = "In the <meta> section",
            choiceC = "In the <footer> section",
            choiceD = "In the <title> section"
        ],
        correctAnswer: "in the <body> and <head> sections"
    },
    {
        question6: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
        answers: [
            choiceA = "Variables",
            choiceB = "Strings",
            choiceC = "Function",
            choiceD = "Arrays",
        ],
        correctAnswer: "Arrays"

    }
]


$(startButton).on("click", function() {

renderQuestion()
})

/* Starting the game */



// A timer starts and is displayed on the page.
// set a variable that has the number of milliseconds
// Will need to setup a setinterval function
// if variable reaches 0, clear the timer, example is in 4.08
// Make sure it works for like 10 seconds and doesn't go below 0, ex no negatives
// clear the timer when it hits 0
var myTimer;
   
function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 80;

     function myClock() {
       document.getElementById("timer").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         
       }
     }
   }
 
// clear the middle section and display first question

function renderQuestion(){
    var questionName=("<p>")
    questionName = questions[0].question1
    for(var i=0; i<questions[0].answers.length; i++)
    {
        var answerOptions=document.createElement("button")
        answerOptions.textContent = questions[0].answers[i]
        console.log(questions[0].answers[i])
    }
    
    $("#quiz").text(questionName).append(answerOptions)

}

// startButton.addEventListener("click",startQuiz);
console.log("works")
/* Logic of the quiz */
// Need something keeping track of score
var score = 0
function renderProgress(){
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
// Need a list of multichoice questions
// list of questions inside array.
// what makes a question:
// answers
// which answer is right, and which are wrong
// the actual question


console.log(questions)
/* Putting a question on the page */
// Counter variable starting at 0.
var counter = 0;
// Take the first question from the array, this will be an object

    

// Grab the title of the question and put it on the page with javascript
// var question1 = document.createElement(question1show);
// question1.textContent = "Commonly used data types DO NOT include:" + question1show;
// document.body.appendChild(question1show);
// Grab the answers of the question

    // Loop through the answers
    // for(var i=0; i<answers.length; i++)
    // Put the answers in individual buttons
    // var choiceA = choiceAButton; 
    // var choiceB = choiceBButton;
    // var choiceC = choiceCButton;
    // var choiceD = choiceDButton;
    // Have some data on the buttons indicating the value inside (hint data-answer)
    
    // event listener to click those answers
        // when you click the answer, you grab the value of that button and compare to the correct answer
            // if right, you can keep score the same or increase
            // if wrong, you can lower the score
        // after comparison and score calculation,
            // old question disappears, new question appears
                // increase the counter by 1 to get to the next question
            // compare counter to length of the array, if less go to next question
                // repeat everything we did above
        // once the counter is equal to length of the array, we don't show the next question, the game ends

        // Last screen all done
            // Title
            // Your final score
            // input
            // submit button
        // Once you submit the score
            // Grab the initial array from localstorage, if there is one, and convert it, otherwise use an empty array
            // take the score and initials, put it into an array, stringify that array, and then put it in localstorage
            // You'll save that score, and the initials to localStorage
            // var highscores = [
            //     {
            //         score:
            //         initials:
            //     }
            // ]


   