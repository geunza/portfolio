$(document).ready(function(){
    scrollEvent();
    clickEvent();
    flexEvent();
    navShow();
})  
var $window_w;
var $navXpos;

function scrollEvent(){
    topCheck();
    headerMover();
    offsetChecker();
}
function clickEvent(){
    ddSpread();
}

function topCheck(){
    $(document).scroll(function(){
        if($(window).scrollTop()!=0){
            $(".main, header").addClass("active")
        }else{
            $(".main, header").removeClass("active")
        }
    })
}
function headerMover(){
    $("h1").click(function(e){
    e.preventDefault();
    $("html").stop().animate({scrollTop:0},1000);
})

$('nav ul li').click(function(e){
    e.preventDefault();
    console.log($window_w);
    var $a = $('.main').height();
    if($window_w>767){
        if($('.main').height()>500){
            var $distance01=($('.canDo').offset().top - ($a - 350));
            var $distance02=($('.port').offset().top - ($a - 350));
            if($(this).index()==0){
                $("html").stop().animate({scrollTop:97});
            }else if($(this).index()==1){
                $("html").stop().animate({scrollTop:$distance01});
            }else if($(this).index()==2){
                $("html").stop().animate({scrollTop:$distance02});
            }
        }else if($('.main').height()<500){
            var $distance01=($('.canDo').offset().top - 100);
            var $distance02=($('.port').offset().top - 100);
            if($(this).index()==0){
                $("html").stop().animate({scrollTop:97});
            }else if($(this).index()==1){
                $("html").stop().animate({scrollTop:$distance01});
            }else if($(this).index()==2){
                $("html").stop().animate({scrollTop:$distance02});
            }
        }
    }else{
        if($('.main').height()>500){
            var $distance01=($('.canDo').offset().top - ($a - 200));
            var $distance02=($('.port').offset().top - ($a - 200));
            if($(this).index()==0){
                $("html").stop().animate({scrollTop:97});
            }else if($(this).index()==1){
                $("html").stop().animate({scrollTop:$distance01});
            }else if($(this).index()==2){
                $("html").stop().animate({scrollTop:$distance02});
            }
        }else if($('.main').height()<500){
            var $distance01=($('.canDo').offset().top - 70);
            var $distance02=($('.port').offset().top - 70);
            if($(this).index()==0){
                $("html").stop().animate({scrollTop:97});
            }else if($(this).index()==1){
                $("html").stop().animate({scrollTop:$distance01});
            }else if($(this).index()==2){
                $("html").stop().animate({scrollTop:$distance02});
            }
        }
    }
})
}
function offsetChecker(){
    $(window).scroll(function(){
        var $a = $(window).scrollTop();
        var $dis01 = $('.canDo').offset().top;
        var $dis02 = $('.port').offset().top;
        if($a >= 90){
            $('.about').addClass("show");
        }else{
            $('.about').removeClass("show");
        }
        if($a >= $('.about').offset().top){
            $('.canDo').addClass("show");
        }else{
            $('.canDo').removeClass("show");
        }
        if($a >= $dis01){
            $('.port').addClass("show");
        }else{
            $('.port').removeClass("show");
        }
    })
}
function offsetChecker(){
    $(window).scroll(function(){
        var $a = $(window).scrollTop();
        var $dis01 = $('.canDo').offset().top;
        var $dis02 = $('.port').offset().top;
        if($a >= 90){
            $('.about').addClass("show");
        }else{
            $('.about').removeClass("show");
        }
        if($a >= $('.about').offset().top){
            $('.canDo').addClass("show");
        }else{
            $('.canDo').removeClass("show");
        }
        if($a >= $dis01){
            $('.port').addClass("show");
        }else{
            $('.port').removeClass("show");
        }
    })
}


function clickEvent(){
    ddSpread();
}
function ddSpread(){
    $(".canDo dt").click(function(){
        $(".canDo dd div").slideUp();
		if ($(this).next('dd').children().css("display") == "none") {	
			$(this).next('dd').children().slideDown();
		};
    })
}

function flexEvent(){
    flexPriority();
    flexChecker();
}
function flexPriority(){
    var $target = $('.port ul li');
    var $numb = $target.length;
    for(i=0; i<$numb; i++){
        $target.eq(i).css("order","-"+i);
    }
}
function flexChecker(){
    var $a = $('.port ul li').length;
    if($window_w < 768) return;
        if($a % 3 == 0){
            return;
        }else if($a % 3 == 1){
            $('.port ul li:last-child').after('<li style="visibility:hidden;"></li><li style="visibility:hidden;"></li>')
        }else if($a % 3 == 2){
            $('.port ul li:last-child').after('<li style="visibility:hidden;"></li>')
        }
}




function navPos(){
    $navXpos = $('nav').position().left;
    $(window).resize(function(){
        $navXpos = $('nav').position().left;
    })
}
function navShow(){
    $(".navBtn_open, nav ul li").click(function(){
        navPos();
        var $w_size = $(window).width();
        if($w_size < $navXpos){
            $('nav, header button').addClass('active');

        }else{
            $('nav, header button').removeClass('active');
        }

    })
}


$(document).ready(function () {
    $("body").mousemove(function (e) {
        if($window_w<768) return;
        $window_w = $(window).width();
        if($window_w < 1023) return;
        $("#cube").stop();
        handleMouseMove(e);
    });

    function handleMouseMove(event) {
        var x = event.pageX,
            y = event.pageY;
        $("#cube").animate({
            left: x,
            top: y
        }, 500);
    }
    function squareColor(){
        $("a, dt, button").mouseenter(function(){
            $("#cube").css("background","#40ff7f");
        })
        $("a, dt, button").mouseleave(function(){
            $("#cube").css("background","#16ace0");
        })
    }   
});