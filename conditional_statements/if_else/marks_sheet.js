let marks = parseInt(prompt('Enter your marks'));

if (marks >= 0 && marks <= 32) {
    document.write('Fail');
} else if (marks >= 33 && marks <= 50) {
    document.write('Average');
} else if (marks >= 51 && marks <= 70) {
    document.write('Good');
} else if (marks >= 71 && marks <= 100) {
    document.write('Excellent');
} else {
    document.write('Invalid marks');
}