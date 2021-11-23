//1
console.log("Part 1")
var a = 1;
var b = a++;

console.log(b);
var c = ++a;

console.log(c);
// a = 1 b = 1, c = 3

var d = "hello";
var e = false;

console.log(d++);
console.log(e++);
//d is NaN e is false

var perplexed;
console.log(perplexed + 2);
// NaN

var price = 2.7;
console.log(price.toFixed(2));
//2.70

//var prices = "2.7";
//console.log(prices.toFixed(2));
//Doesn't work as prices is string not a number

console.log(isNaN(0));
//False

console.log(isNaN(1));
//False

console.log(isNaN(""));
//False

console.log(isNaN("string"));
//True

console.log(isNaN("0"));
//False

console.log(isNaN("1"));
//False

console.log(isNaN("3.145"));
//False

console.log(isNaN(Number.MAX_VALUE));
//False

console.log(isNaN(Infinity));
//False

console.log(isNaN("true"));
//True

console.log(isNaN(true));
//False

console.log(isNaN("false"));
//True

console.log(isNaN(false));
//Flase

console.log(NaN == NaN);
//False


//2
console.log("Part 2")
var sample = ("Hello Codeup");

console.log(sample.length);

console.log(sample.toUpperCase());
console.log(sample.toLowerCase());

var students = " Students";
var samples = sample.concat(students)
console.log(samples);

var samples = samples.replace("Students", "Class");
console.log(samples);

console.log(samples.indexOf("c"));
console.log(samples.indexOf("C"));

console.log(samples.substring(samples.indexOf("C"), samples.indexOf("p") + 1));
//3
console.log("Part 3")

var price = 3;

var littlemermaid = 3;

var brotherbear = 5;

var hercules = 1;

var totalprice = price * (littlemermaid + brotherbear + hercules);

console.log(totalprice);

var google = 400;

var amazon = 380;

var facebook = 350;

var paycheck = (6 * google) + (4 * amazon) + (10 * facebook);

console.log(paycheck);
var classroomnotfull = true
var fitsschedule = true
var enrollinclass = (classroomnotfull && fitsschedule)
if (enrollinclass) {
    console.log("You're in class")
} else {
    console.log("Sorry you didn't make it.")
}
var buy2items = true
var notexpired = true
var premiummember = false


productofferapplied = (buy2items && notexpired) || (premiummember && notexpired)
if (productofferapplied) {
    console.log("Here is your offer.")
} else {
    "Sorry that isn't available to you."
}
//4
console.log("Part 4")

var username = 'codeup';

var password = 'notastrongpassword';


var passwordlong = password.length >= 5;

console.log(passwordlong)

var usernameinpassword = password.replace(username, " ") == password

console.log(usernameinpassword)

var usernamelength = (username.length) <= 20

console.log(usernamelength)

var whitespace = ((username.trim() == username) && (password.trim() == password))

console.log(whitespace)