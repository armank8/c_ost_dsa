function recursiveFunction(i, n) {
    if (n <= 0) {
        return;
    }
    console.log("Recur n=", n, i);
    recursiveFunction(i, n - 1);
    console.log("Recur n=", n, i);
}

function loopFunction(m) {
    for (let i = 0; i < m; i++) {
        console.log('loop i=', i);
        recursiveFunction(i, 3);
    }
}

// console.log(recursiveFunction(2));
console.log(loopFunction(2));