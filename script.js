let computer = '';
let human = '';

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

function getHumanChoice() {
    human = prompt('Please enter Rock, Paper or Scissors:');
    human = human.charAt(0).toUpperCase() + human.slice(1, human.length);
    if (human === "Rock" || human === "Paper" || human === "Scissors") {
        console.log(human);
    } else {
        console.log("Try typing rock, paper or scissors!");
        getHumanChoice();
    }
}