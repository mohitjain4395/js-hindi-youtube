
// you can use ; in javascript but its not compulsory like c++ or java

const account_id = 12455
let account_email = "hellp@gmail.com"
var account_pwd = "12345"
account_city = "Jaipur"

// account_id = 5 // not allowed
/*
Prefer not to use var
because of its block and functional scope
*/
account_email = "chalo@gmail.com"
account_pwd = "45668"
account_city = "Indore"

// lets just create variable and not initialize, js call it undefined
let account_state;
console.table([account_id, account_email, account_pwd, account_city, account_state])