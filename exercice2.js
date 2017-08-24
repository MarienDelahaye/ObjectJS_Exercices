// Variables Objects //

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
var magician = {
    name: "A dankest meme",
    health: 357,
    attack: 110,
    defense: 34,
    mana: 100,
    healingspell: 20,
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
    character.level = character.level +1;
    alert(character.name + " is now level " + character.level);
}
function getMagicianinfos(){
    alert("Name: " + magician.name);
    alert("Current health: " + magician.health);
    alert("Current level: " + magician.level);
    alert("Current attack: " + magician.attack);
    alert("Current defense: " + magician.defense);
    alert("Current mana: " + magician.mana);
    alert("Current spell value: " + magician.healingspell);
}
function magicianAttack(){
alert(character.name + " and " + opponent.name + " Will attack " + magician.name);
alert(magician.name + " lost 70 health points");
magician.health = magician.health -70;
alert(magician.name + " is trying to heal himself");
magician.health = magician.health +10;
magician.mana = magician.mana -10;
alert("Current magician health:" + magician.health);
alert(magician.name + " Will attack " + opponent.name + " he lost 67 health points " );
opponent.health = opponent.health -67;
alert("Current health of " + opponent.name + " : " + opponent.health);
}
function magicianHealing(){
    alert("Current magician health: " + magician.health);
    alert("Magician is trying to heal himself");
    magician.health = magician.health +20;
    magician.mana = magician.mana -20;
    alert("Current magician health: " + magician.health + " Current mana: " + magician.mana);
}