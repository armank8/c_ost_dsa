var uniqueOccurrences = function(arr) {
    let s= {};

    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
        s[arr[i]] = (s[arr[i]] | 0) + 1;
    }
    console.log(s);
    console.log(Object.keys(s).length);

    let freqSet = new Set(Object.values(s));
    console.log(freqSet);

    return Object.keys(s).length === freqSet.size;
};
console.log(uniqueOccurrences([1,2,2,1,1,3]));
console.log(uniqueOccurrences([1, 2, 2, 3, 3, 3]));