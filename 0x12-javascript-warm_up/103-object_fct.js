#!/usr/bin/node

function main() {
    let integer = 0;

    function incr() {
    integer++;
    }

    console.log('The integer value is: ' + integer);

    incr();
    console.log('The integer value is now: ' + integer);

    incr();
    console.log('The integer value is now: ' + integer);

}

main();
  