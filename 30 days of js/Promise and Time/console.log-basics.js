// console.log-basics.js

// function test(...args) {
//   console.log(args);
// }
// console.log(test(1, 2, 3));

// console.log(typeof console.log);
/**
 * Since console.log is a function, we can :
 * Assign it to a variable
 * Pass it as an argument
 * Call it dynamically
 */

// Assign to a variable
// const log = console.log;
// log("This works");

// Pass console.log as an argument
// Since functions are first-class citizens in js,
// console.log can be passed as an argument!. 
// function execute(fn){
//     fn("Logging via function parameter!");
// }
// execute(console.log);



/** What type of Function is console.log?
 
a. It is a method. Since console.log belongs to the
console object , it is a method.Methods are functions 
inside objects.

console.log === window.console.log //true in browsers
console.log === global.console.log  // true in node.js 
 
b.It is a Variadic Function
A viriadic function can take any number of arguments
console.log can handle multiple arguments
console.log("Hello", 42, {a:1}, [1, 2, 3] )
This is different from normal functions,which often
expect a fixed number of arguments


 */
