
// binary search
function bS(arr, q1) {
    console.log(arr, q1);

    let low = 0;
    let high = arr.length - 1;
    let mid;
    let ans = -1;


    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        console.log(mid);
        if (arr[mid] < q1) {
            ans = arr[mid];
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

function main(input) {
    // managing input values
    console.log(input);
    let inputs = input.split('\n');
    console.log(inputs);
    let [n,k] = inputs[0].split(' ').map(Number);
    let arr = inputs[1].split(' ').map(Number);
    // let queries = inputs[2].split(' ').map(Number);
    console.log(n, k, arr);


    let result = [];
    for (let i = 0; i < k; i++) {
        let query = parseInt(inputs[i+2]);
        console.log(query);
        // task functions-- brute force
        // result.push(task(n, k, arr, q1 = parseInt(inputs[i])));

        // binary search
        result.push(bS(arr, query));
        console.log(result);
    }

    // print result
    console.log(result.join('\n'));
}

let input = "5 2\n3 8 10 10 14\n10\n7";
console.log(main(input));