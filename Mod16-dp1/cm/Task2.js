function maxProfit(prices) {
    if (prices.length === 0) return 0;
    let hold = -prices[0];
    let notHold = 0;

    for (let i = 1; i < prices.length; i++) {
        let prevHold = hold;
        hold = Math.max(hold, notHold - prices[i]);
        notHold = Math.max(notHold, prevHold + prices[i]);
    }
    return notHold;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));