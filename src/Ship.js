module.exports = class Ship{

constructor(length, coordinates, hitPositions){
this.length = length;
this.coordinates = coordinates; //array
this.hitPositions = hitPositions; //array
this.isSunk = () =>{
    if(this.hitPositions.length == this.length){
    return true;
}else{
    return false;
}
}

}

hit(number){
    (this.hitPositions).push(number);
}

}