function task(N, nodes) {
    console.log(N, nodes);
    let a = 2;

    const adjancencyList = Array.from({ length: N+1 },()=>[]);

    console.log(adjancencyList);

    for(let i=1;i<N;i++){
        const [a,b]=nodes[i-1];
        console.log(a,b);
        adjancencyList[a].push(b)
        adjancencyList[b].push(a)
    }

    console.log(adjancencyList);

    let leafCount=0;
    for(let i=0;i<=N;i++){
        if(adjancencyList[i].length === 1){
            leafCount++;
        }
    }
    console.log(leafCount);


    return leafCount;
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