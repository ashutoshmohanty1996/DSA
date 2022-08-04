// here we are finding out the sum of all the possible sets whos sum is equal to the given number

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  //result array
  const result = [];

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const dfs = (i, nums, k, n, output) => {
    //backtracking
    if (n < 0) return;

    //baseCase
    if (output.length === k) {
      if (n === 0) {
        result.push(output.slice());
      }
      return;
    }

    //dfs recursive expression
    for (let j = i; j < nums.length; j++) {
      output.push(nums[j]);
      dfs(j + 1, nums, k, n - nums[j], output);
      output.pop();
    }
  };
  dfs(0, nums, k, n, []);
  return result;
};

console.log(combinationSum3(3, 7));
