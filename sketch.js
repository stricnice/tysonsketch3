var tycir = {
	x:80,
	y:80,
	diameter:150,
};



function setup() {

	createCanvas(800,800);

}

function draw (){
	colx= map(mouseX, 0, width, 0 ,255);
	coly= map(mouseY,0, height, 0, 255);
	//can map 255,0 going backwards if want
	background(colx);
	fill(coly);
	noStroke();
ellipse (tycir.x,tycir.y,tycir.diameter,tycir.diameter);


}
