function sumArr(arr, index = 0) {
    if (index >= arr.length) {
        return 0;
    }

    const currElem = arr[index];
    const sumRest = sumArr(arr, index + 1);

    return currElem + sumRest;
}

let numbers = [1, 2, 3, 4, 5];
console.log(sumArr(numbers));