let human = '';
let humanScore = 0;
let computerScore = 0;

let choices = document.querySelector('#choices');
let scores = document.querySelector('#scores');
let finalScore = document.querySelector('#finalScore');
let resetBtn = document.querySelector('#resetBtn');
let statement = document.querySelector('#statement');

resetBtn.style.display = 'none';

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

function playRound(humanChoice, computerChoice) {
    if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        ++humanScore;
        scores.style.display = 'block';
        scores.innerHTML = `You win this round! ${humanChoice} beats ${computerChoice}! <br>Human: ${humanScore} Computer: ${computerScore}`;
    } else if (
        humanChoice === "Rock" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Rock"
    ) {
        ++computerScore;
        scores.style.display = 'block';
        scores.innerHTML = `You lost this round! ${computerChoice} beats ${humanChoice}!  <br>Human: ${humanScore} Computer: ${computerScore}`;

    } else if (
        humanChoice === computerChoice ||
        humanChoice === computerChoice ||
        humanChoice === computerChoice
    ) {
        scores.style.display = 'block';
        scores.innerHTML = `What are the odds?!?! You both chose ${humanChoice}! <br>Human: ${humanScore} Computer: ${computerScore}`;
    }

    if (
        humanScore === 5 &&
        humanScore > computerScore
    ) {
        scores.style.display = 'none';
        finalScore.style.display = 'block';
        finalScore.innerHTML = `Congratulations! You beat the computer! <br> Final Scores ---> Human: ${humanScore} | Computer: ${computerScore}`;
        resetBtn.style.display = 'block';
    } else if (
        computerScore === 5 &&
        computerScore > humanScore
    ) {
        scores.style.display = 'none';
        finalScore.style.display = 'block';
        finalScore.innerHTML = `How unfortunate.... you lost to the computer! <br> Final Scores ---> Human: ${humanScore} | Computer: ${computerScore}`;
        resetBtn.style.display = 'block';
    }
}

resetBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    scores.style.display = 'none';
    finalScore.style.display = 'none';
    resetBtn.style.display = 'none';
    statement.style.display = 'none';
})

choices.addEventListener('click', (e) => {
    let target = e.target.id;

    if (humanScore < 5 && computerScore < 5) {
        playRound(target, getComputerChoice());
    } else if (humanScore === 5) {
        statement.style.display = 'block';
        statement.innerHTML = `Woah there champ! If you want to keep winning, why not go for another round?`;
    } else if (computerScore === 5) {
        statement.style.display = 'block';
        statement.innerHTML = `Can't take a loss huh? Redeem yourself by trying again!`;
    }
})