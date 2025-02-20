// Memory Allocation Example: Stack vs. Heap

// Primitive types are stored in Stack memory
let primitive1 = 42; // Stored directly in Stack
let primitive2 = primitive1; // Copies the value
primitive2 = 50;

console.log(primitive1); // Output: 42 (original value is unchanged)
console.log(primitive2); // Output: 50 (copied value is modified)

// Reference types are stored in Heap memory, with their references in Stack memory
let reference1 = { name: "John" }; // Object is stored in Heap, reference in Stack
let reference2 = reference1; // Reference (not value) is copied
reference2.name = "Jane";

console.log(reference1.name); // Output: "Jane" (both references point to the same object)
console.log(reference2.name); // Output: "Jane"

// Stack vs. Heap Explanation
/*
- Stack: Used for storing Primitive data types. Values are stored directly and copied by value.
  Example: Numbers, Strings, Booleans, etc.
- Heap: Used for storing Reference data types. Objects, Arrays, and Functions are stored in Heap memory,
  and only their references (pointers) are stored in the Stack.
  Example: Objects, Arrays, Functions.
*/
