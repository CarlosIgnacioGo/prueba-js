var canvas,
	ctx,
	lastPress,
	pressing = [],
	KEY_UP=87,
	KEY_DOWN=83,
	KEY_RIGHT=39,
	KEY_LEFT=37,
	ENTER=13,
	player;

function Rectangle(x,y,height,width){
	this.x = (x == undefined) ? 0 : x;
	this.y = (y == undefined) ? 0 : y;
	this.height = (height == undefined) ? 0 : height;
	this.width = (width == undefined) ? this.height : width;
}

Rectangle.prototype.draw = function(ctx){
	ctx.fillRect(this.x,this.y,this.height,this.width);
}

function main(){
	canvas = document.getElementById("canvas");
	ctx =  canvas.getContext("2d");

	player = new Rectangle(10,10,10);

	run();
}

function act(){
	if (lastPress = pressing[KEY_RIGHT]) {
		player.x += 2;
	}if (lastPress = pressing[KEY_LEFT]) {
		player.x -= 2;
	}
}

function draw(){
	canvas.width = canvas.width;
	ctx.fillStyle= "red";
	player.draw(ctx)
}	

function run(){
	window.requestAnimationFrame(run);
	draw();
	act();
	
}

document.addEventListener('keydown',function(evt){ 
	lastPress = evt.keyCode;
	console.log(evt.keyCode)
	pressing[evt.keyCode]=true;
	console.log(pressing);
});

document.addEventListener('keyup',function(evt){
	pressing[evt.keyCode]=false; 
	console.log(pressing)
});

window.addEventListener("load",main);