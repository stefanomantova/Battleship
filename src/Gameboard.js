import {Ship} from './Ship.js';

export class Gameboard{

constructor(height,width){
    this.height = height;
    this.width = width;
    this.hittedCoordinates = [];
    this.board = [];
     //Check if necessary to initialize ships before gameboard
    this.generateBoard = () =>{
        for(let y=0;y<this.height;y++){
        this.board[y] = [];    
         for(let x=0;x < this.width;x++){
        this.board[y][x] = 0;   //Should receive the ShipID when including a ship
         }
        }
    }
}

placeShip(ship,coordX,coordY){
//checkAvailablePosition(ship, coordX, coordY) ---> must be called in APP function before placeShip()
    if(ship.orientation == 'horizontal'){
    for(let i = coordY; i<= ship.length;i++){
        this.board[coordX][i] = ship.id;
      }
    }else if(ship.orientation == 'vertical'){
        for(let i = coordX; i<= ship.length;i++){
            this.board[i][coordY]= ship.id;
            }
        }
      
    }

checkAvailablePosition(ship, coordX, coordY){
    let isAvailable;
if(ship.orientation == 'horizontal'){
    for(let i = coordY, j = 0; j< ship.length;i++,j++){
      if(this.board[coordX][i] == 0){
          isAvailable = true;
      }else{
          isAvailable = false;
          return isAvailable;
        }
      }
      return isAvailable;
      
    }else if(ship.orientation == 'vertical'){
        for(let i = coordX, j = 0; j< ship.length;i++,j++){
            if(this.board[i][coordY] == 0){
                isAvailable = true;
            }else{
                isAvailable = false;
                return isAvailable;
            }
            }
            return isAvailable;
}
}

receiveAttack(coordX, coordY, ships){
    if(this.board[coordX][coordY] == 0){
        //miss
        this.hittedCoordinates.push([coordX,coordY]);
    }else{
        for(let i in ships){
            if(this.board[coordX][coordY] == ships[i].id){
            this.hittedCoordinates.push([coordX,coordY]);
            ships[i].hit([coordX,coordY]);
            break;
            }
        }
    }
}

allSunk(ships){
for(let i in ships){
    if(!(ships[i].isSunk())){
        return false;
    }
}
return true;


}

}



