// we will learn here different functions available for string
let score = 100
let body_count = 2

// to print an statement, we don't use (variale + "" + ) kind of syntax
// In modern times, we use back tick (`${variable} and hello`), for example

// old way (out-fashioned)
// console.log("Hello my name is Mohit Jain, my score is "+score+" and my body count is "+body_count);

// new or better way is
// console.log(`Hello my name is Mohit Jain, my score is ${score} and my body count is ${body_count}`);

// --------------------------------------------------------------------------------------------------------- //
// String functions

// let myname = new String("Mohit Jain is my name")
// //console.log(myname.split(' '));
// console.log(myname.replace('M', 'R'));
// console.log(myname.includes("Jain"));
// console.log(myname.toUpperCase());

// let rename = "   heeloendd "
// console.log(rename.trim());

// let num = 1000000
// console.log(num.toLocaleString('en-IN')); // to put prper commas in number a/c to indian system

let newnum = 123.896
console.log(newnum.toFixed(2)); // round off to two decimal

console.log(newnum.toPrecision(3)); // it works on before decimal point, 3 means give precise value of 3 digit
