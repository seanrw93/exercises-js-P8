// Create your function here

function calculate(a, b, operator) {
    let result = 0;
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
                return "Division by zero is not allowed";
            }
            result = a / b;
            break;
        default:
            return "Invalid operator";
    }

    return result;
}

// Exemples of usage
console.log(calculate(5, 3, '+'));   // Displays 8
console.log(calculate(10, 4, '-'));  // Displays 6
console.log(calculate(7, 2, '*'));   // Displays 14
console.log(calculate(12, 3, '/'));  // Displays 4
console.log(calculate(8, 0, '/'));   // Displays "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Displays "Invalid operator"

