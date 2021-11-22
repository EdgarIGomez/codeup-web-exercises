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

//var price2 = "2.7";
//console.log(price2.toFixed(2));
//NaN

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

console.log(samples.indexOf(c));
// console.log(samples.indexOf(C)); doesnt work with capital letter

console.log(samples.substring(6,12));
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

studentcanjoinclass = classnotfull && fitsherschedule

productofferapplied = (buy2items && notexpired) || (premiummember && notexpired)

//4
var username = 'codeup';
var password = 'notastrongpassword';
var passwordlong = password.length >= 5;
var usernameinpassword = password.replace(username, 0)
var usernamelength = username.length <= 20

