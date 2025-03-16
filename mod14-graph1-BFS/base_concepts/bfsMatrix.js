function bfs(grid, startRow, startCol) {
    console.log(grid);
    let rows = grid.length;
    let cols = grid[0].length;
    console.log(startRow, startCol);

    console.log(rows, cols);

    const directions = [
        [-1, 0], //up
        [1, 0], //down
        [0, -1], //left 
        [0, 1] //right
    ];

    // Queue for BFS, initialized with the starting position
    const queue = [[startRow, startCol]];

    // set to keep track of visited cells
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    console.log(visited);

    visited[startRow, startCol] = true; // mark the start as visited
    console.log(visited);

    while (queue.length > 0) {
        const [currentRow, currentCol] = queue.shift();
        console.log(currentRow, currentCol);

        // Explore all 4 directions
        for (const [dRow, dCol] of directions) {
            console.log(dRow, dCol);
            const newRow = currentRow + dRow;
            const newCol = currentCol + dCol;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 0 && !visited[newRow, newCol]) {
                queue.push([newRow, newCol]); // enqueue the new cell
                visited[newRow, newCol] = true; // mark the new cell as visited
            }
        }
    }

}

let grid = [
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 1, 0, 0],
    [0, 0, 0, 0]
]
console.log(bfs(grid, 0, 0)); // Start bfs from top-left corner(0,0)