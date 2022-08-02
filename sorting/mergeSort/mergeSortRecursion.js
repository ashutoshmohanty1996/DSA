// here we perform merge sort using recursion

//merge the 2 arrays
const merge = (arrLeft, arrRight) => {
  const resultArray = [];

  while (arrLeft.length && arrRight.length) {
    resultArray.push(
      arrLeft[0] < arrRight[0] ? arrLeft.shift() : arrRight.shift()
    );
  }
  // if still the elements are reamining in any array

  while (arrLeft.length) resultArray.push(arrLeft.shift());
  while (arrRight.length) resultArray.push(arrRight.shift());

  return resultArray;
};

const mergeSort = (arr) => {
  const mid = Math.floor(arr.length / 2);

  //base case
  if (arr.length < 2) return arr;

  const arrLeft = arr.slice(0, mid);
  const arrRight = arr.slice(mid, arr.length);

  //recursion function
  const sortedLeft = mergeSort(arrLeft);
  const sortedRight = mergeSort(arrRight);

  return merge(sortedLeft, sortedRight);
};

console.log(mergeSort([2, 3, 4, 5, 6, 4, -1, 4, 9, 0, 3, 2, 4, 5, 6, 34, 2]));

// 2nd way

function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr, l, r) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}
const arr = [5, 4, 3, 2, 1];
mergeSort(arr, 0, 4);

console.log(arr);
