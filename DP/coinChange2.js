//You are given an integer array coins representing coins of different denominations and
// an integer amount representing a total amount of money.
//Return the number of combinations that make up that amount.
//If that amount of money cannot be made up by any combination of the coins, return 0.
//You may assume that you have an infinite number of each kind of coin.

var coinChange = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    // iterate the types of coin
    for (let j = 1; j <= amount; j++) {
      if (j >= coin) {
        // dp[j] is the combinations for amount j for not using the current coin
        // dp[j - coins[i]] is is the combinations for using the current coin
        dp[j] = dp[j] + dp[j - coin];
      }
    }
  }
  console.log(dp);
  return dp[amount];
};

console.log(coinChange(5, [1, 2, 5]));
