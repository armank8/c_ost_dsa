

function numIslands(grid){
    if(!grid || grid.length === 0) return 0;

    const rows =grid.length;
    const cols =grid[0].length;
    let islandCount =0;
    const directions=[[1,0], [-1,0], [0,1], [0,-1]];

    function bfs(r,c){
        let queue = [[r,c]];
        grid[r][c] = '0';

    }

    console.log(rows,cols);

    // Traverse the grid
    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            console.log(grid[r][c]);
        }
    }

}


const grid= [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

console.log(numIslands(grid));