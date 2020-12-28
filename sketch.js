const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
function setup()
 {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(200,100,50,60);
  box2 = new Box(240,50,50,50)
 ground=new Ground(200,350,400,50);
 
}

function draw() {
  background("lightgreen");  
  Engine.update(engine);
  box1.display();
  box2.display();
ground.display();
  
}
