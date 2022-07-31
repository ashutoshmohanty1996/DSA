//find the sum of array using recursion
const arr = [1, 02, 3, 4, 5, 6, 7, 8, 9, 0];
function sumOfArray(arr) {
  //base condition
  if (arr.length == 0) {
    return 0;
  }
  if (arr.length == 1) {
    return arr[0];
  }
  let sum = arr[0] + sumOfArray(arr.splice(1));
  return sum;
}

console.log(sumOfArray(arr));
