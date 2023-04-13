#!/usr/bin/node

// importing the process module
const { argv } = require ('process');

// Write a script that prints the first argument passed to it:
if (argv[2]) {
    console.log(argv[2]);
}
// If no arguments are passed to the script, print “No argument”
else {
    console.log("No argument");
}
