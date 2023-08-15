from factorial import factorial

def main():
    test_factorial()

def test_factorial():
    assert factorial(0) == 1
    assert factorial(-4) == 'Negative Number Not Allowed'
    assert factorial(4) == 24
    assert factorial(8) == 40320

if __name__ == "__main__":
    main()