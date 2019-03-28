function reveal(){  
    var $a, $p, $up;

    $a = $('.sidebar-box .button');
    $p  = $a.parent();
    $up = $p.parent();
                
    $up
        .animate({
            "max-height": 4*1000
        });
    
    // fade out read-more
    $p.fadeOut();
    
    // prevent jump-down
    return false;        
}
