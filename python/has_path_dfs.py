# graph = {
#     "f" : ["g", "i"],
#     "i" : ["g", "k"],
#     "k" : [],
#     "g": ["h"],
#     "h" : []
# }

# start = "f"
# destination = "h"
# stack = [start]

def has_path(graph, source, destination):
    stack = [source]
    while(len(stack) > 0):
        current = stack.pop()
        for node in graph[current]:
            if node == destination:
                return True
            stack = stack + [node]
    return False

graph = {
    "f" : ["g", "i"],
    "i" : ["g", "k"],
    "k" : [],
    "g": ["h"],
    "h" : []
}
print(has_path(graph, "f", "h"))
print(has_path(graph, "f", "j"))