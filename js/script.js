jQuery(document).ready(function(){
    $(function() {

        //Smooth scrolling of resources page
        $('a[href^=#]').click( function() {
            var href = $(this).attr("href");
            var target = $(href);
            var posTop = target.offset().top -35;
            console.log(posTop);
            $('body, html').animate({ scrollTop:posTop }, 300, 'swing');
            return false;
        });

    } );
})
      