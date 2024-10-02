function isPathPossible(N, matrix) {
    console.log(N, matrix);
    let visited = [];
    for (let i = 0; i < N; i++) {
        visited.push(new Array(N).fill(false));
    }
    console.log(visited);

    const directions = ['U', 'D', 'L', 'R'];

    function isSafe(x, y) {
        return (x >= 0 && x < N && y >= 0 && y < N && matrix[x][y] === 1 && !visited[x][y])
    }

    // helper function using backtracking to find the path
    function backtrack(x, y) {
        if (x === N - 1 && y === N - 1) {
            return true;
        }

        // mark the current cell as visited
        visited[x][y] = true;

        // try all possible directions
        for (let dir of directions) {
            let newX = x, newY = y;
            if (dir === 'U') newX--;
            else if (dir === 'D') newX++;
            else if (dir === 'L') newY--;
            else if (dir === 'R') newY++;

            // check if the new cell is safe to move
            if (isSafe(newX, newY)) {
                // recursively backtrack from the new cell
                if (backtrack(newX, newY)) {
                    return true; // found a path
                }
            }
        }
        // if no path found from the cell, mark it as unvisited
        visited[x][y] = false;
        return false;
    }
    // start the backtracking from the top-left corner(0,0)
    return backtrack(0, 0);
}

let N1 = 4;
let matrix1 = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
];

let N2 = 2;
let matrix2 = [
    [1, 0],
    [1, 0]
]
console.log(isPathPossible(N1, matrix1));
console.log(isPathPossible(N2, matrix2));