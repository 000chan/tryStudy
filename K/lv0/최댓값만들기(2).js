function solution(numbers) {
    var answer = "";
    var negative = [];
    var positive = [];

    if (numbers.length < 3) {
        return numbers[0] * numbers[1];
    }

    numbers.forEach(function(item, index){
        if(item<0) {
            negative.push(Math.abs(item));
        } else {
            positive.push(item);
        }
    });

    negative.sort((a, b) => (b - a));
    positive.sort((a, b) => (b - a));

    var negMax = negative.length != 1 ? negative[0] * negative[1] : 0;
    var posMax = positive.length != 1 ? positive[0] * positive[1] : 0;

    return negMax > posMax ? negMax : posMax;
}