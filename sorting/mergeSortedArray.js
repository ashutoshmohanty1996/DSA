//here we merge two sorted arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [-4, -5, 3, 3, 6, 7, 8, 9];

function mergeArray(arr1, arr2) {
  let resultArray = [];

  for (i = 0, j = 0; i < arr1.length, j < arr2.length; ) {
    if (arr1[i] < arr2[j]) {
      resultArray.push(arr1[i++]);
    } else {
      resultArray.push(arr2[j++]);
    }
  }
  return resultArray;
}

const _mergeArrays = (a, b) => {
  const c = [];

  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift());
  }

  //if we still have values, let's add them at the end of `c`
  while (a.length) {
    c.push(a.shift());
  }
  while (b.length) {
    c.push(b.shift());
  }

  return c;
};

console.log(mergeArray(arr1, arr2));
