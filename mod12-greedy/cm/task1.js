function main(arr, truckSize) {
    console.log(arr, truckSize);

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let arr = [[1, 3], [2, 2], [3, 1]];
truckSize = 4;
console.log(main(arr, truckSize));