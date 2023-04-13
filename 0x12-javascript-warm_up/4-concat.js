#!/usr/bin/node

// Write a script that prints two arguments passed to it, in the following format: “ is ”
const { argv } = require('process');

let n = 2;
// You must use console.log(...) to print all output
if (argv.length > n ) {
    let concat = argv[n] + ' is ' + argv[n + 1];
    console.log(concat);
}

else if (argv.length == 0) {
    console.log('undefined');
}
// You are not allowed to use var
