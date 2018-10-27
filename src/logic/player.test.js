// Test file 
const Player = require('./player');
// Player tests
test('Should return player as X', () => {
    const testPlayer = new Player('X');
    expect(testPlayer.symbol).toBe('X');
});
// Increment counter
test('Should set counter to equal 1', () => {
    expect(Player.prototype.changePlayer()).toBe(1);
})
// Increment totalMoves 

// Player text test X
// Player text test O 




