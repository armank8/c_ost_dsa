function hasCycle(A, B) {
    console.log(A, B);

    let adjList = Array.from({ length: A + 1 }, () => []);
    console.log(adjList);

    for (let [u, v] of B) {
        console.log(u, v);
        adjList[u].push(v);
    }
    console.log(adjList);

    const visited = Array(A + 1).fill(false);
    const recStack = Array(A + 1).fill(false);

    const dfs = (node) => {
        if (!visited[node]) {
            visited[node] = true;
            recStack[node] = true;
            for (const neighbor of adjList[node]) {
                if (!visited[neighbor] && dfs(neighbor)) {
                    return true;
                } else if (recStack[neighbor]) {
                    return true;
                }
            }
        }
        recStack[node] = false;
        return false;
    };

    for (let i = 0; i <= A; i++) {
        if (!visited[i]) {
            if (dfs(i)) {
                return 1;
            }
        }
    }
    return 0;
}
let A1 = 5;
let B1 = [[1, 2], [4, 1], [2, 4], [3, 4], [5, 2], [1, 3]];
console.log(hasCycle(A1, B1));

const A2 = 5;
const B2 = [ [1, 2], [2, 3], [3, 4], [4, 5] ];
console.log(hasCycle(A2, B2));