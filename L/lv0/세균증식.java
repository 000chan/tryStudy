package lv0;

public class 세균증식 {
    public int solution(int n, int t){
        int answer = 0;
        answer = (int)Math.pow(2,t) * n;
        return answer;

        // math 기능을 몰라서 삽질한 시간이 많았음,
        // 아는만큼 승리한다. 왜 나는 초록불 안뜨지
    }
}
