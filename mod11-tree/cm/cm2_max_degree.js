function task(N, nodes) {
    console.log(N, nodes);

    let adjacencyList = Array.from({ length: N + 1 }, () => [])

    console.log(adjacencyList);

    for (let i = 1; i < N; i++) {
        console.log(i);
        let [a, b] = nodes[i - 1];
        console.log(a, b);
        adjacencyList[a].push(b);
        adjacencyList[b].push(a);
    }
    console.log(adjacencyList);
    let max = 0;
    for (let i = 0; i <= N; i++) {
        max = Math.max(max,adjacencyList[i].length)
    }
    console.log(max);
    return max;
}

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