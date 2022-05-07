$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
            $('.nav').addClass("sticky")
        }
        else{
            $('.nav').removeClass("sticky")
        }
    });
    $('.menu-btn').click(function()
    {
        $('.nav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    // typing animation script
    var typed=new Typed(".typing",{
        strings:["Developer","Coder","Designer","Fashion","Fullstack"],
        typeSpeed:100,
        backSpeed:60,
        loop:true

    });
    var typed=new Typed(".typing-2",{
        strings:["Developer","Coder","Designer","Fashion","Fullstack"],
        typeSpeed:100,
        backSpeed:60,
        loop:true

    });


    // owl coursel Script 
    $('.carousel').owlCarousel({

        margin:20,
        loop:true,
        autoplayTimeOut:20000,
        autoplayHoverPause:true,
        responsive:
        {
            0:
            {
                items:1,
                nav:false
            },
            500:
            {
                items:2,
                nav:false
            },
            1000:
            {
                items:3,
                nav:false
            }
        }

    });
});