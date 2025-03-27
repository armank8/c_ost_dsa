/** The setTimeout() method calls a function
 after a number of milliseconds.

 setTimeout() is executed only once.

 If u need repeated executions, use setInterval() instead

 Use the clearTimeout() method to prevent the 
 function from starting

 To clear a timeout, use the id returned
 from setTimeout()

 
 */

// function myGreetings(){
//     console.log("H B D");
// }

const myTimeout = setTimeout(() => {
  console.log("H B D");
}, 3000);

function myStopFunction() {
  console.log("called now after 10 secs");
  clearTimeout(myTimeout);
}

const stopTimeout = setTimeout(myStopFunction, 6000);
// console.log(myStopFunction());
