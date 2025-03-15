const dummyUsers = [
    {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: 1234567890,
        address: "123 Main St, New York, NY",
    },
    {
        name: "Bob Smith",
        email: "bob.smith@example.com",
        phone: 9876543210,
        address: "456 Elm St, Los Angeles, CA",
    },
    {
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        phone: 5551234567,
        address: "789 Oak St, Chicago, IL",
    },
    {
        name: "Diana Ross",
        email: "diana.ross@example.com",
        phone: 4449876543,
        address: "321 Maple St, Houston, TX",
    },
    {
        name: "Edward Norton",
        email: "edward.norton@example.com",
        phone: 3336789123,
        address: "654 Pine St, Miami, FL",
    },
];

const dummyProducts = [
    {
        id: 1,
        name: "Smartphone",
        price: 699,
        category: "Electronics",
        stock: 500,
    },
    { id: 2, name: "Laptop", price: 999, category: "Electronics", stock: 300 },
    {
        id: 3,
        name: "Headphones",
        price: 199,
        category: "Accessories",
        stock: 100,
    },
    {
        id: 4,
        name: "Running Shoes",
        price: 120,
        category: "Footwear",
        stock: 750,
    },
    { id: 5, name: "Smartwatch", price: 250, category: "Wearables", stock: 400 },
];

module.exports = { dummyUsers, dummyProducts };
