/**
 * Created by JacobSchoolmeesters on 9/14/16.
 */

//console.log("connected");


$(document).ready(function() {

    ////var scrollPosition = $('.contentSectionOne').scrollTop();
    ////var scrollCounter = 0;
    //
    //var testHeader = $(".testHeader");
    //var secondHeadline = $(".mini-content-container");
    //
    ////var main = document.getElementById("mainContainer");
    //
    ////document.getElementsByClassName("contentSectionOne").onscroll = function(){
    ////    console.log(scrollPosition);
    //    //scrollCounter++;
    //    //firstline();
    ////};
    //console.log("connected?");
    //
    //var scrollCount = 0;
    //
    //$('contentSectionOne').scrollTop(function() {
    //    console.log(scrollCount);
    //    scrollCount++;
    //});
    //
    //function firstline(){
    //
    //    TweenMax.to(testHeader, 0.5, {x: 500, scale: 1.5});
    //    TweenMax.to(secondHeadline, 1.5, {delay:0.5, x: 2000, scale: 1.5})
    //}

    //Animating CSS with jquery
    //Logo moves from right to left on scroll
    var scrollCounter = 0;
    var i = 0;

    if(i < 100){
        $(window).scroll(function(){
            scrollCounter += 10;
            i += 5;
            $(".logoMain").css("right", scrollCounter);
            console.log(scrollCounter);
            //return scrollCounter;
        });
        //moveLogo();
    } else {
        fadeLogo();
    }

    function moveLogo(){
        $(window).scroll(function(){
            scrollCounter++;
            $(".logoMain").css("right", (scrollCounter + 5));
            console.log(scrollCounter);
            return scrollCounter;
        })
    }

    function fadeLogo(){
        $(".logoMain").css("opacity", "0");
        console.log("else!");
        alert("elseStatement!");
    }


});
