//list all the var by ID
var count = 0;
var timerId;
//global for later? when reducing by 10 sec
var timeLeft = 60;
//var time =questions.lenght*10

//all var buttons
var startButton = document.getElementById("start");
var clearButton = document.getElementById("clear");
var submitButton = document.getElementById("submit");
var rtrnButton = document.getElementById("return");
//var for questions, choices, answers, timer, progress

var question = document.getElementById("guestion");
var timerEl = document.getElementById("timer");
var choices = document.getElementById("choices");

var questionsEl = document.getElementById("questions");
var progressEl = document.getElementById("progress");

//start quiz function
var startQuiz = function (event) {
    console.log("test");
    //hide the first display page and move to question portion next by setAttribut and removeAttribute"class"-hide:

    var startPageEl = document.getElementById("start-page");
    startPageEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");

    //start timer
    //timerId = setInterval(countDown, 1000);
    //show starting time when question prompt:
    //timerEl.textContent = time - left;
    getQuestion();
};

var getQuestion = function (event) {
    //array of questions
    var currentQuestion = questions[currentQuesitonIndex];
    var displayEl = document.getElementById("question-display");
    //after the 1st question answered, either automatically or with 'next' button go to the next question
    // use loop for choices
    //currentChoices
    //for loop
    //while loop


    var questions = function (event) {
        [
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
    };
    var countdown = function (event) {

    };

    var return = function (event) {
    };
    var clearHighscores = function (event) { };
    var viewHighScores = function (event) { };
    var submit = function (event) { };

    //startButton.onclick = startQuiz;
    startButton.addEventListener("click", startQuiz);
    clearButton.addEventListener("click", clearHighscores);
    submitButton.addEventListener("click", submit);
    rtrnButton.addEventListener("click", return);





