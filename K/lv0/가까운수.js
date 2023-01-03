function solution(array, n) {
    var tmpArr = [];
    array.forEach(function(item, index){
        tmpArr.push(Math.abs(item-n));
    });
    var tmpMin = Math.min(...tmpArr);

    var tmpAnsArr = [];
    array.forEach(function(item, index){
        if(Math.abs(item-n) == tmpMin) {
            tmpAnsArr.push(array[index]);
        }
    });

    var answer = "";
    if (tmpAnsArr.length > 1) {
        answer = Math.min(...tmpAnsArr);
    } else {
        answer = tmpAnsArr[0];
    }

    return answer;
}