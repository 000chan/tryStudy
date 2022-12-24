function solution(emergency) {
    var origin = [...emergency];
    var answer = [];
    emergency.sort(function(a, b){return b-a});

    origin.forEach(function(item, index){
        for(var i=0; i<emergency.length; i++) {
            if(emergency[i] == item) {
                answer.push(i + 1);
            }
        }
    })

    return answer;
}