const fs = require('fs');

/// read File Content 
fs.readFile("README.md", 'utf8', (err, data) => {
    if (err) {
        console.log("Error", err);
        return;
    } else {
        console.log(data);
    }
});

/// Append File
/* -> The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
*/
fs.appendFile("my_file.txt", "The content for the my_file\n", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


/// Open File
/* -> The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
    
    -> Create a new, empty file using the open() method:
*/
fs.open("new_file.txt", 'w', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

/// Write File
/* -> The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

    -> Create a new file using the writeFile() method:
*/

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});


/*  -> The fs.appendFile() method appends the specified content at the end of the specified file:
    -> Append "This is my text." to the end of the file "mynewfile1.txt":
*/
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});


/*
-> The fs.writeFile() method replaces the specified file and content:
-> Replace the content of the file "mynewfile3.txt":
*/
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});

/// Delete
fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});


/// rename file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});
