//subsequence problem where we have top find all the subsequence
//of the given string similar to finding the power set.

const subSequence = (strArray, index = 0, output = [], result = []) => {
  //base case
  if (index == strArray.length) {
    result.push(output);
  } else {
    //exclude
    subSequence(strArray, index + 1, output, result);

    //include
    subSequence(strArray, index + 1, [...output, strArray[index]], result);
  }
  return result;
};
let str = "bat";

console.log(subSequence(str));
