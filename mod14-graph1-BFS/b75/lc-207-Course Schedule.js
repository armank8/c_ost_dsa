// 207. Course Schedule
var canFinish = function (numCourses, prerequisites) {
  let adjList = Array.from({ length: numCourses }, () => []);
  let indegree = Array.from({ length: numCourses }).fill(0);

  for (let [course, prereq] of prerequisites) {
    adjList[prereq].push(course);
    indegree[course]++;
  }
  console.log(adjList);
  console.log(indegree);

  //   initialize queue with courses having in-degree 0
  let queue =[];
  for(let i=0; i<numCourses; i++){
    if(indegree[i]===0){
        queue.push(i);
    }
  }

  let completedCourses = 0;
  while(queue.length){
    let course = queue.shift();
    completedCourses++;

    for(let neighbor of adjList[course]){
        indegree[neighbor] --;
        if(indegree[neighbor] ===0){
            queue.push(neighbor);
        }
    }
  }
  return completedCourses === numCourses;
};
// console.log(canFinish(2,[[1,0]]));
console.log(
  canFinish(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
