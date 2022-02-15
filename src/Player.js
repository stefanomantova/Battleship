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
        do{
        let pcCoordX = Math.floor(Math.random() * this.gameboard.height);
        let pcCoordY = Math.floor(Math.random() * this.gameboard.width);
        }while(enemy.gameboard.hittedCoordinates.includes([pcCoordX,pcCoordY]));
        receiveAttack(pcCoordX,pcCoordY,enemy);
        //do random c°oordinates while one or both coords are contained in gameboard.hittedCoordinates[];
    }
}



}