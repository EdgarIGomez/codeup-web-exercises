/*
for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}*/
// Create a function named showMultiplicationTable thataccepts a number and
// console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//1

console.log("-----Number 2-----");

function showMultiplicationTable(num){
    for (var i = 1; i <= 10; i++) {
        let answer = num * i;
        console.log((num + " x " + i + " = " + answer));
    }
}
showMultiplicationTable(7);
// Use a for loop and the code from the previous lessons to generate
// 10 random numbers between 20 and 200 and output to the console whether each number is odd or even

console.log("-----Number 3-----");

for (var i = 0; i < 10; i++){
    let randomBetween20And200 = Math.floor(Math.random() * (200 - 20) + 20);
    if(randomBetween20And200 % 2 === 0){
        console.log(randomBetween20And200 + " is even");
    }else {
        console.log(randomBetween20And200 + " is odd" );
    }

}

console.log("-----Question 4-----")

for(var i = 0; i < 10; i++) {
    let num = ""
    for(var k = 0; k < i; k++) {
        num = num + i;

    } console.log(num);
}
//let num = ""
// for(let i = 0; i < 10; i++) {    /// failed code
//     num = num + i;
//     console.log(num)
// }

console.log("-----Question 5-----");

for(var i = 100; i > 0; i = (i - 5)){
    console.log(i);
}
