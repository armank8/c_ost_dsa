// 189. Rotate Array 
// fit for big-tech - in place array rotate

var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n; // Handle cases where k > n

  // Helper function to reverse a portion of the array
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  reverse(0, n - 1); // Step 1: Reverse the whole array
  reverse(0, k - 1); // Step 2: Reverse first k elements
  reverse(k, n - 1); // Step 3: Reverse the rest

  console.log(nums);
};

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotate(nums, k));
