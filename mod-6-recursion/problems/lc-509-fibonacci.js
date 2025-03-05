// var fib = function(n) {
//     console.log(n);
//     if(n<=1) return n;

//     return  fib(n-1) + fib(n-2);

// };

// console.log(fib(6));

// Approach 2: Memoization (Top-Down DP)
// var fib = function(n,memo={}) {
//     console.log(n);
//     if(n<=1) return n;
//     if(memo[n]) return memo[n];

//     memo[n] = fib(n-1,memo) + fib(n-2,memo);
//     return memo[n];

// };

// console.log(fib(20));
