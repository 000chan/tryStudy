def solution(numbers, hand):
    L = 10
    R = 12
    answer = ""

    for i in range(len(numbers)):
        num = 11 if numbers[i] == 0 else numbers[i]

        _L = (abs(L - num) // 3) + (abs(L - num) % 3)
        _R = (abs(R - num) // 3) + (abs(R - num) % 3)

        if num == 1 or num == 4 or num == 7:
            answer += "L"
            L = num
        elif num == 3 or num == 6 or num == 9:
            answer += "R"
            R = num
        else:
            if _L == _R:
                if hand == "left":
                    answer += "L"
                    L = num
                else:
                    answer += "R"
                    R = num
            else:
                if _L < _R:
                    answer += "L"
                    L = num
                else:
                    answer += "R"
                    R = num

    return answer
    