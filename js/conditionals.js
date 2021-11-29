"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    if (color === "blue") {
        return ("The sky is blue.");
    } else if (color === "red") {
        return ("Apples are red.");
    } else if (color === "yellow") {
        return ("Bannanas are yellow.");
    } else if (color === "green") {
        return ("Grass is green.");
    } else if (color === "orange") {
        return ("Carrots are orange.");
    } else {
        return ("I don't know anything about " + (color));
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("purple"));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

console.log(randomColor);

function whatColor(color) {
    switch (color) {
        case "blue":
            console.log("The sky is blue.");
            break;
        case "red":
            console.log("Apples are red.");
            break;
        case "yellow":
            console.log("Bannanas are yellow.");
            break;
        case "oranges":
            console.log("Carrots are orange.");
            break;
        default:
            console.log("I don't know anything about " + (color));
            break;
    }
}

whatColor(randomColor);
/*switch (favoriteColor) {
    case "blue":
        alert("The sky is blue.");
        break;
    case "red":
        alert("Apples are red.");
        break;
    case "yellow":
        alert("Bannanas are yellow.");
        break;
    case "oranges":
        alert("Carrots are orange.");
        break;
    default:
        alert("I don't know anything about " + (favoriteColor));
        break;
}*/

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var favoriteColor = prompt("What is your favorite color?")
alert(analyzeColor(favoriteColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, bill) {
    if (luckyNumber == 0) {
        return (bill)
    } else if (luckyNumber == 1) {
        return (bill - (.1 * bill));
    } else if (luckyNumber == 2) {
        return (bill - (.25 * bill));
    } else if (luckyNumber == 3) {
        return (bill - (.35 * bill));
    } else if (luckyNumber == 4) {
        return (bill - (.50 * bill));
    } else {
        return (0);
    }
}

/*function calculateTotal(luckyNumber, bill){
    if (luckyNumber == 0){
        return ("You're bill is " + bill)
    }else if (luckyNumber == 1){
        return ("You're lucky number is 1 and your bill is " + bill + " and your discounted bill is " + (bill - (.1 * bill)))
    } else if (luckyNumber == 2){
        return ("You're lucky number is 2 and your bill is " + bill + " and your discounted bill is " + (bill - (.25 * bill)))
    }else if (luckyNumber == 3){
        return ("You're lucky number is 3 and your bill is " + bill + " and your discounted bill is " + (bill - (.35 * bill)))
    }else if (luckyNumber == 4){
        return ("You're lucky number is 4 and your bill is " + bill + " and your discounted bill is " + (bill - (.50 * bill)))
    }else {
        return "You're lucky number is 5 and your bill is " + bill + " and your discounted bill is congratulations it's free!"
    }
}*/
console.log(calculateTotal(0, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("What is your total bill today?");
alert("Your lucky number is " + luckyNumber);
alert("Your bill before discount is " + totalBill);
alert("Your discounted bill is " + calculateTotal(luckyNumber, totalBill));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


/*if (number === true){
    let yourNumber = prompt("What is your number?");
    let isOdd = function(yourNumber){
        if ((yourNumber % 2 == 0 ){
            return ("This number is even!")
        }else {
            return("This number is Odd")
        }
    }  
    let plus100 = function(yourNumber){
        return (yourNumber + 100)
    }
    let isPositive = function(yourNumber){
        if (yourNumber > 0){
            return ("Is positive")
        }else {
            return ("Is negative")
        }
    }
    
}*/

var number = confirm("Would you like to enter a number?");

function yourNumber(number) {
    if (number == true) {
        let enteredNumber = prompt("What number are you entering?");
        let numbers = parseInt(enteredNumber);
        let isNumber = isNaN(numbers)

        function thisIsANumber(numberr) {
            if (numberr == false) {
                function isOdd(number) {
                    if (number % 2 === 0) {
                        alert("It is even");
                    } else {
                        alert("It is odd");
                    }
                }

                function plus100(number) {
                    return alert((number + 100));
                }

                function isPositive(number) {
                    if (number > 0) {
                        alert("It is positive");
                    } else {
                        alert("It is negative");
                    }
                }

                isOdd(numbers);
                plus100(numbers);
                isPositive(numbers);
            } else {
                return alert("That is not a number!")
            }
        }

        thisIsANumber(isNumber)
    } else {
        return alert("Okay you don't have too");
    }
}

yourNumber(number);
/*function isOdd(number){
    if (number % 2 == 0 ){
        return ("This number is even!")
    }else {
        return("This number is Odd")
    }
}*/
/*function plus100(number){
    return (number + 100)
}

function isPositive(number){
    if (number > 0){
        return("This is a positive number!")
    }else {
        return("This is a negative number!")
    }
}
yourNumber(number);*/
//alert(isOdd())
