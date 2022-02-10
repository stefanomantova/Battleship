class Player{
constructor(id,ships,gameboard,playerType){
    this.id = id;
    this.ships = ships;
    this.gameboard = gameboard;
    this.playerType = playerType;
}

playerTurn(coordX,coordY,enemy){
    if(this.playerType = 'person'){
        receiveAttack(coordX,coordY,enemy);
    }else if(this.playerType = 'computer'){
        let pcCoordX; let pcCoordY;
        //do random coordinates while one or both coords are contained in gameboard.hittedCoordinates[];
    }
}


}