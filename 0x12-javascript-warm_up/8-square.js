#!/usr/bin/node

// Write a script that prints a square
const args = process.argv.slice(2);

// The first argument is the size of the square
let squareSize = parseInt(args[0]);
let square = '';

// print vertically
for (let i = 0; i < squareSize; i++) {
    square = '';
    for (let j = 0; j < squareSize; j++) {
        square += 'X';
    }
    console.log(square);
}




    // You must use the character X to print the square
// You must use console.log(...) to print all output
// You are not allowed to use var
// You must use a loop (while, for, etc.)