function removeAdjacentDuplicates(s) {
    let stk = [];

    for (let i = 0; i < s.length; i++) {
        let stkData = stk.pop();    

        if(stkData === undefined){
            stk.push(s[i]);
        }else if(stkData!==s[i]){
            stk.push(stkData)
            stk.push(s[i]);
        }
    }
    console.log(stk.join(''));
    return (stk.join('')) || -1;
}

function main(s) {
    console.log(removeAdjacentDuplicates(s));
}
// Time Complexity- O(n) && Space Complexity- O(n)
// ---------------------------------------------
let input = "abbaca"
// let input = "azxxzy"
// let input = "aabbcc"
console.log(main(input));