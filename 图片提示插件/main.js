;(function(w,d,u,$){
	$.fn.linkWidthPic=function(){
		var x=10;
		var y=20;
		$(this).mouseover(function(e){
			var title=$(this).attr("title")||"&nbsp;";
			$("body").append("<div id='screenshot'><img src='"+$(this).attr("rel")+"' /></div>");
			if(($(this).attr("title")!=undefined)&&($(this).attr("title")!="&nbsp;")){
				$("#screenshot").append("<br/>"+title);
			}else{
				$("#screenshot").append(title);
			}
			$(this).attr("temp",title).removeAttr("title");//用一个临时变量来存title
			$("#screenshot").css({"top":(e.pageY+y)+'px',
	   								"left":(e.pageX+x)+'px'
	   							}).show("slow");
		
			
		}).mousemove(function(e){
			$("#screenshot").css({"top":(e.pageY+y)+'px',
	   								"left":(e.pageX+x)+'px'
	   					});
	   		
		}).mouseout(function(e){
			var title=$(this).attr("temp");
			$(this).attr("title",title).removeAttr("temp");
			$("#screenshot").remove();
		});
		
	}
})(window,document,undefined,$);
