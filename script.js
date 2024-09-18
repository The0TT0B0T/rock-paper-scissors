// Write the logic to get the computer choice
// The game will be played against the computer
// You will write a function that randomly returns "rock", "paper", and "scissors"
const choiceBtns = document.querySelectorAll('.choiceBtn');
const results = document.querySelector('.results');
const para = document.createElement('p');
const resetBtn = document.createElement('button');

let selectedValue = '';
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

// Button Event Listener
choiceBtns.forEach(button => {
    button.addEventListener('click', () => {
        selectedValue = button.value;
        playGame(); // Start a round when a button is clicked
    });
});

// Computer Player
const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);
    return ['Rock', 'Paper', 'Scissors'][random];
};

// Human Player
const getHumanChoice = () => {
    if (selectedValue === 'rock') {
        return 'Rock';
    } else if (selectedValue === 'paper') {
        return 'Paper';
    } else if (selectedValue === 'scissors') {
        return 'Scissors';
    } else {
        return null; // No valid choice made yet
    }
};

// Play a Round
const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        humanScore++;
        return 'You win this round!';
    } else {
        computerScore++;
        return 'Computer wins this round!';
    }
};

// Game logic for each round
const playGame = () => {
    if (roundCount < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        if (!humanChoice) {
            results.textContent = "Please select rock, paper, or scissors!";
            return;
        }

        roundCount++;
        const roundResult = playRound(humanChoice, computerChoice);
        results.textContent = `${roundResult} Human: ${humanScore}, Computer: ${computerScore}`;

        // End game after 5 rounds
        if (roundCount === 5) {
            if (humanScore > computerScore) {
                results.textContent = `You win the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
            } else if (computerScore > humanScore) {
                results.textContent = `Game Over! Computer wins! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
            } else {
                results.textContent = `It's a draw! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
            }
            resetBtn.textContent = 'reset';
            results.appendChild(para);
            para.appendChild(resetBtn);
            resetBtn.addEventListener('click', resetGame);
        }
    }
};

// Reset Game
const resetGame = () => {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    selectedValue = '';

     results.textContent = 'Game reset! Select rock, paper, or scissors to start a new game.';
     if(para.contains(resetBtn)) {
        para.removeChild(resetBtn);
     }
};

// Initialize result display
results.textContent = "Select rock, paper, or scissors to start!";
