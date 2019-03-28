$(function(){
    $(".button").click(function() {    
		
        var $a, $p, $up, $divs;

        $a = $('.sidebar-box .button');
        $p  = $a.parent();
        $up = $p.parent();
        $divs = $up.find("div");
                    
        $up
            .animate({
                "max-height": 4*1000
            });
        
        // fade out read-more
        $p.fadeOut();
        
        // prevent jump-down
        return false;        
    });
});
