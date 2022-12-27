function solution(num_list) {
    var answer = [];

    for(i=0; i<num_list.length; i++){
        if(num_list[i] % 2 == 0){
            answer[0] += 1;
            // answer[i] = s;
        }else{
            answer[1] += 1;
            console.log("else")
            // answer[i] = i
        }
    }
    return answer;
}