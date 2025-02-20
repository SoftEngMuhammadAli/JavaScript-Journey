// 1. Logical AND (&&)
let age = 25;
let hasID = true;
console.log(age >= 18 && hasID);
// true (both conditions are true)

// 2. Logical OR (||)
let isWeekend = true;
let isHoliday = false;
console.log(isWeekend || isHoliday);
// true (at least one condition is true)

// 3. Logical NOT (!)
let isSunny = false;
console.log(!isSunny);
// true (negates the value of isSunny)

// 4. Ternary Operator (condition ? exprIfTrue : exprIfFalse)
let score = 85;
let grade = score >= 50 ? "Pass" : "Fail";
console.log(grade);
// "Pass" (score is greater than or equal to 50)
