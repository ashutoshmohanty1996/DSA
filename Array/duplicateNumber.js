/**
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * There is only one repeated number in nums, return this repeated number.
 *
 * This uses floyd's rabbit and tortoise algo
 * @param {number[]} nums
 * @return {number}
 */

// using floyd's tortoise and hare algorithm
var findDuplicate = function (nums) {
  let tortoise = nums[0];
  let hare = nums[tortoise];

  // first phase tortoise will move 1 step at a time and hare will move 2
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  }

  tortoise = 0;

  // In  second phase both will move one step at a time
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return hare;
};

console.log(findDuplicate([3, 1, 3, 4, 2]));
