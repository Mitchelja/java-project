console.log("Hello World!")
/*function getHumanChoice (){
    let humanChoice = prompt("rock, paper or scissors?").toLowerCase();
    if(humanChoice === null){
        console.log("Are you afraid of losing?")
    }
    else if(humanChoice == "rock" ){
        console.log("Rock")
        return "Rock";
    }
    else if(humanChoice == "paper" ){
        console.log("Paper")
        return "Paper";
    }
    else if(humanChoice == "scissors" ){
        console.log("Scissors")
        return "Scissors";
    }
    else{
        console.log("That is not a valid choice")
    }
}*/


/*function playRound (humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        console.log("You win "+ humanChoice + " beats " + computerChoice);
        return "player";
    } else {
        computerScore++;
        console.log("You loose "+computerChoice+ " beats "+ humanChoice);
        return "computer";
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);*/

/*function playGame(){
   
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
         let result = playRound(humanSelection, computerSelection);
        if (result === "player") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
    }

    console.log("Final Score - Human: " + humanScore + " | Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
} */
    function getComputerChoice (){
        let computerChoice = Math.random();
        if (computerChoice <= .33){
            console.log("Rock")
            return "Rock";
        }
        else if (computerChoice <= .66 ){
            console.log("Scissors")
            return "Scissors";
        }
        else{
            console.log("Paper")
            return "Paper"
        }
    }
let humanScore = 0;
let computerScore = 0;

function playRound(event){
    const humanChoice = event.target.textContent;
    const computerChoice = getComputerChoice();
    displayScore("You chose:", humanChoice);
    displayScore("Computer chose:", computerChoice);

    if (humanChoice === computerChoice) {
        displayScore("It's a tie!");
      } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
      ) {
        humanScore++;
        displayScore("You win! " + humanChoice + " beats " + computerChoice);
      } else {
        computerScore++;
        displayScore("You lose! " + computerChoice + " beats " + humanChoice);
      }
      displayResult("Human:" + humanScore +"|Computer:" + computerScore )
      if (humanScore >= 5){
        displayScore("Human wins")
    } else if (computerScore >= 5){
        displayScore("Computer Wins")
    } 
    }
    
    




const body = document.querySelector("body")
const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
const paperButton = document.createElement("button")
paperButton.textContent = "Paper";
const scissorsButton = document.createElement("button")
scissorsButton.textContent = "Scissors";

body.append(rockButton, paperButton, scissorsButton);

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

function displayScore(score){
    newDiv.textContent = score;
};
function displayResult(Result){
    const p = document.createElement("p");
    document.body.appendChild(p)
    p.textContent = Result
}

