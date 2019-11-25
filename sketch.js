let player;
let alien; 
let human;
let humanArmy =[];
let alienArmy =[];
let hearts = [];
let candys = [];
function setup(){
	createCanvas(600, 400);
	player = new Player(); 
	for (let i = 0; i<5; i++){
		alienArmy[i] = new Alien(50,i*50+50);
	}
	for (let i = 0; i<5; i++){
		humanArmy[i]= new Human(550, i*50+50); 
	}
}

function draw(){
	background (0); 
	player.show(); 
	for (let i = 0; i< hearts.length; i++){
		hearts[i].show();
		hearts[i].move();
		for (let j = 0 ; j < humanArmy.length; j++){
			if (hearts[i].hit(humanArmy[j])){
				hearts[i].gone();
				humanArmy[j].hit();
				console.log("hungry");
			}
		}
	}
	
	for (let i = 0; i< candys.length; i++){
		candys[i].show();
		candys[i].move();
		for (let j =0; j < alienArmy.length; j++){
			if (candys[i].hit(alienArmy[j])){
				candys[i].gone();
				alienArmy[j].hit();
				console.log("mmmmm");
			}
		}
	}
	let upAlien = false; 
	let upHuman = false; 

	for(let i = 0; i <alienArmy.length; i++){
		alienArmy[i].show();
		alienArmy[i].move();
		if (alienArmy[i].y > height|| alienArmy[i].y <= 0){
			upAlien = true;
		}
	}
	for (let i = 0; i<humanArmy.length; i++){
		humanArmy[i].show();
		humanArmy[i].move();
		if(humanArmy[i].y > height|| humanArmy[i].y <= 0){
			upHuman = true; 
		}
	}

	if (upAlien){
		for(let i = 0; i < alienArmy.length; i++){
			alienArmy[i].shiftRight();
		}
	}

	if(upHuman){
		for(let i = 0; i< humanArmy.length; i++){
			humanArmy[i].shiftLeft();
		}
	}
		for(let i = 0; i <alienArmy.length; i++){
		if (alienArmy[i].struck){
			alienArmy.splice(i,1); 

		}
	}
	for (let i = 0; i<hearts.length; i++){
		if (hearts[i].toDelete){
			hearts.splice(i,1);
		}
	}
	
	for (let i = 0; i<humanArmy.length; i++){
		if (humanArmy[i].struck){
			humanArmy.splice(i,1);
		}
	}
	for (let i = 0; i<candys.length; i++){
		if (candys[i].toDelete){
			candys.splice(i,1);
		}
	}
}

function keyPressed(){
	if (keyCode ===  UP_ARROW){
		player.move(-1);
	}
	else if ( keyCode === DOWN_ARROW){
		player.move(1);
	}
	else if (keyCode ===RIGHT_ARROW){
		let heart = new Heart(player.x, player.y);
		hearts.push(heart);

	}
	else if(keyCode === LEFT_ARROW){
		let candy = new Candy(player.x, player.y);
		candys.push(candy);

	}
}