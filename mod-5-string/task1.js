function shuffled(s, indices) {
    let newS = [];
    for (let values of indices) {
        newS.push(s[values]);
    }
    // newS.join(',');
    return (newS.join(''));
}

// Time Complexity:  O(n)
// Space Complexity:  O(n)

console.log(shuffled('mamacode', [4, 5, 6, 7, 0, 1, 2, 3]));
console.log(shuffled('dosta', [4,0,1,2,3]));
console.log(shuffled('abc', [1,0,2]));