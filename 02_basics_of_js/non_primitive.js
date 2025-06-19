// Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Objects
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName()); // Output: John Doe

// Functions
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Dates
let today = new Date();
console.log(today); // Output: current date and time

// Regular Expressions
let pattern = /w3schools/i;
let text = "Visit W3Schools!";
console.log(pattern.test(text)); // Output: true
