def solution(s):
    sArr = list(s)
    answer = []
    for element in sArr:
        if sArr.count(element)==1:
            answer.append(element)
    answer.sort()
    return "".join(answer)