function Player(){
	this.x = width/2;
	this.y = height/2; 
	
this.show = function(){
	fill(255);
	rectMode(CENTER);
	rect(this.x, this.y, 25,25); 
}

this.move = function(dir){
	this.y +=dir*5; 
}

}