let currentInput = '';
let currentOperation = null;
let displayElement = document.getElementById('display');
let equalsButton = document.getElementById('equals');
let resetButton = document.getElementById('reset');
document.querySelectorAll('[data-value]').forEach(button => {
  button.addEventListener('click', () => {
    appendToDisplay(button.getAttribute('data-value'));
  });
});
document.querySelectorAll('[data-operation]').forEach(button => {
  button.addEventListener('click', () => {
    setOperation(button.getAttribute('data-operation'));
  });
});
equalsButton.addEventListener('click', calculate);
resetButton.addEventListener('click', clearDisplay);
function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}
function setOperation(operation) {
  if (currentInput !== '') {
    currentOperation = operation;
    appendToDisplay(' ' + operation + ' ');
  }
}
function calculate() {
  try {
    const [left, op, right] = currentInput.split(' ');
    const num1 = parseFloat(left);
    const num2 = parseFloat(right);
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Invalid expression');
    }
    let result;
    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          throw new Error('Cannot divide by zero');
        }
        result = num1 / num2;
        break;
      default:
        throw new Error('Invalid operator');
    }
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    displayError(error.message);
  }
}
function clearDisplay() {
  currentInput = '';
  currentOperation = null;
  updateDisplay();
}
function updateDisplay() {
  displayElement.textContent = currentInput;
}
function displayError(message) {
  currentInput = '';
  currentOperation = null;
  displayElement.textContent = message;
}
