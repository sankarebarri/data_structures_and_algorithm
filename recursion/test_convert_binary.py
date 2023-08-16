from convert_to_binary import recursive_binary

def main():
    test_convert_binary()

def test_convert_binary():
    # test positive numbers
    assert recursive_binary(5) == '101'
    assert recursive_binary(125) == '1111101'
    assert recursive_binary(439) == '110110111'

    # # test negative numbers
    # assert recursive_binary(-125) == -1111101
    # assert recursive_binary(-439) == -110110111

    # # test 1 and 0
    # assert recursive_binary(1) == 1
    # assert recursive_binary(0) == 1




if __name__ == "__main__":
    main()