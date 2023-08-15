def x_raise_to_power_n(x, n):
    """
    x and n could be any integer: 0, positive, negative.
    Returns x raise to power n
    """
    if type(n) != int:
        return "n must be an integer"
    if n == 0:
        return 1
    if n == 1:
        return x
    if n < 0:
        n = abs(n)
        result = x * x_raise_to_power_n(x, n-1)
        if result == 0:
            return 0
        return 1/result
    return x * x_raise_to_power_n(x, n-1)