graph = {
    "m" : ["n", "q"],
    "q" : ["p", "r"],
    "p" : [],
    "r": [],
    "n" : []
}

def breadth_first_search(graph, start):
    stack = [start]
    while(len(stack) > 0):
        current = stack.pop()
        for node in graph[current]:
            stack = [node] + stack
        print(current)

breadth_first_search(graph, "m")