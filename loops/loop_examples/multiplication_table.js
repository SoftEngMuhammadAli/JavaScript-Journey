const number = parseInt(prompt('Enter an integer: '));

const countNumber = 10;

for (let i = 1; i <= countNumber; i++) {
    const result = number * i;
    document.write(`${number} * ${i} = ${result}`);
}