// Game class
function Game() {
       // console.log("Creating game");
        this.gameStatus = true;
        this.board = new Board();
        this.players = [
            new Player('X'),
            new Player('O')
        ];
}
    // Play game 
    Game.prototype.playGame = function() {
        let squares = document.getElementsByClassName('box');
       // console.log(squares); // TEST
        // On click, activate function markPlayer
        for (var i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', (event) => {
                // If the box is empty 
                if (event.target.innerHTML === '' && game.gameStatus === true) {
                    event.target.innerHTML = game.players[counter].symbol;
                    var squareID = (event.target.id.split(''));
                    console.log(squareID); // TEST
                    var row = parseInt(squareID[0]);
                    var col = parseInt(squareID[1]);
                    // Pass row/col through grid to mark X
                    game.board.grid[row][col].markBox();
                    // Check winner
                    game.board.checkWinner();
                    // Change player
                    game.players[counter].changePlayer();
                }
                // Box is taken
                else {
                   // console.log('Box is taken');
                }
            });
        }
    }
    // Reset game
    Game.prototype.resetGame = function() {
        let reset = document.getElementById('reset-button');
        reset.addEventListener('click', () => {
            for (var i = 0; i < 9; i++) {
                document.querySelectorAll('.box')[i].innerHTML = '';
            }
            // Reset main variables
            counter = 0;
            totalMoves = 1;
            game.players[counter].playerText();
            game = new Game();
            game.playGame();
        });
    }
    // Game over 
    Game.prototype.gameOver = function() {
        game.gameStatus = false;
        document.getElementsByClassName('box').disabled;
       // console.log('Game has stopped');
    }
