

function numIslands(grid){
    if(!grid || grid.length === 0) return 0;

    const rows =grid.length;
    const cols =grid[0].length;
    let islandCount =0;
    const directions=[[1,0], [-1,0], [0,1], [0,-1]];

    console.log(rows,cols);

    function bfs(r,c){
        let queue = [[r,c]];
        grid[r][c] = '0';

        while(queue.length>0){
            let [row,col] =queue.shift();

            for(let [dr,dc] of directions){
                let newRow =row+dr;
                let newCol =col+dc;

                if(newRow>=0 && newRow<rows && newCol>=0 && newCol<cols && grid[newRow][newCol] ==='1'){
                    queue.push([newRow,newCol]);
                    grid[newRow,newCol] = '0';
                }
            }
        }

    }

 

    // Traverse the grid
    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            console.log(grid[r][c]);
            if(grid[r][c]==='1'){
                islandCount++;
                bfs(r,c);
            }
        }
    }
    return islandCount;

}


const grid= [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

console.log(numIslands(grid));