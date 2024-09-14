function task(N, Q, edges, queries) {
    console.log(N, Q, edges, queries);
}

function main(input) {
    // managing input values
    console.log(input);
    let inputs = input.split('\n');
    console.log(inputs);
    let [N, Q] = inputs[0].split(' ').map(Number);
    console.log(N, Q);

    let edges = inputs.slice(1, N);
    let queries = inputs.slice(N, N + Q).map(Number);
    console.log(edges, queries);



    console.log(N, Q, edges, queries);


    // task functions
    console.log(task(N, Q, edges, queries));
}

let input = "3 2\n1 2\n1 3\n1\n2";
console.log(main(input));