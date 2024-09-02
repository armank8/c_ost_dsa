function task(N, arr) {
    console.log(N, arr);
    arr.sort((a, b) => b-a);
    console.log(arr);

    let score = 0;
    let n;
    while (arr.length > 0) {

        let num1 = arr.shift();
        let num2 = arr.shift();

        score = score + (num1 * num2);

        console.log(num1, num2);
    }

    console.log(arr);
    console.log(score);

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

let input = "6\n10 8 14 3 10 2";
// let input = "4\n1 3 2 3";
console.log(main(input));