function binarySearch(N) {
    console.log(N);

    let low = 1;
    let high = parseInt(N / 2);
    let mid = parseInt((low + high) / 2);
    let sq = mid*mid;

    if(sq===N){
        
    }

    console.log(N,low, high, mid,sq)
}

// brute force
function task(N, arr) {
    console.log(N);
    for (let i = 1; i < N / 2; i++) {
        if (i * i == N) {
            return 'YES';
        }
    }
    return 'NO';
}

function main(input) {
    // managing input values
    let N = parseInt(input);
    // console.log(task(N));
    console.log(binarySearch(N));
}

let input = "49";
// let input = "24";
console.log(main(input));