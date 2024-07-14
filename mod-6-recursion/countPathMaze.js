function countPath(i, j, n, m) {
    if (i == n || j == m) {
        return 0;
    }
    if (i == n - 1 && j == m - 1) {
        return 1;
    }
    let downPaths = countPath(i + 1, j, n, m);
    let rightPaths = countPath(i, j + 1, n, m);
    // move downwards
    return downPaths + rightPaths;
}

console.log(countPath(0, 0, 3, 3));