#!/usr/bin/node

// Write a script that prints the addition of 2 integers
const [a, b] = process.argv.slice(2);
// The first argument is the first integer
// The second argument is the second integer
// You have to define a function with this prototype: function add(a, b)
// You must use console.log(...) to print all output
// You are not allowed to use var

function add(a, b) {

    return (a+b);
}

// add();

console.log(parseInt(a)+ parseInt(b));
