function main(nums) {
    console.log(nums);
    let idx = nums.length - 1;

    let i = 0;
    while (i <= idx) {
        console.log(i);
        i = i + nums[i];
        console.log(i);

        if (nums[i] == 0) {
            return false;
        }

        if (i >= idx) {
            console.log(i);
            return true;
        }
    }
    return false;
}

let nums = [2, 3, 1, 1, 4];
// let nums = [3, 2, 1, 0, 4];
console.log(main(nums));