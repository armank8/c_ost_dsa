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

// binarySearch Iterative
// function binarySearchI(N, low, high) {
//     console.log(N, low, high);
//     let sum = 0;
//     let mid

//     while (low < high) {
//         mid = parseInt((low + high) / 2);
//         sum = (mid * (mid + 1)) / 2;

//         console.log(sum,mid);
//         if (sum >= N) {
//             high = mid;
//         } else {
//             low = mid+1;
//         }
//     }
//     return low;
// }

// brute force
function task(N, X, arr) {
    console.log(N, X, arr);
    let i;
    for (i = 0; i < N; i++) {
        console.log(i);
        if (arr[i] === X) {
            return 'P'
        }
    }
    return 'A';
}

function main(input) {
    // managing input values
    let inputs = input.split('\n');
    console.log(inputs);
    let N = parseInt(inputs[0].split(' ')[0]);
    let X = parseInt(inputs[0].split(' ')[1]);
    let arr = inputs[1].split(' ').map(Number);
    console.log(N, X, arr);

    // brute force
    console.log(task(N, X, arr));

    // let low = 1;
    // let high = N;

    // // binarySearch recursion
    // // console.log(binarySearchR(N, low, high));

    // // binarySearch Iterative
    // console.log(binarySearchI(N, low, high));
}

// let input = "49";
// let input = "3 2\n-1 0 1";
let input = "5 10\n3 8 10 10 14";
console.log(main(input));