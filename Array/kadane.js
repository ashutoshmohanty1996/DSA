//its very important
//Kadane's Algo.

// the question finds the maximum sum of the subarray

const maxSun = (arr) => {
  let currSum = 0;
  let maxSum = -Infinity;
  for (let ele of arr) {
    currSum += ele;
    maxSum = Math.max(currSum, maxSum);
    if (currSum < 0) currSum = 0;
  }
  return maxSum;
};

console.log(maxSun([-1, -2, -3, -4, -5]));
