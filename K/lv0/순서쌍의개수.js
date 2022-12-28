function solution(n) {
    var answer = 0;
    for (var i=1; i<=n; i++) {
        if (n%i==0) {
            answer += 1;
        }
    }
    return answer;
}