// Square test
const Square = require('./square');
    // Constructor test
test('Should return an empty square', () => {
    let testSquare = new Square();  
    expect(testSquare.box).toBe('');
});
// Test player X
test('Should return a marked square X', () => {
    Square.counter = 0; 
    expect(Square.prototype.markBox(Square.counter)).toEqual('X');
});
// Test player O
test('Should return a marked square X', () => {
    Square.counter = 1; 
    expect(Square.prototype.markBox(Square.counter)).toBe('O');
});