/// converting int to string
let score = 33

console.log("The Int " + score + " is type of " + typeof score);
// you can also do like this
// console.log(typeof (score));

let valueInString = score.toString();
console.log(typeof valueInString);

/// converting string to int
let stringNumber = "100.45";
console.log("The String " + stringNumber + " is type of " + typeof stringNumber);
let getStringNumber = Number(stringNumber);
console.log("The String " + stringNumber + " is type of " + typeof getStringNumber);


let s1 = "23";
let s2 = "Manya";
const s3 = '100';

console.log(typeof +s1, typeof +s2, typeof +s3);