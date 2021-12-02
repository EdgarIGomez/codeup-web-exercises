var i = 1

while (i < 65536){
    console.log(i * 2);
    i = (i * 2)
}

var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones)
var remainingCones;
do {
    let conesSold = Math.floor(Math.random() * 5) + 1;

    console.log(conesSold)
    console.log ("I have to sell " + (allCones - conesSold) + " more cones.");

} while ((allCones == 0))