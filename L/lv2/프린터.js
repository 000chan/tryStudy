function solution(priorities, location) {
    var answer = 0;
    var one = priorities[0];

    if(location != 0) {
        for(var i=0; i<location; i++){
            answer = priorities[i];
        }
        priorities.shift();
        if(answer == priorities[0]){
            priorities.shift();
            priorities.push(answer);
            priorities.push(one);
        }
        console.log(priorities);
    }else {
        for(var a=0; a<priorities.length-1; a++){
            answer = priorities.length-1
        }
        if(priorities[0] == one){
            priorities.push(one)
            priorities.shift();
            if(priorities[0]){
                priorities.push(one);
                priorities.shift();
            }
        }
        console.log(priorities);
    }
    return answer;
};

// 음주 문제풀이 정답 리턴 값은 맞으나, 문제에서 제시한 요지에 벗어남
// 다시풀자 2022-10-26
// 두번째 시도 실패 2022-10-27