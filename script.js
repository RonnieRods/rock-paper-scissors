let human = '';
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerPicks = Math.floor(Math.random() * 3);
    if (computerPicks === 0) {
        return 'Rock';
    } else if (computerPicks === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    human = prompt('Please enter Rock, Paper or Scissors:');
    human = human.charAt(0).toUpperCase() + human.slice(1, human.length).toLowerCase();
    if (human === "Rock" || human === "Paper" || human === "Scissors") {
        return human;
    } else {
        console.log("Try typing rock, paper or scissors!");
        human = prompt('Please enter Rock, Paper or Scissors:');
        human = human.charAt(0).toUpperCase() + human.slice(1, human.length).toLowerCase();
        return human;
    }
}

function playRound(humanChoice, computerChoice) {
    if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        ++humanScore;
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}! Human: ${humanScore} Computer: ${computerScore}`);
    } else if (
        humanChoice === "Rock" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Rock"
    ) {
        ++computerScore;
        console.log(`You lost this round! ${computerChoice} beats ${humanChoice}!  Human: ${humanScore} Computer: ${computerScore}`);

    } else if (
        humanChoice === computerChoice ||
        humanChoice === computerChoice ||
        humanChoice === computerChoice
    ) {
        console.log(`It's a tie! You both chose ${humanChoice}!`);
    }
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

if (humanScore > computerScore) {
    console.log(`Congratulations! You beat the computer! Final Scores ---> Human: ${humanScore} | Computer: ${computerScore}`)
} else if (computerScore > humanScore) {
    console.log(`How unfortunate.... you lost to the computer! Final Scores ---> Human: ${humanScore} | Computer: ${computerScore}`);
} else if (humanScore === computerScore) {
    console.log(`What are the odds?! You both tied with ${humanScore} points each!`);
}