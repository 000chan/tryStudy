def solution(s):
    answer = []
    while len(s) > 0:
        if s.startswith("zero"):
            answer.append("0")
            s = s[4:]
        elif s.startswith("one"):
            answer.append("1")
            s = s[3:]
        elif s.startswith("two"):
            answer.append("2")
            s = s[3:]
        elif s.startswith("three"):
            answer.append("3")
            s = s[5:]
        elif s.startswith("four"):
            answer.append("4")
            s = s[4:]
        elif s.startswith("five"):
            answer.append("5")
            s = s[4:]
        elif s.startswith("six"):
            answer.append("6")
            s = s[3:]
        elif s.startswith("seven"):
            answer.append("7")
            s = s[5:]
        elif s.startswith("eight"):
            answer.append("8")
            s = s[5:]
        elif s.startswith("nine"):
            answer.append("9")
            s = s[4:]
        else:
            answer.append(s[0])
            s = s[1:]
    return int("".join(answer))