const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let userLanguagesAtLeastThree = users.filter(threeLanguages => threeLanguages.languages.length >= 3);
console.log(userLanguagesAtLeastThree);

//3. Use .map to create an array of strings where each element is a user's email address

let usersEmail = users.map(user => user.email)
console.log(usersEmail);

//4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let experienceAvg = users.reduce((total, currentTeacher) => {
    return total + currentTeacher.yearsOfExperience;
}, 0) / users.length;

console.log(experienceAvg);

//5. Use .reduce to get the longest email from the list of users.
// Can also used email variable made above for question 3
let longestEmail = users.reduce(function (previousUser, currentUser) {
    if(previousUser.length >= currentUser.email.length){
        return previousUser
    }else {
        return currentUser.email
    }
}, "");

console.log(longestEmail);

// console.log(" ".length)

//6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let instructors = users.reduce((allInstructors, currentUser) =>  allInstructors + " " + currentUser.name, "Your instructors are:")

//To put a period at the end and commas between the names
// let instructors = users.reduce((allInstructors, currentUser,index) => {
//     if(index === (users.length - 1)){
//         return allInstructors + " " + currentUser.name + "."
//     } else{
//         return allInstructors + " " + currentUser.name + ","
//     }
// }, "Your instructors are:")



console.log(instructors)

//Bonus: Use .reduce to get the unique list of languages from the list of users.

let uniqueLanguages = users.reduce((unique, currentUser) => {
    for(let i = 0; i < currentUser.languages.length; i++){
        if(!unique.includes(currentUser.languages[i])) {
            unique.push(currentUser.languages[i]);
        }
    } return unique

}, [])

console.log(uniqueLanguages)