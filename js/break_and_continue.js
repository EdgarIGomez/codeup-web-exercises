
 //     do {
 //         prompt("Choose an odd number between 1 - 50.");
 //    }while (oddRandomNumber % 2 === 0)


// How to keep the inserted prompted number to be stored or to stop the prompt to be keep being looped while inside the
 // loop
 let oddRandomNumber = prompt("Choose an odd number between 1 - 50");
console.log("Number to skip is " + oddRandomNumber);
for (var i = 0; i <= 50; i++){
       if ((oddRandomNumber % 2 === 0) && oddRandomNumber <= 50){
           let oddRandomNumber = prompt("Choose an odd number between 1 - 50"); // won't stop looping if wrong input is put in
           continue;
       } if (i % 2 == 0){
        continue;
    } if (oddRandomNumber == i){
        console.log("Yikes! Skipping number: " + oddRandomNumber);  //Now it uses the oddRandomNumber variable
    } else {
        console.log("Here is an odd number: " + i);
    } if (i > 50){
        break;
    }
}

// prompt("Choose a odd random number between 1 - 50")