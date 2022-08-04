//here we are given an array and the target sum
//there should be no duplicasy

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  //result array
  const result = [];
  candidates.sort((a, b) => {
    a - b;
  });

  const dfs = (i, candidates, target, output) => {
    //backtracking
    if (target < 0) return;

    //base case
    if (target == 0) {
      result.push(output.slice());
      return;
    }
    //dfs recursion
    //to avoid duplicasy
    for (let j = i; j < candidates.length; j++) {
      if (i !== j && candidates[j] === candidates[j - 1]) continue;
      output.push(candidates[j]);
      dfs(j + 1, candidates, target - candidates[j], output);
      output.pop();
    }
  };
  dfs(0, candidates, target, []);
  return result;
};

console.log(combinationSum2([1, 2, 3, 4, 5, 6, 3, 3, 2, 1], 7));
