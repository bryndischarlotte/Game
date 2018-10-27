// Board class
function Board() {

        this.grid = [
            [new Square(), new Square(), new Square()],
            [new Square(), new Square(), new Square()],
            [new Square(), new Square(), new Square()]
            ];
}
    // Check winner conditions
    Board.prototype.checkWinner = function() {
        // Game status check 
        if (game.gameStatus === true) {
            // Horizontal check 
            for (var i = 0; i < 3; i++) {
                if (this.grid[i][0].box === this.grid[i][1].box &&
                    this.grid[i][0].box === this.grid[i][2].box &&
                    this.grid[i][0].box != '') {
                    game.gameOver();
                    printWinner();
                }
            }
            // Vertical check 
            for (var j = 0; j < 3; j++) {
                if (this.grid[0][j].box === this.grid[1][j].box &&
                    this.grid[0][j].box === this.grid[2][j].box &&
                    this.grid[0][j].box != '') {
                    game.gameOver();
                    printWinner();
                }
            }
            // KRISSKROSS
            if (this.grid[0][0].box == this.grid[1][1].box &&
                this.grid[0][0].box == this.grid[2][2].box &&
                this.grid[0][0].box != "" ||
                this.grid[0][2].box == this.grid[1][1].box &&
                this.grid[0][2].box == this.grid[2][0].box &&
                this.grid[0][2].box != "") {
                game.gameOver();
                printWinner();
            }
            // Draw
            else if (totalMoves === 9) {
                game.gameOver();
                alert("Draw!");
            }
        }
    }
