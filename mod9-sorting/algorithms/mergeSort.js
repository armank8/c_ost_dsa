function conquer(arr,si,mid,ei){
    let merged=[];
    
}

function divide(arr, si, ei) {
    if (si >= ei) return;
    let mid = parseInt((si + ei) / 2);
    console.log(si, ei, mid);
    divide(arr, si, mid);
    divide(arr, mid + 1, ei);
    conquer(arr,si,mid,ei);
}
function task(N, arr) {
    console.log(N, arr);
    let si = 0;
    let ei = N - 1;
    console.log(si, ei);
    divide(arr, si, ei);
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

let input = "6\n6 3 9 5 2 8";
console.log(main(input));