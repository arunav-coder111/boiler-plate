var sun;
var mercury;
var venus;
var earth;
var mars;

function setup() {
  createCanvas(400,400);

  
}

function draw() {
  background(255,255,255);

   var sun = circle(200,200,20);
  var mercury = circle (250,250,10);
  var venus = circle (150,280,10);
  var earth = circle (200,300,10);
  var mars = circle (250,350,10);



  drawSprites();
}