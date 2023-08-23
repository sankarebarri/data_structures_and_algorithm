from swap import swap

def main():
    test_swap()

def test_swap():
    assert swap("abcdefgh") == "badcfehg"
    assert swap("e") == "e"
    assert swap("") == ""

if __name__ == "__main__":
    main()
