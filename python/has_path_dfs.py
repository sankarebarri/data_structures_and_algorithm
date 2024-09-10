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

def has_path_iterative(graph, source, destination):
    stack = [source]
    while(len(stack) > 0):
        current = stack.pop()
        for node in graph[current]:
            if node == destination:
                return True
            stack = stack + [node]
    return False

def has_path_recursive(graph, source, destination):
    if source == destination:
        return True
    for node in graph[source]:
        if has_path_recursive(graph, node, destination) == True:
            return True
    return False
graph = {
    "f" : ["g", "i"],
    "i" : ["g", "k"],
    "k" : [],
    "g": ["h"],
    "h" : []
}
print(has_path_iterative(graph, "f", "h"))
print(has_path_iterative(graph, "f", "j"))

print(has_path_recursive(graph, "f", "h"))
print(has_path_recursive(graph, "f", "j"))