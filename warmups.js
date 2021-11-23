// Erstwhile, the legislature determined that being at the bar is not necessary in order to be served, but all the remaining conditions are still valid
// Change the expression assigned to cashOnHand to make isAtBar optional  while still requiring the remaining values to be true

let isAtBar = false;
let bac = .00;
let age = 22;
let cashOnHand = 6.00;


let canHaveADrink = (isAtBar || bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false

if (canHaveADrink) { // true or false
    console.log("Have a brewski my dude!");
} else { // it was not true
    console.log("Sorry buddy, no brew for u");
}

function shouldYouFly(notCloudy, flightsScheduled) {
    var shouldYouFly = (notCloudy && (flightsScheduled < 10))
    if (shouldYouFly) {
        console.log("You're good to fly!")
    } else {
        console.log("No flying today.")
    }
}

shouldYouFly(true, 10)


function addNumbers(x, y){
    return (x + y)
};
console.log(addNumbers(3, 5));

function subtractNumbers(x, y){
    return (x - y)
};
console.log(subtractNumbers(8, 4));

function multiplyNumbers(x, y){
    return (x * y)
};
console.log(multiplyNumbers(5, 9));

function divideNumbers(x, y){
    return (x / y)
};
console.log(divideNumbers(21, 7));

function remainderNumber(x, y){
    return (x % y)
};
console.log(remainderNumber(9, 4));