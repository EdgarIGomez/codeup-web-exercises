function isOdd(number) {
    return (number % 2 !== 0);
};
console.log(isOdd(3));
console.log(isOdd(4));

function isEven(number) {
    return (number % 2 === 0);
};
console.log(isEven(6));
console.log(isEven(7));

function identity(input) {
    return (input);
};
console.log(identity("red"));
console.log(identity(3));

function isFive(input) {
    return (input === 5);
};
console.log(isFive(5));
console.log(isFive(4));

function addFive(input) {
    return (input + 5);
};
console.log(addFive(5));
console.log(addFive("Five"));

function isMultipleOfFive(input) {
    return (input % 5 === 0);
}

console.log(isMultipleOfFive(35));
console.log(isMultipleOfFive(54));

function isThree(input) {
    return (input === 3);
};
console.log(isThree(3));
console.log(isThree("3"));

function isMultipleOfThree(input) {
    return (input % 3 === 0);
};
console.log(isMultipleOfThree(99));
console.log(isMultipleOfThree(67));

function isMultipleOfThreeAndFive(input) {
    return ((input % 3 === 0) && (input % 5 === 0))
};
console.log(isMultipleOfThreeAndFive(15));
console.log(isMultipleOfThreeAndFive(12));

function isMultipleOf(target, n) {
    return (target % n === 0);
};
console.log(isMultipleOf(15, 3));
console.log(isMultipleOf(12, 9));

console.log("Line break to check work");

function isTrue(boolean) {
    return (boolean === true);
};
console.log(isTrue(true));
console.log(isTrue(false));

function isFalse(boolean) {
    return (boolean === false);
};
console.log(isFalse(false));
console.log(isFalse(true));

function isTruthy(input) {
    if (input) {
        console.log("It's Truthy")
    } else {
        console.log("It's Falsey")
    }
}
isTruthy("true")
isTruthy(true)
isTruthy(false)
isTruthy(null)

function isFalsey(input){
    if (!input){
        console.log("It's Falsey")
    }else {
        console.log("It's truthy")
    }
}
isFalsey(false)
isFalsey(null)
isFalsey("true")
isFalsey(true)