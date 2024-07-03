function arrayInt(input) {
    let n = input.length;
    let startTime = input[0][0];
    let endTime = input[0][1];
    let uniqueArray = [];
    
    // console.log(startTime, endTime);

    for (let i = 1; i < n; i++) {
        let currStart = input[i][0];
        let currEnd = input[i][1];
        if (currStart <= endTime) {
            endTime=Math.max(endTime,currEnd);
        } else {
            uniqueArray.push([startTime,endTime]);
            startTime=currStart;
            endTime=currEnd;
        }
    }
    uniqueArray.push([startTime, endTime]);

    return uniqueArray;

}

console.log(arrayInt([[1, 4], [3, 5], [7, 8]]));


// Ostad codemama code
/** 
function main(input) {
  
    const lines = input.split("\r\n");
    const n = Number(lines[0]);
    lines.shift();
    let arr = lines.map(str => str.split(' ').map(Number));
    // console.log(n, arr);
    arr.sort((a, b) => a[0] - b[0]);

    let startTime = arr[0][0]
    let endTime = arr[0][1]
    let uniqueInterval = [];

    for (let i = 0; i < n; i++) {
        let currStart = arr[i][0]
        let currEnd = arr[i][1]

        if (currStart <= endTime) {
            endTime = Math.max(endTime, currEnd)
        } else {
            uniqueInterval.push([startTime, endTime]);
            startTime = currStart;
            endTime = currEnd;
        }
    }
    uniqueInterval.push([startTime, endTime])
    // return uniqueInterval;
    let result = uniqueInterval.map(interval => interval.join(' ')).join('\n');
    console.log(result);

}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
}); 

 */