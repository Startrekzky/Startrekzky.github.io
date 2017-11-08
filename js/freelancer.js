// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top )
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
        // if ($('#portfolio').scrollTop<0){
        //     $('.navbar-custom').css('background','rgba(79, 79, 79, 0.4)');
        //     console.log('1');
        // }else{
        //     $('.navbar-custom').css('background','rgba(79, 79, 79, 1)');
        //     console.log('0.4');
        // }
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 50
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 650
        }
    })


    function randomIntFromInterval(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function typeWrite(span1, span2, callback){
      //$('#'+span).addClass('cursor')
      var text1 = $('#'+span1).text();
      var text2 = $('#'+span2).text();
      var randInt = 0;

      for (var i = 0; i < text1.length; i++) {
        randInt += parseInt(randomIntFromInterval(40,150));
        var typing = setTimeout(function(y){
          $('#'+span1).append(text1.charAt(y));
        },randInt, i);
      };
      for (var i = 0; i < text2.length; i++) {
        randInt += parseInt(randomIntFromInterval(40,150));
        var typing = setTimeout(function(y){
          $('#'+span2).append(text2.charAt(y));
        },randInt, i);
      };
      setTimeout(callback,6000);
    }

    $(function(){
      typeWrite("intro1","intro2", function(){
        $(".bounce").animate({opacity:0.2}).animate({opacity:0.5})
        .animate({opacity:0.8}).animate({opacity:1});
      });
      //console.log($(".bounce img"));
      
    });


    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict
