function createAdjList(n, edges) {
    console.log(n, edges);
    let adjList = Array.from({ length: n }, () => []);
    console.log(adjList);

    for (let [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }

    console.log(adjList);
    return adjList;
}
function validPath(n, edges, src, dest) {
    console.log(n, edges, src, dest);
    let adjList = createAdjList(n, edges);

    let queue=[src];
    let visited=new Array(n).fill(false);
    console.log(visited);
    visited[src]=true;

    while(queue.length>0){
        const node = queue.shift();

        if(node==dest) return true;

        for(let neighbor of adjList[node]){
            console.log(neighbor);
            if(!visited[neighbor]){
                visited[neighbor]=true;
                queue.push(neighbor);
            }
        }
    }
    return false;
}

let n = 6;
let edges =  [[0,1],[0,2],[3,5],[5,4],[4,3]];
let src = 0;
let dest = 5;
console.log(validPath(n, edges, src, dest));