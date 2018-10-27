// Logic
var game = new Game();
let counter = 0;
let totalMoves = 1;

// Player scores
let playerX = 0;
let playerO = 0;

// Print winner and increase player score
function printWinner() {
    alert(game.players[counter].symbol + ' is winner!');
    if (counter === 0) {
        playerX++;
       // console.log("X: " + playerX);
       // console.log("O: " + playerO);
        updateScoreboard();
    }
    else {
        playerO++;
        console.log("X: " + playerX);
        console.log("O: " + playerO);
        updateScoreboard();
    }
}

// Update scoreboard
function updateScoreboard() {
    console.log('Updating scoreboard.....');
    var playerScoreO = document.getElementById('player-o-score');
    var playerScoreX = document.getElementById('player-x-score');
    console.log(playerScoreO);
    console.log(playerScoreX);
    playerScoreX.textContent = " X has " + playerX + " points";
    console.log("After update: " + typeof playerScoreX);
    playerScoreO.textContent = " O has " + playerO + " points";
    console.log("After update: " + typeof playerScoreO);
}

game.playGame();
game.resetGame();
