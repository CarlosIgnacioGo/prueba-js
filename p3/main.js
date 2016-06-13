function Alumno(nombre,notas){
	this.nombre = nombre;
	this.notas = notas

	this.promedio = function(){
		total = 0;
		for (var i = 0; i < this.notas.length; i++) {
			total += this.notas[i];
		};
		console.log(total / this.notas.length);
	}
}

