function firstUniqueChar(s) {
    // console.log(s);
    const hash = {};
    for (let elm of s) {
        // console.log(elm);
        hash[elm] = (hash[elm] || 0) + 1;
    }
    console.log(hash);
    
    for (let i = 0; i < s.length; i++) {
        // console.log(s[i]);
        if (hash[s[i]] === 1) {
            return i;
        }
    }
    // console.log(hash);
    return -1;
}

console.log(firstUniqueChar('leetcode'));
// console.log(firstUniqueChar('leetcode'));