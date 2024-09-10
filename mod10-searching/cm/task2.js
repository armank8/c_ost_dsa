function task(n, arr) {
    console.log(n, arr);

    let low = 0;
    let high = n - 1;
    let mid;
    let min = 0;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        console.log(mid);
        if (arr[mid]==min){
            return arr[mid];
        }else if(arr[mid]>min){
            high=mid-1;
        }
    }



    return arr[mid];
}

function main(arr) {
    // managing input values
    console.log(arr);
    n = arr.length;

    // task functions
    console.log(task(n, arr));
}

let nums = [ 0, 1, 2,4, 5, 6, 7];
// let nums = [4, 5, 6, 7, 0, 1, 2];
console.log(main(nums));