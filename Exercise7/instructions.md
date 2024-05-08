# Instructions

Create a converter that takes a user-entered decimal number and displays its binary representation. The HTML and CSS codes are previously provided to you, you must therefore set up the JS function `convertToBinary()` which will allow the conversion. Analyze the HTML code carefully before starting to develop the function.

1. When user enters a decimal number and clicks the "Convert" button, the number should be converted to binary.
2. Display the binary conversion result below the input field.

## Useful information: Converting a decimal number to binary

Converting a decimal number to binary involves dividing the decimal number by 2 repeatedly and noting the remainders at each step. Here are the general steps to perform this conversion:

1. Divide the decimal number by 2.
2. Write down the remainder of the division (either 0 or 1).
3. Continue dividing the previous quotient by 2 and record the remainders until the quotient becomes 0.
4. The noted remainders form the binary representation of the decimal number, read from bottom to top.

For example, to convert the decimal number 10 to binary:

```
Step 1: 10 ÷ 2 = 5, remainder 0
Step 2: 5 ÷ 2 = 2, remainder 1
Step 3: 2 ÷ 2 = 1, remainder 0
Step 4: 1 ÷ 2 = 0, remainder 1
```

By reading the remainders from bottom to top (1010), we obtain the binary representation of the decimal number 10.

> If you have difficulties, you can refer to the courses [Learn programming with JavaScript](https://openclassrooms.com/en/courses/5664271-learn-programming-with-javascript), [Discover How to Build Programs With Algorithms](https://openclassrooms.com/en/courses/7864551-discover-how-to-build-programs-with-algorithms), and [Write JavaScript for the Web](https://openclassrooms.com/en/courses/5493201-write-javascript-for-the-web).
