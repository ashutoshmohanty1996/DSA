// to find the majority of an array
//using Boyer-Moore Voting Algorithm
//here we use 2 variables and the space complexity becomes constant.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let element = 0;

  for (let ele of nums) {
    if (count == 0) {
      element = ele;
    }
    count += ele == element ? 1 : -1;
  }
  return element;
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
