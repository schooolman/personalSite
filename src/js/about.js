/**
 * Created by JacobSchoolmeesters on 9/14/16.
 */

//console.log("connected");


$(document).ready(function() {

    var scrollPosition = $(document).scrollTop();
    //var scrollCounter = 0;

    var testHeader = $(".testHeader");
    var secondHeadline = $(".mini-content-container");

    //var main = document.getElementById("mainContainer");

    document.getElementsByClassName("contentSectionOne").onscroll = function(){
        console.log(scrollPosition);
        //scrollCounter++;
        firstline();
    };


    function firstline(){

        TweenMax.to(testHeader, 0.5, {x: 500, scale: 1.5});
        TweenMax.to(secondHeadline, 1.5, {delay:0.5, x: 2000, scale: 1.5})
    };

});
