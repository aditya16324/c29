const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;





function setup(){
createCanvas(1200,600)
engine=Engine.create();
world=engine.world
  box1=new Box(600,400); 
  box2=new Box(600,200);
  box3=new Box(800,400);
  box4=new Box (800,200);
  pig3=new Pig(700,10,50,50)
  bird1=new Bird(190,0,100,100)
 

  
  pig1=new Pig(700,450,80,50)
  pig2=new Pig(700,250,80,50)
  ground=new Ground(600,500,1200,50)

  log1=new Log (700,300,400);
  log2=new Log (700,150,400)
  log3=new Log (250,10,200)

  chain1=new Chain(bird1.body,{x:200,y:150})
}

function draw(){
  background("lightblue");
  Engine.update(engine)

box1.display();
box2.display();
log1.display();
box3.display();
box4.display();
pig3.display();
log2.display();
ground.display();
pig1.display();
pig2.display();
bird1.display();
log3.display();

chain1.display();
 
}

function mouseDragged(){
  Matter.Body. setPosition (bird1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain1.disconnectBird()
}

