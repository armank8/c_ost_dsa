// lc 347. Top K Frequent Elements
var topKFrequent = function(nums, k) {
    let hash={};
    for(let num of nums){
        console.log(num);
        hash[num] = (hash[num] | 0) + 1;
    }
    console.log(hash);

    let topK = Object.keys(hash)
    .sort((a,b)=>hash[b]-hash[a])
    .slice(0,k)
    .map(Number)

    // console.log(topK);
    return topK;
};
console.log(topKFrequent([1,1,1,2,2,3],2));