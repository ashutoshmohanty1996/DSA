const vertices = ["A", "B", "C", "D", "E"];
const vertexIdx = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

const adjencecyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

//findAdjencies
const findAdjecentNodes = (node) => {
  const result = [];

  for (let i = 0; i < vertices.length; i++) {
    if (adjencecyMatrix[vertices.indexOf(node)][i] > 0) {
      result.push(vertices[i]);
    }
  }
  return result;
};
console.log(findAdjecentNodes("C"));

//isConnected
const isConnected = (node1, node2) => {
  if (adjencecyMatrix[vertexIdx[node1]][vertexIdx[node2]] == 1) return true;
  else return false;
};
console.log(isConnected("E", "A"));
