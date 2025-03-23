// 2677. Chunk Array
var chunk = function (arr, size) {
  let chunkedArr = [];
  console.log(chunkedArr);

  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  console.log(chunkedArr);
  return chunkedArr;
};
let arr = [1, 2, 3, 4, 5];
let size = 2;
console.log(chunk(arr, size));
