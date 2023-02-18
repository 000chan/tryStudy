def solution(n, arr1, arr2):
    row1 = [] # 1번 지도 row
    row2 = [] # 2번 지도 row
    overlap = []
    answer = []

    # 각 row에 대하여
    for i in range(0, n):
        # 이진화
        bin1 = bin(arr1[i])[2:]
        bin2 = bin(arr2[i])[2:]

        # 지도 겹치기
        overlap = str(int(bin1) + int(bin2))
        overlap = overlap if len(overlap) == n else ("0" * (n-len(overlap))) + overlap
        overlap = list(overlap)

        # 지도 그리기
        map = ""
        for item in overlap:
            if item == "0":
                map += " "
            else:
                map += "#"

        # answer
        answer.append(map)

    return answer