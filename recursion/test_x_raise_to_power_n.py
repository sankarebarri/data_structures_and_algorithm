from x_raise_to_power_n import x_raise_to_power_n

def main():
    test_x_raise_to_power_n()

def test_x_raise_to_power_n():
    assert x_raise_to_power_n(2, 3) == 8
    assert x_raise_to_power_n(3, 2) == 9

    # negative inputs
    assert x_raise_to_power_n(-2, 3) == -8
    assert x_raise_to_power_n(2, -3) == (1/8)

    # input of negative x with n(even and odd)
    assert x_raise_to_power_n(-2, -4) == (1/16)
    assert x_raise_to_power_n(-2, -3) == -(1/8)

    # 0 inputs
    assert x_raise_to_power_n(-2, 0) == 1
    assert x_raise_to_power_n(2, 0) == 1
    assert x_raise_to_power_n(0, 14) == 0
    assert x_raise_to_power_n(0, -14) == 0

    # n non integer
    assert x_raise_to_power_n(2, -0.2) == "n must be an integer"

if __name__ == "__main__":
    main()