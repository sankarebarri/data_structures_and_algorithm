from length_of_a_string import length_of_a_string

def main():
    test_length_of_a_string()

def test_length_of_a_string():
    assert length_of_a_string("abcdef") == 6
    assert length_of_a_string("") == 0
    assert length_of_a_string("b") == 1

if __name__ == "__main__":
    main()