let grade = prompt('Enter your grade (A, B, C, D, F):').toUpperCase();

switch (grade) {
    case 'A':
        document.write('Excellent!');
        break;
    case 'B':
        document.write('Good job!');
        break;
    case 'C':
        document.write('You can do better.');
        break;
    case 'D':
        document.write('Needs improvement.');
        break;
    case 'F':
        document.write('Fail.');
        break;
    default:
        document.write('Invalid grade.');
        break;
}