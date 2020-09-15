// Hook question container
var displayQuestionEl = document.querySelector(".display-questions")
// Hook timer element
var timerEl = document.querySelector(".timer")
// Hook results element
var resultsEl = document.querySelector(".results")


// h3 for instructions and questions
var mainDisplay = document.createElement("h3");
// Button to start quiz
var startBtn = document.createElement("button");


// Global variables
// variable to store timer number
var timer = 75;
// variable to store index
var index = 0; 


// function loads content on page
function openingPage() {
// targeting and entering text
mainDisplay.textContent = "Press button to start the quiz!"
// add text to button
startBtn.textContent = "Start"
// append text and button to the question container
displayQuestionEl.append(mainDisplay, startBtn)
}

// function that goes right to the showTimer and nextQuestion functions; shows the question and starts the timer
function startQuiz() {
    showTimer()
    nextQuestion()
}

// function for the timer 
function showTimer() {
    timerEl.textContent = timer;
    // variable to set interval 
    var questionTimer = setInterval(function(){
        // decrease timer by 1
        timer--
        // display timer to screen
        timerEl.textContent = timer;
        // if timer hits 0, clear interval
        if ( timer <= 0) {
            clearInterval(questionTimer);
        }
    }, 1 * 1000)
}

// function for the next question
function nextQuestion() {
// variable to store current question
    var currentQuestion = questions[index];
// console.log current question
    console.log(currentQuestion);

    displayQuestionEl.textContent = "";

    mainDisplay.textContent = currentQuestion.title;
    // append text to main container
    displayQuestionEl.append(mainDisplay);
    // div element for the answer choices
    var choicesContainer = document.createElement("button")

    // create for loop
    for (let i = 0; i < currentQuestion.choices.length; i++) {

        // added button for the answer choices
        var choiceBtn = document.createElement("button");
        // button text reflects current question choice when selected
        choiceBtn.textContent = currentQuestion.choices[i];
        // Event listener to check answers
        choiceBtn.addEventListener("click", checkAnswer)
        choicesContainer.append(choiceBtn);

    }

    displayQuestionEl.append(choicesContainer); 

}

// function that checks the answer
function checkAnswer(event) {

// increase index by 1
index++;

// go to next question
nextQuestion();

}

// add event listener to start quiz
startBtn.addEventListener("click", startQuiz)
// call opening page function when page loads
openingPage();