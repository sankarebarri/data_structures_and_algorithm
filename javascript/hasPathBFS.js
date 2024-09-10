const hasPath = (graph, src, dst) => {
  // code here
  queue = [src];
  while (queue.length > 0) {
    current = queue.shift();
    for (let node of graph[current]) {
      if (node === dst) {
        return true;
      }
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

console.log(hasPath(graph, "b", "f"));
console.log(hasPath(graph, "b", "k"));
