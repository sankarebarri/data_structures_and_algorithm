const undirectedGraph = (edges, nodeA, nodeB) => {
  const visited = new Set();
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, visited);
};

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }
  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// console.log(buildGraph(edges));
const graph = buildGraph(edges);
console.log(hasPath(graph, "i", "n", visited)); // error
console.log(hasPath(graph, "i", "l", new Set()));
