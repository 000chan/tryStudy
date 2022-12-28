function solution(i, j, k) {
    var answer = 0;
    var tmpStr = "";

    for (var idx=i; idx<j+1; idx++) {
        tmpStr += String(idx);
    }

    tmpStr.split("").forEach(function(item, index){
        if(item==k){
            answer += 1;
        }
    });

    return answer;
}