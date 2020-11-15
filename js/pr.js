$(document).ready(function(){
    topCheck();
    ddSpread();
    headerMover();
})
function topCheck(){
    $(document).scroll(function(){
        if($(window).scrollTop()!=0){
            $(".main, header").addClass("active")
        }else{
            $(".main, header").removeClass("active")
        }
    })
}
function ddSpread(){
    $(".canDo dt").click(function(){
        $(".canDo dd").stop().slideUp();
        $(this).siblings("dd").stop().slideDown();
    })
}
function headerMover(){
        $("h1").click(function(e){
        e.preventDefault();
        $("html").stop().animate({scrollTop:0});
    })
    
    $('nav ul li').click(function(e){
        e.preventDefault();
        if($('.main').height()>500){
            var $a = $('.main').height();
            var $distance02=($('.canDo').offset().top - ($a - 350));
            var $distance03=($('.port').offset().top - ($a - 350));
            console.log("500이상");
            if($(this).index()==0){
                $("html").stop().animate({scrollTop:97});
            }else if($(this).index()==1){
                $("html").stop().animate({scrollTop:$distance02});
            }else if($(this).index()==2){
                $("html").stop().animate({scrollTop:$distance03});
            }
        }else if($('.main').height()<500){
            var $a = ($('.main').height() - 450);
            var $distance01=($('.about').offset().top - $a - 100);
            var $distance02=($('.canDo').offset().top - $a - 100);
            var $distance03=($('.port').offset().top - $a - 100);
            console.log("500미만");
            if($(this).index()==0){
                $("html").stop().animate({scrollTop:$distance01});
            }else if($(this).index()==1){
                $("html").stop().animate({scrollTop:$distance02});
            }else if($(this).index()==2){
                $("html").stop().animate({scrollTop:$distance03});
            }
        }
    })

}