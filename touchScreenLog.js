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

        $('body').append("<div data-log><div data-log-count><span>log count:&nbsp;</span><span class=\"count\"></span></div></div>");

        $('[data-log]').css({
            width:'100%',
            position:'fixed', 
            height:'25%',
            top:'75%',
            overflow:'scroll',
            background:'#000',
            color:'#0f0',
            'font-size':'10px',
            'font-family':'monospace',
            'z-index':999999,
            '-webkit-tap-highlight-color':'rgba(0,0,0,0)',
            '-webkit-touch-callout': 'none',
            '-webkit-user-select': 'none',
            '-khtml-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none'
        });

        $('[data-log-count]').css({
            'position':'absolute',
            'right':0,
            'top':0
        });

	    var logTimer = 0;
	    
	    $('[data-log]').on('touchstart mousedown touchmove mousemove',function(){
		    logTimer = new Date().getTime();
	    });
		
	    $('[data-log]').on('touchend mouseup',function(){
		    var now = new Date().getTime();
		    
		    if (logTimer && (now - 1000) > logTimer) {
		    logTimer = 0;
		    $('[data-log]').children('p').remove();
		    }
	    });

    });

})();
