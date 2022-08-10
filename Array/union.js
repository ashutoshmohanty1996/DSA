//Given two arrays a[] and b[] of size n and m respectively.
//The task is to find union between these two arrays.

/**
 * @param {number[]} a
 * @param {number} n
 * @param {number[]} b
 * @param {number} m
 * @returns {number}
 */

//Function to return the count of number of elements in union of two arrays.
const doUnion = (a, n, b, m) => {
  // code here
  a = [...a, ...b];
  const temp = {};
  let count = 0;
  for (let i of a) {
    if (temp[i]) {
      temp[i]++;
    } else {
      count++;
      temp[i] = 1;
    }
  }
  return count;
};

console.log(doUnion([1, 2, 3, 4, 5], 5, [1, 2, 3], 3));
