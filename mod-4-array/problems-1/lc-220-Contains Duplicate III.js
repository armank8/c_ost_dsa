var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for(let i=0;i<nums.length;i++){
        for(j=i+1; j<=i+indexDiff && j<nums.length;j++){
            if(Math.abs(nums[i] -nums[j]) <= valueDiff){
                return true;
            }
        }
    }
    return false;
};
console.log(containsNearbyAlmostDuplicate([1,2,3,1],3,0));
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9],2,3));