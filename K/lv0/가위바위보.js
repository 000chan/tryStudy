function solution(rsp) {
    var answer = '';
    rsp.split("").forEach(function(item, index){
        switch (item) {
            case '0':
                answer += '5';
                break;
            case '2':
                answer += '0';
                break;
            case '5':
                answer += '2';
                break;
        }
    });
    return answer;
}