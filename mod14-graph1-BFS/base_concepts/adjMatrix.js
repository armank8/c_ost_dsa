function createAdjMatrix(numVertices) {
    // initialize a 2D array filled with 0s
    const adjMatrix = Array(numVertices).fill(0).map(() => Array(numVertices).fill(0));

    console.log(adjMatrix);
    return adjMatrix;
}

// add an edge to the matrix
function addEdgeMatrix(matrix, v, w) {
    matrix[v][w] = 1;
    matrix[w][v] = 1;
    return matrix;
}

// print Matrix
function printMatrix(matrix) {
    const numVertices = matrix.length;

    for (let row = 0; row < numVertices; row++) {
        console.log(`Row ${row}:`);

        for (let col = 0; col < numVertices; col++) {
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
        console.log('');
    }

}

const numVertices = 4;
const adjMatrix = createAdjMatrix(numVertices);

// add edges
console.log(addEdgeMatrix(adjMatrix, 0, 1));
console.log(addEdgeMatrix(adjMatrix, 0, 2));
console.log(addEdgeMatrix(adjMatrix, 1, 3));
console.log(addEdgeMatrix(adjMatrix, 2, 3));

console.log(printMatrix(adjMatrix));