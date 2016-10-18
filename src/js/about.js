


$(document).ready(function() {

    var headerOne = $(".sectionOneHeader");
    var headerTwo = $(".sectionOneSubHeader");
    var planeOne = $(".airplane");
    var planeTwo = $(".airplaneTwo");
    var planeThree = $(".airplaneThree");

    var tl = new TimelineMax();

    //This time line fires on page load. Use callbacks for more animations
    //
    tl.to(headerOne, 1, {scale: 1.2})
        .to(headerTwo, 1, {scale: 1.1});




    $(window).scroll(function(){
        var logoMove = $(this).scrollTop();

       if($(this).scrollTop() < 1200) {
           //$('.logoMain').css('right', 1500);
           $('.logoMain').css('right', logoMove);
           //console.log('working');
       }

        if($(this).scrollTop() > 1000) {
            //fadeLogo();
            $('.logoMain').css('opacity', 0);
            console.log("animation has fired");
        } else  {
            $('.logoMain').css('opacity', 1);
        }

        if($(this).scrollTop() > 1200) {
            getPlaneTimeline();
        }
    });

    //if($(window).scrollTop() > 60) {
    //    $('.logoMain').css("right", 200);
    //    console.log('working');
    //}



    //This is the first attempt at using jquery scroll event for animation
    //--------DELETE BELOW EVENTUALLY---------//
    //Animating CSS with jquery
    //Logo moves from right to left on scroll
    var scrollCounter = 0;
    var i = 0;

    //if(scrollCounter < 100){
    //    $(window).scroll(function(){
    //        scrollCounter += 10;
    //        i += 5;
    //        $(".logoMain").css("right", scrollCounter);
    //        console.log(scrollCounter);
    //        //return scrollCounter;
    //    });
    //    // moveLogo();
    //} else {
    //    fadeLogo();
    //}

    function moveLogo(){
        $(window).scroll(function(){
            scrollCounter++;
            $(".logoMain").css("right", (scrollCounter + 5));
            console.log(scrollCounter);
            return scrollCounter;
        });
    }

    function fadeLogo(){
        $(".logoMain").css("opacity", 0);
        console.log("else!");
        // alert("elseStatement!");
    }

    // function for the timeline of the airplane animations.
    function getPlaneTimeline() {
        var planeTimeline = new TimelineMax();

        planeTimeline.to(planeOne, 2, {bottom: 300, left: 400})
            .to(planeTwo, 2, {delay: -1, bottom: 400, left: 800})
            .to(planeThree, 2, {delay: -1, bottom: 400, left: 1000});
    }


});
