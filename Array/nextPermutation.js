/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * @Approach
 * Find the first decreasing index moving from end to start
 * E.g. [7, 2, 3, 1, 5, 4, 3, 2, 0] num 1 is the first decreasing index going from the end backwards
 * Swap num 1 with the next large num to its right which is 2
 * [7, 2, 3, 2, 5, 4, 3, 1, 0]
 * Reverse/sort nums to the right
 * [7, 2, 3, 2, 0, 1, 3, 4, 5]
 * If there is no next permutation reverse the array
 */
var nextPermutation = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const large = nextLarge(i);
      swap(i, large);
      reverse(i + 1);
      return nums;
    }
  }

  // If there is no next permutation reverse the arr
  nums.reverse();
  return nums;

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  function reverse(idx) {
    let start = idx,
      end = nums.length - 1;

    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  }

  function nextLarge(idx) {
    for (let i = nums.length - 1; i > idx; i--) {
      if (nums[i] > nums[idx]) return i;
    }
  }
};
console.log(nextPermutation([3, 2, 1]));

// 123 => 132
