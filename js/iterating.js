(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Edgar", "Tomas", "Ramon", "Jorge"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    console.log("\n")
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log("\n");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let i = 0; i < names.length; i++){
        console.log(names[i]);
    }
    console.log("\n");
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name){
        console.log("Hello my name is " + name + ".");
    });
    console.log("\n");
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function firstElement(array){
       if(Array.isArray(array)) {
           console.log(array[0]);
       } else{
           console.log("That is not an array.");
       }
    }
    firstElement([1, 2, 3, 4, 5]);

    function secondElement(array){
        if(Array.isArray(array)) {
            console.log(array[1]);
        } else{
            console.log("That is not an array.");
        }
    }
    secondElement([1, 2, 3, 4, 5]);

    function lastElement(array){
        if(Array.isArray(array)){
            let i = array.length - 1;
            console.log(array[i]);
        }else{
            console.log("That is not an array.");
        }
    }
    lastElement([1, 2, 3, 4, 5]);
    lastElement([1, 2, 3, 4])
})();