let  Ship = require ('./Ship.js');
let Gameboard = require('./Gameboard.js');
let Player = require('./Player.js');



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

test("Ship has been hit on 3,2 - length 2 horizontal",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShips = []; testShips.push(new Ship(2,[3,1],[],1,'horizontal')); testShips.push(new Ship(2,[4,1],[],2,'horizontal'))
    testBoard.placeShip(testShips[0],testShips[0].coordinates[0],testShips[0].coordinates[1]);
    testBoard.receiveAttack(3,2,testShips);
    expect (testShips[0].hitPositions).toContainEqual([3,2]);

})

test("Shot miss on 2,2!!",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShips = []; testShips.push(new Ship(2,[3,1],[],1,'horizontal')); testShips.push(new Ship(2,[4,1],[],2,'horizontal'));
    testBoard.placeShip(testShips[0],testShips[0].coordinates[0],testShips[0].coordinates[1]);testBoard.placeShip(testShips[1],testShips[1].coordinates[0],testShips[1].coordinates[1]);
    testBoard.receiveAttack(2,2,testShips);
    expect (testShips[0].hitPositions).toHaveLength(0);

})

test("Ship 2 is not sunk!",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShips = []; testShips.push(new Ship(2,[3,1],[],1,'horizontal')); testShips.push(new Ship(2,[4,1],[],2,'horizontal'));
    testBoard.placeShip(testShips[0],testShips[0].coordinates[0],testShips[0].coordinates[1]);testBoard.placeShip(testShips[1],testShips[1].coordinates[0],testShips[1].coordinates[1]);
    testBoard.receiveAttack(3,1,testShips);
    testBoard.receiveAttack(3,2,testShips);
    testBoard.receiveAttack(2,2,testShips);
    expect (testBoard.allSunk(testShips)).toBe(false);

})

test("All ships are sunk!",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShips = []; testShips.push(new Ship(2,[3,1],[],1,'horizontal')); testShips.push(new Ship(2,[4,1],[],2,'horizontal'));
    testBoard.placeShip(testShips[0],testShips[0].coordinates[0],testShips[0].coordinates[1]);testBoard.placeShip(testShips[1],testShips[1].coordinates[0],testShips[1].coordinates[1]);
    testBoard.receiveAttack(3,1,testShips);
    testBoard.receiveAttack(3,2,testShips);
    testBoard.receiveAttack(2,2,testShips);
    testBoard.receiveAttack(4,2,testShips);
    testBoard.receiveAttack(4,1,testShips);
    expect (testBoard.allSunk(testShips)).toBe(true);

})

test("Ship 1 not sunk!",()=>{
    let testBoard = new Gameboard(5,5);
    testBoard.generateBoard();
    let testShips = []; testShips.push(new Ship(2,[3,1],[],1,'horizontal')); testShips.push(new Ship(2,[4,1],[],2,'horizontal'));
    testBoard.placeShip(testShips[0],testShips[0].coordinates[0],testShips[0].coordinates[1]);testBoard.placeShip(testShips[1],testShips[1].coordinates[0],testShips[1].coordinates[1]);
    testBoard.receiveAttack(3,1,testShips);
    testBoard.receiveAttack(2,2,testShips);
    testBoard.receiveAttack(4,2,testShips);
    testBoard.receiveAttack(4,1,testShips);
    expect (testBoard.allSunk(testShips)).toBe(false);

})

test("player1 attacks ship from player2",()=>{
    let testBoard1 = new Gameboard(5,5);
    let testBoard2 = new Gameboard(5,5);
    testBoard1.generateBoard();
    testBoard2.generateBoard();
    let testShips1 = []; testShips1.push(new Ship(2,[3,1],[],1,'horizontal')); testShips1.push(new Ship(2,[4,1],[],2,'horizontal'));
    let testShips2 = []; testShips2.push(new Ship(2,[3,1],[],3,'horizontal')); testShips2.push(new Ship(2,[4,1],[],4,'horizontal'));
    testBoard1.placeShip(testShips1[0],testShips1[0].coordinates[0],testShips1[0].coordinates[1]);testBoard1.placeShip(testShips1[1],testShips1[1].coordinates[0],testShips1[1].coordinates[1]);
    testBoard2.placeShip(testShips2[0],testShips2[0].coordinates[0],testShips2[0].coordinates[1]);testBoard2.placeShip(testShips2[1],testShips2[1].coordinates[0],testShips2[1].coordinates[1]);

    let player1 = new Player(0, testShips1,testBoard1,'person');
    let player2 = new Player(1,testShips2,testBoard2,'computer');
    player1.playerTurn(3,1,player2);
    expect(testShips2[0].hitPositions).toContainEqual([3,1]);
})

test.only("player2 attacks in player1 gamboard",()=>{
    let testBoard1 = new Gameboard(5,5);
    let testBoard2 = new Gameboard(5,5);
    testBoard1.generateBoard();
    testBoard2.generateBoard();
    let testShips1 = []; testShips1.push(new Ship(2,[3,1],[],1,'horizontal')); testShips1.push(new Ship(2,[4,1],[],2,'horizontal'));
    let testShips2 = []; testShips2.push(new Ship(2,[3,1],[],3,'horizontal')); testShips2.push(new Ship(2,[4,1],[],4,'horizontal'));
    testBoard1.placeShip(testShips1[0],testShips1[0].coordinates[0],testShips1[0].coordinates[1]);testBoard1.placeShip(testShips1[1],testShips1[1].coordinates[0],testShips1[1].coordinates[1]);
    testBoard2.placeShip(testShips2[0],testShips2[0].coordinates[0],testShips2[0].coordinates[1]);testBoard2.placeShip(testShips2[1],testShips2[1].coordinates[0],testShips2[1].coordinates[1]);

    let player1 = new Player(0, testShips1,testBoard1,'person');
    let player2 = new Player(1,testShips2,testBoard2,'computer');
    player2.playerTurn(3,1,player1);
    console.log(player1.gameboard.hittedCoordinates);
    expect(player1.gameboard.hittedCoordinates).toBeDefined();
})


