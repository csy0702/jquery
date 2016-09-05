/*
 flakeChar:图标
 minsize:最小像素
 maxsize:最
 newOn:新图标出现的频率
 flakeColor:颜色
 * */
;(function(w,d,u,$){
	$.fn.showPic=function(options){
		var defaults={
			flakeChar:"&#10054;",
			minsize:40,
			maxsize:60,
			newOn:400,
			flakeColor:'white'
		};
		$.extend(defaults,options);
		//生成一个节点，用于存雪花这个图标
		var $flake=$("<div></div>").css({"position":"absolute","top":"-30px"});
		//设置页面出现的位置
		//页面多大
		var documentHeight=$(d).height();
		var documentWidth=$(d).width();
		$flake.html(defaults.flakeChar);
		//设置定时操作
		var insertval=setInterval(function(){
			var startPositionLeft =Math.random() * documentWidth-100;
            var startOpacity = 0.5 + Math.random();
            var size = defaults.minsize + Math.random() * defaults.maxsize;
            var endPositionTop = documentHeight - 150;
            //var endPositionLeft = startPositionLeft + (Math.random() > 0.5 ? -200 : 200);
             var endPositionLeft = startPositionLeft -200+Math.random()*100;
            $flake.clone()
            	.appendTo('body')
            	.css({
                        'left': startPositionLeft,
                        'opacity': startOpacity,
                        'font-size': size,
                        'color': defaults.flakeColor
                   }).animate({
                        'top': endPositionTop,
                        'left': endPositionLeft,
                     	'-moz-transform':'rotate(180deg)',
                        'opacity': 0.2
                        
                    },4000,"linear",function(){
                        $(this).remove()
                    }
            );
           
		},defaults.newOn);
		
	}
})(window,document,undefined,$)
