// 704. Binary Search
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
// Time C - O(log n) - beacuse the search space is 
// divided in half each time
// Space C - O(1)
console.log(search([-1, 0, 3, 5, 9, 12], 9));
