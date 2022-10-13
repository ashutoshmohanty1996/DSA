const adj = [
  [1, 2],
  [2, 1],
  [2, 3],
  [3, 2],
  [4, 5],
  [5, 4],
  [5, 6],
  [5, 7],
  [6, 5],
  [6, 8],
  [7, 5],
  [7, 8],
  [8, 6],
  [8, 7],
  [8, 9],
  [9, 8],
];

const adjList = {};
const visited = {};
const res = [];

const bfsOfGraph = (V) => {
  const queue = [V];
  //const visited = new Set(); //a set is used because it contains only unique data

  visited[V] = true;

  while (queue.length > 0) {
    const node = queue.shift();

    if (adjList[node]) {
      for (let adjecency of adjList[node]) {
        if (!visited[adjecency]) {
          queue.push(adjecency);
          visited[adjecency] = true;
        }
      }
    }
    res.push(node);
  }
};

const bfs = (adj) => {
  for (let i = 0; i < adj.length; i++) {
    if (adjList[adj[i][0]]) {
      adjList[adj[i][0]].push(adj[i][1]);
    } else {
      adjList[adj[i][0]] = [adj[i][1]];
    }
    if (!visited[adj[i][0]]) {
      visited[adj[i][0]] = false;
    }
    if (!visited[adj[i][1]]) {
      visited[adj[i][1]] = false;
    }
  }

  for (const key of Object.keys(visited)) {
    if (!visited[key]) {
      bfsOfGraph(parseInt(key));
    }
  }
  console.log(res);
};

bfs(adj);
