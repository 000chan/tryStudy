function solution(order) {
    var answer = 0;
    String(order).split("").forEach(function(item, index) {
        if (item == 3 || item == 6 || item == 9) {
            answer += 1;
        }
    });
    return answer;
}