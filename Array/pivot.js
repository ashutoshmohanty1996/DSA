//find the pivot where the left sum and right sum become equal
//and if there is no pivot then return -1

//Approach:
//calculate total sum
//traverse array from left to right subtracting current values from total to get right sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  //fins the sum
  let sum = 0;
  for (let ele of nums) {
    sum += ele;
  }

  //traverse through the array
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum == sum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
};
