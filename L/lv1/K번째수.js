function solution(array, commands) {
    var sibal1 = array.slice(commands[0][0]-1, commands[0][1])
    var sibal2 = array.slice(commands[1][0]-1, commands[1][1])
    var sibal3 = array.slice(commands[2][0]-1, commands[2][1])

    console.log(sibal1)
    console.log(sibal2[commands[1][3]])
    console.log(sibal3[commands[2][3]])

    var answer = [];
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/42748
//못풀었음 개어렵네 ㅎㅎ ^^ 음주 코딩하지말자 ^^
//2022-11-02