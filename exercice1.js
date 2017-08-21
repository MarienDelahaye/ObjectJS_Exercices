// Variables //

var user = {
    name: "Marien",
    familyname: "Delahaye",
    country: "France",
    age: "21",
    paymentmethod: "Visa and PayPal",
getName: function() {
    alert(this.name);
    
}
}
// Functions //
function getInfos(){
  alert(user.paymentmethod); 
}
function getFamilyName(){
    alert(user.familyname);
}
// Script Part //