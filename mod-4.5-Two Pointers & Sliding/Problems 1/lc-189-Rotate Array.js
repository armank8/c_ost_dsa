// 189. Rotate Array

var rotate = function (nums, k) {
  console.log(nums, k);
  let n = nums.length;
  let temp = new Array(nums.length).fill(0);
  console.log(temp);

  let i = 0;
  let pos = 0;
  while (i < n) {
    pos = (i + k) % n;
    temp[pos] = nums[i];
    i++;
  }

  console.log(temp);
  
  i = 0;
  while (i < n) {
    nums[i] = temp[i];
    i++;
  }

  console.log(temp);
  return temp;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate([-1, -100, 3, 99]), 2);
