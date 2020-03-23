const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1;
var engine,world;

function setup() {
createCanvas(400,400);
world = engin,world;
engine = Engine.create(); 
box1 = new Box(200,200,40,30);
}

function draw() {
  background(0);
  Engine.update(engine);

  box1.display();
}