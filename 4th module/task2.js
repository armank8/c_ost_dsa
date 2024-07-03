
function stockProfit(prices) {
    let n = prices.length;
    console.log(n);
    let max_profit = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (prices[i] < prices[j] && prices[j] - prices[i] > max_profit) {
                max_profit = prices[j] - prices[i];
            }
        }
    }

    return max_profit;

}

console.log(stockProfit([7, 1, 5, 3, 6, 4]))
console.log(stockProfit( [7,6,4,3,1]))