let  Ship = require ('./Ship.js');
let Gameboard = require('./Gameboard.js');



test("Testing hit: [4,5] should be a hit position", () =>{
    let testShip = new Ship(4, [[2,1],[1,2],[4,5],[5,1]], []);
    testShip.hit([4,5]);
expect(testShip.hitPositions).toContainEqual([4,5]);
})

test("Testing hit: [2,1] should be a hit position", () =>{
    let testShip = new Ship(4, [[2,1],[1,2],[4,5],[5,1]], []);
    testShip.hit([2,1]);
expect(testShip.hitPositions).toContainEqual([2,1]);
})

test("Testing hit: [5,1] should be a hit position", () =>{
    let testShip = new Ship(4, [[2,1],[1,2],[4,5],[5,1]], []);
    testShip.hit([5,1]);
expect(testShip.hitPositions).toContainEqual([5,1]);
})

test("Ship testShip is sunk!",()=>{
    let testShip = new Ship(4, [[2,1],[1,2],[4,5],[5,1]], []);
    testShip.hit([1,2]);testShip.hit([4,5]);testShip.hit([2,1]);testShip.hit([5,1]);
    expect(testShip.isSunk()).toBe(true);

})

test("Ship testShip is not sunk!",()=>{
    let testShip = new Ship(4, [[2,1],[1,2],[4,5],[5,1]], [],1);
    testShip.hit([1,2]);testShip.hit([4,5]);testShip.hit([2,1]);
    expect(testShip.isSunk()).toBe(false);

})

test("Gameboard size must be 5x5",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
     const dimensions = [testBoard.board[0].length,testBoard.board[1].length]
    expect(dimensions).toStrictEqual([5,5]);
})

test("Ship has been correctly placed on 2,1, should be busy",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShip = new Ship(3,[2,1],[],1,'horizontal');
    testBoard.placeShip(testShip,testShip.coordinates[0],testShip.coordinates[1]);
    expect (testBoard.checkAvailablePosition(testShip,testShip.coordinates[0],testShip.coordinates[1])).toBe(false);

})

test("Ship has been correctly placed on 2,1. 4,1 should be free",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShip = new Ship(3,[2,1],[],1,'horizontal');
    testBoard.placeShip(testShip,testShip.coordinates[0],testShip.coordinates[1]);
    expect (testBoard.checkAvailablePosition(testShip,4,1)).toBe(true);

})

test("Ship has been correctly placed on 2,1. 2,3 should be busy",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShip = new Ship(3,[2,1],[],1,'horizontal');
    let secondShip = new Ship(2,[],[],2,'horizontal')
    testBoard.placeShip(testShip,testShip.coordinates[0],testShip.coordinates[1]);
    expect (testBoard.checkAvailablePosition(secondShip,2,3)).toBe(false);

})

test("Ship has been correctly placed on 2,1. 3,1 should be free",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShip = new Ship(3,[2,1],[],1,'horizontal');
    let secondShip = new Ship(2,[],[],2,'horizontal')
    testBoard.placeShip(testShip,testShip.coordinates[0],testShip.coordinates[1]);
    expect (testBoard.checkAvailablePosition(secondShip,3,1)).toBe(true);

})


test("Ship has been correctly placed on 2,1. 1,1 should be busy while trying to place vertically",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShip = new Ship(3,[2,1],[],1,'horizontal');
    let secondShip = new Ship(2,[],[],2,'vertical')
    testBoard.placeShip(testShip,testShip.coordinates[0],testShip.coordinates[1]);
    expect (testBoard.checkAvailablePosition(secondShip,1,1)).toBe(false);

})

test("Ship has been correctly placed on 4,0. 1,1(size 4) should be busy while trying to place vertically",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShip = new Ship(3,[4,0],[],1,'horizontal');
    let secondShip = new Ship(4,[],[],2,'vertical')
    testBoard.placeShip(testShip,testShip.coordinates[0],testShip.coordinates[1]);
    expect (testBoard.checkAvailablePosition(secondShip,1,1)).toBe(false);

})

test("Ship has been correctly placed on 1,2 vertically (size 3). 3,0(size 3) should be busy while trying to place horizontally",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShip = new Ship(3,[1,2],[],1,'vertical');
    let secondShip = new Ship(3,[],[],2,'horizontal')
    testBoard.placeShip(testShip,testShip.coordinates[0],testShip.coordinates[1]);
    expect (testBoard.checkAvailablePosition(secondShip,3,0)).toBe(false);

})

test("Ship has been correctly placed on 1,2 vertically (size 2). 3,0(size 3) should be free while trying to place horizontally",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShip = new Ship(2,[1,2],[],1,'vertical');
    let secondShip = new Ship(3,[],[],2,'horizontal')
    testBoard.placeShip(testShip,testShip.coordinates[0],testShip.coordinates[1]);
    expect (testBoard.checkAvailablePosition(secondShip,3,0)).toBe(true);

})
