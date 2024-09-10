const hasPathDFSIterative = (graph, src, dst) => {
  // code here
  stack = [src]; // initialise the stack with the src, the neighbors would be stored here

  // while the stack is not empty
  while (stack.length > 0) {
    current = stack.pop();
    for (let node of graph[current]) {
      // if the neighbor is equal to dst, no need to continue
      if (node === dst) {
        return true;
      }
      // if not true, then add the neighbor to the stack
      stack.push(node);
    }
  }
  return false; // if not found in the stack, i.e. not a neighbor
};

const hasPathDFSRecursive = (graph, src, dst) => {
  // code here
  // stack = [src];
  // if (src === dst) {
  //   return true;
  // }
  // current = stack.pop();
  // for (let node of graph[current]) {
  //   if (hasPathDFSRecursive(graph, node, dst)) {
  //     return true;
  //   }
  //   stack.push(node);
  // }
  // return false;
  if (src === dst) return true;
  for (let node of graph[src]) {
    if (hasPathDFSRecursive(graph, node, dst) === true) {
      return true;
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

console.log(hasPathDFSIterative(graph, "b", "f"));
console.log(hasPathDFSIterative(graph, "b", "k"));

console.log(hasPathDFSRecursive(graph, "b", "f"));
console.log(hasPathDFSRecursive(graph, "b", "k"));
