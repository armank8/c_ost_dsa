/**🧠   Problem Summary:  You're given:
n nodes labeled from 0 to n - 1
A list of edges, where each edge is an undirected connection between two nodes
You need to return the number of connected components in the graph.         */

function createAdjList(n, edges) {
  console.log(n, edges);

  const adjList = new Map();

  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }
  console.log(adjList);

  for (let [u, v] of edges) {
    adjList.get(u).push(v);
    adjList.get(v).push(u);
  }

  console.log(adjList);
  return adjList;
}

const countComponents = (n, edges) => {
  //   console.log(n, edges);
  let adjList = createAdjList(n, edges);
  console.log(adjList);

  let visited = new Set();
  let components = 0;
  console.log(visited);

  //   step2 : BFS function
  const bfs = (start) => {
    const queue = [start];
    visited.add(start);

    while (queue.length > 0) {
      const node = queue.shift();
      for (let neighbor of adjList.get(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  };

  //   step-3 loop through all nodes
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      bfs(i);
      components++;
    }
  }
  return components;
};

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
);
