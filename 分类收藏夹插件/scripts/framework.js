$(function(){
	$("#filter li a").click(function(){
		$(this).parent().siblings().removeClass();
		$(this).parent().addClass("current");
		var filterclass=$(this).text().toLowerCase().replace(" ","-");
		if(filterclass=='all'){
			$("ul#portfolio li").fadeIn("slow");
		}else{
			//方法一
//			$("ul#portfolio li").each(function(index,element){
//				if($(element).hasClass(filterclass)){
//					$(element).fadeIn("slow");
//				}else{
//					$(element).fadeOut("slow");
//				}
//			});
			//方法二
			var $lis=$("ul#portfolio li");
			for(var i=0;i<$lis.length;i++){//一定要注意循环了之后这个元素已经是一个dom对象了,所以要用$在将其转换为jquery对象
				if($($lis[i]).hasClass(filterclass)){
					$($lis[i]).fadeIn("slow");
				}else{
					$($lis[i]).fadeOut("slow");
				}
			}
			
		}
	});
	
})
