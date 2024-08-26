// Write the logic to get the computer choice
// The game will be played against the computer
// You will write a function that randomly returns "rock", "paper", and "scissors"
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3) + 1
    if (random === 1) {
        return 'Rock';
    }
    else if (random === 2) {
        return 'Paper';
    }
    else return 'Scissors';
}

const getHumanChoice = () => {
    const input = prompt("Enter a rock, paper, or scissors");
    if(input === 'Rock') {
        return 'Rock';
    }
    else if (input === 'Paper') {
        return 'Paper';
    }
    else return 'Scissors';
};

const playRound = (humanChoice, computerChoice) => {
    
};

console.log(getHumanChoice());
console.log(getComputerChoice());
