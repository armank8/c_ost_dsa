function printNumbers(n) {
    if (n == 0) {
        return;
    }
    console.log(n);
    printNumbers(n-1);
    console.log(n);
}

console.log(printNumbers(3));