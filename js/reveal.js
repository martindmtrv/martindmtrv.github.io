// DOM Ready
$(function() {
		
    var $el, $ps, $up, totalHeight;
    
    $(".sidebar-box .button").click(function() {
    
        // IE 7 doesn't even get this far. I didn't feel like dicking with it.
                
        totalHeight = 750;
    
        $a = $(this);
        $p  = $a.parent();
        var width = $(window).width();
        $up = $p.parent();
        $divs = $up.find("div");
        
        if (width < 800){
            totalHeight = ($divs.length-1) * 500;
        }
                    
        $up
            .css({
                // Set height to prevent instant jumpdown when max height is removed
                "height": $up.height()+50,
                "max-height": 9999
            })
            .animate({
                "height": totalHeight
            });
        
        // fade out read-more
        $p.fadeOut();
        
        // prevent jump-down
        return false;
            
    });

});
