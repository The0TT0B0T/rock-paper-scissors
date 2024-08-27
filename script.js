// Write the logic to get the computer choice
// The game will be played against the computer
// You will write a function that randomly returns "rock", "paper", and "scissors"
let humanScore = 0;
let computerScore = 0;

// Computer Player
const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3) + 1
    if (random === 1) {
        
        return 'Rock';
    }
    else if (random === 2) {
        
        return 'Paper';
    }
    else { 
        return 'Scissors';
    }
}

// Human Player
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

// Play game functionality
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
     

     for (let i = 1; i <=5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Your Score = ${humanScore}`);
        console.log(`Computer's Score = ${computerScore}`);
        
     }
     if(humanScore > computerScore) {
        console.log("You win the Game!");
     }
     else {
        console.log("Game Over! Computer Wins!");
     }
};
playGame();


