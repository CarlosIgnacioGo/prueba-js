function Alumno(nombre,notas){
	this.nombre = (typeof(nombre) == "string") ? nombre : "sinnombre";
	this.notas = (notas instanceof Array) ? notas : [];

	this.promedio = function(){
		total = 0;
		for (var i = 0; i < this.notas.length; i++) {
			total += this.notas[i];
		};
		console.log(total / this.notas.length);
	}
}

