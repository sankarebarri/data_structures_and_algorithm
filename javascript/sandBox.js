// const undirectedGraph = (edges, nodeA, nodeB) => {
//   // helper function that takes edges and converts it to a graph
//   const graph = convertToGraph(edges);

//   // helper functions that takes the graph and check if there is a path or not
//   const hasPath = hasPath(graph, nodeA, nodeB);

//   return hasPath;
// };

// const convertToGraph = (edges) => {
//   // code here
//   const graph = {};
//   for (let edge of edges) {
//     // a = edge[0];
//     // b = edge[1];
//     const [a, b] = edge;
//     if (!(a in graph)) {
//       graph[a] = [];
//     }
//     if (!(b in graph)) {
//       graph[b] = [];
//     }
//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   return graph;
// };

// const hasPath = (graph, nodeA, nodeB) => {
//   // use dfs(stack)
//   const visited = new Set();
//   const stack = [nodeA];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (!visited.has(current)) {
//       visited.add(current);
//       if (current in graph) return false;
//       if (current === nodeB) return true;
//       for (let neighbor of graph[current]) {
//         stack.push(neighbor);
//       }
//     }
//   }
//   return false;
// };

// const edges = [
//   ["i", "j"],
//   ["k", "i"],
//   ["m", "k"],
//   ["k", "l"],
//   ["o", "n"],
// ];

// // console.log(convertToGraph(edges));
// graph = convertToGraph(edges);
// console.log(hasPath(graph, "i", "l"));

const deepFirst = (graph, src, dst) => {
  const visited = new Set();
  const stack = [src];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current === dst) return true;
    for (const node of graph[current]) {
      // if (node === dst) {
      //   return true;
      // }
      if (!visited.has(node)) {
        visited.add(node);
        stack.push(node);
      }
    }
  }
  return false;
};

const a = {
  i: ["j", "k"],
  j: ["i"],
  k: ["i", "m", "l"],
  m: ["k"],
  l: ["k"],
  o: ["n"],
  n: ["o"],
};

console.log(deepFirst(a, "j", "i")); // true
console.log(deepFirst(a, "i", "n")); // false
console.log(deepFirst(a, "k", "l")); // true
console.log(deepFirst(a, "n", "o")); // true
console.log(deepFirst(a, "o", "y")); // false
console.log(deepFirst(a, "i", "n")); // false
console.log(deepFirst(a, "i", "y")); // false

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
  k: [],
};
