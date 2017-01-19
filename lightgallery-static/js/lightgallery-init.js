$(document).ready(function() {

    window.prettyPrint && prettyPrint()

    $(window).on("load", function(){
        setTimeout(function(){
            // Animated thumbnails
            var $animThumb = $('#animated-thumbnails');
            if ($animThumb.length) {
                $animThumb.justifiedGallery({
                    border: 6
                }).on('jg.complete', function() {
                    $animThumb.lightGallery({
                        thumbnail: true
                    });
                });
            };                       
        }, 10);                
    });

});