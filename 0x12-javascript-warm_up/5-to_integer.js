#!/usr/bin/node

// import the argv module from nodejs
const args = process.argv.slice(2);

num = parseInt(args[0]);

if (!isNaN(num)) {
    console.log('My number: <first argument converted in integer>');
}

else {
    console.log("Not a number");
}
// If the argument can’t be converted to an integer, print “Not a number”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You are not allowed to use try/catch