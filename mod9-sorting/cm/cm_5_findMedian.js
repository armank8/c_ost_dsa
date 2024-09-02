function task(N, arr) {
    console.log(N, arr);
    arr.sort((a, b) => b - a);
    console.log(arr);

    for (let i = 0; i < N / 2; i++) {
        console.log(i);
    }

    let n = (parseInt(N/2));
    console.log(n);

    console.log(parseInt(arr[n]))

}

function main(input) {
    // managing input values
    console.log(input);
    let inputs = input.split('\n');
    let N = parseInt(inputs[0]);
    let arr = inputs[1].split(' ').map(Number);

    console.log(N, arr);

    // task functions
    task(N, arr);
}

let input = "5\n10 8 14 3 10";
// let input = "4\n1 3 2 3";
console.log(main(input));