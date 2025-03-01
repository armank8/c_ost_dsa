const canFinish=(numCourses,prerequisites)=>{
    let adjList = new Map();
    let inDegree = new Array(numCourses).fill(0);
    console.log(adjList);
    console.log(inDegree);

    // build adjacency list & in-degree array
    for(let [course,pre] of prerequisites){
        console.log([course,pre]);
        if(!adjList.has(pre)) adjList.set(pre,[]);
        adjList.get(pre).push(course);
        inDegree[course]++;
    }
    console.log(adjList);
    console.log(inDegree);

    // Queue for courses with 0 in-degree
    let queue = [];
    for(let i=0;i<numCourses;i++){
        if(inDegree[i]===0) queue.push(i);
    }

    let processedCourses = 0;
    while(queue.length){
        let course = queue.shift();
        processedCourses++;

        if(adjList.has(course)){
            for(let nextCourse of adjList.get(course)){
                inDegree[nextCourse]--;
                if(inDegree[nextCourse]===0){
                    queue.push(nextCourse);
                }
            }
        }
    }
    return processedCourses === numCourses;
}
console.log(canFinish(4, [[1, 0], [2, 1], [3, 2]]));