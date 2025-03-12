var longestCommonPrefix = function(strs) {
    console.log(strs);
    strs.sort();
    console.log(strs);
    let first =strs[0];
    let last =strs[strs.length-1];

    let i=0;
    while(i<first.length && first[i] === last[i]){
        i++;
    }
    return first.slice(0,i);
};
console.log(longestCommonPrefix(["flower","flow","flight"]));