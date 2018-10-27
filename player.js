// Player class
function Player(symbol) {
    this.symbol = symbol;
}
// Swap between players
Player.prototype.changePlayer = function () {
    // console.log('Swapping player');
    if (counter === 0) {
        counter = 1;
        totalMoves++;
        // console.log("Total moves made: " + totalMoves);
        // console.log(game.board);
        this.playerText();
    }
    else {
        counter = 0;
        totalMoves++;
        // console.log("Total moves made: " + totalMoves);
        // console.log(game.board);
        this.playerText();
    }
}
// Change text in HTML
Player.prototype.playerText = function () {
    var playerTurn = document.getElementById('player-turn-text');
    // console.log(playerTurn);
    if (counter === 0 && game.gameStatus === true) {
        playerTurn.textContent = " X, it's your turn! ";
    }
    else if (counter === 1 && game.gameStatus === true) {
        playerTurn.textContent = " O, it's your turn! ";
    }
}

module.exports = Player;