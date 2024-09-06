function binarySearch(N, low, high) {
    let mid = parseInt((low + high) / 2);
    let sq = mid * mid;

    console.log(N,low, high, mid, sq);

    if (sq == N) {
        return true;
    } else if (sq > N) {
        binarySearch(N, low, mid-1);
    } else {
        binarySearch(N, mid+1, high);
    }

    console.log(N,low, high, mid, sq);
    // return false;
}

// brute force
// function task(N, arr) {
//     console.log(N);
//     for (let i = 1; i < N / 2; i++) {
//         if (i * i == N) {
//             return 'YES';
//         }
//     }
//     return 'NO';
// }

function main(input) {
    // managing input values
    let N = parseInt(input);
    // console.log(task(N));


    let low = 1;
    let high = parseInt(N / 2);

    // binarySearch
    console.log(binarySearch(N, low, high));
}

let input = "49";
// let input = "24";
console.log(main(input));