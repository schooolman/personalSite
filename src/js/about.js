


$(document).ready(function() {


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
        // moveLogo();
    } else {
        fadeLogo();
    }

    function moveLogo(){
        $(window).scroll(function(){
            scrollCounter++;
            $(".logoMain").css("right", (scrollCounter + 5));
            console.log(scrollCounter);
            return scrollCounter;
        });
    }

    function fadeLogo(){
        $(".logoMain").css("opacity", "0");
        console.log("else!");
        // alert("elseStatement!");
    }


});
