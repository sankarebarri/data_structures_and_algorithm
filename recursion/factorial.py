def factorial(n: int):
    """
    Takes n >= 0

    Returns 1 if n == 0, else returns n * (n-1) * (n-2) * ... * 1
    """
    if n == 0:
        return 1
    if n < 0:
        return "Negative Number Not Allowed"
    return n * factorial(n-1)