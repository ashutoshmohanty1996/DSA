//Move all negative numbers to beginning and positive to end with constant extra space

const moveNegative = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] < 0) i++;
    if (arr[i] >= 0) {
      if (arr[j >= 0]) j--;
      else {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
      }
    }
  }
  return arr;
};

console.log(moveNegative([-12, 11, -13, -5, 6, -7, 5, -3, -6]));
