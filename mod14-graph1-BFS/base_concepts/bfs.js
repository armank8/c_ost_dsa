
function bfs(graph, start) {
    console.log(graph, start);

    let visited = new Set();
    let queue = [start];

    visited.add(start);

    while(queue.length>0){
        let node = queue.shift();
        console.log(node);

        // exploring the neighbors
        for(let neighbor of graph[node]){
            console.log(neighbor);

            if(!visited.has(neighbor)){
                console.log(visited.has(neighbor));
                queue.push(neighbor);
                visited.add(neighbor);
            }
        }
    }
}

// Adjacency list representation of a graph
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F']
};

console.log(bfs(graph, 'A'));