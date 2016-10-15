


$(document).ready(function() {




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
        }
    });

    //if($(window).scrollTop() > 60) {
    //    $('.logoMain').css("right", 200);
    //    console.log('working');
    //}


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


});
