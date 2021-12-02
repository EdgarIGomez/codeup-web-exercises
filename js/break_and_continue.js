 let oddRandomNumber;
     do {
         prompt("Choose an odd number between 1 - 50.");
    }while (oddRandomNumber % 2 === 0)

console.log(oddRandomNumber);
// How to keep the inserted prompted number to be stored or to stop the prompt to be keep being looped while inside the
 // loop

for (var i = 0; i <= 50; i++){
        if (i % 2 == 0){
        continue;
    } if (randomNumber == i){
        console.log("Yikes! Skipping number: " + randomNumber)
    } else {
        console.log("Here is an odd number: " + i)
    } if (i > 50){
        break
    }
}

// prompt("Choose a odd random number between 1 - 50")