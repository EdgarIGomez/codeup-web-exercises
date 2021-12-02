/*
for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}*/
// Create a function named showMultiplicationTable thataccepts a number and
// console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num){
    for (var i = 1; i <= 10; i++) {
        console.log((num + " x " + i + " = " + (num * i)))
    }
}
showMultiplicationTable(7)
// Use a for loop and the code from the previous lessons to generate
// 10 random numbers between 20 and 200 and output to the console whether each number is odd or even



for (var i = 0; i < 10; i++){
    let randomBetween20And200 = Math.floor(Math.random() * (200 - 20) + 20);
    if(randomBetween20And200 % 2 === 0){
        console.log(randomBetween20And200 + " is even")
    }else {
        console.log(randomBetween20And200 + " is odd" )
    }

}


for(var i = 0; i < 10; i++) {
    for(var k = 0; k < i; k++) {
        console.log(i);
    } console.log("\n")
}


for(var i = 100; i > 0; i = (i - 5)){
    console.log(i)
}
