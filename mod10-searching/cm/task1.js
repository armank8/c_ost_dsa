function task(nums, target) {
    // console.log(nums, target);

    let low = 0, high = nums.length - 1;
    console.log(low, high);
    let mid;
    let pos = -1;

    while (low < high) {
        mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            pos = mid;
            return pos;
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return pos;
}

function main(nums, target) {
    // console.log(nums, target);

    // task functions
    console.log(task(nums, target));
}

let nums = [-1, 0, 3, 5, 9, 12], target = 9;
// let nums = [-1, 0, 3, 5, 9, 12], target = 2;
console.log(main(nums, target));