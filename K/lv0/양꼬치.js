function solution(n, k) {
    let lamb = n;
    let drink = n<10 ? k : k-Math.floor(n/10);

    var answer = 12000*lamb + 2000*drink;
    return answer;
}