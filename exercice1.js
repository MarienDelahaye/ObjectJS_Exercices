// Variables //

var user = new Object();
user.Name = "Marien";
user.FamilyName = "DELAHAYE";
user.Country = "France";
user.Age = "21";
user.PaymentMethod = "Visa, MasterCard...";

var userAuth = new Object();
userAuth.AllowedCountry = "France, Germany, Netherlands, Finland";
userAuth.SupportedPaymentMethod = "Visa, MasterCard and PayPal are supported to take order";
userAuth.MinimumAge = "20 years old is required to enter";
userAuth.YourCountry = "Your country is France, welcome."
// Functions //



// Script Part //
alert (user.Name);
alert (user.PaymentMethod);
alert (userAuth.MinimumAge);
alert (userAuth.YourCountry);