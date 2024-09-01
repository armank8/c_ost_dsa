function task(N, arr) {
    console.log(N, arr);

    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
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