$(document).ready(function(){
    let i = 0;
    let count = $(".bg_fade>li").length;
    $(".next").click(function(){
        if(i == count-1){
            i = 0;
        }else{
            i++;
        }
        show();
    });
    $(".prev").click(function(){
        if(i == 0){
            i = count-1;
        }else{
            i--;
        }
        show();
    });

    let slide = setInterval(function(){
        if(i == count-1){
            i = 0;
        }else{
            i++;
        }
        show();
    }, 3000);

    $(".bg_fade").mouseenter(function(){
        clearInterval(slide);
    });
    $(".bg_fade").mouseleave(function(){
        slide = setInterval(function(){
            if(i == count-1){
                i = 0;
            }else{
                i++;
            }
            show();
        }, 3000);
    });

    $(".indicator>li").click(function(){
        i = $(this).index();
        show();
    });

    function show(){
        $(".indicator>li").removeClass("on")
        $(".indicator>li").eq(i).addClass("on")
        $(".bg_fade>li").stop().fadeOut();
        $(".bg_fade>li").eq(i).stop().fadeIn();
    };
});