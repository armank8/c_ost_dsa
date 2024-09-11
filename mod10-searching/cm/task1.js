function task(nums, target) {
    let low = 0, high = nums.length - 1;
    let pos = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            pos = mid;
            console.log(pos);
            return pos;
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return pos;
}

let nums = [-1, 0, 3, 5, 9, 12], target =9;
// let nums = [-1, 0, 3, 5, 9, 12], target = 2;
console.log(task(nums, target));