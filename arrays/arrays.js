let names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack",
];

// Accessing elements
console.log(names[0]); // Alice
console.log(names[1]); // Bob

// Adding elements
names.push("Karen"); // Adds 'Karen' to the end of the array
console.log(names);

// Removing elements
names.pop(); // Removes the last element ('Karen')
console.log(names);

names.shift(); // Removes the first element ('Alice')
console.log(names);

names.unshift("Zara"); // Adds 'Zara' to the beginning of the array
console.log(names);

// Finding elements
let index = names.indexOf("Charlie");
console.log(index); // 2

// Slicing the array
let slicedNames = names.slice(1, 4);
console.log(slicedNames); // ['Bob', 'Charlie', 'David']

// Iterating over the array
names.forEach(function (name) {
  console.log(name);
});

// Mapping the array
let upperCaseNames = names.map(function (name) {
  return name.toUpperCase();
});
console.log(upperCaseNames);

// Filtering the array
let filteredNames = names.filter(function (name) {
  return name.startsWith("D");
});
console.log(filteredNames); // ['David']

// Reducing the array
let concatenatedNames = names.reduce(function (accumulator, name) {
  return accumulator + ", " + name;
});
console.log(concatenatedNames);
