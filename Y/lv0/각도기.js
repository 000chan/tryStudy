function solution(angle) {
    // const angle = 0;
    //angle > 0 , angle < 90 -> 예각
    //angle = 90 -> 직각
    //angle < 90 , angle > 180 -> 둔각
    //angle = 180 -> 평각
    if(angle > 0 && angle < 90){
        return 1
    }else if(angle === 90){
        return 2
    }else if(angle > 90 && angle < 180){
        return 3
    }else if(angle === 180){
        return 4
    }
    return angle;

}