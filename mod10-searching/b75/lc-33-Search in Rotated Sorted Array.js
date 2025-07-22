var search = function (nums, target) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    console.log(left);
    console.log(right);
    let mid = Math.floor((left + right) / 2);
    console.log(mid);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([4,6,9,10,12,19,20,1,2,3], 3));
