function task(N, arr) {
    console.log(N, arr);

    let smallest = arr[0];
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallest] > arr[j]) {
                smallest = j;
                console.log(arr[smallest]);
            }
        }
        temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;
    }

    console.log(smallest);
    return arr.join(' ');
}

function main(input) {
    // managing input values
    console.log(input);
    let inputs = input.split('\n');
    let N = parseInt(inputs[0]);
    let arr = inputs[1].split(' ').map(Number);

    console.log(N, arr);

    // task functions
    console.log(task(N, arr));
}

let input = "5\n10 8 14 3 10";
console.log(main(input));