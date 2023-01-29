def solution(s):
    length = len(s)

    if length % 2 != 0:
        answer = s[int(length/2):int(length/2+1)]
    else:
        answer = s[int(length/2 - 1):int(length/2+1)]
    return answer