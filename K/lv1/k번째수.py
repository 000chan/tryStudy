def solution(array, commands):
    # 결과값
    answer = []

    # 명령 실행
    for command in commands:
        newArray = array[command[0]-1 : command[1]]
        newArray.sort()
        answer.append(newArray[command[2]-1])

    # 결과값 반환
    return answer