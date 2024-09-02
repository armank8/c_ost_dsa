function task(N, arr) {
    console.log(N, arr);
    arr.sort((a, b) => a - b);
    console.log(arr);

    let newA = [];
    let top;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        top = arr[i - 1];
        console.log(top);
        if (arr[i] !== top) {
            newA.push(arr[i]);
            console.log(newA)
        } else {
            newA.pop();
            newA.unshift(arr[i]);
        }
    }

    console.log(newA);



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
console.log(main(input));