$(function($){
    $('header').bgSwitcher({
        images:['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval:6000,
        loop: true,
    });

    $(window).scroll(function (){
        $(".fadein").each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > targetElement - windowHeight + 200){
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });

    $('.slider').slick({
        autoplay: true,   
        autoplaySpeed: 3000,  
        dots: true,  
        arrows: true, 
        slidesToShow: 4, 
        slidesToScroll: 1, 
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3, 
                }
            },
            {
                breakpoint: 768,  
                settings: {
                    slidesToShow: 1, 
                }
            }
        ]
    })


});