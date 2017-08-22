// Variables //

var character = {
    name: "A dankest warrior",
    health: 260,
    attack: 148,
    defense: 89,
    level: 1,
}
var opponent = {
    name: "Magnum Dong Woody",
    health: 420,
    attack: 130,
    defense: 60,
    level: 1,
}




// Functions //
function getCharacterinfos(){
    alert("Name: " + character.name);
    alert("Current health: " + character.health);
    alert("Current level: " + character.level);
    alert("Current attack: " + character.attack);
    alert("Current defense: " + character.defense);



}
function getOpponentinfos(){
    alert("Name: " + opponent.name);
    alert("Current health: " + opponent.health);
    alert("Current level: " + opponent.level);
    alert("Current attack: " + opponent.attack);
    alert("Current defense:" + opponent.defense);
}
function attackTurn(){
    alert(character.name + " will attack " + opponent.name);
    alert(opponent.name + " got attacked he lost 88 health points");
    opponent.health = opponent.health -88;
    alert("Now " + opponent.name + " have " + opponent.health + " health");
    alert(opponent.name + " will attack " + character.name);
    alert(character.name + " got attacked he lost 41 health points")
    character.health = character.health -41;
    alert("Now" + character.name + " have " + character.health + " health");
}

// Script Part //