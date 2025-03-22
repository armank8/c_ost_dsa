// 2727. Is Object Empty

var isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};

let obj = { x: 5, y: 42 };
// let obj = [null, false, 0];
console.log(isEmpty(obj));
