// 169. Majority Element
// Boyer-Moore Voting Algorithm

var majorityElement = function(nums) {
    console.log(nums);
    let candidate = null;
    let count = 0;

    for(let num of nums){
        console.log(num);
        if(count === 0){
            candidate = num;
        }
        
        console.log(count);
        count += (candidate === num) ? 1 : -1;
    }
    return candidate;
};
// console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([6,5,5]));

// Time Complexity- O(n)
// Space Complexity- O(1) 