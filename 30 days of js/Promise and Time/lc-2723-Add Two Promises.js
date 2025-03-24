// 2723. Add Two Promises
// resolve- somadhan kora, golito kora,
var addTwoPromises = async function (promise1, promise2) {
  // Wait for both promises to resolve
  const [value1, value2] = await Promise.all([promise1, promise2]);

  return value1 + value2;
};

let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
console.log(addTwoPromises(promise1, promise2));
