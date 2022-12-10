function solution(keyinput, board) {
    const answer = [0,0]
    const key = {
        up: [0,1],
        down: [0,-1],
        left: [-1,0],
        right: [1,0]
    }
    const map = [Math.floor(board[0]/2) , Math.floor(board[1]/2)]
    keyinput.forEach(dir => {
        if(Math.abs(answer[0]+key[dir][0]) <= map[0] &&
            Math.abs(answer[1]+key[dir][1]) <= map[1]) {
            answer[0]+=key[dir][0]
            answer[1]+=key[dir][1]
        }
    })
    return answer
}