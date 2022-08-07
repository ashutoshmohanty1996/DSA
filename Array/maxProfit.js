// here we have to find the max profit we can make by buying or selling the stock
//the array represents the prices of the stock on each day.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
};

console.log(maxProfit([1, 2, 3, 4, 5]));
