// Sample JSON data
const jsonData = `{
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}`;

// Parse JSON string to JavaScript object
const obj = JSON.parse(jsonData);
console.log(obj);

// Accessing object properties
console.log(`Name: ${obj.name}`);
console.log(`Age: ${obj.age}`);
console.log(`City: ${obj.city}`);

// Modify object properties
obj.age = 31;
console.log(`Updated Age: ${obj.age}`);

// Convert JavaScript object back to JSON string
const updatedJsonData = JSON.stringify(obj);
console.log(updatedJsonData);
