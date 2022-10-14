//You are given an integer array coins representing coins of different denominations and
// an integer amount representing a total amount of money.
//Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
//You may assume that you have an infinite number of each kind of coin.

const coinChange3 = (coins, amount) => {
  // dp[i] represents the least amount of coins that can make the value equals to the i
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
console.log(coinChange3([186, 419, 83, 408], 6249));

//using recursion
const solve = (coins, amount) => {
  //base case
  if (amount == 0) {
    return 0;
  }
  if (amount < 0) {
    return Infinity;
  }
  let min = Infinity;
  for (let coin of coins) {
    // console.log(amount, coin);
    let ans = solve(coins, amount - coin);
    if (ans != Infinity) {
      min = Math.min(min, ans + 1);
    }
  }
  return min;
};

const coinChange = (coins, amount) => {
  let ans = solve(coins, amount);
  if (ans == Infinity) {
    return -1;
  }
  return ans;
};
console.log(coinChange([1, 5, 7], 11));

//using memoisation

/**
 * there are 3 steps to be followed
 * 1. initialize a DP named array and fill the values.
 * 2. assign the ans to the DP[amount]
 * 3. add a condition that if you get the value in dp[amount then return the value there itself]
 
 */
const solve2 = (coins, amount, dp) => {
  //base case
  if (amount == 0) {
    return 0;
  }
  if (amount < 0) {
    return Infinity;
  }
  if (dp[amount] != Infinity) {
    return dp[amount];
  }
  let min = Infinity;
  for (let coin of coins) {
    // console.log(amount, coin);
    let ans = solve2(coins, amount - coin, dp);
    if (ans != Infinity) {
      min = Math.min(min, ans + 1);
    }
  }
  dp[amount] = min;
  return dp[amount];
};

const coinChange2 = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Infinity);
  let ans = solve2(coins, amount, dp);
  if (ans == Infinity) {
    return -1;
  }
  return ans;
};
//console.log(coinChange2([186, 419, 83, 408], 6249));
