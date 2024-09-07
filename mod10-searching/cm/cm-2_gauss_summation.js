// binarySearch recursion
// function binarySearchR(N, low, high) {
//     let mid = parseInt((low + high) / 2);
//     let sq = mid * mid;

//     console.log(N, low, high, mid, sq);

//     if (sq == N) {
//         return true;
//     } else if (sq > N) {
//         binarySearchR(N, low, mid - 1);
//     } else {
//         binarySearchR(N, mid + 1, high);
//     }

//     console.log(N, low, high, mid, sq);
//     // return false;
// }

// // binarySearch Iterative
// function binarySearchI(N, low, high) {
//     console.log(N, low, high);

//     while (low <= high) {
//         let mid = parseInt((low + high) / 2);
//         let sq = mid * mid;
//         console.log(sq,mid);
//         if (sq == N) {
//             return 'YES';
//         } else if (sq < N) {
//             low = mid + 1;
//         } else {
//             high = mid - 1
//         }
//     }
//     return 'NO';
// }
// brute force
// function task(N) {
//     console.log(N);
//     let sum = 0;
//     let i;
//     for (i = 1; i <= N; i++) {
//         sum += i;
//         console.log(i);
//         if (sum >= N) {
//             break;
//         }
//     }
//     console.log(i);
//     return i;
// }

function main(input) {
    // managing input values
    let N = parseInt(input);
    // brute force
    // console.log(task(N));

    // let low = 1;
    // let high = parseInt(N / 2);

    // // binarySearch recursion
    // // console.log(binarySearchR(N, low, high));

    // // binarySearch Iterative
    console.log(binarySearchI(N, low, high));
}

// let input = "49";
// let input = "16";
let input = "6";
console.log(main(input));