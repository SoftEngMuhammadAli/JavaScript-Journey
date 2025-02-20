let user = 'admin';
let pass = 'admin';

let username = prompt('Enter your username');
let password = prompt('Enter your password');

if (username == user && password == pass) {
    document.write('Login successful');
} else {
    document.write('Login failed');
}