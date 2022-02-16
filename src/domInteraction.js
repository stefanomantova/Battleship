function createInterfaceBoard(boardSize){
const body = document.body;
let startButtonDiv = document.getElementById('Start');    
let divBoard1 = document.createElement('div');
divBoard1.className = "game-board";
divBoard1.id = 'board1';
body.appendChild(divBoard1);
let buttonsBoard1 = []; 

for(let i = 0, contCoordX = 1, contCoordY = 1; i<(boardSize[0]*boardSize[1]); i++, contCoordX++,contCoordY++){
buttonsBoard1[i] = document.createElement('input');
buttonsBoard1[i].className = "box";
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
buttonsBoard2[i].className = "box";
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


export {createInterfaceBoard};