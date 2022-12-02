function solution(quiz) {
    answer = [];
    quiz.forEach(function(expression) {
        let tmpArr = expression.split(" ");
        if (tmpArr[1]=="-")
        {
            let tmpAns = (Number(tmpArr[0])-Number(tmpArr[2])==Number(tmpArr[4]) ? "O" : "X");
            answer.push(tmpAns);
        }
        else if (tmpArr[1]=="+")
        {
            let tmpAns = (Number(tmpArr[0])+Number(tmpArr[2])==Number(tmpArr[4]) ? "O" : "X");
            answer.push(tmpAns);
        }
    });
    return answer;
}