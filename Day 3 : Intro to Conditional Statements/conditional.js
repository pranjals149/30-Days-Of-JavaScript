'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function isOdd(n) {
    return n % 2 == 1;
}

function between(low, n, high) {
    return low <= n && n <= high;
}

function main() {
    var n = parseInt(readLine());

    console.log(isOdd(n) || between(6, n, 20) ? "Weird" : "Not Weird");
}
