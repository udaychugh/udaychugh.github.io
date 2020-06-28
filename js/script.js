/* Preloader */ 
$(window).on( "load", function() 
{  
	$(".load").fadeOut("slow"); 
})

/*Smooth scroll */

$(function () {
    $('a[href*=\\#]:not([href=\\#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


/* Activate Wow.js */ new WOW().init(); 


/* Back to top button */ 

$(function() 
  {
      var btn = $('.backtotop');

      $(window).scroll(function () {
          if ($(window).scrollTop() < 100) {
              btn.addClass('hidden');
          } else {
              btn.removeClass('hidden');
          }
      });
  }); 
