/**
 * Created by JacobSchoolmeesters on 9/14/16.
 */

console.log("connected");


$(document).ready(function() {

    var testHeader = $(".testHeader");

    //var main = document.getElementById("mainContainer");

    document.getElementById("mainContainer").onscroll = function(){
        console.log("scrolling");
        firstline();
    };


    function firstline(){

        TweenMax.to(testHeader, 0.5, {x: 500, scale: 1.5});

    };

});
