function longestIncreasingSubSequence(nums) {
    console.log(nums);
    let dp = Array(nums.length).fill(1);
    console.log(dp);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}

let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubSequence(nums));