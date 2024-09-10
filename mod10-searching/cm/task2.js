function task(n, arr, x) {
    console.log(n, arr, x);

    let low = 0;
    let high = n - 1;
    let mid;
    let min = Infinity;
    console.log(min);
    // let min = 0;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        console.log(mid);
        if (arr[low] <= arr[mid]) {
            min = Math.min(arr[low], min);
            if (arr[high] < min) {
                low = mid + 1;
            }
        }else{
            min = Math.min(arr[mid], min);
            if(arr[low]>arr[mid]){
                high = mid-1;
            }
        }
    }

    return min;
}

function main(arr) {
    // managing input values
    console.log(arr);
    n = arr.length;
    let x = 3;

    // task functions
    console.log(task(n, arr, x));
}

let nums = [4, 6, 9, 10, 12, 19, 20, 1, 2, 3];

// let nums = [ 0, 1, 2,4, 5, 6, 7];
// let nums = [4, 5, 6, 7, 0, 1, 2];
console.log(main(nums));