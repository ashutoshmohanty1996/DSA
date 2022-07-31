//complete the binary search using recursion

const arr = [2, 3, 5, 42, 45];
function binarySearch(arr, key) {
  //base case for not found
  if (arr.length == 0) {
    return false;
  }
  let mid = Math.floor((arr.length - 1) / 2);
  //base case for found
  if (arr[mid] == key) {
    return true;
  }

  if (arr[mid] > key) {
    return binarySearch(arr.splice(0, mid), key);
  }
  if (arr[mid] < key) {
    return binarySearch(arr.splice(mid + 1), key);
  }
}

if (binarySearch(arr, 45)) {
  console.log("found");
} else {
  console.log("not found");
}
