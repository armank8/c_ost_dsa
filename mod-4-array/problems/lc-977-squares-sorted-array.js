var sortedSquares = function(nums) {
    for(let i=0;i<nums.length;i++){
        console.log(nums[i]);
        nums[i] = nums[i] *nums[i];
        console.log(nums[i]);
    }
    return nums.sort((a,b)=>a-b);
};

console.log(sortedSquares([-4,-1,0,3,10]));