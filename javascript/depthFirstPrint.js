const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    current = stack.pop();
    // console.log(current);
    for (let neighbor of graph[current]) {
      console.log(neighbor);
      stack.push(neighbor);
    }
  }
};
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstPrint(graph, "a"); // print acbdef
