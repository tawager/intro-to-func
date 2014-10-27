/**
 * Created by a_wags25 on 10/16/14.
 */

function findLongestWord(str)  {
    var words = str.trim().split(" ");
    var longest = "";
    for (var i=0; i < words.length; i++) {
        var word = words[i];
        if (longest.length < word.length) {
             word = longest;
        }

    }
    return longest;
}
findLongestWord('Five hour energy for class')