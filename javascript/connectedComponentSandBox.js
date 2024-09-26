const connectedComponentsCount = (graph) => {
  //
  const count = countComponents();
  return count;
};

const countComponents = (graph) => {
  //
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    for (let neighbor of graph[node]) {
      console.log(neighbor);
    }
  }
};

const graph = {
  i: ["j"],
  j: ["i"],
  k: ["o", "l", "m", "n"],
  o: ["k"],
  l: ["k"],
  m: ["k"],
  n: ["k"],
  p: [],
};

console.log(countComponents(graph));
