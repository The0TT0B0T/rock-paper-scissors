// Write the logic to get the computer choice
// The game will be played against the computer
// You will write a function that randomly returns "rock", "paper", and "scissors"

const getComputerChoice = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    if (Math.floor(Math.random() * (min + max) + min) === 1) {
        return 'Rock';
    }
    else if (Math.floor(Math.random() * (min + max) + min) === 2) {
        return 'Paper';
    }
    else return 'Scissors';
}
const input = prompt("Enter a rock, paper, or scissors");
const getHumanChoice = () => {
    if(input === 'Rock') {
        return 'Rock';
    }
    else if (input === 'Paper') {
        return 'Paper';
    }
    else return 'Scissors';
};
console.log(getHumanChoice());
console.log(getComputerChoice(1, 3));
