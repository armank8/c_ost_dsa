function countValidPaths(A, B, C) {
    console.log(A, B, C);
    let N = A.length;
    let adjL = Array.from({ length: N + 1 }).map(() => []);
    console.log(adjL);

    for (let [u, v] of B) {
        console.log(u, v);
        adjL[u].push(v);
        adjL[v].push(u);
    }
    console.log(adjL);

    let validPaths = 0;


    function dfs(node, parent, goodCount) {
        if (A[node - 1] === 1) goodCount++;
        if (goodCount > C) return;
        let isLeaf = true;

        for (let neighbor of adjL[node]) {
            console.log(neighbor);
            if (neighbor !== parent) {
                isLeaf = false;
                dfs(neighbor, node, goodCount)
            }
        }
        if (isLeaf) validPaths++;
    }
    dfs(1, -1, 0);
    return validPaths;
}

let A = [0, 1, 0, 1, 1, 1];
let B = [[1, 2], [1, 5], [1, 6], [2, 3], [2, 4]];
let C = 1;
console.log(countValidPaths(A, B, C));

// const A2 = [0, 1, 0, 1, 1, 1];
// const B2 = [[1, 2], [1, 5], [1, 6], [2, 3], [2, 4]];
// const C2 = 2;
// console.log(countValidPaths(A2, B2, C2));