const accountId=123
let accountEmail="ssr@gmail.com"
var accountPassword="12345"
accountCity="Bhopal"

//accountId=4
//console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail="ss@gmail.com"
accountPassword="123"
accountCity="Bangalore"
let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
