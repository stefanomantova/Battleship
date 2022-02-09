module.exports = class Ship{

constructor(length, coordinates, hitPositions,id, orientation){
this.length = length;
this.coordinates = coordinates; //array
this.hitPositions = hitPositions; //array
this.id = id;
this.orientation = orientation; //horizontal or vertical
this.isSunk = () =>{
    if(this.hitPositions.length == this.length){
    return true;
}else{
    return false;
}
}

}

hit(coordinates){
    (this.hitPositions).push(coordinates);
}

}