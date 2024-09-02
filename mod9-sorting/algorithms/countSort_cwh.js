function main(arr) {
    console.log(arr);
    // find max in arr
    // let max = 20000;
    let n = arr.length;
    let max = Math.max(...arr);
    console.log(max, n);

    // create new array and fill with 0
    let count = new Array(max + 1).fill(0);
    console.log(count);

    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
        count[arr[i]] = (count[arr[i]]) + 1
        console.log(count[arr[i]]);
    }
    console.log(count);

    let i = 0;
    let j = 0;

    while (i <= max) {
        console.log(i);
        console.log(count[i]);
        i++;
    }





}

// let arr = [9, 1, 4, 14, 4, 15, 6];
let arr = [3, 1, 9, 7, 1, 2, 4];
console.log(main(arr));