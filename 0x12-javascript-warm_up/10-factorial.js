#!/usr/bin/node

// Write a script that computes and prints a factorial
const [num] = process.argv.slice(2);

// The first argument is integer (argument can be cast as integer) used for computing the factorial
// Factorial of NaN is 1
// You must do it recursively
// You must use a function
// You must use console.log(...) to print all output
// You are not allowed to use var\

function factorial(n) {
    n = parseInt(n);
    if (isNaN(n)) {
        return 1;
    }
    if (n == 0) {
        return 0;
    }
    return n * factorial(n-1);
}

console.log(factorial(parseInt(num)));