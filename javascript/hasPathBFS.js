const hasPath = (graph, src, dst) => {
  // code here
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;
    for (let node of graph[current]) {
      //   if (node === dst) {
      //     return true;
      //   }
      queue.push(node);
    }
  }
  return false;
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
  k: [],
};

console.log(hasPath(graph, "a", "f"));
console.log(hasPath(graph, "b", "k"));
