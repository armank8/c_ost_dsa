function task(N, K, arr) {
    console.log(N, K, arr);
    arr.sort((a, b) => b - a);
    console.log(arr);

    let max_sum = 0;

    while (K !== 0) {
        max_sum = max_sum + arr[K-1];
        K--;
    }
    console.log(max_sum);
}

function main(input) {
    // managing input values
    console.log(input);
    let inputs = input.split('\n');
    let N = parseInt(inputs[0].split(' ')[0]);
    let K = parseInt(inputs[0].split(' ')[1]);

    let arr = inputs[1].split(' ').map(Number);

    console.log(N, K, arr);

    // task functions
    console.log(task(N, K, arr));
}

// let input = "5 3\n10 8 14 3 10";
let input = "3 1\n1 2 2";
console.log(main(input));