;(function(w,u,d,$){
	$.fn.setshowPic=function(options){
		var defaults={
			sleft:"500px",//图片距左边的位置
			stop:"100px",//图片据上边的位置
			swidth:"300px",//默认图片的大小
			sheight:"380px"
		};
		defaults=$.extend(defaults,options);
		$(".box img").click(function(e){
					$(".mydiv").remove();//每次发生点击事件，就移出当前这个节点
					var src=$(this).attr("src");
					var mydiv="<div class='mydiv'><span></span><img src="+src+" /></div>";
					var x=e.pageX;
					var y=e.pageY;
					$("body").append(mydiv);
					$(".mydiv").css({
						"top":y+"px",
						"left":x+"px"
					});
					$(".mydiv").animate({
						width:defaults.swidth,
						height:defaults.sheight,
						opacity:1,
						top:defaults.stop,
						left:defaults.sleft
					},500);
					$(".mydiv img").animate({
						width:defaults.swidth,
						height:defaults.sheight,
					});
					$(".mydiv span").click(function(){
						$(".mydiv").remove();//通过x来移出这个节点层
					});
				});
	}
})(window,undefined,document,$)

/*
$(function(){
				$(".box img").click(function(ev){
					$(".mydiv").remove();
					var src=$(this).attr("src");
					var mydiv="<div class=mydiv><span></span><img src="+src+" /></di>";
					var x=ev.pageX;
					var y=ev.pageY;
					$("body").append(mydiv);
					$(".mydiv").css({
						"top":y+"px",
						"left":x+"px"
					});
					$(".mydiv").animate({
						width:"21%",
						height:"auto",
						opacity:1,
						top:"20%",
						left:"40%"
					},500);
					$(".mydiv img").animate({
						width:"300",
						height:"380px",
					});
					$(".mydiv span").click(function(){
						$(".mydiv").remove();
					});
				});
			});
*/
