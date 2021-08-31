function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let random = randomInt(3);
    switch (random) {
        case 0: return "rock"; break;
        case 1: return "paper"; break;
        case 2: return "scissors"; break;
    }
}

// function playerPlay() {
//     return prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();
// }

// function playRound() {
//     let computer = computerPlay();
//     let player = playerPlay();
//     switch (player) {
//         case "rock":
//             switch (computer) {
//                 case "rock":
//                     console.log("You played rock");
//                     console.log("Computer played rock");
//                     console.log("You tied!");
//                     return "tie";
//                     break;
//                 case "paper":
//                     console.log("You played rock");
//                     console.log("Computer played paper");
//                     console.log("You lose!");
//                     return "computer win";
//                     break;
//                 case "scissors":
//                     console.log("You played rock");
//                     console.log("Computer played scissors");
//                     console.log("You win!");
//                     return "player win";
//                     break
//             }
//             break;
//         case "paper":
//             switch (computer) {
//                 case "rock":
//                     console.log("You played paper");
//                     console.log("Computer played rock");
//                     console.log("You win!");
//                     return "player win";
//                     break;
//                 case "paper":
//                     console.log("You played paper");
//                     console.log("Computer played paper");
//                     console.log("You tied!");
//                     return "tie";
//                     break;
//                 case "scissors":
//                     console.log("You played paper");
//                     console.log("Computer played scissors");
//                     console.log("You lose!");
//                     return "computer win";
//                     break
//             }
//             break;
//         case "scissors":
//             switch (computer) {
//                 case "rock":
//                     console.log("You played scissors");
//                     console.log("Computer played rock");
//                     console.log("You lose!");
//                     return "computer win";
//                     break;
//                 case "paper":
//                     console.log("You played scissors");
//                     console.log("Computer played paper");
//                     console.log("You win!");
//                     return "player win";
//                     break;
//                 case "scissors":
//                     console.log("You played scissors");
//                     console.log("Computer played scissors");
//                     console.log("You tied!");
//                     return "tie";
//                     break
//             }
//             break;
//     }
// }

function checkWin(player, computer) {
    switch (player) {
        case "rock":
            switch (computer) {
                case "rock":
                    return "tie";
                    break;
                case "paper":
                    return "computer";
                    break;
                case "scissors":
                    return "player";
                    break
            }
            break;
        case "paper":
            switch (computer) {
                case "rock":
                    return "player";
                    break;
                case "paper":
                    return "tie";
                    break;
                case "scissors":
                    return "computer";
                    break
            }
            break;
        case "scissors":
            switch (computer) {
                case "rock":
                    return "computer";
                    break;
                case "paper":
                    return "player";
                    break;
                case "scissors":
                    return "tie";
                    break
            }
            break;
    }
}

function updateScores() {
    txt_playerScore.textContent = "Player: " + playerScore;
    txt_computerScore.textContent = "Computer: " + computerScore;
}

function playRound(player) {
    let computer = computerPlay();
    console.log(player);
    console.log(computer);
    let result = checkWin(player, computer);

    txt_status.textContent = "You played: " + player + "\r\nComputer played: " + computer;
    
    if (result === "player") {
        txt_status.textContent += "\r\nYou win!";
        playerScore++;
    }
    else if (result === "computer") {
        txt_status.textContent += "\r\nYou lose!";
        computerScore++;
    }
    else if (result === "tie") {
        txt_status.textContent += "\r\nYou tied!";
    }
    else {
        txt_status.textContent = "game broken, go complain to the creator";
    }

    updateScores();
}

function playGame() {
    let playerScore = 0, computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i + ": ");
        let win = playRound();
        switch (win) {
            case "player win": playerScore++; break;
            case "computer win": computerScore++; break;
            case "tie": break;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose the game!");
    }
    else {
        console.log("You tied the game!");
    }
}

const btn_rock = document.querySelector('#rock');
const btn_paper = document.querySelector('#paper');
const btn_scissors = document.querySelector('#scissors');

const txt_status = document.querySelector('#status');

const txt_playerScore = document.querySelector('#playerscore');
const txt_computerScore = document.querySelector('#computerscore');

let playerScore = 0;
let computerScore = 0;

btn_rock.addEventListener("click", () => playRound("rock"));
btn_paper.addEventListener("click", () => playRound("paper"));
btn_scissors.addEventListener("click", () => playRound("scissors"));