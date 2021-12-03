let promptedNumber
do {
    promptedNumber = Number(prompt("Please put in a number between 1 -50"));
    if (promptedNumber > 50) {
        alert("That number is bigger than 50!")
        continue;
    } else if (promptedNumber % 2 === 0) {
        alert("That is not an odd number!");
        continue;
    } else if (isNaN(promptedNumber)) {
        alert("That is not an number!")
        continue;
    } else {
        alert("Yes that is a odd number that we can use!")
        break;
    }
} while (true)

 console.log(promptedNumber)

// How to keep the inserted prompted number to be stored or to stop the prompt to be keep being looped while inside the
 // loop
//  let oddRandomNumber = prompt("Choose an odd number between 1 - 50");
// console.log("Number to skip is " + oddRandomNumber);
// for (var i = 0; i <= 50; i++){
//        if ((oddRandomNumber % 2 === 0) || (oddRandomNumber > 50)){
//            oddRandomNumber = prompt("Wrong number choose an odd number between 1 - 50"); // won't stop looping if wrong input is put in
//            continue;
//        } if (i % 2 == 0){
//         continue;
//     } if (oddRandomNumber == i){
//         console.log("Yikes! Skipping number: " + oddRandomNumber);  //Now it uses the oddRandomNumber variable
//     } else {
//         console.log("Here is an odd number: " + i);
//     } if (i > 50){
//         break;
//     }
// }
// Above commented code puts both questions into one loop
// prompt("Choose a odd random number between 1 - 50")
console.log("Number to skip is " + promptedNumber);
for (var i = 0; i <= 50; i++){
      if (i % 2 == 0){
        continue;
    } if (promptedNumber == i){
        console.log("Yikes! Skipping number: " + promptedNumber);  //Now it uses the oddRandomNumber variable
    } else {
        console.log("Here is an odd number: " + i);
    } if (i > 50){
        break;
    }
}