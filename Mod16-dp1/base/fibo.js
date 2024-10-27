function fibMemo(n,memo={}){
    if(n<=1) return n;

    if(memo[n]) return memo[n];

    memo[n] = fibMemo(n-1,memo) + fibMemo(n-2,memo);

    return memo[n];
}

console.log(fibMemo(5 ));