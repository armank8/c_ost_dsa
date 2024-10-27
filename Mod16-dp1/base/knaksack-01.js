function knapsack(weights, values, maxWeight) {
    console.log(weights, values, maxWeight);
    const n = weights.length;
    console.log(n);
    const dp = Array.from({ length: n + 1 }, () => Array(maxWeight + 1).fill(0));

    console.log(dp);

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= maxWeight; w++) {
            if(weights[i-1]<=w){
                dp[i][w] = Math.max(
                    dp[i-1][w],
                    dp[i-1][w-weights[i-1]]+values[i-1];
                )
            }
        }
    }





    console.log(dp);


}

let weights = [1, 3, 4, 5];
let values = [1, 4, 5, 7];
let maxWeight = 7;
console.log(knapsack(weights, values, maxWeight));