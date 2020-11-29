const Engine = Matter.Engine
const World  = Matter.World
const Bodies = Matter.Bodies
var box1, box2, ground

var engine, world, object

function setup() {
  createCanvas(600,600);
  engine = Engine.create()
  world = engine.world
  box1 = new Box(340,200,50,150)
  box2 = new Box(300,400,60,60)
  ground = new Ground(300,580,600,20)
  
  
  
}


function draw() {
  background(0); 
  Engine.update(engine)

  console.log(box1, box2)

  box1.display()
  box2.display()
  ground.display()
  
  

  
  
  
}