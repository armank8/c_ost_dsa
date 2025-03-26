// 2627: Debounce

/**here debounce is a higher-order function(a function
   that returns another function)--It takes two parameters
  fn: The function we want to debounce
  t: The delay time(in milliseconds)
  timer: is a variable that will store the timeout ID
  It is used to track and cancel the previous scheduled execution
 
   ***** return function(...args) {} *****
  The function returns another function  that will
  actually handle debouncing
  (...args) means:
  It uses rest parameters (...) to accept any number of arguments
  These arguments (args) will be passed to fn when executed.
  So, in debounce , ...args lets us handle any function with
  any arguments
*/


// var debounce = function (fn, t) {
//   let timer;
//   return function (...args) {
//     console.log("Debounce called with:", args);
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       console.log("Executing function...");
//       fn(...args);
//     }, t);
//   };
// };
// let t = 50;
// let calls = [
//   { t: 50, inputs: [1] },
//   { t: 75, inputs: [2] },
// ];

// const debouncedLog = debounce(console.log, 100);

// debouncedLog("First Call");
// debouncedLog("Second Call");
