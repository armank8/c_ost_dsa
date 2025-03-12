// 2529. Maximum Count of Positive Integer and Negative Integer
var maximumCount = function(nums) {
    if (nums.length === 0) return null;
    let pos = 0;
    let neg=0;
    for(let num of nums){
        if(num>0){
            pos++;
        }else if(num<0){
            neg++;
        }
        else{
            continue
        }
    }
    return pos > neg ? pos : neg;
};

console.log(maximumCount([-2,-1,-1,1,2,3]));
console.log(maximumCount([-3,-2,-1,0,0,1,2]));