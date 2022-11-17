function solution(id_pw, db) {
    var answer = '';
    var userId = id_pw[0];
    var userPw = id_pw[1];

    for(var i=0; i<db.length; i++){
        if(userId == db[i][0] && userPw == db[i][1]){
            answer = 'login';
        }

        if(answer != 'login' && userId == db[i][0] && userPw != db[i][1]){
            answer = 'wrong pw';
        }

        if(answer == '' && db[i][0] != userId){
            console.log(db[i][0]);
            if(db[i][1] != userPw){
                console.log(db[i][1]);
            }
        }
    }


    // for(var i=0; i<db.length; i++){
    //     if(userId == db[i][0]){
    //         answer = (userPw!=db[i][1])?'wrong pw':'fail'
    //         if(userPw == db[i][1]){
    //            answer = 'login';
    //         }
    //     } else {
    //         answer = 'fail'
    //     }
    // }

    // for(var i=0; i<db.length; i++){
    //     if(userId != db[i][0]){
    //         answer = "fail";
    //     } else if(userId == db[i][0]){
    //         if(userPw == db[i][1]){
    //             answer = 'login';
    //         } else if(userPw != db[i][1]) {
    //             answer = 'wrong pw';
    //         }
    //     }
    // }

    // 훈재때문에 집에가서 마무리 ㅂㄷㅂㄷ
    return answer;
}