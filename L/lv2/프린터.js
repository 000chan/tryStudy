function solution(priorities, location) {
    var answer = 0;
    var one = priorities.slice(0,1);

    if(location != 0) {
        for(var i = 0; i<location; i++){
            if(location == priorities[i]){
                answer = priorities[i+1];
            }
        }
    } else {
        for(var i=0; i<priorities.length; i++){
            answer = i;
        }
    }
    return answer;
}


// 음주 문제풀이 정답 리턴 값은 맞으나, 문제에서 제시한 요지에 벗어남
// 다시풀자 2022-10-26