//subsequence problem where we have top find all the subsequence
//of the given string similar to finding the power set.

const subSequence = (strArray) => {
  //result Array
  const result = [];

  //dfs recursion
  const dfs = (i, strArray, output) => {
    //base case
    if (i == strArray.length) {
      result.push(output.slice());
      return;
    }

    //dfs recursion
    //exclude
    dfs(i + 1, strArray, output);
    output.push(strArray[i]);
    dfs(i + 1, strArray, output);
    output.pop();
  };
  dfs(0, strArray, []);
  return result;
};

str = "bat";

console.log(subSequence(str));
