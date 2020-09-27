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


var timerId;
// var timeLeft = 60;

//var for quesiton:
var currentQuestion = -1;
var answer;
//timeDeduction = 10:
//var time = question.length * 15;

// //wrapper
// var wrapper = document.querySelector("#wrapper");
// var codingContentEl = document.querySelector("codingContent");

//all var buttons
var startButton = document.querySelector("#start");

var clearButton = document.querySelector("clear");
var submitButton = document.querySelector("submit");
var rtrnButton = document.querySelector("return");
//answerButton?

//var for questions, choices, answers, progress
var questionsEl = document.querySelector("#guestions");
var currentQuestionIndex = 0;
var choices = document.querySelector("#choices");
// var initialsEl = document.querySelector("initials");
var timerEl = document.querySelector("#time");

// var progressEl = document.querySelector("progress");



// list functions:

//var startQuiz = function (event) 
function startQuiz() {
    //console.log(test)
    //to move to the questions page set attribute to hide the page:

    var firstPageEl = document.getElementById("first-page");
    firstPageEl.setAttribute("class", "hide");
    //questions.innerHTML = "";

    //star the timer when the game begins:
    timerId = setInterval(timeRemaining, 1000);

    timerEl.textContent = time;
    timeLeft = 60;


    getQuestions();
};

startButton.addEventListener("click", startQuiz);

function getQuestions() {
    //console.log(test)

    currentQuestionr++;
    answer = questions[currentQuestion].answer;

    questions.textContent = questions(currentQuestion).title;
    choicesEl.innerHTML = "";
    var choicesEl = questions[currentQuestion].choicesEl;

    for (var question = 0; question < choicesEl.length; question++) {
        var nextChoiceEl = document.createElement("button");

        nextChoiceEl.textContent = choices[question]
        answerButton = answerChoicesEl.appendChild(nextChoice).setAttribute("class", question);
        nextQuestion();
    }


    // //get the question fromt he erray of questions (on top of file):
    // var currentQuestion = questions[currentQuesitonIndex];
    // //current question shown
    // var displayEl = document.querySelector("#question-display");
    // displayEl.textContent = currentQuesitonIndex.display;
    // //to move to the next question from the previous and clear our old responce(class"choices") use innerHTML with ""
    // choicesEl.innerHTML = "";
    // //use loop for choices -using Node for now just to get through this section, then will try array again, resource:
    // //MDN:Range.selectNodeContents()

    // currentQuestion.choices.forEach(function (choice, i) {
    //     //new button for each choice?

    //     varchoiceNode = document.createElement("button");
    //     choiceNode.setAttribute("class", "choice");
    //     choiceNode.setAttribute("value", choice);

    //     choiceNode.textContent = i + 1 + ". " + choice;
    //     //click event listener attached to each choice:
    //     choiceNode.onclick = nextQuestion;

    //     //to display on the page:
    //     choiceEl.appendChild(choiceNoce);


    function nextQuestion() {

        //create content for correct and wrong questions
        //send results for highscores for answer received
        // move to the next queston 
        //check for next question
        //when finished with questons -end quiz 
        endQuiz();
    }

    function endQuiz() {
        //to stop timer in the quiz
        clearInterval(timerId);
        //list last page and show scores and initials:
        var lastPageEl = document.querySelector("#last-page");
        lastPageEl.removeAttribute("class");
        //scores and time remaining? 

    }
    //{ };

    function timeRemaining() {
        //shows if the user has time left and updates the time during quiz:
        time--;
        timerEl.textContent = time;

        //if not time left, end Quiz
        if (time <= 0) {
            endQuiz();
        }
    }

    function highscoreResults() {
        //to get value of the input box for initals, check the time, restart the function or clear it
        var initials = initialsEl.value.trim();//w3:trim() method returns the string stripped of whitespace from both ends. trim()//The trim() method checks value before and after the string
        if (initials !== "") {
            var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
            //if no scores were received-set to an empty array [], save score to local storage with localStorage.getItem
            //get users initials:
            var newScore = {
                score: time,
                initials: initials
            };
            //push to local shorage with score.push
            highscores.push(newScore);
            window.localStorage.setItem("highscores", JSON.stringify(highscores));
        }

    };

    // //fuction showScores() {
    //     var highscores = JSON.parse(window.localStorage.getItem("highscores"));
    //     var input = document.getElementById("highscores");
    //     input.textContent =
    //         showScores();
    // }
    // function clearHighscores() {
    //     window.localStorage.removeItem("highscores");
    //     window.location.reload();
    // }

    // document.getElementById("clear").onclick = clearHighscores;

  //  startButton.onclick = startQuiz;
// //all the eventListeners
//startButton.addEventListener("click", startQuiz);

//clearButton.addEventListener("click", clearHighscores);
//submitButton.addEventListener("click", submit);
//rtrnButton.addEventListener("click", return);