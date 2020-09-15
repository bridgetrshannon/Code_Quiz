// Hook question container
var displayQuestionsEl = document.querySelector(".display-questions")
// Hook timer element
var timeEl = document.querySelector(".timer")
// Hook results element
var resultsEl = document.querySelector(".results")


// h3 for instructions and questions
var mainDisplay = document.createElement("h3");
// Button to start quiz
var startBtn = document.createElement("button");

// function loads content on page
function openingPage() {
// targeting and entering text
mainDisplay.textContent = "Press button to start the quiz!"
// add text to button
startBtn.textContent = "Start"
// append text and button to the question container
displayQuestionsEl.append(mainDisplay, startBtn)
}

// function that goes right to the showTimer and nextQuestion functions; shows the question and starts the timer
function startQuiz() {
    showTimer()
    nextQuestion()
}

// function for the timer 
function showTimer() {

}

// function for the next question
function nextQuestion() {

}

// function that checks the answer
function checkAnswer() {

}