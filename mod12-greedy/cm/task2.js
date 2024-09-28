function main(arr) {
    console.log(arr);

    arr.sort((a, b) => a[1] - b[1]);
    lastIndex = -Infinity;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

        if(arr[i][0]>lastIndex){
            count++;
            lastIndex = arr[i][1];
        }
        console.log(lastIndex);
    }
    return count;
}

let arr = [[1, 4], [2, 3], [4, 6], [8, 9]];
// let arr = [[1, 9], [2, 3], [5, 7]];
console.log(main(arr));