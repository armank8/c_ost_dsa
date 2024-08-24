function isValid(S) {
    console.log(S);
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const stack = [];

    for (let char of S) {
        console.log(char);
        if (bracketMap[char]) {
            stack.push(char);
        } else {
            const lastBracket = stack.pop();
            if (bracketMap[lastBracket] !== char) {
                return false;
            }
        }
    }
    console.log(stack);

    return stack.length === 0;
}

function printResult(results) {
    console.log(results.join('\n'))
}

function main(input) {
    console.log(input);
    const inputs = input.split('\n');
    const T = parseInt(inputs[0]);
    console.log(T);

    let results = [];
    for (let i = 1; i <= T; i++) {
        let S = inputs[i];
        results.push(isValid(S) ? 'Valid' : 'Not valid');
    }
    console.log(results);

    printResult(results);

}

let input = "2\n[{()}]\n[{(})]";
console.log(main(input));