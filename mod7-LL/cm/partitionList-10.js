function main(input) {
    console.log(input);
    const inputs = input.split('\n');
    console.log(inputs);
    const N = parseInt(inputs[0]);
    const values = inputs[1].split(' ').map(Number);
    const X = parseInt(inputs[2]);
    console.log(N, values, X);

    
}

let input = "5\n5 4 3 2 1\n3";
main(input);