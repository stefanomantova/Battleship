import  {Ship} from './Ship.js';
import {Gameboard} from './Gameboard.js';
import {createInterfaceBoard,placeShipForm, sendInfoToPlaceShip} from './domInteraction.js';
import {Player} from './Player.js'


const startButton = document.getElementById('startButton');

startButton.addEventListener("click", executeGame);


async function executeGame(){
  //Initialize all stuff
 createInterfaceBoard([7,7]);
    let gameboard1 = new Gameboard(7,7);
    let gameboard2 = new Gameboard(7,7);
    gameboard1.generateBoard();
    gameboard2.generateBoard();

    let player1Ships = [];
    let player2Ships = [];

    let playerPerson = new Player(0,player1Ships,gameboard1,'person');
    let playerPC = new Player(1,player2Ships,gameboard2,'computer');
//Initialize form and variables
    placeShipForm();
    let buttonSend = document.getElementById('buttonSend');
    let shipSize = 5;let shipIndex = 0;
    if (shipSize>0){  
      //If there is still ships to be placed
    buttonSend.addEventListener('click',()=>{
          let isValidShip;
          let currentShipInfo;
          let currentShip;
        currentShipInfo = sendInfoToPlaceShip();
        currentShip = new Ship(shipSize,[currentShipInfo.coordX,currentShipInfo.coordY],0,0,currentShipInfo.orient);
        if(playerPerson.gameboard.checkAvailablePosition(currentShip,currentShipInfo.coordX,currentShipInfo.coordY)){
          isValidShip = true;
          currentShip.id = (shipIndex+1);
      playerPerson.ships[shipIndex] = currentShip;
      playerPerson.gameboard.placeShip(currentShip,currentShipInfo.coordX,currentShipInfo.coordY);
    shipSize--;shipIndex++;
        }else{
          alert("Invalid position!");
        }
      
    }
    )}

}

