function solution(new_id) {
    var answer = '';

    if(new_id.length >= 3 && new_id.length <= 15){
        var Nnew_id = new_id.toLowerCase();

        var reg1 = /[a-z0-9][/-/_/.]/g;
        if(reg1.test(Nnew_id)){
            answer = Nnew_id;
            console.log('테스트4 통과');
        }else {

        }
    }else {
        console.log('아이디의 길이는 3자 이상 15자 이하여야합니다.');
        return;
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/72410
//못풀었음 개어렵네 ㅎㅎ ^^ 음주 코딩하지말자 ^^
//2022-11-02