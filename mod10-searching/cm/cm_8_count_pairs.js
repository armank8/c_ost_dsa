
// binary search
function bS(arr, X) {
    console.log(arr, X);
    
}

function main(input) {
    // managing input values
    console.log(input);
    let inputs = input.split('\n');
    console.log(inputs);
    let [N, X] = inputs[0].split(' ').map(Number);
    let arr = inputs[1].split(' ').map(Number);

    console.log(N, X, arr);


    
    // binary search
    console.log(bS(arr, X));
}

let input = "5 6\n1 2 3 4 5";
console.log(main(input));