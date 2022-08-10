/**
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals;

  //sort the array
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];
  result.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let prev = result.pop();
    let curr = intervals[i];

    if (curr[0] <= prev[1]) {
      result.push([prev[0], Math.max(curr[1], prev[1])]);
    } else {
      result.push(prev, curr);
    }
  }
  return result;
};

console.log(
  merge([
    [1, 4],
    [5, 6],
  ])
);
