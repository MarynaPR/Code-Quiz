//list all the var by ID
var startEl = document.getElementById("start");
var question = document.getElementById("guestion");
var timerEl = document.getElementById("timer");
var choices = document.getElementById("choices");

startEl.addEventListener("click", startQuiz);
function (startQuiz) {
    //hide the first display page
    //start timer
    //show questions with starting time
    getQuestion();
};

function (getQuestion) {
    //array of questions
    //after the 1st question answered, either automatically or with 'next' button go to the next question
    // use loop for choices

};
var questions = [
    {
        display: "Commonly used data types DO NOT include:",
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


function (goBack) {

};
function (clearHighscores) {

};
function (viewHighscores) {

};



