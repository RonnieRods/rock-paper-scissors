let computer = '';

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        console.log((computer = 'Rock'));
    } else if (computerChoice === 1) {
        console.log((computer = 'Paper'));
    } else {
        console.log((computer = 'Scissors'));
    }
}