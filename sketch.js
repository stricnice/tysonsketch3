var tycir = {
	x:80,
	y:80,
	diameter:150,
};



function setup() {

	createCanvas(765,765);

}

function draw (){
// HOW DO I TILE THIS MOFO?
	colx= map(mouseX, 0, width, 0 ,255);
	coly= map(mouseY,0, height, 0, 255);
	//can map 255,0 going backwards if want
	background(colx);
	fill(coly);
	noStroke();
	for(tycir.x=80; tycir.x <=width; tycir.x+=150) {
		for(tycir.y=80; tycir.y <=height; tycir.y += 150) {
ellipse (tycir.x,tycir.y,tycir.diameter,tycir.diameter);
	}
	}

	/*for (var x = 80; x <= width; x += 150) {
		for (var y =80; y <=height; y +=150) {
	fill(255, 0, 200);
	ellipse(x,y,150,150);
		}
}*/


}
