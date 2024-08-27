// Write the logic to get the computer choice
// The game will be played against the computer
// You will write a function that randomly returns "rock", "paper", and "scissors"
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3) + 1
    if (random === 1) {
        console.log(random);
        return 'Rock';
    }
    else if (random === 2) {
        console.log(random);
        return 'Paper';
    }
    else { 
        return 'Scissors';
    }
}

const getHumanChoice = () => {
    const input = prompt("Enter a rock, paper, or scissors").toLowerCase();
    if(input === 'rock') {
        return 'Rock';
    }
    else if (input === 'paper') {
        return 'Paper';
    }
    else if (input === 'scissors') {
        return 'Scissors';
    } 
    else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return 'Invalid choice';
    }
};

//humanChoice and computerChoice are parameters for the human computerChoice and humanChoice as arguments


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
         return `It's a tie! Play Again`;
        }
        else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') ||
                 (humanChoice === 'Paper' && computerChoice === 'Rock') ||
                 (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
                     humanScore++;
                     return 'You win this round!';
                 }
         else {
             computerScore++;
             return 'Computer wins this round!';
         }
     };
     for (let i = 0; i <= 5; i++) {
        playRound();
     }
};

console.log(playGame());
console.log(playRound(humanChoice, computerChoice));
console.log(humanScore);
console.log(computerScore);

