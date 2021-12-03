var i = 1

while (i < 65536){
    console.log(i * 2);
    i = (i * 2)
}

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have " + allCones + " cones");
do {
    conesSold = Math.floor(Math.random() * 5) + 1;
    console.log(conesSold + " cones was sold");
    allCones = (allCones - conesSold);
    if (allCones < 0) {
        console.log("Sorry I can't sell you " + conesSold + " I only have " + (allCones + conesSold));
    } else if (allCones === 0) {
        console.log("Thanks for buying the rest of my cones");
    } else {
        console.log("Thanks for buying I have " + allCones + " cones left");
    }
}while (allCones > 0);

// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while (i < 10);