const decimalInput = document.querySelector("#decimalInput");
const binaryResult = document.querySelector("#binaryResult");

function convertToBinary() {
    const value = decimalInput.value; 

    if (value === "") {
        alert("Empty input");
    }

    let num = parseInt(value);
    if (isNaN(num) && value !== "") {
        alert("Not a number");
    }

    let results = [];
    while (num > 0) {
        results.push(num % 2);
        num = Math.floor(num / 2);
    }
    const binaryString = results.reverse().join("");
    binaryResult.textContent = binaryString;
}
