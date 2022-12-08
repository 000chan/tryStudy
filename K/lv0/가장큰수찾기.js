function solution(array) {
    let answer = [];
    
    let max = Math.max(...array);
    answer.push(max);
    
    let idx = array.findIndex((item) => item==max);
    answer.push(idx);
    
    return answer;
}