const pathExist = (edges, nodeA, nodeB) => {
  const graph = convertToGraph(edges);
  return hasPath(graph, nodeA, nodeB);
};

const convertToGraph = (edges) => {
  // code here
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

const hasPath = (graph, src, dst) => {
  // code
  const visited = new Set(src);
  const stack = [src];

  while (stack.length > 0) {
    const current = stack.pop();
    for (let node of graph[current]) {
      if (node === dst) return true;
      if (!visited.has(node)) {
        visited.add(node);
        stack.push(node);
      }
      // console.log(stack, visited);
    }
  }
  return false;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// console.log(convertToGraph(edges));
const graph = convertToGraph(edges);
// console.log(hasPath(graph, "j", "o"));
console.log(pathExist(edges, "i", "j"));
console.log(pathExist(edges, "i", "l"));
console.log(pathExist(edges, "o", "n"));
console.log(pathExist(edges, "k", "n"));
