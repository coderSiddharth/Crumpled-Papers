var right,bottom,left,ball,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 730);


	engine = Engine.create();
	world = engine.world;

right= new Dustbin(700,650,20,100);
bottom= new Dustbin(600,690,200,20);
left= new Dustbin(500,650,20,100);
  ball= new Paper(100,100,40);
ground  = new Ground(400,715,800,30)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  right.display();
  bottom.display();
  left.display();
  ball.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){

if(keyCode === RIGHT_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60});

}

}

