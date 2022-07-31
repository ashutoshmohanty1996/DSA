//this checks if the array is sorted or not using recursion
const arr = [2, 3, 5, 42, 45];
function isArraySorted(arr) {
  //basecase
  if (arr.length == (0 || 1)) {
    return true;
  }
  if (arr[0] > arr[1]) {
    return false;
  } else {
    return isArraySorted(arr.splice(1));
  }
}
if (isArraySorted(arr)) {
  console.log("sorted");
} else {
  console.log("its not sorted");
}
