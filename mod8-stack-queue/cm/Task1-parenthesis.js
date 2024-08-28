function parenthesisChecker(s) {
    console.log(s);
    bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    let stk = [];

    for (let i = 0; i < s.length; i++) {
        console.log(i);
        console.log(s[i]);

        if (bracketMap[s[i]]) {
            stk.push(s[i]);
        } else {
            let stkVal = stk.pop();
            if (bracketMap[stkVal] === s[i]) {
                continue
            } else {
                return false;
            }
        }
    }

    console.log(stk);

    return stk.length ===0;
}


function main(s) {
    console.log(s);
    console.log(parenthesisChecker(s));
}
// Time Complexity- O(n) && Space Complexity- O(n)
// ---------------------------------------------
// let input = "(){}[]"
// let input = "()"
// let input = "(]"
// let input = "{()}"
let input = "{(})"
console.log(main(input));