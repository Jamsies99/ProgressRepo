function Human(x, y){
	this.x = x;
	this.y = y; 
	this.r = 12.5;
	this.struck = false; 
	this.ydir = 1;
	
this.show = function(){
	fill(150,0,0);
	ellipse(this.x, this.y, this.r*2,this.r*2); 
}

this.move = function(){
	this.y = this.y + this.ydir;

}

this.hit = function(){
	this.struck = true;
}

this.shiftLeft = function(){
	this.x -= this.r; 
	this.ydir *= -1;
}
}