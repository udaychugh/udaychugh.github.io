/* Preloader */ 
$(window).on( "load", function() 
{  
	$(".box-loader").fadeOut("slow"); 
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


// shrinkable menu js

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "6px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "px";
  }
}


function uncheck()
{
document.getElementById("hamburger-toggle").checked=false;
}



var offsetTop = $('#skills').offset().top;
	$(window).scroll(function() {
  var height = $(window).height();
  if($(window).scrollTop()+height > offsetTop) {
    jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },2000);
    });
  }
  });

// jQuery(document).ready(function(){
// 	jQuery('.skillbar').each(function(){
// 		jQuery(this).find('.skillbar-bar').animate({
// 			width:jQuery(this).attr('data-percent')
// 		},6000);
// 	});
// });

