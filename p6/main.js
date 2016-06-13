$(document).ready(function(){
	var num = 6;
	$("div").on("click",function(){
		var text = num; 
		var color = $("#color").val();
		$("ul").append( "<li>" + text + "</li>" );
		num++;
	})
})