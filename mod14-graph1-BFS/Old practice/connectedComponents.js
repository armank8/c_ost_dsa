function createAdjMatrix(n, edges) {
    console.log(n, edges);
    const adjMatrix = Array(n).fill(0).map(() => Array(n).fill(0));

    for (let [a, b] of edges) {
        console.log([a, b]);
        adjMatrix[a][b] = 1;
        adjMatrix[b][a] = 1;
    }
    console.log(adjMatrix);
    return adjMatrix;
}

function bfs(startNode, adjMatrix, visited) {
    const queue = [startNode];
    visited[startNode] = true;

    while (queue.length > 0) {
        const node = queue.shift();
        for (let neighbor = 0; neighbor < adjMatrix.length; neighbor++) {
            if (adjMatrix[node][neighbor] === 1 && !visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
}

function countComponentsBFS(n, edges) {
    console.log(n, edges);
    const adjMatrix = createAdjMatrix(n, edges);

    const visited = Array(n).fill(false);
    console.log(visited);

    let components = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            bfs(i, adjMatrix, visited);
            components++;
        }
    }

    return components;
}
n = 5;
edges = [
    [0, 1],
    [1, 2],
    [3, 4]
];
console.log(countComponentsBFS(n, edges));

