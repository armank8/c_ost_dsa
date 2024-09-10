function task(n, arr,x) {
    console.log(n, arr,x);

    let low = 0;
    let high = n - 1;
    let mid;
    // let min = 0;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        console.log(mid);
        if (arr[mid] == x) {
            return arr[mid];
        } else if (arr[mid] > x) {
            high = mid - 1;
        }
    }



    return arr[mid];
}

function main(arr) {
    // managing input values
    console.log(arr);
    n = arr.length;
    let x=3;

    // task functions
    console.log(task(n, arr,x));
}

let nums = [4, 6, 9, 10, 12, 19, 20, 1, 2, 3];

// let nums = [ 0, 1, 2,4, 5, 6, 7];
// let nums = [4, 5, 6, 7, 0, 1, 2];
console.log(main(nums));