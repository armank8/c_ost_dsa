function shuffled(s, indices) {
    console.log(s, indices);
    let newS = [];
    for (let values of indices) {
        // console.log(values);
        // console.log(newS[values]);
        newS.push(s[values]);
        console.log(newS);
    }
    // newS.join(',');
    console.log(newS.join(''));
}

console.log(shuffled('mamacode', [4, 5, 6, 7, 0, 1, 2, 3]));
console.log(shuffled('dosta', [4,0,1,2,3]));
console.log(shuffled('abc', [1,0,2]));