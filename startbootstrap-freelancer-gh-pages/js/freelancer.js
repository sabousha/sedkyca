// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

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

    var video = document.querySelector('video')
        , container = document.querySelector('#overlay');

    var setVideoDimensions = function () {
        // Video's intrinsic dimensions
        var w = video.videoWidth
            , h = video.videoHeight;

        // Intrinsic Ratio
        // Will be more than 1 if W > H and less if W < H
        var videoRatio = (w / h).toFixed(2);

        // Get the container's computed styles
        //
        // Also calculate the min dimensions required (this will be
        // the container dimentions)
        var containerStyles = window.getComputedStyle(container)
            , minW = parseInt( containerStyles.getPropertyValue('width') )
            , minH = parseInt( containerStyles.getPropertyValue('height') );

        // What's the min:intrinsic dimensions
        //
        // The idea is to get which of the container dimension
        // has a higher value when compared with the equivalents
        // of the video. Imagine a 1200x700 container and
        // 1000x500 video. Then in order to find the right balance
        // and do minimum scaling, we have to find the dimension
        // with higher ratio.
        //
        // Ex: 1200/1000 = 1.2 and 700/500 = 1.4 - So it is best to
        // scale 500 to 700 and then calculate what should be the
        // right width. If we scale 1000 to 1200 then the height
        // will become 600 proportionately.
        var widthRatio = minW / w
            , heightRatio = minH / h;

        // Whichever ratio is more, the scaling
        // has to be done over that dimension
        if (widthRatio > heightRatio) {
            var newWidth = minW;
            var newHeight = Math.ceil( newWidth / videoRatio );
        }
        else {
            var newHeight = minH;
            var newWidth = Math.ceil( newHeight * videoRatio );
        }

        video.style.width = newWidth + 'px';
        video.style.height = newHeight + 'px';
    };

    video.addEventListener('loadedmetadata', setVideoDimensions, false);
    window.addEventListener('resize', setVideoDimensions, false);

})(jQuery); // End of use strict
