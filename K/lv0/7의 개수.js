function solution(array) {
    var answer = 0;
    array.forEach(function(item, index){
        String(item).split("").forEach(function(item2, index2){
            if (item2 == 7) {
                answer += 1;
            }
        });
    });
    return answer;
}