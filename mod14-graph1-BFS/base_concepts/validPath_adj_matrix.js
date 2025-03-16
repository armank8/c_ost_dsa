function createAdjMatrix() {
    let adjMatrix = Array.from({ length: n }).fill(0).map(() => Array(n).fill(0));
    console.log(adjMatrix);

    for (let [a, b] of edges) {
        adjMatrix[a][b] = 1;
        adjMatrix[b][a] = 1;
    }
    console.log(adjMatrix);
    return adjMatrix;
}

function validPath(n, edges, src, dest) {
    console.log(n, edges, src, dest);

    if (src === dest) return true;

    let adjMatrix = createAdjMatrix(n, edges);
    console.log(adjMatrix);

    let visited = Array(n).fill(false);
    console.log(visited);

    let queue = [src];
    visited[src] = true;
    console.log(visited);

    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node);

        for (let neighbor = 0; neighbor < n; neighbor++) {
            console.log(neighbor);
            console.log(adjMatrix[node][neighbor]);
            if (adjMatrix[node][neighbor] === 1 && !visited[neighbor]) {
                if (neighbor === dest) return true;
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    return false;
}

let n = 3;
let edges = [[0, 1], [1, 2], [2, 0]];
let src = 0;
let dest = 2
console.log(validPath(n, edges, src, dest));