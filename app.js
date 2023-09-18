//TODO//
//PLAYER SELECTS ROCK PAPER OF SCISSORS
//FUNCTION FOR COMPUTER SELECTION
//COMPARE SELECTIONS
//GIVE POINT OR TIE
//DISPLAY MESSAGE
//GAME ENDS AT FIVE POINTS AND DISPLAYS WINNER MSG
//RESTART GAME BUTTON

const rock = document.querySelector(".btn-rock");
const paper = document.querySelector(".btn-paper");
const scissors = document.querySelector(".btn-scissors");
const btnRestart = document.querySelector(".btn-restart");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const random= ["rock", "paper", "scissors"];
const comment = document.querySelector(".comment");

//set initial score
let countPlayer = 0;
playerScore.textContent = countPlayer;
let countComputer = 0;
computerScore.textContent = countComputer;

//randomNumber function
function randomNumber() {
    return Math.floor(Math.random() * random.length);
}

//set game function
rock.addEventListener("click", function(){
    let result = random[randomNumber()];
    console.log(result);
    if (result == "scissors") {
        countPlayer++;
        playerScore.textContent = countPlayer;
        if  (countPlayer == 5) {
            comment.textContent = "CONGRATULATION! YOU WON THE GAME!";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
        else {
        comment.textContent = "Yes! Rock beats scissors!";
        }
    }
    else if (result == "paper") {
        countComputer++;
        computerScore.textContent = countComputer;
        if  (countComputer == 5) {
            comment.textContent = "OH FUCK NO! YOU LOST THE GAME!";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true; 
        }
        else {
        comment.textContent = "Oh no! Scissors beats rock!";
        }
    }
    else {
        comment.textContent = "Tie game!";
    }
});

paper.addEventListener("click", function(){
    let result = random[randomNumber()];
    console.log(result);
    if (result == "rock") {
        countPlayer++;
        playerScore.textContent = countPlayer;
            if  (countPlayer == 5) {
                comment.textContent = "CONGRATULATION! YOU WON THE GAME!"; 
                rock.disabled = true;
                paper.disabled = true;
                scissors.disabled = true;
            }
            else {
                comment.textContent = "Yes! Paper beats rock!";
            }
    }
    else if (result == "scissors") {
        countComputer++;
        computerScore.textContent = countComputer;
        if  (countComputer == 5) {
            comment.textContent = "OH FUCK NO! YOU LOST THE GAME!"; 
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
        else {
        comment.textContent = "Oh no! Scissors beats paper!";
        }
    }
    else {
        comment.textContent = "Tie game!";
    }
});

scissors.addEventListener("click", function(){
    let result = random[randomNumber()];
    console.log(result);
    if (result == "paper") {
        countPlayer++;
        playerScore.textContent = countPlayer;
        if  (countPlayer == 5) {
            comment.textContent = "CONGRATULATION! YOU WON THE GAME!"; 
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
        else {
        comment.textContent = "Yes! Scissors beats paper!";
        }
    }
    else if (result == "rock") {
        countComputer++;
        computerScore.textContent = countComputer;
        if  (countComputer == 5) {
            comment.textContent = "OH FUCK NO! YOU LOST THE GAME!"; 
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
        else {
        comment.textContent = "Oh no! Rock beats scissors!";
        }
    }
    else {
        comment.textContent = "Tie game!";
    }
});

btnRestart.addEventListener("click", function(){
    countPlayer = 0;
    playerScore.textContent = countPlayer;
    countComputer = 0;
    computerScore.textContent = countComputer;
    comment.textContent = "good luck!";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
})








