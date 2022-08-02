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
