// task functions-- brute force
function task(n, k, arr, q1) {
    console.log(n, k, arr, q1);
    let i;
    for (i = 0; i < n; i++) {
        if (arr[i] > q1) {
            console.log(arr[i]);
            break;
        }
    }
    return arr[i];
}

// binary search
function bS(n, arr, q1) {
    console.log(n, arr, q1);

    let low = 0;
    let high = n;
    let mid;
    console.log(mid);


    while (low < high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] > q1) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    console.log(mid);


}

function main(input) {
    // managing input values
    console.log(input);
    let inputs = input.split('\n');
    console.log(inputs);
    let n = parseInt(inputs[0].split(' ')[0]);
    let k = parseInt(inputs[0].split(' ')[1]);
    let arr = inputs[1].split(' ').map(Number);

    let result = [];
    for (let i = 2; i < k + 2; i++) {
        console.log(parseInt(inputs[i]));

        // task functions-- brute force
        // result.push(task(n, k, arr, q1 = parseInt(inputs[i])));

        // binary search
        result.push(bS(n, arr, q1 = parseInt(inputs[i])));
        console.log(result);
    }

    // print result
    console.log(result.join('\n'));
}

let input = "5 2\n3 8 10 10 14\n10\n7";
console.log(main(input));