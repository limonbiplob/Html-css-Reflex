(function($){
    'use strict';
    
    jQuery(document).ready(function(){
        var sBtn = $('.search-btn'),
            sForm = $('.search-form'),
            sClose = $('.closeX');
        
//        sForm.hide();
        
        sBtn.on('click', function(){
            sForm.addClass('active');
        });
        sClose.on('click', function(){
            sForm.removeClass('active');
        });
        
        
        $('.pskill').barIndicator({
            foreColor: '#fcb910',
            backColor:'rgb(126,196,107)'
        });
        
        if( $.fn.owlCarousel ) {
            
            $('.testimonial-slider').owlCarousel({
                items : 2,
                nav : true,
                navText : ['<i class="fa fa-reply"></i>', '<i class="fa fa-share"></i>']
            });
            $('.client-slider').owlCarousel({
                items : 1,
            });            
            
        }
        
        
        $('.counter').counterUp();
          
        
        // find out the height of border-left, right 
        var borderH = $('.border-left, .border-right').height();
        // find out the height of section-title with padding
        var hh = $('.section-title').height() + 35 + 200;
        // assign border height 
        $('.border-left, .border-right').height( borderH - hh );
        
        
        
        // scroll bottom to top
        
        var btnScroll = $('#scroll-top');
        
        $(window).scroll(function(){
            var position = $('body, html').scrollTop();
            if( position > 300) {
                btnScroll.fadeIn();
            } else {
                btnScroll.fadeOut();
            }
            
        });
        
        btnScroll.on('click', function(){
            
            $('body, html').animate({
                scrollTop: 0
            }, 300);
            
        });
        
        if( $.fn.mixItUp ) {
            
            $('.project-filter').mixItUp();
            
        }
        
        
        
        
    });
    
    
    jQuery(window).load(function(){
        
        
        
    });
    
    
})(jQuery);