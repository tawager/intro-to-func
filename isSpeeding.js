/**
 * Created by a_wags25 on 10/16/14.
 */

function isSpeeding (speed, isBirthday, limit)  {
    if (isBirthday) {
        limit +=5;
    }

    if (speed <= limit){
        return 0;
    }

    else if (speed > limit && speed <= (limit + 20)){
        return 1;
              }
    else {
        return 2;
              }
}

isSpeeding(65, true, 60);
