function max_frequency(input) {
    const S = input;
    console.log(S);
    const n = S.length;
    console.log(n);

    const hash = {};

    for (let i of S) {
        console.log(i);
        hash[i] = (hash[i] || 0) + 1;
    }
    console.log(hash);

    let max={};
    for(let i in hash){
        console.log(i);
        console.log(hash[i]);
        

    }
}

console.log(max_frequency('abcbcba'));
// console.log(max_frequency('babcdcd'));