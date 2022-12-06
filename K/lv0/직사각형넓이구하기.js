function solution(dots) {
    var lenArr = [];
    var hghArr = [];
    dots.forEach(function(item, idx){
        lenArr.push(item[0]);
        hghArr.push(item[1]);
    });
    var x = Math.max(...lenArr) - Math.min(...lenArr);
    var y = Math.max(...hghArr) - Math.min(...hghArr);
    var answer = Number(x) * Number(y);
    return answer;
}