// 1. Basic Arithmetic Operations
let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);  // Output: 15
console.log("Subtraction:", num1 - num2);  // Output: 5
console.log("Multiplication:", num1 * num2);  // Output: 50
console.log("Division:", num1 / num2);  // Output: 2

// 2. Exponentiation (Power)
let base = 3;
let exponent = 4;
console.log("Exponentiation:", base ** exponent);  // Output: 81 (3^4)

// 3. Modulus (Remainder)
let dividend = 10;
let divisor = 3;
console.log("Modulus (Remainder):", dividend % divisor);  // Output: 1 (10 divided by 3 leaves a remainder of 1)

// 4. Math Object Operations
console.log("Math.PI:", Math.PI);  // Output: 3.141592653589793 (Value of PI)
console.log("Math.sqrt(16):", Math.sqrt(16));  // Output: 4 (Square root of 16)
console.log("Math.pow(2, 3):", Math.pow(2, 3));  // Output: 8 (2 raised to the power of 3)
console.log("Math.abs(-9):", Math.abs(-9));  // Output: 9 (Absolute value)
console.log("Math.max(3, 6, 2, 8):", Math.max(3, 6, 2, 8));  // Output: 8 (Maximum value)
console.log("Math.min(3, 6, 2, 8):", Math.min(3, 6, 2, 8));  // Output: 2 (Minimum value)

// 5. Rounding Numbers
let decimalNumber = 5.765;
console.log("Math.round(5.765):", Math.round(decimalNumber));  // Output: 6 (Rounds to the nearest integer)
console.log("Math.floor(5.765):", Math.floor(decimalNumber));  // Output: 5 (Rounds down)
console.log("Math.ceil(5.765):", Math.ceil(decimalNumber));  // Output: 6 (Rounds up)

// 6. Random Number Generation
console.log("Random number between 0 and 1:", Math.random());  // Output: A random decimal number between 0 and 1
console.log("Random integer between 1 and 10:", Math.floor(Math.random() * 10) + 1);  // Random number between 1 and 10

// 7. Number Conversion
let numString = "123.45";
let numFromString = Number(numString);  // Converts string to number
console.log("Converted Number:", numFromString);  // Output: 123.45
console.log("Is the number finite?", Number.isFinite(numFromString));  // Output: true (Checks if the number is finite)

// 8. BigInt Example
let bigIntNumber = 1234567890123456789012345678901234567890n;  // BigInt allows for very large integers
console.log("BigInt Number:", bigIntNumber);  // Output: 1234567890123456789012345678901234567890n
