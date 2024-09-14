

function main(input) {
    // managing input values
    console.log(input);
    let inputs = input.split('\n');
    console.log(inputs);
    let N = parseInt(inputs[0]);
    let nodes = [];
    for (let i = 1; i < N; i++) {
        nodes.push(inputs[i].split(' ').map(Number));
    }

    console.log(N, nodes);


    // task functions
    console.log(task(N, nodes));
}

let input = "3\n1 2\n1 3";
console.log(main(input));