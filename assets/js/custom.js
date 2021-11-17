$(document).ready(function() {


    const swiper = new Swiper('.swiper-header', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        // speed: 700,
        autoplay: {
        waitForTransition: true,
        disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });
      

    const swiperLogos = new Swiper('.swiper-logos', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        speed: 1500,
        autoplay: {
        waitForTransition: true,
        disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });
      


      $(".mean-expand").on('click',function(){

        console.log($(this).hasClass(' mean-clicked'));
       
        $(this).siblings('ul').toggleClass('d-flex');

        // if($(this).hasClass(' mean-clicked') == false)
        // {
        //   $(this).siblings('ul').css('display','flex');
        // }
        // else{
        //   $(this).siblings('ul').css('display','none');
        // }
        
      })
})