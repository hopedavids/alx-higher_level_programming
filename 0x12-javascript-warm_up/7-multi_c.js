#!/usr/bin/node

const args = process.argv.slice(2);
// Write a script that prints x times “C is fun”
let num = parseInt(args[0]);
const x = "C is fun";

// Where x is the first argument of the script
for (let i = 0; i < args; i++) {
    if (!isNaN(num)) {
        console.log(x);
    }

    else {
        console.log("Missing number of occurrences")
    }
}
// If the first argument can’t be converted to an integer, print “Missing number of occurrences”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You can use only two console.log
// You must use a loop (while, for, etc.)