//If weather is sunny I would put on short sleeves and pants
//If rainy would take umbrella
//If snowy would wear jacket

//== only works with numbers not strings

//Exercise: Create 5 different variables that holds 5 different number grades. (ex: let laurasGrade = 99)
// Write a function that accepts the five number grades grades,
// and returns each of their letter grades based on their number grades.
//  Scoring: A: 90 + , B: 80 - 89, C: 70-79, D: 60 - 69, F: 60 -

function letterGrade(numberGrade){
    if (numberGrade >= 90){
        return ("You got an A.");
    }else if (numberGrade >= 80){
        return ("You got a B.");
    }else if (numberGrade >= 70){
        return ("You got a C.");
    }else if (numberGrade >= 60){
        return ("You got a D.");
    }else if (59 >= numberGrade) {
        return ("You got an F.");
    }else {
        return ("That's not a number grade.");
    }
}
console.log(letterGrade(98));
console.log(letterGrade(83));
console.log(letterGrade(70));
console.log(letterGrade(65));
console.log(letterGrade(10));
console.log(letterGrade("Hello"));

// if/else statements using tertiary operators
// 4 == "4" ? console.log("matches") : console.log("not matches")

function gradeA(grade){
    grade >= 90 ? console.log("You got an A") : console.log("You didn't get an A")
}

gradeA(99)
function gradeB(grade){
    grade >= 80 && grade <= 89 ? console.log("You got a B") : console.log("You didn't get a B")

}
gradeB(88)

function gradeC(grade){
    grade >= 70 && grade <= 79 ? console.log("You got a C") : console.log("You didn't get a C")

}
gradeC(70)

function gradeD(grade){
    grade >= 60 && grade <= 69 ? console.log("You got a D") : console.log("You didn't get a D")

}
gradeD(67)

function gradeF(grade){
    grade <= 89 ? console.log("You got an F") : console.log("You didn't get a F")

}
gradeF(55)

/*
function example(…) {
    return condition1 ? value1
        : condition2 ? value2
            : condition3 ? value3
                : value4;*/
function tryingGrades(grade) {
    return grade >= 90 ?  ("You got an A")
        : (grade >= 80 && grade <= 89) ?  ("You got a B")
            : (grade >= 70 && grade <= 79) ?  ("You got a C")
                : (grade >= 60 && grade <= 69) ?  ("You got a D")
                    :  ("You got an F")
}
console.log(tryingGrades(89))


let studentGrade = 88

switch(studentGrade) {
    case  (studentGrade >= 90):
        console.log("You got an A");
        break;
    case (studentGrade >= 80):
        console.log("You got a B")
        break;
    case (studentGrade >= 70):
        console.log("You got a C")
        break;
    case (studentGrade >= 60):
        console.log("YOu got a D")
        break;
    default:
        console.log("You got an F")
        break;
}
// expressions cannot be used for switch statements it only works with literals

// Write a function that accepts the top three bowling scores and returns the average.
console.log("November 30th Warmups");
console.log("Question 1");

function averageScore(firstScore, secondScore, thirdScore){
    let average = ((firstScore + secondScore + thirdScore) / 3);
        return average.toFixed(0);
}

console.log(averageScore(100, 289, 250));
console.log(averageScore(230, 150, 290));

// Write a function that accepts the best score and returns true if its divisible by 3 or 5 and false if it’s not
console.log("Question 2");

function divisibleByThreeAndFive(topScore){
    return (topScore % 3 === 0 && topScore % 5 === 0);
}
console.log(divisibleByThreeAndFive(300));
console.log(divisibleByThreeAndFive(98));

function threeAndFive(firstPlace){
    if(typeof firstPlace === "number") {
        return (firstPlace % 3 === 0 && firstPlace % 5 === 0);
    } else {
        return ("That's not a number");
    }
}
console.log(threeAndFive(150));
console.log(threeAndFive(99));


// Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”) and returns it in all lower case
// BONUS: return it with a space between each word
console.log("Question 3");


function toLowerCase(name){
    if(typeof name == "string"){
        return name.toLowerCase();
    }else return ("That's not a string");
}
console.log(toLowerCase("ThEbEsTbOwLiNgPlAcEever"));

// Given these variables: let score = 109; let name = “bowling Is Fun”; let isBowlingFun = true; let players = [“tom”, “jerry”, “Garfield”];
// Write a function that returns the type of each of the variables (call the function once per variable);
console.log("Question 4");

let score = 109;
let name = "bowling Is Fun";
let isBowlingFun = true;
let players = ["Tom", "Jerry", "Garfield"];

function whatIsIt(variable){
    return (typeof variable);
}

console.log(whatIsIt(score));
console.log(whatIsIt(name));
console.log(whatIsIt(isBowlingFun));
console.log(whatIsIt(players));

// Write a function that executes all of the above functions
console.log("Question 5");

/*function allTheFunctions(){
    console.log(arguments.length)
    if (arguments.length == 3){
        let average = ((arguments[0] + arguments[1] + arguments[2]) / 3)
        console.log(arguments[0])
        return average.toFixed(0)
    }else if (arguments.length == 1){

    }


}*/
function allTheFunctions(){
    if (arguments.length == 3){
        let resultAverage = averageScore(arguments[0], arguments[1], arguments[2])
        let resultOfAll = [("Average " + resultAverage), threeAndFive(arguments[0]), toLowerCase(arguments[0]), whatIsIt(arguments[0]),
        threeAndFive(arguments[1]), toLowerCase(arguments[1]), whatIsIt(arguments[1]), threeAndFive(arguments[2]),
        toLowerCase(arguments[2]), whatIsIt(arguments[2])]
            return (resultOfAll)
    }else {
        let resultOne = threeAndFive(arguments[0]);
        let resultTwo = toLowerCase(arguments[0]);
        let resultThree = whatIsIt(arguments[0]);
        let results = [resultOne, resultTwo, resultThree];
        return (results)
    }
}

// function allTheFunctions(){
//      if (arguments.length == 3){
//          return averageScore(arguments[0], arguments[1], arguments[2])
//      }else {
//          let resultOne = threeAndFive(arguments[0]);
//          let resultTwo = toLowerCase(arguments[0]);
//          let resultThree = whatIsIt(arguments[0]);
//          let results = [resultOne, resultTwo, resultThree];
//          return (results)
//      }
//  }
console.log("First One");
console.log(allTheFunctions(200, 300, 200));
console.log("Second One");
console.log(allTheFunctions(score));
console.log("Third One");
console.log(allTheFunctions("ThEbEsTbOwLiNgPlAcEeVeR"));
console.log("Fourth One");
console.log(allTheFunctions(isBowlingFun));
console.log("Fifth One");
console.log(allTheFunctions(players));
console.log("Sixth One");
console.log(allTheFunctions(150));

//Copy and execute the following functions, and find the Error: (Hint: try console logging the result)
console.log("Question 6")

function myFunction(firstName, lastName){
    return firstName + " " + lastName;
};
console.log(myFunction("Edgar", "Gomez"));



function thatsNotMyName(name) {
    if(name = "Laura"){
        return "that's me!, I'm " + name;
    } else {
        return "that's not my name";
    }
}
console.log(thatsNotMyName("Laura"));


/*
describe('sayHello', function() {
    it('should be a defined function', function (){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('sayHello("Jane") should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('sayHello("Alex") should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
})*/
function sayHello(name) {
    return "Hello, " + name + "!";
}
sayHello("Jane")
sayHello("Alex")
