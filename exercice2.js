// Variables //

var character = {
    name: "Warrior Pepe",
    health: "260",
    attack: "148",
    defense: "89",
    description: function (){
        var description = this.name + " a " + this.health + " Point de vie, " +
        this.attack + " en attaque et " + this.defense + " Point de défense";

        return description;
    }
}


// Functions //




// Script Part //
alert(character.description())
