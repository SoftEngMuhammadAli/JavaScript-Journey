// Global variable
var globalVariable = "I am a global variable";

function exampleFunction() {
  // Local variable
  var localVariable = "I am a local variable";

  console.log(localVariable); // Output: I am a local variable
}

exampleFunction();

console.log(globalVariable); // Output: I am a global variable

// Uncommenting the following line will cause an error because localVariable is not accessible outside the function
// console.log(localVariable); // Error: localVariable is not defined
