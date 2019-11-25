function Heart(x, y){
	this.x = x;
	this.y = y; 
	this.r = 4;
	this.toDelete = false
	
this.show = function(){
	fill(150,0, 0);
	ellipse(this.x, this.y, this.r*2,this.r*2); 
}

this.hit = function(human){
	let d = dist(this.x, this.y, human.x, human.y);
	if (d < this.r + human.r){
		return true;
	}
	else {
		return false; 
	}
}

this.move = function(){
	this.x = this.x+1;
}

this.gone = function(){
	toDelete = true;

} 

}