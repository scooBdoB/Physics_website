var main = function() {

    $("#info").mouseleave(function(){
        opened = true;
        $("#info").stop().animate({
            height: "10vh"
        }, 500);
    $("#map").delay(500).css({
        "filter": "blur(0px)"
        });
    });
    
    $("#info").mouseenter(function(){
        $("#info").stop().animate({
            height: "15vh"
        }, 500);
        $("#map").css({
            "filter": "blur(5px)"
        });
    });
    
}

$(document).ready(main);