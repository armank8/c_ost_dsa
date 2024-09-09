
// binary search
function bS(arr, q1) {
    console.log(arr, q1);
    let low = 0;
    let high = arr.length - 1;
    let mid;
    let pos = -1;


    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        console.log(mid);
        if (arr[mid] === q1) {
            pos = mid+1;
            break;
        } else if (arr[mid] < q1) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return pos;
}

function main(input) {
    // managing input values
    console.log(input);
    let inputs = input.split('\n');
    console.log(inputs);
    let [n, k] = inputs[0].split(' ').map(Number);
    let arr = inputs[1].split(' ').map(Number);
    let queries = inputs[2].split(' ').map(Number);
    console.log(n, k, arr, queries);


    let result = [];
    for (let i = 0; i < k; i++) {
        // binary search
        // console.log((bS(arr, query)));
        result.push(bS(arr, queries[i]));
        console.log(result);
    }

    // print result
    console.log(result.join('\n'));
}

let input = "5 2\n3 8 10 10 14\n10 7";
// let input = "24 11\n56 62 79 79 151 227 237 280 304 311 318 360 480 600 669 694 714 723 742 813 870 885 903 908\n751 627 767 413 743 390 348 609 713 876 200";
console.log(main(input));