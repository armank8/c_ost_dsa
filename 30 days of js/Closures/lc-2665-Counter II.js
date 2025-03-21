// 2665. Counter II
var createCounter = function (init) {
    let count = init;
  return {
    increment: ()=> ++count,
    decrement: ()=> --count,
    reset: ()=> count = init
  };
};
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
