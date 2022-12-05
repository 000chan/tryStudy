function solution(s) {
    s = s.split(" ")
    
    while(s.includes('Z')) {
        s.splice(s.indexOf('Z')-1,2)
    }
    return s.reduce((a,b) => a+Number(b), 0) // 배열 요소의 합
}