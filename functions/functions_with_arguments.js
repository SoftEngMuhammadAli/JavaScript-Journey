function displayNumberMultiplication(number1, number2) {
  let result = number1 * number2;
  document.write(`${number1} * ${number2} = ${result}`);
  return result;
}

let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));

displayNumberMultiplication(number1, number2);
