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

const dfsOfGraph = (V) => {
  const stack = [V];
  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited[node]) {
      visited[node] = true;
      if (adjList[node]) {
        for (let j = 0; j < adjList[node].length; j++) {
          stack.push(adjList[node][j]);
        }
      }
      res.push(node);
    }
  }
};

const dfs = (adj) => {
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

  //ye har baar call hoga for any disconnected graph
  for (const key of Object.keys(visited)) {
    if (!visited[key]) {
      dfsOfGraph(parseInt(key));
    }
  }
  console.log(res);
};

dfs(adj);
