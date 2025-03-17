// 73. Set Matrix Zeroes
var setZeroes = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let rowFlags = Array.from({ length: rows }).fill(false);
  let colFlags = Array.from({ length: cols }).fill(false);
  console.log(rows, cols, rowFlags, colFlags);

  //   Step 1: Mark rows and cols that need to be zoroed
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        rowFlags[i] = true;
        colFlags[j] = true;
      }
    }
  }
  console.log(rowFlags, colFlags);

  //   Step 2: Set matrix cells to zero using rowFlags and colFlags
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rowFlags[i] || colFlags[j]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};
// let matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ];
let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log(setZeroes(matrix));
