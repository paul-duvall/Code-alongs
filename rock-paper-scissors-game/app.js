let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

// Function to randomise the computer's choice
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Function that ensures that the full words 'rock','paper' and 'scissors' are displayed to user
function convertToWord(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  if(letter === "s") return "Scissors";
}

// Function for the user winning
function win(userChoice, computerChoice) {
  // Declare variables to hold user and comp subscript text for result paragraph
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  // Declare a variable for the current user selection (i.e. div for rock, paper or scissors)
  const userChoice_div = document.getElementById(userChoice);
  // Increase user score by 1
  userScore++;
  // Display user and computer score
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // Update results message
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} - you win!`;
  // Add glow effect to current user selection (i.e. div for rock, paper or scissors)
  userChoice_div.classList.add('green-glow');
  setTimeout(function(){
    userChoice_div.classList.remove('green-glow');
  }, 300);
}

// Function for the user losing
function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord} - you lose!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(function(){
    userChoice_div.classList.remove('red-glow');
  }, 300);
}

// Function for a draw
function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws with ${convertToWord(computerChoice)}${smallCompWord}!`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

function game(userChoice) {
  // Generate random computer choice
  const computerChoice = getComputerChoice();
  
  // Run different function depending on win, lose or draw
  switch(userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
  }
}

function main() {
  // Listen for click on the divs for rock, paper and sissors, running game function
  rock_div.addEventListener('click', function() {
    game('r');
  });
  paper_div.addEventListener('click', function() {
    game('p');
  });
  scissors_div.addEventListener('click', function() {
    game('s');
  });

}

main();