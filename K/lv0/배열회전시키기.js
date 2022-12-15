function solution(numbers, direction) {
    var answer = [];
    switch(direction) {
        case 'right':
            numbers.forEach(function(item, index) {
                if (index == numbers.length-1) {
                    answer[0] = item;
                } else {
                    answer[index+1] = item;
                }
            });
            break;
        case 'left':
            numbers.forEach(function(item, index) {
                if (index == 0) {
                    answer[numbers.length-1] = item;
                } else {
                    answer[index-1] = item;
                }
            });
            break;
        default:
            break;
    }
    return answer;
}