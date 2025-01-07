function canFinish(numCourses, prerequisites) {

    // initialized the graph and in-degree array
    let adjList = new Array(numCourses).fill(0).map(() => []);
    let inDegree = new Array(numCourses).fill(0);

    console.log(adjList);
    console.log(inDegree);

    // build the graph and compute in-degrees
    for (let [course, prereq] of prerequisites) {
        console.log([course, prereq]);
        adjList[prereq].push(course);
        inDegree[course]++;
    }
    console.log(adjList);
    console.log(inDegree);

    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    console.log(queue);

    let visited = 0;

    //perform bfs
    while (queue.length > 0) {
        let course = queue.shift();
        visited++;

        for (let neighbor of adjList[course]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    return visited === numCourses;
}

console.log(canFinish(4, [[1, 0], [2, 1], [3, 2]]));
// console.log(canFinish(2, [[1, 0], [0, 1]]));