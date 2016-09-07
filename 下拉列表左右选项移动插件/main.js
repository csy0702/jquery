$(function(){
	$(".btn1").click(function(){
		$(".se option:selected").appendTo(".se1")
	});
	$(".btn2").click(function(){
		$(".se option").appendTo(".se1")
	});
	$(".btn3").click(function(){
		$(".se1 option:selected").appendTo(".se")
	});
	$(".btn4").click(function(){
		$(".se1 option").appendTo(".se")
	});
})