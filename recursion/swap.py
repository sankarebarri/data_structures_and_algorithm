def swap(string):
    if string == "":
        return ""
    
    if len(string) == 1:
        return string
    
    nw = string[1] + string[0]
    # print(nw)
    return nw + swap(string[2:])

# print(swap("abcdefgh"), end="")