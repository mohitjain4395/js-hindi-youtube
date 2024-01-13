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

let myname = new String("Mohit Jain is my name")
//console.log(myname.split(' '));
console.log(myname.replace('M', 'R'));
console.log(myname.includes("Jain"));
console.log(myname.toUpperCase());

let rename = "   heeloendd "
console.log(rename.trim());

