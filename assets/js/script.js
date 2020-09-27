//var for questions 
var questions = [
    {
        display: "Commonly used data types do not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        display: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        display: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        display:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        display:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

//list var time
var score = 0;
var time = 0;
var timer;
// var timeLeft = 60;

//var for quesiton:
var currentQuestion = -1;
//var timeDeduction = 10;

// //wrapper
// var wrapper = document.querySelector("#wrapper");
// var codingContentEl = document.querySelector("codingContent");

//all var buttons
// var startButton = document.querySelector("start");
// var clearButton = document.querySelector("clear");
// var submitButton = document.querySelector("submit");
// var rtrnButton = document.querySelector("return");
//var for questions, choices, answers, progress

var questionsEl = document.querySelector("guestions");
var questionIndex = 0;
// var choices = document.querySelector("choices");
// var initialsEl = document.querySelector("initials");

// var progressEl = document.querySelector("progress");
// //var nameEl = document.getElementsById("name");


// list functions:

//var startQuiz = function (event) 
function startQuiz {
    //to move to the questions page set attribute to hide the page:
    var firstPageEl = document.getElementById("first-page");
    firstPageEl.setAttribute("class", "hide");

    //star the timer when the game begins:
    timerId = setInterval(timeRemaining, 1000);

    timeEl.textContent = time;
    timeLeft = 60;

    getQuestions();
}
// function timeRemaining() {};
// function getQuestions() {};
// function endQuiz(){}


// //startButton.onclick = startQuiz;
// //all the eventListeners
// startButton.addEventListener("click", startQuiz);
//     clearButton.addEventListener("click", clearHighscores);
//     submitButton.addEventListener("click", submit);
//     rtrnButton.addEventListener("click", return);