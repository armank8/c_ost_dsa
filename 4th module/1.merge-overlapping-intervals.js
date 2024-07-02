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