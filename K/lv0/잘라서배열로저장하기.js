function solution(my_str, n) {
    var answer = [];
    var tmpArr = String(my_str).split("");
    var tmpIdx = 0;
    while (tmpIdx < tmpArr.length) {
        var tmpAns = ""
        for (var i=tmpIdx; i<(tmpIdx+n>tmpArr.length?tmpArr.length:tmpIdx+n); i++) {
            tmpAns += tmpArr[i];
        }
        answer.push(tmpAns);
        tmpIdx += n;
    }
    return answer;
}