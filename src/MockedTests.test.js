let  Ship = require ('./Ship.js');


test("Testing hit: [4,5] should be a hit position", () =>{
    let testShip = new Ship(4, [[2,1],[1,2],[4,5],[5,1]], [], false);
    testShip.hit([4,5]);
expect(testShip.hitPositions).toContainEqual([4,5]);
})

test("Testing hit: [2,1] should be a hit position", () =>{
    let testShip = new Ship(4, [[2,1],[1,2],[4,5],[5,1]], [], false);
    testShip.hit([2,1]);
expect(testShip.hitPositions).toContainEqual([2,1]);
})

test("Testing hit: [5,1] should be a hit position", () =>{
    let testShip = new Ship(4, [[2,1],[1,2],[4,5],[5,1]], [], false);
    testShip.hit([5,1]);
expect(testShip.hitPositions).toContainEqual([5,1]);
})

test("Ship testShip is sunk!",()=>{
    let testShip = new Ship(4, [[2,1],[1,2],[4,5],[5,1]], [], false);
    testShip.hit([1,2]);testShip.hit([4,5]);testShip.hit([2,1]);testShip.hit([5,1]);
    expect(testShip.isSunk()).toBe(true);

})

test("Ship testShip is not sunk!",()=>{
    let testShip = new Ship(4, [[2,1],[1,2],[4,5],[5,1]], [], false);
    testShip.hit([1,2]);testShip.hit([4,5]);testShip.hit([2,1]);
    expect(testShip.isSunk()).toBe(false);

})