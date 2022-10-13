// vertices list and edge list

const vertices = ["A", "B", "C", "D", "E"];
const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

//findAdjecentNodes
const findAdjecentNodes = (node) => {
  //loop though edges array
  //is my node in the connection?
  //if yes, push the other node in the pair into the result array
  //if no, keep looping

  const result = [];

  for (let edge of edges) {
    const index = edge.indexOf(node);
    if (index > -1) {
      result.push(index == 0 ? edge[1] : edge[0]);
    }
  }
  return result;
};
console.log(findAdjecentNodes("C"));

//isConnected
const isConnected = (node1, node2) => {
  for (edge of edges) {
    if (edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1) return true;
  }
  return false;
};
console.log(isConnected("E", "C"));

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(source, destination) {
    if (!this.adjacencyList[source]) {
      this.addVertex(source);
    }
    if (!this.adjacencyList[destination]) {
      this.addVertex(destination);
    }
    this.adjacencyList[source].push(destination);
    this.adjacencyList[destination].push(source);
  }
  removeEdge(source, destination) {
    this.adjacencyList[source] = this.adjacencyList[source].filter(
      (vertex) => vertex !== destination
    );
    this.adjacencyList[destination] = this.adjacencyList[destination].filter(
      (vertex) => vertex !== source
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex]) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
