// 2626. Array Reduce Transformation

var reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};
let nums = [1, 2, 3, 4];
// let fn = function sum(accum, curr) {
//   return accum + curr;
// };
let fn = function sum(accum, curr) {
  return accum + curr * curr;
};
let init = 100;
console.log(reduce(nums, fn, init));
