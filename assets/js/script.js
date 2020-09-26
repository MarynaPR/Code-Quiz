function (startQuiz) {

};
function (goBack) {

};
function (clearHighscores) {

};
function (viewHighscores) {

};





var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];
// var count = 0;
// var incButton = document.querySelector("#increment");
// var decButton = document.querySelector("#decrement");
// //add an even listener to the incButton. Add event listener takes two arguments, an event type ("click") and a function
// //that will run when the event happens (here we're using an anonymous function)
// incButton.addEventListener("click", function () {
//     count++;
//     updateCountEl()
// })
// //Add an event listener to the dec button. Here, we're passing a function that is defined elsewhere rather than creating
// //an anonymous function. We aren't using parentheses after the function because we want to wait to call it until the
// //appropriate time. 
// decButton.addEventListener("click", decButtonClick);
// //this is where we are actually defining the function that we are passing to the event listener aboves
// function decButtonClick() {
//     //returning false will cause the function to stop running if count is at 0. 
//     if (count === 0) {
//         return false;
//     }
//     count--;
//     updateCountEl();
// }
// //function to update the count element with the current count value
// function updateCountEl() {
//     document.querySelector("#count").textContent = count
// }
//
//two main ways of timing things in javascript
//setInterval takes two arguments, a function and a number and runs the function every x milliseconds 
// var myInterval = setInterval(function () {
//     console.log("I happened!")
// }, 2 * 1000)
// //setTimeout takes two arguments, a function and a number and runs the function once after x milliseconds have passed
// var myTimeOut = setTimeout(function () {
//     console.log("so did I!")
// }, 5 * 1000)
// //because we assigned each of our intervals to a variable, we can cancel them using clearInterval
// function stopIntervals () {
//     clearInterval(myInterval);
//     clearInterval(myTimeOut)
// }
// //Just like with event listeners, we can use an anonymous function like in the previous examples, or
// //pass a function defined elsewhere. Note the lack of parens after the function name
// var myTimeOut = setInterval(stopIntervals, 10 * 1000)