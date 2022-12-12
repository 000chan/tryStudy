function solution(common) {
    var answer = 0;
    var len = common.length;

    if ((common[2]-common[1])===(common[1]-common[0])) {
        answer = common[len-1] + common[1]-common[0];
    }
    else {
        answer = common[len-1] * (common[1]/common[0]);
    }
    return answer;
}