// 200. Number of Islands
var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;
  let rows = grid.length;
  let cols = grid[0].length;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let numIslands = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        numIslands++;
        grid[r][c] = "0";
        let queue = [[r, c]];

        while (queue.length) {
          let [row, col] = queue.shift();
          for (let [dr, dc] of directions) {
            let newRow = row + dr;
            let newCol = col + dc;

            if (
              newRow >= 0 &&
              newRow < rows &&
              newCol >= 0 &&
              newCol < cols &&
              grid[newRow][newCol] === "1"
            ) {
              queue.push([newRow, newCol]);
              grid[newRow][newCol] = "0";
            }
          }
        }
      }
    }
  }
  return numIslands;
};
grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(grid));
