/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
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
      //sort the output
      result.push(output.slice());
      return;
    }
    //dfs recursion
    //to avoid duplicasy
    for (let j = i; j < candidates.length; j++) {
      if (i !== j && candidates[j] === candidates[j - 1]) continue;
      output.push(candidates[j]);
      dfs(j, candidates, target - candidates[j], output);
      output.pop();
    }
  };
  dfs(0, candidates, target, []);
  return result;
};

console.log(combinationSum([100, 200, 4, 12], 400));
