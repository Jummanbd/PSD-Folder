

// $('.owl-testi').owlCarousel({
//     items:3,
//     loop:true,
//     margin:25,
//     nav:true,
//     dots:false,
//     autoplay:true,
//     autoplayTimeout:3000,
//      navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],

// });


$('.owl-testi').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
           
        },
        600:{
            items:2,
          
        },
        1000:{
            items:3,
            loop:false
        }
    }
})

 $(document).on('click','#scroll-top', function () {
     $('html, body').animate({scrollTop:0},1000);
 });


