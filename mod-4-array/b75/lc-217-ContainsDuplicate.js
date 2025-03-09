// lc-217-ContainsDuplicate
var containsDuplicate = function(nums) {
    console.log(nums);
    nums.sort((a,b)=>a-b);
    console.log(nums);

    for(let i=1;i<nums.length;i++){
        if(nums[i] === nums[i-1]){
            return true;
        }
    }
    return false;
};
console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
// TimeC -> O(n log n) (sorting takes O(n log n),scanning takes O(n))
// SpaceC: O(1) (if sorting is in place)