
function countingSort(arr) {
    console.log(arr);
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    console.log(max, min);
    const countArray = new Array(max - min + 1).fill(0);
    console.log(countArray);

    // fill counting array
    for (let i = 0; i < arr.length; i++) {
        countArray[arr[i] - min]++;
    }
    console.log(countArray);
}

const arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(arr));