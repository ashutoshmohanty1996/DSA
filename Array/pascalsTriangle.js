/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 0) return [];
  if (numRows == 1) return [[1]];
  if (numRows == 2) return [[1], [1, 1]];
  const result = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    result[i] = [];
    result[i].push(1);
    for (let j = 1; j < i; j++) {
      result[i].push(result[i - 1][j - 1 + result[i - 1][j]]);
    }
    result[i].push(1);
  }
  return result;
};
console.log(generate(5));
