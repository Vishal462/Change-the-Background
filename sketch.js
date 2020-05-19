var r;
var b;
var g;
function setup(){

  createCanvas(displayWidth,displayHeight);
}


function draw(){

background(255);

 b = map(mouseX,0,width,0,255);
 r = map(mouseY,0,height,0,255);
 g = map(mouseX,0,width,0,255);

background(r,g,b);

stroke(0,245,0);
fill(253,157,0);
ellipse(mouseX,mouseY,25,25);
fill(0);
textSize(30);
stroke(255,255,0);
let s =second();
let mi = minute();
let h = hour();
text( h + ":" + mi + ":" + s,displayWidth-200,displayHeight/5);
}