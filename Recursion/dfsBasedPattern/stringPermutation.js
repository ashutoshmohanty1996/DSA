//we have to find all the possible permutations for a string

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // result array
  const result = [];

  //dfs pattern
  const dfs = (i, nums) => {
    //base case
    if (i == nums.length) {
      result.push(nums.slice());
      return;
    }

    //recursion expression

    for (let j = i; j < nums.length; j++) {
      //swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      //swap back
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  dfs(0, nums);
  return result;
};
