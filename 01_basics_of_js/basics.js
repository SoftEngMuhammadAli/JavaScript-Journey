// use only const and let
const accountId = 1122
let email = 'user@gmail.com'
// prefer not to use `var`
var password = '12345'

// this is also possible / applicable, but not recommended
city = 'swl'

///used to print one by one
console.log(accountId);

///this can take many variables so you can print all in one
///instead of writing console.log one by one for each
console.table([
    accountId,
    email,
    password,
    city
])
