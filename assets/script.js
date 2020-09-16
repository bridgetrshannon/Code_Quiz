// Hook question container
var displayQuestionEl = document.querySelector(".display-questions");
// Hook timer element
var timerEl = document.querySelector(".timer");
// Hook results element
var resultsEl = document.querySelector(".results");

// Added during tutor session
// Variables for the high score
var scoreEl = document.querySelector("score");
var intialsInput = document.getElementById("intials-text");

var highscoreForm = document.querySelector('#highscores-form');

// h3 for instructions and questions
var mainDisplay = document.createElement("h3");
// Button to start quiz
var startBtn = document.createElement("button");

// Global variables
// variable to store timer number
var timer = 75;
// variable to store index
var index = 0; 

var questionTimer;

// Added during tutor session
var highscores = [];

init();

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
    questionTimer = setInterval(function(){
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
    
    var responseText = event.target.textContent;
    console.log(responseText);

    // conditionals to check answers
    if (responseText === questions[index].answer){
        console.log("Correct");
    } else {
        console.log("Incorrect");
         // added timer -= to subtract time for incorrect answers
         timer -= 15;
    }

    // increase index by 1
    index++;

    // if timer <= 0 or index is more than array length - 1, run highScore function
    if ( timer <= 0 || index > questions.length-1) {
        clearInterval(questionTimer);
        // if timer <= 0, call submitHighScore function
        storeHighScores();
    } else {
          // go to next question
        nextQuestion();
    }

}

function renderHighScores() {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    console.log(highscores)

    for (var i =0; i < highscores.length; i++) {
        var highscore = highscores[i];

        var li = document.createElement("li"); 
        li.textContent = highscore.initialsInput + " - " + highscore.highScore;
        li.setAttribute.append(li);
    }
}

// Create function that starts when intial button is pressed
function init() {
    var storedHighScores = JSON.parse(localStorage.getItem("highscores"));
    
    if (storedHighScores !== null) {
        highscores = storedHighScores;
}

renderHighScores();

}

function storeHighScores() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("highscores", JSON.stringify(highscores));
  }
  
  // When form is submitted...
  highscoreForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var intialText = intialsInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (initialText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    highscores.push(intialText);
    intialsInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeHighScores();
    renderHighScores();
  });

  function endGame() {
      
  }

// add event listener to start quiz
startBtn.addEventListener("click", startQuiz)
// call opening page function when page loads
openingPage();
;