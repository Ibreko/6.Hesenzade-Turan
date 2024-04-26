(function($){
    'use strict';
    
    // ======== Owl Carousel initializer ======== //
        $(".banner").owlCarousel({
            loop:true,
            margin: 0,
            nav:false,
            autoplay: true,
            autoplayTimeout: 10000,
            items:1,
            dots: false,
            lazyLoad: true,
            responsive:{
            0:{
              items:1
            },
            1920:{
              items:1
            }
            }
        });

        $(".books-slider").owlCarousel({
          margin:30,
          nav:false,
          autoplay: false,
          loop:true,
          items:4,
          dots: false,
          responsive:{
              0:{
                items:1
              },
              576:{
                items:2
              },
              768:{
                items:3
              },
              992:{
                  items:4
              },
              1920:{
                items:4
              }
          }
         });

        

})(jQuery);