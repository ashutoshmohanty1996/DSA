//do the linear searcg using recursion
const arr = [2, 3, 5, 42, 45];
function linearSearch(arr, key) {
  //basecase
  if (arr.length == 0) {
    return false;
  }
  if (arr[0] == key) {
    return true;
  } else {
    return linearSearch(arr.splice(1), key);
  }
}

if (linearSearch(arr, 4)) {
  console.log("found");
} else {
  console.log("not found");
}
