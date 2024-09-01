function task(N, arr) {
    console.log(N, arr);



    return N;
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