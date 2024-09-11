function task(arr) {
    let low = 0, high = arr.length - 1, min = Infinity;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > arr[high]) {
            min = Math.min(arr[high], min);
            low = mid + 1;

        } else {
            min = Math.min(arr[mid], min);
            high = mid;
        }
    }
    console.log(min);
    return arr[low];
    // return min;
}

// let nums = [4, 6, 9, 10, 12, 19, 20, 1, 2, 3];

let nums = [3, 4, 5, 1, 2];
// let nums = [4, 5, 6, 7, 0, 1, 2];
// let nums = [ 0, 1, 2,4, 5, 6, 7];
// let nums = [11,13,15,17] ;
console.log(task(nums));