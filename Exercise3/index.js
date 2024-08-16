// Create your function here

function calculateAverage(numbers) {
    if (!Array.isArray(numbers)) {
        return "No numbers to calculate average";
    }

    for (const number of numbers) {
        if (isNaN(number)) {
            return "Invalid number";
        }
    }

    const total = numbers.reduce((acc, number) => acc + number, 0);
    const average = total / numbers.length;
    return average;
}

// Exemples of usage
console.log(calculateAverage([5, 10, 15])) // get 10
console.log(calculateAverage([10, 20, 30, 20])) // get 20
console.log(calculateAverage()) // No numbers to calculate average


