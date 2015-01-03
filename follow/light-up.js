/**
 * Created by a_wags25 on 10/29/14.
 */
$(document).ready(function(){

    var one_star = $("#one_star");
    var two_stars = $("#two_stars");
    var three_stars = $("three_stars");
    var four_stars = $("four_stars");
    var five_stars = $("five_stars");

    //var rating = $(div.selected);

    $('.star').mouseenter(function() {
        $(this).addClass("selected");
        $(this).prevAll('.star').addClass("selected");
        $(this).css(
            .selected{

        });


    });


    $('.star').mouseleave(function() {
        $(this).removeClass("selected");
        $(this).prevAll('.star').removeClass("selected");
    });


    

});