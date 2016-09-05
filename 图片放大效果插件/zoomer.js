;(function(w,d,u,$){
	$.fn.zoomer=function(params){
		var defaults={
			speedView:600,//放大的显示速度
			speedRemove:600,//隐藏消失的效果
			dwidth:"200px",
			dheight:"200px",
			altText:true,
			speedText:600
		};
		params=$.extend({},defaults,params);
		
		$(this).hover(function(){
			$(this).find("img").css({"z-index":100,"border-radius":"10px"});
			$(this).find("img").stop().animate({
				top:"-50%",
				left:"-50%",
				width:params.dwidth,
				height:params.dheight
				
			},params.speedView);
			if(params.altText){
				var altText=$(this).find("img").attr("alt");
				$(this).prepend("<span class='title'>"+altText+"</span>");
				$(".title").animate({
					marginLeft:"-50px",
					marginTop:"95px",
				},params.speedText)
				.css({
					"position":"absolute",
					"z-index":102
				});
			}
		},function(){
			$(this).find("img").css("z-index",0);
			$(this).find("img").stop().animate({
				top:"0",
				left:"0",
				width:"100px",
				height:"100px"
				
			},params.speedRemove);
			$(this).find(".title").remove();
		});
	}
})(window,document,undefined,$);