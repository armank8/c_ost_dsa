var hammingWeight = function(n) {
    let count = 0;
    while(n!==0){
        count = count + (n & 1);
        n= n >>> 1; 
    }
    return count;
};
console.log(hammingWeight(11));