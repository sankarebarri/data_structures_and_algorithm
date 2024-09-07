def depth_first_search_iterative(graph, start):
    stack = [start]
    # print(start)
    while (len(stack) > 0):
        current = stack.pop()
        for node in graph[current]:
            stack = stack + [node]
            # print(stack)
        print(current)

graph = {
    "m" : ["n", "q"],
    "q" : ["p", "r"],
    "p" : [],
    "r": [],
    "n" : []
}

depth_first_search_iterative(graph, "q")

a = ["b","c"]
a = a + ["d"]
a = ["e"] + a
# print(a)