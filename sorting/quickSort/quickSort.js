//here we sort the array usinh the quicksort

const partition = (arr, s, e) => {
  let pivot = arr[s];

  let cnt = 0;
  for (let i = s + 1; i <= e; i++) {
    if (arr[i] <= pivot) {
      cnt++;
    }
  }

  //place pivot at right position
  let pivotIndex = s + cnt;
  let temp = arr[pivotIndex];
  arr[pivotIndex] = arr[s];
  arr[s] = temp;

  //left and right wala part smbhal lete h
  let i = s,
    j = e;

  while (i < pivotIndex && j > pivotIndex) {
    while (arr[i] <= pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i < pivotIndex && j > pivotIndex) {
      let temp1 = arr[i];
      arr[i] = arr[j];
      arr[j] = temp1;
      i++;
      j--;
    }
  }

  return pivotIndex;
};

const quickSort = (arr, s, e) => {
  //base case
  if (s >= e) return arr;

  //partition
  let p = partition(arr, s, e);

  //left part sort karo
  quickSort(arr, s, p - 1);

  //right wala part sort karo
  quickSort(arr, p + 1, e);
};

const arr = [1, 5, 3, 5, 8, 5, 3, 4, 5, 6, 78, 2, 0];
quickSort(arr, 0, 12);

console.log(arr);
