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

function playerPlay() {
    return prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();
}

function playRound() {
    let computer = computerPlay();
    let player = playerPlay();
    switch (player) {
        case "rock":
            switch (computer) {
                case "rock":
                    console.log("You played rock");
                    console.log("Computer played rock");
                    console.log("You tied!");
                    return "tie";
                    break;
                case "paper":
                    console.log("You played rock");
                    console.log("Computer played paper");
                    console.log("You lose!");
                    return "computer win";
                    break;
                case "scissors":
                    console.log("You played rock");
                    console.log("Computer played scissors");
                    console.log("You win!");
                    return "player win";
                    break
            }
            break;
        case "paper":
            switch (computer) {
                case "rock":
                    console.log("You played paper");
                    console.log("Computer played rock");
                    console.log("You win!");
                    return "player win";
                    break;
                case "paper":
                    console.log("You played paper");
                    console.log("Computer played paper");
                    console.log("You tied!");
                    return "tie";
                    break;
                case "scissors":
                    console.log("You played paper");
                    console.log("Computer played scissors");
                    console.log("You lose!");
                    return "computer win";
                    break
            }
            break;
        case "scissors":
            switch (computer) {
                case "rock":
                    console.log("You played scissors");
                    console.log("Computer played rock");
                    console.log("You lose!");
                    return "computer win";
                    break;
                case "paper":
                    console.log("You played scissors");
                    console.log("Computer played paper");
                    console.log("You win!");
                    return "player win";
                    break;
                case "scissors":
                    console.log("You played scissors");
                    console.log("Computer played scissors");
                    console.log("You tied!");
                    return "tie";
                    break
            }
            break;
    }
}

function playGame()
{
    let playerScore = 0, computerScore = 0;
    for (let i = 1; i <= 5; i++)
    {
        console.log("Round " + i + ": ");
        let win = playRound();
        switch (win) {
            case "player win": playerScore++; break;
            case "computer win": computerScore++; break;
            case "tie": break;
        }
    }
    if (playerScore > computerScore)
    {
        console.log("You win the game!");
    }
    else if (playerScore < computerScore)
    {
        console.log("You lose the game!");
    }
    else {
        console.log("You tied the game!");
    }
}

playGame();