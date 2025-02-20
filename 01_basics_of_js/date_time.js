// date_time.js

// 1. Creating Date Objects
let currentDate = new Date();  // Current date and time
console.log("Current Date and Time:", currentDate);

// 2. Creating Date Objects with Specific Date
let specificDate = new Date('2024-11-24');
console.log("Specific Date:", specificDate);

// 3. Getting Date and Time Components
console.log("Year:", currentDate.getFullYear());  // Get the full year (e.g., 2024)
console.log("Month (0-11):", currentDate.getMonth());  // Get the month (0-11, where 0 = January)
console.log("Day of the Month:", currentDate.getDate());  // Get the day of the month (1-31)
console.log("Day of the Week (0-6):", currentDate.getDay());  // Get the day of the week (0-6, where 0 = Sunday)
console.log("Hours:", currentDate.getHours());  // Get the hour (0-23)
console.log("Minutes:", currentDate.getMinutes());  // Get the minutes (0-59)
console.log("Seconds:", currentDate.getSeconds());  // Get the seconds (0-59)
console.log("Milliseconds:", currentDate.getMilliseconds());  // Get milliseconds (0-999)

// 4. Setting Date and Time Components
let newDate = new Date();
newDate.setFullYear(2025);  // Set the year to 2025
newDate.setMonth(0);  // Set the month to January (0)
newDate.setDate(15);  // Set the day of the month to 15
newDate.setHours(10);  // Set the hours to 10 AM
newDate.setMinutes(30);  // Set the minutes to 30
console.log("Updated Date:", newDate);

// 5. Date Formatting
let formattedDate = currentDate.toLocaleDateString();  // Localized date string
let formattedTime = currentDate.toLocaleTimeString();  // Localized time string
console.log("Formatted Date:", formattedDate);
console.log("Formatted Time:", formattedTime);

// 6. ISO String Format
let isoString = currentDate.toISOString();  // Get ISO 8601 formatted string
console.log("ISO String Format:", isoString);

// 7. Time in Milliseconds
let currentTimestamp = currentDate.getTime();  // Get the time in milliseconds since January 1, 1970
console.log("Current Time in Milliseconds:", currentTimestamp);

// 8. Adding/Subtracting Time
// Add 1 day (24 hours) to the current date
let futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 1);
console.log("Future Date (1 day ahead):", futureDate);

// Subtract 1 hour from the current date
let pastDate = new Date();
pastDate.setHours(currentDate.getHours() - 1);
console.log("Past Date (1 hour earlier):", pastDate);

// 9. Comparing Dates
let date1 = new Date('2024-11-01');
let date2 = new Date('2024-11-24');
console.log("Is Date1 earlier than Date2?", date1 < date2);  // true (Date1 is earlier than Date2)

// 10. Time Zones (Example of using UTC)
let utcDate = new Date(Date.UTC(2024, 10, 24, 12, 0, 0));  // November 24, 2024, at 12:00 UTC
console.log("UTC Date:", utcDate.toISOString());

// 11. Handling Time Duration (Using Milliseconds)
let start = new Date();  // Start time
// Simulate a delay (e.g., 2 seconds)
setTimeout(() => {
    let end = new Date();  // End time
    let duration = end - start;  // Duration in milliseconds
    console.log("Time duration (ms):", duration);  // Output: Duration in milliseconds
}, 2000);  // Wait for 2 seconds before logging the duration

