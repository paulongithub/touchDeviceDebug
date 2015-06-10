;(function(){

    if (typeof window.$ === 'undefined') {
        alert("Ensure jquery is loaded as $ before using this script");
        return;
    }

    ////////////////////
    //TOUCH DEVICE DEBUG
    ////////////////////
    size = 5;
    num = 0;

    window.pad = function(num) {
	    var s = num+"";
	    while (s.length < size) s = "0" + s;
	    return s;
    }

    window.log = function(logString) {
	    num++;
		
	    if (typeof logString === 'undefined' || logString === null) 
		    return;
		
	    if (typeof logString !== 'string') 
		    logString = logString.toString();

	    var p = $("<p>" + pad(num) + ": " + logString + "</p>");
	    $('[data-log]').prepend(p);
        $('[data-log-count] .count').text(pad(num));
    }

    $(function(){

        //html elements
        $('body').append("<div data-log><div data-log-delete data-cross='x'></div><div data-log-hide data-arrow='\u2193'></div><div data-log-count><span>log count:&nbsp;</span><span class=\"count\"></span></div></div>");
        //css
        $('body').append("<style type='text/css'>[data-log-delete]{width:10px;height:10px;background:#0f0;color:black;position:absolute;left:0;top:0;cursor:pointer}[data-log-delete]:before{content:attr(data-cross);position:absolute;top:-2px;left:2px;}[data-log-hide]{width:10px;height:10px;background:#0f0;color:black;position:absolute;left:50%;top:0;cursor:pointer}[data-log-hide]:before{content:attr(data-arrow);position:absolute;top:-2px;left:2px;}[data-log-count]{position:absolute;right:0;top:0}[data-log]{width:100%;position:fixed;height:25%;top:75%;overflow:scroll;background:#000;color:#0f0;font-size:10px;font-family:monospace;z-index:999999;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}</style>");

	    var logTimer = 0;
	    
	    $('[data-log-delete]').on('touchstart mousedown',function(){
		     $('[data-log]').children('p').remove();
	    });
		

        $('[data-log-hide]').on('touchstart mousedown',function(){
            if ($(this).hasClass('log-hidden')) {
                $(this).attr('data-arrow','\u2193').removeClass('log-hidden');
                $('[data-log]').stop().animate({'top':'75%'});
                return;
            }

            $(this).attr('data-arrow','\u2191').addClass('log-hidden');
            $('[data-log]').stop().animate({'top':'98%'});

        });

    });

})();
