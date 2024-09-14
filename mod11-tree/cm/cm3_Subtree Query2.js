function task(N, Q, edges, queries) {
    console.log(N, Q, edges, queries);

    let tree = Array.from({ length: N + 1 }, () => []);
    console.log(tree);

    for (let i = 0; i <N-1; i++) {
        let [a,b] = edges[i].split(' ').map(Number);
        console.log(a,b);
        tree[a].push(b);
        tree[b].push(a);

    }
    console.log(tree);
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