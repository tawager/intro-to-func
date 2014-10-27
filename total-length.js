/**
 * Created by a_wags25 on 10/16/14.
 */
function mason(small, large, total_length) {

var smallAll = small;
var largeAll = large * 5;
var sum = smallAll + largeAll;

    if(sum >= total_length)  {
        return true;
   }
         else {
        return false;
    }
}

 console.log (mason(5, 2, 12));