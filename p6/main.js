$(document).ready(function(){
	var num = 6;
	$("div").on("click",function(){
		var text = num; 
		$("ul").append( "<li> Elemento "+ text + "</li>" );
		num++;
		$("div li").click(function(e) {
        e.stopPropagation();
   });
	})
})