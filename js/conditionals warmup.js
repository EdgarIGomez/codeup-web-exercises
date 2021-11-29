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