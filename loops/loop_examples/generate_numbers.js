let numbers = [3, 4, 7];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        document.write(numbers[i] + ' is even');
    } else {
        document.write(numbers[i] + ' is odd');
    }
    i++;
}
