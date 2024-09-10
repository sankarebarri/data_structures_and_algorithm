def has_path(graph, src, dst):
    queue = [src]
    while len(queue) > 0:
        current = queue.pop()
        for node in graph[current]:
            if node == dst:
                return True
            queue = [node] + queue
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