// here we have to reverse a string using recursion
let str = "hello";
function reverseStringusingLoops(str) {
  //using loops
  str = str.split("");
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    let temp;

    temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }
  return str.join("");
}

//using recursion
function reverseString(str, i, j) {
  //base case
  if (i >= j) {
    return str.join("");
  }
  let temp;
  temp = str[i];
  str[i] = str[j];
  str[j] = temp;
  i++;
  j--;
  return reverseString(str, i, j);
}
console.log(reverseString(str.split(""), 0, str.length - 1));
