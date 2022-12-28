function solution(cipher, code) {
    var answer = '';
    var i = code - 1;
    while(i<cipher.length) {
        answer += cipher[i];
        i += code;
    }
    return answer;
}