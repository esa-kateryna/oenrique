$ (function(){
    $('.slider_content').slick({
        dots: true,
        arrows: false    
    });

    $(".menu, .up").on("click","a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});