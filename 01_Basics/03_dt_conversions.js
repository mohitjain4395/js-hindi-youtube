// converting int to string
/*
let score = "33"
let score_in_num = Number(score)

console.log(score);
console.log(score_in_num);

console.log(typeof score);
console.log(typeof score_in_num);

// it converts string to number without any error even when it is not convertible, but its value is NaN (not a number)
let num = "33abc"
//let num = null
//let num = undefined // in this case also, it convert to NaN
//let num = true // it will 1(true) and 0(false)
let num_in_int = Number(num)
console.log(typeof num_in_int);
console.log(num_in_int);

// also, it converts null to 0
*/
// ---------------------------------------------------------------------------------------------
// convert int to boolean
//let login = 1
// let login = "" => false
// let login = "hello" => true
//let login_bool = Boolean(login)
//console.log(login_bool);
// ---------------------------------------------------------------------------------------------
// convert to string
/*
let num = 45
let num_in_str = String(num)
console.log(num_in_str);
console.log(typeof num_in_str);
*/
// ---------------------------------------------------------------------------------------------
// operations

// console.log(3+2);
// console.log(3-2);
// console.log(3*2);
// console.log(3/2);
// console.log(3**2);
// console.log(3%2);
// ---------------------------------------------------------------------------------------------
//console.log("Different memory type: stack and heap");
// let myname = "mynameHello" // it will store in stack
// let myname2 = myname // copying one variable to another
// myname2 = "this is myname 2" // since it stores in stack, both myname and myname2 now have different value
// console.log(myname);
// console.log(myname2);
// string can be stored in heap if it is created using new

// objects are stored in heap, not matter whether they are created using new operator or not
let myobj = {
    newname: "Mohit Jain",
    age: 25
}
console.log(typeof myobj);

let newobj = myobj
newobj.newname = "Rohit Jain"

console.log(myobj.newname);
console.log(newobj.newname);