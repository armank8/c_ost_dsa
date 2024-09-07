
// binarySearch Iterative
function binarySearchI(N, X, arr, low, high) {
    console.log(N, X, arr, low, high);
    let mid;


    while (low <= high) {
        mid = parseInt((low + high) / 2);
        console.log(mid);

        console.log(mid);
        if (arr[mid] === X) {
            return mid;
        } else if (arr[mid] > X) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

// brute force
// function task(N, X, arr) {
//     console.log(N, X, arr);
//     let i;
//     for (i = 0; i < N; i++) {
//         console.log(i);
//         if (arr[i] === X) {
//             return 'P'
//         }
//     }
//     return 'A';
// }

function main(input) {
    // managing input values
    let inputs = input.split('\n');
    console.log(inputs);
    let N = parseInt(inputs[0].split(' ')[0]);
    let X = parseInt(inputs[0].split(' ')[1]);
    let arr = inputs[1].split(' ').map(Number);
    console.log(N, X, arr);

    // brute force
    // console.log(task(N, X, arr));

    let low = 0;
    let high = N - 1;

    // binarySearch Iterative
    console.log(binarySearchI(N, X, arr, low, high));
}

// let input = "49";
let input = "3 2\n-1 0 1";
// let input = "5 10\n3 8 10 10 14";
console.log(main(input));