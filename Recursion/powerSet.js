//here we are finding the power set of a given array
//time complexity = O(n2^n)
//space complexity = O(n2^n)

var subsets = function (nums, index = 0, output = [], result = []) {
  //base case
  //when the index become equal to the length of the nums array
  if (index == nums.length) {
    result.push(output);
  } else {
    //exclude case
    subsets(nums, index + 1, output, result);

    //include case
    subsets(nums, index + 1, [...output, nums[index]], result);
  }
  return result;
};
console.log(subsets([1, 2, 3]));
