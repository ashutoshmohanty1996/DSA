/**
 * @param {string} digits
 * @return {string[]}
 */

//here we have to find all the combinations for the letters as per the keypad
//refer Leetcode 17

var letterCombinations = function (digits) {
  const mapping = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  //result array
  const result = [];
  if (!digits.length) return [];

  const dfs = (i, digits, output) => {
    //base case
    if (i == digits.length) {
      result.push(output.join(""));
      return;
    }

    //recursive function
    let chars = mapping[digits[i]];
    for (let val of chars) {
      output.push(val);
      dfs(i + 1, digits, output);
      output.pop();
    }
  };
  dfs(0, digits, []);
  return result;
};

console.log(letterCombinations(""));
