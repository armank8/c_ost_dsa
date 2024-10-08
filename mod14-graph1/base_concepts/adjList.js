class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.adjList = new Map(); // map to store the adjacency list
    }

    // add a vertex to the graph
    addVertex(v) {
        this.adjList.set(v, []); //Initialize empty array for vertex
        return this.adjList;
    }

    // add an edge between two vertices
    addEdge(v, w) {
        this.adjList.get(v).push(w); // add w to v's adjacency list 
        this.adjList.get(w).push(v); // add v to w's adjacency list ( since it's an undirected graph)
        return this.adjList;
    }

    printGraph() {
        let keys = this.adjList.keys();

        for (let key of keys) {
            let values = this.adjList.get(key);
            console.log(`${key} -> ${values.join(", ")}`);
        }
    }
}

const g = new Graph(4);

// add virtices
console.log(g.addVertex(0));
console.log(g.addVertex(1));
console.log(g.addVertex(2));
console.log(g.addVertex(3));

// add edge
console.log(g.addEdge(0, 1));
console.log(g.addEdge(0, 2));
console.log(g.addEdge(1, 3));
console.log(g.addEdge(2, 3));

// print adjacency list
g.printGraph();