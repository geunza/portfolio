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
        console.log($(document).scrollTop());
    })
}
function ddSpread(){
    $(".canDo dt").click(function(){
        $(".canDo dd").stop().slideUp();
        $(this).siblings("dd").stop().slideDown();
    })
}
function headerMover(){
    var $distance01=($('.about').offset().top - $(window).height() + 97);
    var $distance02=($('.canDo').offset().top - $(window).height() + 350);
    var $distance03=($('.port').offset().top - $(window).height() + 350);
    $("h1").click(function(e){
        e.preventDefault();
        $("html").stop().animate({scrollTop:0});
    })
    $("nav ul li:first-child").click(function(e){
        e.preventDefault();
        $("html").stop().animate({scrollTop:$distance01});
    })
    $("nav ul li:nth-child(2)").click(function(e){
        e.preventDefault();
        $("html").stop().animate({scrollTop:$distance02});
    })
    $("nav ul li:last-child").click(function(e){
        e.preventDefault();
        $("html").stop().animate({scrollTop:$distance03});
    })
}