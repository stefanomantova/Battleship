import {Ship} from './Ship.js';
import {Gameboard} from './Gameboard.js';
import {Player} from './Player.js'

const body = document.body;

function createInterfaceBoard(boardSize){
let startButtonDiv = document.getElementById('Start');    
let divBoard1 = document.createElement('div');
divBoard1.className = "game-board";
divBoard1.id = 'board1';
body.appendChild(divBoard1);
let buttonsBoard1 = []; 

for(let i = 0, contCoordX = 1, contCoordY = 1; i<(boardSize[0]*boardSize[1]); i++, contCoordX++,contCoordY++){
buttonsBoard1[i] = document.createElement('input');
buttonsBoard1[i].className = "box1";
buttonsBoard1[i].type = "button";
if((i % boardSize[0]) == 0){
    contCoordX -= 1;contCoordY =0;
    }
    buttonsBoard1[i].id = [i-contCoordX,contCoordY];
    buttonsBoard1[i].value = buttonsBoard1[i].id;
divBoard1.appendChild(buttonsBoard1[i]);
}
let divBoard2 = document.createElement('div');
divBoard2.className = "game-board";
divBoard2.id = 'board2';
body.appendChild(divBoard2);
let buttonsBoard2 = []; 

for(let i = 0, contCoordX = 1, contCoordY = 1; i<(boardSize[0]*boardSize[1]); i++, contCoordX++,contCoordY++){
buttonsBoard2[i] = document.createElement('input');
buttonsBoard2[i].className = "box2";
buttonsBoard2[i].type = "button";
if((i % boardSize[0]) == 0){
contCoordX -= 1;contCoordY =0;
}
buttonsBoard2[i].id = [i-contCoordX,contCoordY];
buttonsBoard2[i].value = buttonsBoard2[i].id;

divBoard2.appendChild(buttonsBoard2[i]);


}
body.removeChild(startButtonDiv);


}

function placeShipForm(){
    let br = document.createElement("br");
    let placeShipDiv = document.createElement('div');
    placeShipDiv.id = 'placeShipDiv';
    placeShipDiv.innerText = "Place your ship!";
    let pSize = document.createElement('p');
    pSize.innerText = `Ship size:`
    let coordParagraph = document.createElement('p');
    coordParagraph.innerText = "Coordinates: "
    let coordXInput = document.createElement('input');
    let coordYInput = document.createElement('input');
    coordXInput.type = 'number'; coordYInput.type = 'number';
    coordXInput.style.width = '40px';coordYInput.style.width = '40px';
    coordXInput.placeholder = 'X'; coordYInput.placeholder = 'Y';
    coordXInput.id = 'coordXInput'; coordYInput.id = 'coordYInput';

    let orientationDiv = document.createElement('div');

    let horizontalButton = document.createElement('input');
    horizontalButton.type = 'radio';
    horizontalButton.id = 'horizontalButton';
    horizontalButton.name = 'position';
    horizontalButton.value = 'option1';
    horizontalButton.checked = 'true';
    let horizontalButtonLabel = document.createElement('label');
    horizontalButtonLabel.htmlFor = 'Horizontal';
    horizontalButtonLabel.value = 'Horizontal';
    let horizontalButtonLabelText = document.createTextNode('Horizontal');

    let verticalButton = document.createElement('input');
    verticalButton.type = 'radio';
    verticalButton.id = 'verticalButton';
    verticalButton.name = 'position';
    verticalButton.value = 'option2';
    let verticalButtonLabel = document.createElement('label');
    verticalButtonLabel.htmlFor = 'Vertical';
    verticalButtonLabel.value = 'Vertical';
    let verticalButtonLabelText = document.createTextNode('Vertical');

    let buttonSend = document.createElement('button');
    buttonSend.className="btn btn-primary";
    buttonSend.innerHTML = 'Place Ship';
    buttonSend.id = "buttonSend";

body.appendChild(placeShipDiv);
placeShipDiv.appendChild(pSize);
placeShipDiv.appendChild(br);
placeShipDiv.appendChild(coordParagraph);
coordParagraph.appendChild(br);
coordParagraph.appendChild(coordXInput);
coordParagraph.appendChild(coordYInput);
coordParagraph.appendChild(br);

coordParagraph.appendChild(orientationDiv);

orientationDiv.appendChild(horizontalButton);
orientationDiv.appendChild(horizontalButtonLabel);
horizontalButtonLabel.appendChild(horizontalButtonLabelText);
coordParagraph.appendChild(br);

orientationDiv.appendChild(verticalButton);
orientationDiv.appendChild(verticalButtonLabel);
verticalButtonLabel.appendChild(verticalButtonLabelText);
coordParagraph.appendChild(br);

placeShipDiv.appendChild(buttonSend);




//buttonSend.addEventListener('click',sendInfoToPlaceShip);
//create an object containing the coordinates and orientation and return it


}
function sendInfoToPlaceShip(){
    let coordXInput = document.getElementById('coordXInput').value;
    let coordYInput = document.getElementById('coordYInput').value;
    let isHorizontal = document.getElementById('horizontalButton').checked;

    let radio;
    if(isHorizontal){
        radio = 'horizontal';
    }else{
        radio = 'vertical';
    }

    let shipCoordinates = {
    coordX: coordXInput,
    coordY: coordYInput,
    orient: radio
    }

    return shipCoordinates;
}
//Need to figure out how to pass all ship coords here
function markAsPlaced(ship,playerType){
    let playerBoard;
    if(playerType == 'person'){
    playerBoard = 1;  
    }else{
    playerBoard = 2;
    }

    if(ship.orientation == 'horizontal'){
        for(let i = ship.coordinates[1]; i<= ship.length;i++){
            document.getElementById([ship.coordinates[0],[i]]).style.backgroundColor = 'blue';
            document.getElementById([ship.coordinates[0],[i]]).value = `${ship.id}`;

          }
        
        }else if(ship.orientation == 'vertical'){
            for(let i = ship.coordinates[0]; i<= ship.length;i++){
                document.getElementById([[i],ship.coordinates[1]]).style.backgroundColor = 'blue';
                document.getElementById([[i],ship.coordinates[1]]).value = `${ship.id}`;

              }
            }
  
}

export {createInterfaceBoard,placeShipForm,sendInfoToPlaceShip,markAsPlaced};