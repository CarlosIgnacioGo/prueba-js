var obj = {
	nombre : "carlos",
	edad : 22
}

var copiar = function(obj){
	return JSON.parse( JSON.stringify( obj ) );
}

