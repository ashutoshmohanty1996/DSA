/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
 */

// Function to count inversions in the array.
const inversionCount = (arr, N) => {
  //your code here
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
        console.log(arr[i], arr[j]);
      }
    }
  }
  return count;
};

console.log(inversionCount([2, 4, 1, 3, 5, 5, 6, 7, 8, 9, 0], 11));
