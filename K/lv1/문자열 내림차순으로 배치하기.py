def solution(s):
    tmp = []
    answer = []

    for item in list(s):
        tmp.append(ord(item))

    tmp.sort(reverse=True)

    for item in tmp:
        answer.append(chr(item))

    return "".join(answer)