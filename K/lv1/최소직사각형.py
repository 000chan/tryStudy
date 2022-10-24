def solution(sizes):
    width, height = 0, 0

    # w, h 중 큰 값을 w로 설정
    for w, h in sizes:
        if w < h:
            w, h = h, w

        # 최대 w와 최대 h 값 구하기
        width = max(width, w)
        height = max(height, h)

    # 지갑 크기 반환
    return width * height