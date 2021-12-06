(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // var person = {
    //     firstName: "Edgar",
    //     lastName: "Gomez"
    // };
    // console.log(person.firstName)
    // console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // person.sayHello = function () {
    //     console.log("Hello from " + this.firstName + " " + this.lastName + "!")
    // }
    // person.sayHello()
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    // // console.log(shoppers.length);
    // // console.log(shoppers[1].amount) //this is how to get the the specific values in the different objects
    // // console.log(shoppers[0].amount)
    // function discountPrice(object) {
    //     for (let i = 0; i < object.length; i++) {
    //         if (object[i].amount > 200) {
    //             let discountedAmount = (object[i].amount - (object[i].amount * .12))
    //              console.log(object[i].name + " your total is " + object[i].amount + " your discounted price is " + discountedAmount);
    //         } else {
    //              console.log(object[i].name + " your total is " + object[i].amount + " you do not get a discount sorry.")
    //         }
    //     }
    // }
    // discountPrice(shoppers);

    
    
    
    
    // function shopperDiscount(object) {
    //     for(let i = 0; i < object.length; i++) {
    //         if(object.amount[i] > 200) {
    //             let dicountedAmount = object.amount[i] - (object.amount[i] * .12);
    //             console.log(object.name[i] + " your total is " + object.amount[i] + " your discounted price is " + dicountedAmount);
    //         } else {
    //             console.log(object.name[i] + " your total is " + object.amount[i] + " you do not get a discount sorry.")
    //         }
    //     }
    // }
    // shopperDiscount(shoppers) ///Was essentially correct just didnt call the values inside the objects correctly

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "Coding for Dummies",
            author: {
                firstName: "Laura",
                lastName: "Ruiz-Rhoers"
            }
        },
        {
            title: "Dinosaurs and other Mythical Creatures",
            author: {
                firstName: "Palaeon",
                lastName: "Tologist"
            }
        },
        {
            title: "Social Anxiety and How To Deal With It",
            author: {
                firstName: "Nervous",
                lastName: "Rex"
            }
        },
        {
            title: "Having Confidence and Trying Not To Put Yourself Down",
            author: {
                firstName: "Cry",
                lastName: "Ceratops"
            }
        },
        {
            title: "Dealing With Bad Luck Can't Be All Bad",
            author: {
                firstName: "Badluck",
                lastName: "Bronto"
            }
        },
    ];
    // console.log(books[0].title)
    // console.log(books[2].author.firstName)
    // console.log(books[3].author.lastName)
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    function bookInfo(object){
        for(let i = 0; i < Object.keys(object).length; i++){
            console.log("Book # " + (i + 1));
            console.log("Title: " + object[i].title);
            console.log("Author: " + object[i].author.firstName + " " + object[i].author.lastName);
            console.log("----")
        }
    }
    bookInfo(books);
    // console.log(Object.values(books));
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, authorFirstName, authorLastName){
        
    }
})();