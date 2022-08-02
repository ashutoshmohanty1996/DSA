// this is an important problem where we count the total number of inversions
//i.e. if the array is sorted then the count is ZERO, or if the array is reversly sorted then the count is maximum.

//Approach 1
//time complexity is O(n^2)

const countInversion = (arr) => {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        console.log(arr[i], arr[j], arr[i] > arr[j]);
        count++;
      }
    }
  }
  return count;
};

//2nd approach
//using the mergesort approach where the time complexity is O(nlogn)
//** ye samajh nai aya mujhe * /

// const merge = (arr1, arr2) => {
//   let i = 0;
//   let j = 0;
//   let count = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] > arr2[j++]) {
//       count++;
//     } else i++;
//   }
//   return count;
// };

// const countInversion2 = (arr) => {
//   //base case
//   if (arr.length <= 2) return 0;

//   const mid = Math.floor(arr.length / 2);

//   const leftArray = countInversion2(arr.slice(0, mid));
//   const rightArray = countInversion2(arr.slice(mid + 1, arr.length));

//   return merge(leftArray, rightArray);
// };

console.log(countInversion2([1, 2, 3, 4, 5]));
