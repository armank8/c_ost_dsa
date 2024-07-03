


function targetFinder(nums, target) {
    let n = nums.length;
    console.log(n);

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }

    return -1
}

// Time Complexity-->
// Space Complexity-->

console.log(targetFinder([2, 6, 11, 7], 9));
console.log(targetFinder([3, 2, 4], 6));
console.log(targetFinder([3, 3], 6));