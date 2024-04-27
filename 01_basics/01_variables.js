const accountId = 1455656
let accountEmail = "vivek123@gmail.com"
var accountPassword = "14155"
let accountState; // undefined
/*
Prefer not to use var 
because of issue in block scope and functional scope

let is the block scoped variable
Only work with let and const
*/
accountCity = "Delhi"

// accountId = 2 // const can't be changed



accountEmail = "vs@vs.com"
accountPassword = "652265532"
accountCity = "Mumbai"

console.log(accountId);
console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])