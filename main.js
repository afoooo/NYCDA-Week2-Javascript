//how to set variables
var car={make: 'toyota', mode: 'prius'};
console.log(car['make']);

//check if two strings are equal, including object type
console.log("stringone" === "string two");

//To test if two strings are NOT equal://
console.log("stringone" == "string two");

//if statement//

if(5>10){
console.log("A");
}
if(5<10){
console.log("B");
}

// Declare a function called someName that takes
// two arguments: numberOne and otherNumber
function someName(numberOne, otherNumber){
// return the sum of numberOne, 10, and otherNumber
return numberOne + 10 + otherNumber;
}
// call your new function, giving it 2 argument values
// numberOne = 4, otherNumber = 14
// log the result to the console
console.log(someName(4, 14));
// Calling a function is also known as "invoking" it


// declare a function with the name alertName
// that takes one argument, somePersonsName
function alertName(somePersonsName){
// the function returns an alert with their name
return alert(somePersonsName);
}
// invoke the function
alertName("Zach");



