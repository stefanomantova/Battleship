let Gameboard = require('./Gameboard.js');


module.exports = class Player{
constructor(id,ships,gameboard,playerType){
    this.id = id;
    this.ships = ships;
    this.gameboard = gameboard;
    this.playerType = playerType;
}

playerTurn(coordX,coordY,enemy){
    if(this.playerType == 'person'){
        enemy.gameboard.receiveAttack(coordX,coordY,enemy.ships);
    }else if(this.playerType == 'computer'){
        let pcCoordX,pcCoordY;
        do{
        pcCoordX = Math.floor(Math.random() * this.gameboard.height);
        pcCoordY = Math.floor(Math.random() * this.gameboard.width);
        }while(enemy.gameboard.hittedCoordinates.includes([pcCoordX,pcCoordY]));
        enemy.gameboard.receiveAttack(pcCoordX,pcCoordY,enemy.ships);
        //do random coordinates while one or both coords are contained in gameboard.hittedCoordinates[];
    }
}



}