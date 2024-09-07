def depth_first_search_recursive(graph, start):
    print(start)
    for node in graph[start]:
        depth_first_search_recursive(graph, node)


graph = {
    "m" : ["n", "q"],
    "q" : ["p", "r"],
    "p" : [],
    "r": [],
    "n" : []
}
depth_first_search_recursive(graph, "m")