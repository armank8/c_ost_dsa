var uniqueOccurrences = function(arr) {
    let s= new Set();
    console.log(s);

    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
        s.add(arr[i]);
    }
    console.log(s);
};
console.log(uniqueOccurrences([1,2,2,1,1,3]));