$(function(){
	$.focus=function(id){
		//取出层的宽度
		 var sWidth=$(id).width();
		//取出li的个数，->生成数字按钮
		 var len=$(id).find("ul li").length;
		 var picTimer;
		 //图片的索引
		 var index=0;
		 //添加数字按钮
		 var btn="<div class='btnBg'></div><div class='btn'>";
		 for(var i=0;i<len;i++){
		 	var b=i+1;
		 	btn+="<span>"+b+"</span>";
		 	
		 }
		 btn+="</div><div class='preNext pre'></div><div class='preNext next'></div>";
		 $(id).append(btn);
		 
		 $(id).find("div.preNext").css("opacity",0.3);
		 $(id+" div.btn span").css("opacity",0.3).mouseenter(function(){
		 	index=$(id+" div.btn span").index(this);
		 	//显示这张图片
		 	showPic(index);
		 }).eq(0)
		 	.css("opacity",1);
		 	//.trigger("mouseenter");
		 	
		 //控制上下页的外观
		 
		$(id+" .preNext").hover(function(){
			$(this).stop(true,false).animate({"opacity":0.5},300);
		},function(){
			$(this).stop(true,false).animate({"opacity":0.1},300);
		});
		 
		 //控制上下页的点击事件
		 $(id+" .next").click(function(){
		 	index++;
		 	if(index==len){
		 		index=0;
		 	}
		 	showPic(index);
		 });
		 
		 $(id+" .pre").click(function(){
		 	index--;
		 	if(index==-1){
		 		index=len-1;
		 	}
		 	showPic(index);
		 });
		 
		 
		 //控制定时器
		 $(id).hover(function(){
		 	clearInterval(picTimer);
			 },function(){
			 	picTimer=setInterval(function(){
			 		showPic(index);
			 		index++;
			 		if(index==len){
			 			index=0;
			 		}
			 },1500);
		 }).trigger("mouseout");
		 
		//定义一个私有函数，用来数字上点击
		function showPic(index){
			var nowLeft=-index*sWidth;
			$(id+" ul").stop(true,false).animate({"left":nowLeft},300);
			$(id+" .btn span").stop(true,false).animate({"opacity":0.4},300)
				.eq(index).stop(true,false).animate({"opacity":1},300);
		}
	}
});
