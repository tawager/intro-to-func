/**
 * Created by a_wags25 on 10/28/14.
 */

$(document).ready (function (){

    var maxChars=140;
    var inputBox = $('#twitterfeed');
    var count = $('count');

    inputBox.on('keypress', checkAndUpdate);

    function checkAndUpdate(event) {
        var currentText = inputBox.val();
    }
        var remaining = currentText.length - maxChars;
    if(remaining = 0){
        count.text(remaining)
    } else {
        count.text(0);
        var truncate = currentText.substring(0, maxChars - 1);
        inputBox.val(truncate);
    }
});