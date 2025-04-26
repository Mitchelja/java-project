console.log("Hello World!")
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
function getHumanChoice (){
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
}
let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        console.log("You win "+ humanChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        console.log("You loose "+computerChoice+ " beats "+ humanChoice);
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



