function main(nums) {
    console.log(nums);
    let maxReach=0;

    for(let i=0; i<nums.length; i++){
        maxReach = Math.max(maxReach, i+nums[i]);
        console.log(i);
        console.log(maxReach);

        if(maxReach>= nums.length -1 ){
            return true;
        }
        if(i === maxReach && nums[i] === 0 ) return false;
    }
    return false;
}

// let nums = [2, 3, 1, 1, 4];
let nums = [3,2,1,0,4];
console.log(main(nums));