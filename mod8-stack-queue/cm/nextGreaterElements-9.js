function nextGreaterElement() {

}
function main(input) {
    console.log(input);
    let inputs = input.split("\n");
    console.log(inputs);

    let T = parseInt(inputs[0]);
    console.log(T);

    let N;
    let values;
    let lineNumber = 1;
    for (let t = 0; t < T; t++) {
        console.log(t);

        N = inputs[lineNumber];
        lineNumber++;
        console.log(lineNumber);

        values = inputs[lineNumber].split(' ').map(Number);
        lineNumber++;
        console.log(lineNumber);

        console.log(N);
        console.log(values);

        console.log(nextGreaterElement(values));
    }


}

let input = "2\n7\n2 7 3 5 4 6 8\n5\n1 2 3 4 5";
console.log(main(input));