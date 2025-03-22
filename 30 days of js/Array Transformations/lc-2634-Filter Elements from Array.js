var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

let arr = [0, 10, 20, 30];
// let fn = function greaterThan10(n) {
//   return n > 10;
// };
let fn = function firstIndex(n, i) {
  //   return i === 0;
  return n + 1;
};
console.log(filter(arr, fn));
