$(document).ready(function() {
	$("#button").on("click",function(){
		var textarea = $("#text").val();
		var color = $("#color").val();
		var fontSize = $("#fontSize").val();
		var fontFamily = $("#fontFamily").val();
		$("#showText").text(textarea);
		$("#showText").css({
			"color" : color,
			"font-size" : fontSize + "px",
			"font-family" : fontFamily
		})
		console.log(fontFamily)
		// $("#text").val(" ");
	})
});