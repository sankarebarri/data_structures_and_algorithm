def length_of_a_string(string, n=0):
    """
    Takes in a string and returns it's length

    The only parameter it takes is the string, the n is for the calculation purpose
    """
    if string == "":
        return n
    return length_of_a_string(string[1:], n+1)

# def length_of_a_string(string):
#     if string == "":
#         return 0
    
#     return 1 + length_of_a_string(string[1:])