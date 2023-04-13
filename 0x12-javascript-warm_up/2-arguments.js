#!/usr/bin/node

// Write a script that prints a message depending of the number of arguments passed:
// import an argv module from node module
const { argv } = require('process');

// If no arguments are passed to the script, print “No argument”
if (argv.length === 2) {
    console.log("No argument");
}

// If only one argument is passed to the script, print “Argument found”
else if (argv.length === 3) {
    console.log("Argument found");
}
// Otherwise, print “Arguments found”
else {
    console.log("Argument found");
}
// You must use console.log(...) to print all output
// You are not allowed to use var

