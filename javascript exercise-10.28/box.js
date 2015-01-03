/**
 * Created by a_wags25 on 10/28/14.
 */
$(document).ready (function (){

    var box = $('div.boxy');
    var action = $('');

    box.on('mouseenter', function() {
        box

            .stop(true)
            .animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
        }, 5000, function() {
            // Animation complete.
        });
});