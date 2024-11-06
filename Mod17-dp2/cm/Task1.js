function longest(text1, test2) {
    console.log(text1, text2);
    let m = text1.length;
    let n = text2.length;
    console.log(m, n);
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    console.log(dp);

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[m][n]
}

let text1 = 'abcde';
let text2 = 'ace';
console.log(longest(text1, text2));