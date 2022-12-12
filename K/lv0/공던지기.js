function solution(numbers, k) {
    let idx = (((k * 2)) % numbers.length) - 2
    let answer = (idx < 0 ? numbers[idx+numbers.length] : numbers[idx]);
    return answer;
}