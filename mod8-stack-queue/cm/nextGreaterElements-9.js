function nextGreaterElement(N, heights) {
    console.log(N);
    console.log(heights);
    let results = [];
    let greater = 0;

    for (let i = 0; i < heights.length - 1; i++) {
        // console.log(i);
        for (let j = i + 1; j < heights.length; j++) {
            // console.log(j);
            if (heights[j] > heights[i]) {
                console.log(heights[i],heights[j])
                // heights[i] = heights[j];
                results.push(heights[j]);
                break
            }

        }
    }
    console.log(results);

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

        console.log(nextGreaterElement(N, values));
    }


}

// let input = "2\n7\n2 7 3 5 4 6 8\n5\n1 2 3 4 5";
let input = "1\n7\n2 7 3 5 4 6 8";
console.log(main(input));