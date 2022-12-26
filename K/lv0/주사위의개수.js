function solution(box, n) {
    var answer = 1;
    box.forEach(function(item, index){
        answer *= Math.floor(item/n);
    });
    return answer;
}