def solution(score):
    answer = []
    tmpArr = []
    sortedArr = []

    for scores in score:
        tmpArr.append((scores[0]+scores[1])/2)

    sortedArr = sorted(tmpArr, reverse=True)

    for avg in tmpArr:
        answer.append(sortedArr.index(avg) + 1)

    return answer