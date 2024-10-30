function climbingStairs(n, memo = {}) {
    if (n <= 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = climbingStairs(n - 1) + climbingStairs(n - 2);
    return memo[n];
}
let n = 8;
console.log(climbingStairs(n));