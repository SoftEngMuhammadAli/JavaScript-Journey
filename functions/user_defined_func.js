function displayMessage() {
  console.log("Hello World!");
}

displayMessage();

function askForInputNumber() {
  let num = parseInt(prompt("Enter a number: "));
  document.write("You entered: " + num);
  return num;
}

askForInputNumber();
