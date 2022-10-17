//0-1 knapsack problem
var weights = [2, 2, 3, 1];
var prices = [5, 20, 20, 10];
var items = 4;
var capacity = 5;

//recursive approach
const knapSack = (weights, prices, items, capacity) => {
  return solve(weights, prices, items - 1, capacity);
};

const solve = (weights, prices, items, capacity) => {
  //if capacity or the items is 0 then return 0
  if (capacity <= 0 || items <= 0) return 0;

  let include = 0;
  let exclude = 0;

  if (weights[items] <= capacity) {
    include =
      prices[items] +
      solve(weights, prices, items - 1, capacity - weights[items]);
  }
  exclude = solve(weights, prices, items - 1, capacity);
  return Math.max(include, exclude);
};

console.log(knapSack(weights, prices, items, capacity));

//using recursion and memoisation
const knapSack2 = (weights, prices, items, capacity) => {
  //initialize a DP 2D

  const dp = new Array(items).fill(new Array(capacity + 1).fill(-1));
  return solve(weights, prices, items - 1, capacity, dp);
};

const solveMem = (weights, prices, items, capacity, dp) => {
  //if capacity or the items is 0 then return 0
  if (capacity <= 0 || items <= 0) return 0;

  let include = 0;
  let exclude = 0;
  if (dp[items][capacity] != -1) {
    return dp[items][capacity];
  }

  if (weights[items] <= capacity) {
    include =
      prices[items] +
      solveMem(weights, prices, items - 1, capacity - weights[items], dp);
  }
  exclude = solveMem(weights, prices, items - 1, capacity, dp);
  dp[items][capacity] = Math.max(include, exclude);
  return dp[items][capacity];
};

console.log(knapSack2(weights, prices, items, capacity));
