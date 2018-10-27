// Square class
function Square() {
    this.box = '';
}
// Function to mark squares inside table
Square.prototype.markBox = function (counter) {
    if (counter === 0) {
        return this.box = 'X';
    }
    if (counter === 1) {
        return this.box = 'O';
    }
}

module.exports = Square; 
