// check if the given string is pelindrome or not
let str = "asddsa";
function palindromeLoops(str) {
  //using loops
  str = str.split("");
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i] != str[j]) {
      return false;
    } else {
      continue;
    }
  }
  return true;
}

//using recursion
function palindrome(str, i, j) {
  //base case
  if (i > j) {
    return true;
  }
  if (i <= j) {
    if (str[i] == str[j]) {
      i++;
      j--;
      return palindrome(str, i, j);
    } else {
      return false;
    }
  }
  let temp;
  temp = str[i];
  str[i] = str[j];
  str[j] = temp;
}
console.log(palindromeLoops(str));
console.log(palindrome(str.split(""), 0, str.length - 1));
