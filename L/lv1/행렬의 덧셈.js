function solution(arr1, arr2) {
    var answer = arr1.map((item, index) =>{
        return item.map((num, j) => {
            return num + arr2[index][j];
        })
    })
    return answer;
}