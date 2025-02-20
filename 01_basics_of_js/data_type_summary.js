/// 2 Types 1 is Primitive & 2nd is Non-Primitive
// Primitive Data Type
// 7 Categories
/*
    String
    Number
    Boolean
    Null
    undefined
    Symbol > to make any value unique
    BigInt
*/

//Reference Type / Non-Primitive
/*
    Array
    Objects
    Functions
*/

// --------------------------------------------------------------------------------------------------------

// Primitive Data Types

// 1. String
let name = "John Doe"; // A sequence of characters
console.log(typeof name); // Output: string

// 2. Number
let age = 25; // Any numeric value
console.log(typeof age); // Output: number

// 3. Boolean
let isMarried = false; // Represents true or false
console.log(typeof isMarried); // Output: boolean

// 4. Null
let emptyValue = null; // Represents intentional absence of a value
console.log(emptyValue); // Output: null
console.log(typeof emptyValue); // Output: object (known quirk in JavaScript)

// 5. undefined
let notAssigned; // A variable declared but not assigned a value
console.log(notAssigned); // Output: undefined
console.log(typeof notAssigned); // Output: undefined

// 6. Symbol
let uniqueID = Symbol("id"); // Creates a unique value
console.log(uniqueID); // Output: Symbol(id)
console.log(typeof uniqueID); // Output: symbol

// 7. BigInt
let bigNumber = 123456789012345678901234567890n; // Very large integers
console.log(bigNumber); // Output: 123456789012345678901234567890n
console.log(typeof bigNumber); // Output: bigint

// Non-Primitive (Reference) Data Types

// 1. Array
let fruits = ["Apple", "Banana", "Cherry"]; // A collection of values
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
console.log(typeof fruits); // Output: object

// 2. Object
let person = {
    name: "John Doe",
    age: 30,
}; // A collection of key-value pairs
console.log(person); // Output: { name: "John Doe", age: 30 }
console.log(typeof person); // Output: object

// 3. Function
function greet() {
    return "Hello, World!";
} // A block of reusable code
console.log(greet()); // Output: "Hello, World!"
console.log(typeof greet); // Output: function
