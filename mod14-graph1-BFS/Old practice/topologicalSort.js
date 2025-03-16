function topologicalSort(n,edges){
    const adjList = Array.from({length:n},()=>[]);
    const inDegree = new Array(n).fill(0);

    for(let [src,dest] of edges){
        console.log([src,dest]);
        adjList[src].push(dest); // directed edge src -> dest
        inDegree[dest]++; // increase in-degree of dest
    }

    // initialize queue with nodes having in-degree 0
    let queue = [];
    for(let i=0; i<n; i++){
        if(inDegree[i]===0) queue.push(i);
    }

    console.log(adjList);
    console.log(inDegree);

    // process the queue (BFS)
    let topoOrder=[];
    while(queue.length>0){
        let node =queue.shift();
        topoOrder.push(node);

        for(let neighbor of adjList[node]){
            inDegree[neighbor] --;
            if(inDegree[neighbor] === 0 ) queue.push(neighbor);
        }
    }
    return topoOrder.length === n ? topoOrder : [];
}

let n = 6;  // Number of nodes
let edges = [
    [5, 2], [5, 0], [4, 0], [4, 1], [2, 3], [3, 1]
];

console.log(topologicalSort(n, edges));