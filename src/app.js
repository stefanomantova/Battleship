import  {Ship} from './Ship.js';
import {Gameboard} from './Gameboard.js';
import {createInterfaceBoard} from './domInteraction.js';



const startButton = document.getElementById('startButton');

startButton.addEventListener("click", executeGame);


function executeGame(){
 createInterfaceBoard([7,7]);
    let gameboard1 = new Gameboard(7,7);
    let gameboard2 = new Gameboard(7,7);
    gameboard1.generateBoard();
    gameboard2.generateBoard();

    let player1Ships = [];
    let player2Ships = [];
    for(let i = 7,j = 1; i > 0; i--,j++){
      //  player1Ships.push(new Ship(i,[prompt("Coordinate X"),prompt('Coordinate Y')],0,j,prompt("horizontal or vertical?")));
    }

}