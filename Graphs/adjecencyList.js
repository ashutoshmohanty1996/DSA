const vertices = ["A", "B", "C", "D", "E"];

const adjencyList = {
  A: ["B", "D"],
  B: ["A", "C"],
  C: ["B", "D", "E"],
  D: ["A", "C", "E"],
  E: ["C", "D"],
};

const findAdjecentNodes = (node) => {
  return adjencyList[node];
};

console.log(findAdjecentNodes("C"));

//isConnected
const isConnected = (node1, node2) => {
  if (adjencyList[node1].includes(node2)) {
    return true;
  } else return false;
};
console.log(isConnected("E", "A"));
