const display = document.getElementById('display');

const displayPattern = /^\d+(\.\d+)?([\+\-\*\/])\d+(\.\d+)?$/;
const lettersPattern = /[a-zA-Z]/;

const errorMessage = "Please enter a valid sum"

function appendToDisplay(value) {
  if (display.value.match(lettersPattern)) {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  const match = display.value.match(displayPattern);
  
  if (!match) {
    display.value = errorMessage; // If the input doesn't match the pattern, exit the function
  }

  // Extract numbers and operator from the match groups
  const a = parseFloat(match[0].split(match[2])[0]); // First number
  const b = parseFloat(match[0].split(match[2])[1]); // Second number
  const operator = match[2]; // Operator

  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b === 0) {
        result = 'Cannot divide by zero';
      } else {
        result = a / b;
      }
      break;
  }

  // Display the result
  display.value = result;
}
