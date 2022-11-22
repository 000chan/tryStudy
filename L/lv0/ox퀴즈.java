package lv0;

public class ox퀴즈 {
//    class Solution {
//        public String[] solution(String[] quiz) {
//            String[] answer = {};
//            String[] answer2 = {};
//
//            for(int i=0; i<quiz.length; i++){
//                answer = quiz[i].split("=");
//
//                if(answer[i].contains("+")){
//                    System.out.println(answer[i]);
//                }else{
//                    System.out.println(answer[i]);
//                }
//
//            }
//
//            return answer;
//        }
//    }
}

// js버전(통과함)
// function solution(quiz){
//     var answer = [];
//     var disAnswer = [];
    
//     for(var i=0; i<quiz.length; i++){
//         disAnswer[i] = quiz[i].split(" ");
//         if(disAnswer[i][1] == "+"){
//             answer[i] = ((Number(disAnswer[i][0]) + Number(disAnswer[i][2]))==disAnswer[i][4])?"O":"X"
//         } else {
//             answer[i] = ((Number(disAnswer[i][0]) - Number(disAnswer[i][2]))==disAnswer[i][4])?"O":"X"
//         }
//     }
//     return answer;
// }
