def recursive_binary(n):
    """
    Convert from base 10 to base 2
     n: only accepts positive integer for now
    """
    if n == 0:
        return 0
    if n == 1:
        return 1
    remainder = ''
    remainder = remainder + str(n%2)
    recall = recursive_binary(n//2)
    return str(recall) + remainder

# print(recursive_binary(125))