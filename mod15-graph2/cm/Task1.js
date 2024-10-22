function findCycle(A, B) {
    console.log(A, B);

    let matrix = Array.from({ length: A + 1 }).map(() => Array.from({ length: A + 1 }).fill(0));

    console.log(matrix);

    for(let [u,v] of B){
        console.log(u,v);
        matrix[u][v]=1;       
    }
    console.log(matrix);

    

}
let A = 5;
let B = [[1, 2], [4, 1], [2, 4], [3, 4], [5, 2], [1, 3]];
console.log(findCycle(A, B));