def solution(answers):
    # 학생 별 찍는 방식
    student1 = [1, 2, 3, 4, 5]
    student2 = [2, 1, 2, 3, 2, 4, 2, 5]
    student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    # 학생 별 득점 현황
    score = [0, 0, 0]

    # 채점
    for idx in range(len(answers)):
        if answers[idx] == student1[idx%5]:
            score[0] += 1
        if answers[idx] == student2[idx%8]:
            score[1] += 1
        if answers[idx] == student3[idx%10]:
            score[2] += 1

    # 가장 많이 득점한 학생 점수
    max_score = max(score)
    answer = []

    # 가장 많이 득점한 학생이 누구인지 찾기
    for idx in range(len(score)):
        if max_score == score[idx]:
            answer.append(idx + 1)

    return answer