// 153. Find Minimum in Rotated Sorted Array
var findMin = function (nums) {
  let n = nums.length;
  let low = 0;
  let high = n - 1;
  let min = nums[0];
  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid]>nums[high]) {
        low=mid+1;
    }else{
        high=mid;
    }
  }
  return nums[low];
};
console.log(findMin([4, 5, 1, 2,3]));
